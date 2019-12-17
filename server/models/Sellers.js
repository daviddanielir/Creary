const { model, Schema } = require("mongoose");


const products = new Schema({
    title: String,
    plot: String,
    genre:String,
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
  },
{ 
  timestamps: true,
  versionKey: false
}
);

const Products = model("Sellers", Sellers);

module.exports = Products;