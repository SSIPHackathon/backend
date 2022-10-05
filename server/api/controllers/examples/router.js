import * as express from "express";
import controller from "./controller";

export default express
  .Router()
  .post("/otppost", controller.CreateOtp)
  .post("/verifyotp", controller.CheckOtp)
  .post("/feedback", controller.FeedBack);
