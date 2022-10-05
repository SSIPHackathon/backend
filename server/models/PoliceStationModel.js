import mongoose from "mongoose";

const PoliceStation = new mongoose.Schema({
  policeStationId: {
    type: String,
  },
  City: {
    type: String,
  },
  District: {
    type: String,
  },
  SubDivision: {
    type: String,
  },
  PoliceStation: {
    type: String,
  },
  Email: {
    type: String,
  },
  Password: {
    type: String,
  },
  QrCodeCount: {
    type: Number,
  },
});

export default mongoose.model("PoliceStation", PoliceStation);
