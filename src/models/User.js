import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, require: true},
  lastName: { type: String, require: true},
  email: { type: String, require: true},
  address: { type: Object, require: true}
}, { 
  versionKey: false,
  timestamps: true 
});

const user = mongoose.model("users", userSchema);

export { user, userSchema };