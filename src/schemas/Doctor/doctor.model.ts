import mongoose from "mongoose";
import { DoctorModel } from "./doctor.typedef";

const Slot = new mongoose.Schema({
  time: { type: String, required: true },
  userId: { type: String },

  problem: { type: String },
});

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialization: [{ type: String }],
    curruntServingHospital: { type: String },
    experience: { type: String },
    bio: { type: String },
    workingTime: { type: String }, // mon-fri-9-18
    imageUrl: { type: String },
    slotes: [Slot],
    // events: [{ type: mongoose.Types.ObjectId, ref: "event" }],
    // isOrganizer: { type: Boolean, default: false },
    // organizeEvents: [{ type: mongoose.Types.ObjectId, ref: "event" }],
  },
  {
    timestamps: true,
  },
);

const Doctor = mongoose.model<DoctorModel>("doctor", doctorSchema);
export { Doctor };
