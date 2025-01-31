import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => console.log("Successfully connected to MongoDB!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const db = mongoose.connection;

export default db;