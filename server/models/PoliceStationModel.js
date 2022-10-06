import mongoose from "mongoose";

const PoliceStation = new mongoose.Schema({
  policeStationId: {
    type: String,
  },
  name_of_office: {
    type: String,
  },
  address: {
    type: String,
  },
  district: {
    type: String,
  },
  off_head: {
    type: String,
  },
  off_phone: {
    type: String,
  },
  branch: {
    type: String,
  },
  QrCodeCount: {
    type: Number,
  },
  password: {
    type: String,
  },
});

export default mongoose.model("PoliceStation", PoliceStation);
