const UserService = require("../services/userServices");
const response = require("./../utils/response");



class UserContoller {
  
  async register(req, res) {
    const data = await UserService.userSignUp(req.body);
    res.status(200).send(response("User signed up", data));

  }
  async login(req, res) {
    const data = await UserService.userSignIn(req.body);
    res.status(200).send(response("User signed in", data));
  }

  
}
module.exports = new UserContoller();
