import mongoose from "mongoose";

const connectDb = () => {
    mongoose.connect(process.env.MONGO_URI)   //mongoose.connect("mongodb://localhost:27017/curd-app-using-MERN")   //mongoose.connect("mongodb+srv://tanmaychamat:6SzOi5IHxbfVHQTd@cluster0.cbzksif.mongodb.net/curd-app-using-MERN")
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.error("MongoDB Connection Error:", err))
};

// connectDb();

export default connectDb;