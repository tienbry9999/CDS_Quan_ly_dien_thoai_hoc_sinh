import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import Device from "./models/Device.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect Mongo
mongoose.connect(process.env.MONGO_URI, { })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ROUTES

// GET all devices
app.get("/api/devices", async (req, res) => {
  try {
    const devices = await Device.find().sort({ updatedAt: -1 });
    // convert usage minutes to display string on frontend if needed
    res.json(devices);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET one device (detail)
app.get("/api/devices/:id", async (req, res) => {
  try {
    const device = await Device.findOne({ id: req.params.id });
    if (!device) return res.status(404).json({ error: "Not found" });
    res.json(device);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST add new device
app.post("/api/devices", async (req, res) => {
  try {
    const { id, studentName, className, deviceModel } = req.body;
    if (!id) return res.status(400).json({ error: "id required" });

    const exists = await Device.findOne({ id });
    if (exists) return res.status(400).json({ error: "Device id exists" });

    const dev = await Device.create({
      id,
      studentName,
      className,
      deviceModel,
      status: "online",
      lastSeen: new Date(),
      usageTodayMinutes: 0
    });
    res.status(201).json(dev);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE device by id
app.delete("/api/devices/:id", async (req, res) => {
  try {
    const deleted = await Device.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// PATCH update usage/lastSeen/status (simulate device sending data)
app.patch("/api/devices/:id", async (req, res) => {
  try {
    const updates = req.body;
    updates.lastSeen = updates.lastSeen ? new Date(updates.lastSeen) : new Date();
    const updated = await Device.findOneAndUpdate({ id: req.params.id }, updates, { new: true, upsert: false });
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
