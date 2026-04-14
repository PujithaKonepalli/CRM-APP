import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import personRoutes from "./routes/person.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/persons", personRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});