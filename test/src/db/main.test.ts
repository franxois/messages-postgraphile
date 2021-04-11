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

    await client.query(
      `INSERT into app_public.users ( id, username ) VALUES ( $1::uuid, 'Alice'), ( $2::uuid , 'Bob'),( $3::uuid , 'Charlie')`,
      [ALICE_ID, BOB_ID, CHARLIE_ID]
    );

    const { rows } = await client.query(
      `select role from app_public.users WHERE username != 'admin'`
    );

    // By default new user have role "app_user"
    for (const u of rows) {
      expect(u["role"]).toBe("app_user");
    }

    await client.query(`set local jwt.claims.user_id to '${ALICE_ID}'`);
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
    expect(allMessages[0]["recipient"]).toBe(BOB_ID);

    expect(
      client.query(
        `INSERT INTO app_public.messages (title,content,sender,recipient)
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

  it("should send message and see pen-pal", async () => {
    const client = await pool.connect();
    await client.query("BEGIN");

    const {
      rows,
    } = await client.query(
      `INSERT into app_public.users ( id, username ) VALUES ( $1::uuid, 'Alice'), ( $2::uuid , 'Bob'),( $3::uuid , 'Charlie')`,
      [ALICE_ID, BOB_ID, CHARLIE_ID]
    );

    await client.query(`set local jwt.claims.user_id to '${ALICE_ID}'`);
    await client.query("SET role app_user");

    await client.query(
      "select * from app_public.send_message( $1 , 'test', 'test content 1' )",
      [BOB_ID]
    );

    try {
      const { rowCount, rows } = await client.query(
        "select * from app_public.pen_friend"
      );
      expect(rowCount).toEqual(1);
      expect(rows[0].friend_id).toEqual(BOB_ID);
    } catch (err) {
      console.log(err);
    }

    await client.query("ROLLBACK");
    client.release();
  });
});

afterAll(async () => {
  await pool.end();
});
