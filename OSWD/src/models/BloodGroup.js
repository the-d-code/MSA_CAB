const mongoose = require("mongoose");

const bloodgroupSchemas = new mongoose.Schema(
  {
    name: String,
  },
  {
    timestamps: true,
    versionKey: false
  });

module.exports = mongoose.model("bloodgroups", bloodgroupSchemas);