import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../db.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  await pool.query("INSERT INTO users(email,password) VALUES($1,$2)", [
    email,
    hash,
  ]);

  res.json({ msg: "User created" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await pool.query("SELECT * FROM users WHERE email=$1", [
    email,
  ]);

  if (!user.rows.length) return res.status(400).json({ msg: "User not found" });

  const valid = await bcrypt.compare(password, user.rows[0].password);
  if (!valid) return res.status(400).json({ msg: "Wrong password" });

  const token = jwt.sign({ id: user.rows[0].id }, "secret");

  res.json({ token });
});

export default router;