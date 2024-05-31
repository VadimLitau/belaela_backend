import expres from "express";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";
import routes from "./routes";

const PORT = 5000;
// const DB_URL = "mongodb://localhost:27017/Belaela";

const app = expres();

//нужно чтобы экспресс мог понимать json
app.use(cors());
app.use(expres.json());
app.use(expres.static("static"));
app.use(fileUpload());
app.use("/api", routes);

app.get("/", (req, res) => {
	console.log(req.query);
	res.status(200).json("Kurwa Bobrik");
});

async function startApp() {
	try {
		// await mongoose.connect(DB_URL);
		app.listen(PORT, () => {
			console.log("server kurwa started");
		});
	} catch (e) {
		console.log(e);
	}
}

startApp();
