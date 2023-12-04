const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");
const authorizeMiddleware = require("../middleware/authorizeMiddleware");

router.get("/",authMiddleware,authorizeMiddleware(["Admin"]),userController.getUsers);

router.get("/user/", userController.getAllUsers);
router.get("/user/:id", userController.getUserByID);
router.post("/user/", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;