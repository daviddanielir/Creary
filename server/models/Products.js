const { model, Schema } = require("mongoose");


const products = new Schema(
  {
    nameproduct: String,
    descriptionproduct: String,
    imgPath: String
  },
  { timestamps: true }
);

module.exports = model("Products", products);


