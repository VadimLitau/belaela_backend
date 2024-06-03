import expres from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import "dotenv/config";
import fileUpload from "express-fileupload";
import routes from "./routes";
import path from "path";

dotenv.config();
const PORT = 9000;
// const DB_URL = "mongodb://localhost:27017/Belaela";
const DB_URL =
	"mongodb+srv://fallenarh:XszYIY0foELGoH74@belaela.ovpjnkw.mongodb.net/Belaela";
// const PORT = process.env.PORT;
// const DB_URL = process.env.DB_URL;
const app = expres();
// нужно чтобы экспресс мог понимать json
app.use(cors());
app.use(expres.json());
app.use("/static", expres.static(path.join(__dirname, "../static")));
app.use(fileUpload());
app.use("/api", routes);

app.get("/", (req, res) => {
	res.status(200).json("Kurwa Bobrik");
});
// app.listen(9000, () => {
// 	console.log("server kurwa started");
// });

async function startApp() {
	try {
		await mongoose.connect(DB_URL);
		app.listen(PORT, () => {
			console.log("server kurwa started");
		});
	} catch (e) {
		console.log(e);
	}
}

startApp();
// import express, { Request, Response } from "express";

// const app = express();
// const port = process.env.PORT || 8080;

// app.get("/", (_req: Request, res: Response) => {
// 	return res.send("Express Typescript on Vercel");
// });

// app.get("/ping", (_req: Request, res: Response) => {
// 	return res.send("pong 🏓");
// });

// app.listen(port, () => {
// 	return console.log(`Server is listening on ${port}`);
// });
