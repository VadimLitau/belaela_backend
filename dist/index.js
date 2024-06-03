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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
require("dotenv/config");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const PORT = 9000;
// const DB_URL = "mongodb://localhost:27017/Belaela";
const DB_URL = "mongodb+srv://fallenarh:XszYIY0foELGoH74@belaela.ovpjnkw.mongodb.net/Belaela";
// const PORT = process.env.PORT;
// const DB_URL = process.env.DB_URL;
const app = (0, express_1.default)();
// нужно чтобы экспресс мог понимать json
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static("static"));
app.use((0, express_fileupload_1.default)());
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    res.status(200).json("Kurwa Bobrik");
});
// app.listen(9000, () => {
// 	console.log("server kurwa started");
// });
function startApp() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // await mongoose.connect(DB_URL);
            app.listen(PORT, () => {
                console.log("server kurwa started");
            });
        }
        catch (e) {
            console.log(e);
        }
    });
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
//# sourceMappingURL=index.js.map