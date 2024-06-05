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
const express_1 = require("express");
const products_1 = __importDefault(require("../controllers/products"));
const mongoose_1 = __importDefault(require("mongoose"));
const router = (0, express_1.Router)();
const DataSchema = new mongoose_1.default.Schema({
    name: String,
    value: String,
});
const Data = mongoose_1.default.model("Data", DataSchema);
router.post("/data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, value } = req.body;
        const newData = new Data({ name, value });
        yield newData.save();
        res.status(201).json(newData);
    }
    catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}));
router.get("/", products_1.default.getProducts);
router.post("/", products_1.default.createProduct);
exports.default = router;
//# sourceMappingURL=products.js.map