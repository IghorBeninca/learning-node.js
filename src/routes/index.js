import express from "express";
import user from "./userRoutes.js";


// Routes index
const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("API is ok!");
  });
  app.use(express.json(), user);
};

// Export routes
export default routes;
