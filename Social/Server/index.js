import express from 'express'
import dotenv from "dotenv"
import connectDB from "./config/db.js"
dotenv.config()
import authRouter from './routes/auth.routes.js'

const app = express();
const PORT = 8000;

connectDB()

app.use(express.json());


// Authentication routes
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});