import mongoose from "mongoose";

const OTP = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
  otp: {
    type: Number,
    required: true,
  },
  expireAt: {
    type: Date,
  },
});

export default mongoose.model("OTP", OTP);
