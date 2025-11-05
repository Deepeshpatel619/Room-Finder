import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  title: String,
  price: Number,
  preference: String,
  location: {
    type: { type: String, enum: ["Point"], required: true },
    coordinates: { type: [Number], required: true }, // [lng, lat]
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // who posted it
});

roomSchema.index({ location: "2dsphere" });

export default mongoose.model("Room", roomSchema);
