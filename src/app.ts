import expres from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";

const PORT = 5000;
const DB_URL = "mongodb://localhost:27017/Belaela";

const app = expres();

//нужно чтобы экспресс мог понимать json
app.use(expres.json());
app.use(expres.static("static"));
app.use(fileUpload());

app.get("/", (req, res) => {
	console.log(req.query);
	res.status(200).json("Kurwa Bobrik");
});

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
