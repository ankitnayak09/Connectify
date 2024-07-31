import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const dbUrl = process.env.DATABASE_URL;

app.use(
	cors({
		origin: [process.env.ORIGIN],
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
		credentials: true, // To enable cookies
	})
);
app.use(cookieParser());
app.use(express.json()); // makes the payload to be in json format

const server = app.listen(port, () => {
	console.log(`Server is Running on: ${port}`);
});

mongoose
	.connect(dbUrl)
	.then(() => console.log("DB Connected."))
	.catch((err) => console.log(err.message));
