import mongoose from "mongoose";

export interface EventModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  tags: [string];
  date: string;
  mapLag: string;
  mapLat: string;
  userId: string;
}
