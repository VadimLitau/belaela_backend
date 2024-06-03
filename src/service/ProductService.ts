import Product from "../models/Product";
import filesService from "../utils/fileService";

class ProductService {
	async create(product: { dir: string; subDir: string }, picture: any) {
		const fileName = filesService.saveFile(
			picture.photo,
			product.dir,
			product.subDir,
			"big"
		);
		const fileNames = picture.photoMin.map((photo: any, index: any) => {
			return filesService.saveFile(photo, product.dir, product.subDir, index);
		});
		const createdPost = await Product.create({
			...product,
			photo: fileName,
			photoMin: fileNames,
		});
		return createdPost;
	}
}

export default new ProductService();
