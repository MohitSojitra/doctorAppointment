import mongoose from "mongoose";
import { UserModel } from "./user.typedef";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    events: [{ type: mongoose.Types.ObjectId, ref: "event" }],
    isOrganizer: { type: Boolean, default: false },
    organizeEvents: [{ type: mongoose.Types.ObjectId, ref: "event" }],
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model<UserModel>("User", userSchema);
export { User };
