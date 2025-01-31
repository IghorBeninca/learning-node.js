import express from "express";
import dotenv from "dotenv";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

// Connection events
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("MongoDB connection opened successfully!");
});

// Initial configurations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000; // Default port if not specified in .env

// Middleware to parse JSON
app.use(express.json());

// Routes
routes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});