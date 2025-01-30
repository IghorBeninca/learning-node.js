import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => console.log("Successfully connected to MongoDB!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const db = mongoose.connection;

// Connection events
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("MongoDB connection opened successfully!");
});

export default db;