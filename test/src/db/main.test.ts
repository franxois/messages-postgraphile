import { Pool } from "pg";

export const TEST_DATABASE_URL: string =
  process.env.TEST_DATABASE_URL || "localhost";

export const TEST_DATABASE_PORT: number =
  (process.env.TEST_DATABASE_PORT !== undefined &&
    parseInt(process.env.TEST_DATABASE_PORT)) ||
  32101;

export const pool = new Pool({
  host: TEST_DATABASE_URL,
  port: TEST_DATABASE_PORT,
  user: "postgres",
  password: "postgres",
  max: 20,
});

const ALICE_ID = "256480ba-58f0-11eb-8838-aaaaaaaaaaaa";
const BOB_ID = "256480ba-58f0-11eb-8838-bbbbbbbbbbbb";
const CHARLIE_ID = "256480ba-58f0-11eb-8838-cccccccccccc";

describe("DB : main", () => {
  it("should verify that an app_user can use send_message()", async () => {
    const client = await pool.connect();

    await client.query("BEGIN");

    await client.query(`set local jwt.claims.user_id to '${ALICE_ID}'`);

    await client.query(
      `INSERT into app_public.users ( id, username ) VALUES ( current_setting('jwt.claims.user_id')::uuid, 'Alice'), ( $1::uuid , 'Bob'),( $2::uuid , 'Charlie')`,
      [BOB_ID, CHARLIE_ID]
    );

    const { rows } = await client.query(
      `select role from app_public.users WHERE username != 'admin'`
    );

    // By default new user have role "app_user"
    for (const u of rows) {
      expect(u["role"]).toBe("app_user");
    }

    await client.query("SET role app_user");
    await client.query(
      "select * from app_public.send_message( $1 , 'test', 'test content' )",
      [BOB_ID]
    );

    const { rowCount, rows: allMessages } = await client.query(
      "select * from app_public.messages"
    );

    expect(rowCount).toBe(1);
    expect(allMessages[0]["sender"]).toBe(ALICE_ID);
    expect(allMessages[0]["receiver"]).toBe(BOB_ID);

    expect(
      client.query(
        `INSERT INTO app_public.messages (title,content,sender,receiver)
            VALUES ( 'declaration' , 'Alice is the best' , $1::uuid , $2::uuid )`,
        [BOB_ID, CHARLIE_ID]
      )
    ).rejects.toEqual(
      new Error(
        'new row violates row-level security policy for table "messages"'
      )
    );

    await client.query("ROLLBACK");

    client.release();
  });
});

afterAll(async () => {
  await pool.end();
});
