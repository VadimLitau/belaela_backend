import { Request, Response, NextFunction } from "express";
import Product from "../models/Product";
import ProductService from "../service/ProductService";

class ProductsController {
	async getProducts(req: Request, res: Response, next: NextFunction) {
		Product.find({})
			.then((product) => res.send(product))
			.catch(next);
	}

	async createProduct(req: any, res: Response, next: NextFunction) {
		// try {
		// 	const post = await ProductService.create(req.body);
		// 	res.status(200).send(post);
		// } catch (e) {
		// 	res.status(500).json(e);
		// }
		ProductService.create(req.body)
			.then((product) => res.status(200).send(product))
			.catch((err) => {
				next(err);
			});
	}
}

export default new ProductsController();
