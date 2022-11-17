import { pool } from "../../postgres/pool";
import { QueryResult } from "node-postgres";

export const getUserByID = (
  id: string,
  callback: (error: Error, results: QueryResult) => void
) => {
  pool.query("select from users where id = $1", [id], callback);
};
