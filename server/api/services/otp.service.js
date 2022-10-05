// import l from "../../common/logger";
// import db from "./examples.db.service";
import OTPModel from "../../models/OtpModel";
import AWS from "aws-sdk";
class OtpService {
  createOTP(number) {
    // create OTP of 6 digits
    let otp = Math.floor(100000 + Math.random() * 900000);
    const date = new Date();
    // add 5 minutes to current time
    date.setMinutes(date.getMinutes() + 5);
    try {
      console.log("OTP: ", Date.now());
      OTPModel.create({ number, otp, expireAt: date });
      console.log(date);
    } catch (err) {
      console.log(err);
    }
    return otp;
  }
  async checkOTP(number, otp) {
    const otpData = await OTPModel.findOne({ number, otp });
    if (otpData) {
      console.log(otpData.expireAt);
      if (otpData.expireAt > new Date()) {
        if (otpData.otp === otp) {
          console.log(otpData.otp, otp);
          console.log("OTP Verified");
          return true;
        }
      } else {
        console.log("OTP Expired");
      }
    }
    return false;
  }
  sendOTP(number, OTP) {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: "us-east-1",
    });

    var params = {
      Message: `This is your One Time Password (આ તમારો વન ટાઈમ પાસવર્ડ છે): ${OTP}`,
      PhoneNumber: `+91${number}`,
    };

    var publishTextPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
      .publish(params)
      .promise();

    publishTextPromise
      .then(function (data) {
        console.log(data);
        return true;
      })
      .catch(function (err) {
        console.error(err, err.stack);
        return false;
      });
  }
}

export default new OtpService();
