import mongoose from "mongoose";

export interface UserModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  name: string;
  events: [mongoose.Types.ObjectId];
  isOrganizer: boolean;
  organizeEvents: [mongoose.Types.ObjectId];
}
