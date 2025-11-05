import express from "express";
import auth from "../middleware/auth.js";
import Room from "../models/Room.js";

const router = express.Router();

// ✅ Protected route: Only logged-in users can post a room
router.post("/", auth, async (req, res) => {
  try {
    const { title, price, preference, location } = req.body;

    const newRoom = new Room({
      title,
      price,
      preference,
      location,       // 👈 directly use location from frontend
      user: req.user.id,
    });

    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Public: Get all rooms
router.get("/", async (req, res) => {
  const rooms = await Room.find().populate("user", "name email");
  res.json(rooms);
});

export default router;
