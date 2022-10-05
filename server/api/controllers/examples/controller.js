import otpService from "../../services/otp.service";
import userService from "../../services/user.service";
// import ExamplesService from "../../services/otp.service";

export class Controller {
  all(req, res) {
    ExamplesService.all().then((r) => res.json(r));
  }

  byId(req, res) {
    ExamplesService.byId(req.params.id).then((r) => {
      if (r) res.json(r);
      else res.status(404).end();
    });
  }

  CreateOtp(req, res) {
    const number = req.body.number;
    const otp = otpService.createOTP(req.body.number);
    // const success = otpService.sendOTP(number, otp);

    res.status(200).json({ success: true });
  }
  FeedBack(req, res) {
    const policeStationId = req.body.policeStationId;
    const phoneNumber = req.body.phoneNumber;
    const feedback = req.body.feedback;
    // Fill the feedback in the database
    userService.FillFeedback(policeStationId, phoneNumber, feedback);
    res.status(200).json({ success: true });
  }

  async CheckOtp(req, res) {
    const number = req.body.number;
    const otp = req.body.otp;
    const verified = await otpService.checkOTP(number, otp);
    if (verified) {
      res.status(200).json({ verified: true });
    }
    if (!verified) {
      res.status(500).json({ verified: false });
    }
  }
}
export default new Controller();
