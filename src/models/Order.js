import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  total: {
    type: Number,
    required: true,
    min: 0,
  },
}, { 
  versionKey: false,
  timestamps: true 
});

// Middleware to validate stock and calculate the total
orderSchema.pre("save", async function (next) {
  try {
    let total = 0;

    for (const item of this.products) {
      const product = await mongoose.model("products").findById(item.product);

      if (!product) {
        throw new Error(`Product not found: ${item.product}`);
      }

      if (product.qty < item.quantity) {
        throw new Error(`Insufficient stock for product: ${product.name}`);
      }

      product.qty -= item.quantity;
      await product.save();

      total += product.price * item.quantity;
    }

    this.total = total;
    next();
  } catch (error) {
    next(error);
  }
});

const Order = mongoose.model("Orders", orderSchema);

export default Order;