import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  password: "0000", // replace
  host: "localhost",
  port: 5432,
  database: "crm",
});
