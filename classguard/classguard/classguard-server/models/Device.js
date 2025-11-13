import mongoose from "mongoose";

const DeviceSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // mã thiết bị do bạn gán (DV001...)
  studentName: { type: String, default: "" },
  className: { type: String, default: "" },
  deviceModel: { type: String, default: "" },
  status: { type: String, enum: ["online", "offline"], default: "offline" },
  lastSeen: { type: Date, default: Date.now },
  usageTodayMinutes: { type: Number, default: 0 }, // lưu phút
  meta: { type: Object, default: {} } // có thể chứa thêm thông tin
}, { timestamps: true });

export default mongoose.model("Device", DeviceSchema);
