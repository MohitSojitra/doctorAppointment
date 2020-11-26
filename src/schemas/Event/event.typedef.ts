import mongoose from "mongoose";

export interface EventModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  category: string;
  gender: string;
  description: string;
  address: string;
  capicity: number;
  tags: [string];
  date: string;
  mapLag: string;
  mapLat: string;
  userId: string;
}
