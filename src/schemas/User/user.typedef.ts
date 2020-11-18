import mongoose from "mongoose";

export interface UserModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  name: string;
  playLists: [mongoose.Types.ObjectId];
  likePlaylists: [mongoose.Types.ObjectId];
  addSavePlayLists: [mongoose.Types.ObjectId];
}
