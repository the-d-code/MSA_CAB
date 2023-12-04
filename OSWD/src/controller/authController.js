const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = "abcdefghijklmnopqrstuvwxyz";

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    if (!username) {
      res.status(400).json({
        status: false,
        message: "Username required",
        payload: {},
      });
    } else if (!password) {
      res.status(400).json({
        status: false,
        message: "Password required",
        payload: {},
      });
    } else {
      const userData = await User.findOne({ username: username });
      if (!userData) {
        res.status(404).json({
          status: false,
          message: "User not found",
          payload: {},
        });
      } else {
        const isMatch = await bcrypt.compare(password, userData.password);
        if (!isMatch) {
          res.status(404).json({
            status: false,
            message: "Password not match",
            payload: {},
          });
        } else {
          const token = await jwt.sign(
            {
              userId: userData._id,
              username: userData.username,
            },
            secretKey,
            { expiresIn: "1h" }
          );
          res.status(404).json({
            status: true,
            message: "Login successfully....",
            payload: { user: token },
          });
        }
      }
    }
  },
};