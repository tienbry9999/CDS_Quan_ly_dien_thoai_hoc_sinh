import dotenv from "dotenv";
import mongoose from "mongoose";
import Device from "./models/Device.js";

dotenv.config();
await mongoose.connect(process.env.MONGO_URI);

await Device.deleteMany();

await Device.insertMany([
  { id: "DV001", studentName: "Nguyễn Văn A", className: "10A1", deviceModel: "Samsung A52", status: "online", lastSeen: new Date(), usageTodayMinutes: 120 },
  { id: "DV002", studentName: "Trần Thị B", className: "10A2", deviceModel: "Xiaomi Redmi 9", status: "offline", lastSeen: new Date(Date.now()-1000*60*60*5), usageTodayMinutes: 40 },
  { id: "DV003", studentName: "Lê Văn C", className: "11B1", deviceModel: "iPhone 12", status: "online", lastSeen: new Date(), usageTodayMinutes: 200 }
]);

console.log("✅ Seed done");
process.exit();
