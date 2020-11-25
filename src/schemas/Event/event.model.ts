import mongoose from "mongoose";
import { EventModel } from "./event.typedef";

const eventSchema = new mongoose.Schema(
  {
    name: { type: String },
    tags: [{ type: String }],
    date: { type: String },
    mapLat: { type: String },
    mapLag: {
      type: String,
    },
    userId: { type: mongoose.Types.ObjectId },
  },
  {
    timestamps: true,
  },
);

const Event = mongoose.model<EventModel>("Event", eventSchema);
export { Event };
