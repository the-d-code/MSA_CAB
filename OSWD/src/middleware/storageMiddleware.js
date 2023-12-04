const multer = require("multer");
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    cb(null, "./src/upload/product");
  },
  filename: async (req, file, cb) => {
    cb(
      null,
      `${file.originalname.split(".")[0]}-${Date.now()}.${
        file.mimetype.split("/")[1]
      }`
    );
  },
});

module.exports = {
  uploadImg: multer({ storage: storage }).single("image"),
};
