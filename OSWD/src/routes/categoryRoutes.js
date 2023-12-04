const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController");

router.post("/category/add/",categoryController.addCategory);
router.get("/category/all/",categoryController.getCategory);
router.put("/category/update/:id",categoryController.updateCategory);
router.delete("/category/delete/:id",categoryController.deleteCategory);
router.post("/category/",categoryController.uclcCategory);

module.exports = router;
