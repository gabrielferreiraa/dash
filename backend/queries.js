import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pi_skeleton",
  password: "postgres",
  port: "5432"
});

const getUsers = (request, response) => {
  pool.query("SELECT * FROM participants", (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
};

export { getUsers };
