import mongoose from "mongoose";

export interface UserModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  name: string;
  mobile: string;
  age: string;
  gender: string;
}
