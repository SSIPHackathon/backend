import adminService from "../../services/admin.service";
export class Controller {
  Login(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const verifyAdmin = adminService.verifyAdmin(email, password);
    if (verifyAdmin) {
      res.status(200).send("Login Successful");
    } else {
      res.status(401).send("Login Failed");
    }
  }
}
export default new Controller();
