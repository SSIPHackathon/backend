import mongoose from "mongoose";

const FeedBack = new mongoose.Schema({
  //  police station id
  // Forms Array of Object
  // phone Number
  policeStationId: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  Forms: {
    type: Array,
  },
});

export default mongoose.model("FeedBack", FeedBack);
