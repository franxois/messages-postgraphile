//@ts-check
import { createServer } from "http";
import { postgraphile } from "postgraphile";

createServer(
  postgraphile(
    process.env.DATABASE_URL || "postgres://postgres:postgres@localhost",
    "app_public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      enableCors: true,
      retryOnInitFail: true,
      jwtSecret: process.env.JWT_SECRET,
      jwtPgTypeIdentifier: "app_public.jwt_token",
      pgDefaultRole: "app_anonymous",
    }
  )
).listen(process.env.PORT || 4000);
