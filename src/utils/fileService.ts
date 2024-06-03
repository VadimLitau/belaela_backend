// import * as uuid from "uuid";
import * as path from "path";

class FilesService {
	saveFile(
		file: { name: string; mv: (arg0: string) => void },
		dir: any,
		subDir: any,
		index: string
	) {
		try {
			const extension = path.extname(file.name);
			const fileName = `${dir}_${subDir}_${index}` + `${extension}`;
			const filePath = path.resolve(
				`./static/images/products/${dir}/${subDir}/`,
				fileName
			);
			file.mv(filePath);
			return fileName;
		} catch (e) {
			console.log(e);
		}
	}
}

export default new FilesService();
