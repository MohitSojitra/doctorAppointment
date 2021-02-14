import mongoose from "mongoose";
import { EventModel } from "./event.typedef";

const eventSchema = new mongoose.Schema(
  {
    name: { type: String },
    category: { type: String },
    gender: { type: String },
    description: { type: String },
    address: { type: String },
    capicity: { type: Number },
    tags: [{ type: String }],
    date: { type: String },
    mapLat: { type: String },
    mapLag: {
      type: String,
    },
    userId: { type: mongoose.Types.ObjectId },
    eventPic: { type: String },
  },
  {
    timestamps: true,
  },
);

const Event = mongoose.model<EventModel>("Event", eventSchema);
export { Event };
