import userRouter from "./api/controllers/user/router";
import adminRouter from "./api/controllers/admin/router";
export default function routes(app) {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/admin", adminRouter);
}
