import express from 'express'
import dotenv from "dotenv"
import connectDB from "./config/db.js"
dotenv.config()

const app = express();
const PORT = 8000;

connectDB()

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});