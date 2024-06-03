import Product from "../models/Product";
import filesService from "../utils/fileService";

class ProductService {
	async create(product: { photo: string; photoMin: [string] }) {
		const createdPost = await Product.create({
			...product,
			photo: product.photo,
			photoMin: product.photoMin,
		});
		return createdPost;
	}
}

export default new ProductService();
