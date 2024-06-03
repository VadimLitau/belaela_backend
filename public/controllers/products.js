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
const ProductService_1 = __importDefault(require("../service/ProductService"));
class ProductsController {
    getProducts(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            Product_1.default.find({})
                .then((product) => res.send(product))
                .catch(next);
        });
    }
    createProduct(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield ProductService_1.default.create(req.body, req.files);
                res.json(post);
            }
            catch (e) {
                res.status(500).json(e);
            }
        });
    }
}
exports.default = new ProductsController();
//# sourceMappingURL=products.js.map