const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const storageMiddleware = require("../middleware/storageMiddleware");

router.post("/product/add/",storageMiddleware.uploadImg,productController.addProduct);
router.get("/product/all/",productController.getProduct);
router.put("/product/update/:id",productController.updateProduct);
router.delete("/product/delete/:id",productController.deleteProduct);

module.exports = router;
