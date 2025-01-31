import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, require: true},
  qty: { type: Number, require: true},
  price: { type: Number, require: true},
}, { 
  versionKey: false,
  timestamps:true 
});

const product = mongoose.model("products", productSchema);

export { product, productSchema };
