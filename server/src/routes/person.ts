import express from "express";
import { pool } from "../db.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const result = await pool.query("SELECT * FROM persons");
  res.json(result.rows);
});

router.post("/", auth, async (req, res) => {
  const { name, email, phone } = req.body;

  await pool.query(
    "INSERT INTO persons(name,email,phone) VALUES($1,$2,$3)",
    [name, email, phone]
  );

  res.json({ msg: "Added" });
});

router.put("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  await pool.query(
    "UPDATE persons SET name=$1,email=$2,phone=$3 WHERE id=$4",
    [name, email, phone, id]
  );

  res.json({ msg: "Updated" });
});

router.delete("/:id", auth, async (req, res) => {
  await pool.query("DELETE FROM persons WHERE id=$1", [req.params.id]);
  res.json({ msg: "Deleted" });
});

export default router;