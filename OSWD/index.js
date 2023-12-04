const express = require("express");
const app = express();
const mongoose = require("mongoose");
const body_parser = require("body-parser");
const cors = require("cors");

const userRoutes = require("./src/routes/userRoutes");
const authRoutes = require("./src/routes/authRoutes");
const bloodgroupRoutes = require("./src/routes/bloodgroupRoutes");
const categoryRoutes = require("./src/routes/categoryRoutes");
const productRoutes = require("./src/routes/productRoutes");

mongoose
  .connect("mongodb://localhost:27017/exam", {
    family: 4,
  })
  .then(() => {
    console.log("Connection Establish successfully...");
  })
  .catch(() => {
    console.log("Connection failed...");
  });

app.use(express.json());
app.use(body_parser.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", express.static("./"));
app.use(
  "/api/",
  userRoutes,
  authRoutes,
  bloodgroupRoutes,
  categoryRoutes,
  productRoutes,
  
);

app.listen(8000, () => {
  console.log(`Server running on http://localhost:8000/`);
});