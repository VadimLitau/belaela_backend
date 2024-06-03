import { Router } from "express";
import ProductsController from "../controllers/products";
import mongoose from "mongoose";

const router = Router();
const DataSchema = new mongoose.Schema({
	name: String,
	value: String,
});

const Data = mongoose.model("Data", DataSchema);
router.post("/data", async (req, res) => {
	try {
		const { name, value } = req.body;
		const newData = new Data({ name, value });
		await newData.save();
		res.status(201).json(newData);
	} catch (error) {
		console.error("Error saving data:", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
});
router.get("/", ProductsController.getProducts);
router.post("/", ProductsController.createProduct);

export default router;
