import express from "express";
import Product from "../models/Products.js";

const productRoutes = express.Router();

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ products, pagination: {} });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

productRoutes.get("/", getProducts);

export default productRoutes;
