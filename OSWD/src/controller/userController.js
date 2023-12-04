const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const userData = await User.find();
      if (userData.length === 0) {
        res.status(404).json({
          status: false,
          message: "User not found",
          payload: {},
        });
      } else {
        res.status(200).json({
          status: true,
          message: "User get successfully",
          payload: { user: userData },
        });
      }
    } catch (e) {
      res.status(400).json({
        status: false,
        message: "Something went to wrong",
        payload: {},
      });
    }
  },

  getUserByID: async (req, res) => {
    try {
      const userId = req.params.id;
      const userData = await User.findById({ _id: userId });
      if (!userData) {
        res.status(404).json({
          status: false,
          message: "User not found",
          payload: {},
        });
      } else {
        res.status(200).json({
          status: true,
          message: "User get successfully",
          payload: { user: userData },
        });
      }
    } catch (e) {
      res.status(400).json({
        status: false,
        message: "Something went to wrong",
        payload: {},
      });
    }
  },

  createUser: async (req, res) => {
    try {
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
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUserData = new User({
          username: username,
          password: hashedPassword,
        });
        const userData = await newUserData.save();
        if (!userData) {
          res.status(400).json({
            status: false,
            message: "Failed to create user",
            payload: {},
          });
        } else {
          res.status(201).json({
            status: true,
            message: "User created successfully",
            payload: { user: userData },
          });
        }
      }
    } catch (e) {
      res.status(400).json({
        status: false,
        message: "Something went to wrong",
        payload: {},
      });
    }
  },

  updateUser: async (req, res) => {
    try {
      const userId = req.params.id;
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
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUserData = {
          username: username,
          password: hashedPassword,
        };
        const userData = await User.findOneAndUpdate(
          { _id: userId },
          newUserData,
          { new: true }
        );
        if (!userData) {
          res.status(400).json({
            status: false,
            message: "Failed to create user",
            payload: {},
          });
        } else {
          res.status(201).json({
            status: true,
            message: "User created successfully",
            payload: { user: userData },
          });
        }
      }
    } catch (e) {
      res.status(400).json({
        status: false,
        message: "Something went to wrong",
        payload: {},
      });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const userData = await User.deleteOne({ _id: userId });
      if (userData.deletedCount === 0) {
        res.status(404).json({
          status: false,
          message: "User not delete",
          payload: {},
        });
      } else {
        res.status(200).json({
          status: true,
          message: "User deleted successfully",
          payload: { deletedCount: userData.deletedCount },
        });
      }
    } catch (e) {
      res.status(400).json({
        status: false,
        message: "Something went to wrong",
        payload: {},
      });
    }
  },
};