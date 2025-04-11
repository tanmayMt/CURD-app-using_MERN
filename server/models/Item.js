import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export default mongoose.model("Item", ItemSchema);
