import mongoose, { ObjectId } from "mongoose";

interface IProduct {
	type: string;
	photo: string;
	photoMin: string[];
	name: string;
	title: string;
	text: string[];
	wbUrl: string;
	ozonUrl: string;
	dir: string;
	subDir: string;
}
const cardsSchema = new mongoose.Schema<IProduct>({
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

export default mongoose.model<IProduct>("product", cardsSchema);
