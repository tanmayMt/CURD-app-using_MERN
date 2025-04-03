import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: String,
        email: { type: String, unique: true },
        password: String,
    },
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);