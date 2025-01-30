import express from "express";
import dotenv from 'dotenv';
import db from "./config/dbConnect.js";

// Initial configurations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000; // Default port if not specified in .env

// Middleware to parse JSON
app.use(express.json());

// Initial route
app.get('/', (req, res) => {
  res.status(200).send('API is ok!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});