import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 9000;

//connnect mongodb
connectDb();

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome To the Server of CRUD APP using MERN </h1>");
});
// Handle all undefined routes
app.use((req, res) => {
    res.status(404).send("<h1>Route Not Found</h1>");
});



app.listen(PORT, () => {
    console.log(`🚀 Server is Running at http://localhost:${PORT}`);//mongodb+srv://tanmoy:123@cluster0.6epn77t.mongodb.net/
});