import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from 'morgan';
import connectDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config(); // Load environment variables


const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line
// Use morgan middleware
//app.use(morgan('dev')); // 'dev' format is nice for development

const corsOptions = {
  origin: "http://localhost:3004",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
  credentials: true,
};
app.use(cors(corsOptions));

//connnect mongodb
connectDb();

app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome To the Server of CRUD APP using MERN </h1>");
});
app.get((req, res) => {
    res.status(400).send("<h1>page Not Foud</h1>");
});

app.use("/users", userRoutes);
app.use("/items", itemRoutes);

// Handle all undefined routes
app.use((req, res) => {
    res.status(404).send("<h1>Route Not Found</h1>");
});


app.listen(PORT, () => {
    console.log(`🚀 Server is Running at http://localhost:${PORT}`);//mongodb+srv://tanmoy:123@cluster0.6epn77t.mongodb.net/
});