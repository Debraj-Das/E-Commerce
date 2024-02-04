import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import connectDB from "./db.js";

connectDB();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Process running...");
});

import ProductRoutes from "./routes/productRoutes.js";
app.use("/api/products", ProductRoutes);
