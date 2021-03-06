import mongoose from "mongoose";

interface Slot extends mongoose.Document {
  time: string;
  userId: string;
  problem: string;
}

export interface DoctorModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  specialization: [string];
  curruntServingHospital: string;
  experience: string;
  bio: string;
  workingTime: string;
  imageUrl: string;
  slotes: [Slot];
}
