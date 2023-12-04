const mongoose = require("mongoose");

const productSchemas = new mongoose.Schema(
    {
        name: String,
        price: Number,
        quantity: Number,
        image: String,
        categoryID: mongoose.Schema.Types.ObjectId,
        status: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    });

module.exports = mongoose.model("product", productSchemas);