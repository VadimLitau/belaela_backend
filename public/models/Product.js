"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cardsSchema = new mongoose_1.default.Schema({
    type: { type: String },
    photo: { type: String },
    photoMin: { type: [String] },
    name: {
        type: String,
        required: [true, 'Поле "name" должно быть заполнено'],
        minlength: [2, 'Минимальная длина поля "name" - 2'],
        maxlength: [30, 'Максимальная длина поля "name" - 30'],
    },
    title: {
        type: String,
        required: [true, 'Поле "title" должно быть заполнено'],
    },
    text: { type: [String] },
    wbUrl: { type: String },
    ozonUrl: { type: String },
    dir: { type: String },
    subDir: { type: String },
});
exports.default = mongoose_1.default.model("product", cardsSchema);
//# sourceMappingURL=Product.js.map