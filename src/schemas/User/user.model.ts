import mongoose from "mongoose";
import { UserModel } from "./user.typedef";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    playLists: [{ type: mongoose.Types.ObjectId, ref: "playlist" }],
    likePlaylists: [{ type: mongoose.Types.ObjectId, ref: "playlist" }],
    addSavePlayLists: [{ type: mongoose.Types.ObjectId, ref: "playlist" }],
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model<UserModel>("User", userSchema);
export { User };
