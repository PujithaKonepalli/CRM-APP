import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  password: "3593", // replace
  host: "localhost",
  port: 5432,
  database: "crm",
});