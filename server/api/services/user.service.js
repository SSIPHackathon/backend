import FeedBack from "../../models/FeedBackModel";

class userService {
  async FillFeedback(policeStationId, phoneNumber, feedback) {
    const feedbackModel = FeedBack.findOne({
      policeStationId: policeStationId,
      phoneNumber: phoneNumber,
    });
    if (feedbackModel) {
      feedbackModel.Forms.push(feedback);
      await feedbackModel.save();
    } else {
      const newFeedback = new FeedBack({
        policeStationId: policeStationId,
        phoneNumber: phoneNumber,
        Forms: [feedback],
      });
      await newFeedback.save();
    }
  }
}

export default new userService();
