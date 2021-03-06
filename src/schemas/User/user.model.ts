import mongoose from "mongoose";
import { UserModel } from "./user.typedef";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    mobile: { type: String, unique: true, required: true },
    age: { type: String },
    gender: { type: String },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model<UserModel>("User", userSchema);
export { User };
