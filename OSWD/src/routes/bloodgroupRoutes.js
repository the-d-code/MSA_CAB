const express = require("express");
const router = express.Router();
const bloodgroupController = require("../controller/bloodgroupController");

router.post("/bloodgroup/add/",bloodgroupController.addBloodgroup);
router.get("/bloodgroup/all/",bloodgroupController.getBloodgroup);
router.put("/bloodgroup/update/:id",bloodgroupController.updateBloodgroup);
router.delete("/bloodgroup/delete/:id",bloodgroupController.deleteBloodGroupRecord);

module.exports = router;