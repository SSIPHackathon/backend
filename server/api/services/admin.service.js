import AdminModel from "../../models/AdminModel";

class AdminService {
  async verifyAdmin(email, password) {
    const host = email.split("@")[0];
    const obj = AdminModel.findOne(
      { policeStationId: host, password: password },
      (err, admin) => {
        if (err) {
          reject(err);
        } else {
          return true;
        }
      }
    );
    if (obj) {
      return true;
    } else {
      return false;
    }
  }
}

export default new AdminService();
