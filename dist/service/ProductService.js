"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../models/Product"));
const fileService_1 = __importDefault(require("../utils/fileService"));
class ProductService {
    create(product, picture) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileName = fileService_1.default.saveFile(picture.photo, product.dir, product.subDir, "big");
            const fileNames = picture.photoMin.map((photo, index) => {
                return fileService_1.default.saveFile(photo, product.dir, product.subDir, index);
            });
            const createdPost = yield Product_1.default.create(Object.assign(Object.assign({}, product), { photo: fileName, photoMin: fileNames }));
            return createdPost;
        });
    }
}
exports.default = new ProductService();
//# sourceMappingURL=ProductService.js.map