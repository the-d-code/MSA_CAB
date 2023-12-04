const mongoose = require("mongoose");

const categorySchemas = new mongoose.Schema(
  {

    name: String,
    status: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  });

module.exports = mongoose.model("category", categorySchemas);