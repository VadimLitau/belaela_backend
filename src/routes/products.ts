import { Router } from "express";
import ProductsController from "../controllers/products";

const router = Router();

router.get("/", ProductsController.getProducts);
router.post("/", ProductsController.createProduct);

export default router;
