import express from "express";
import context from "express-http-context";
import { authMiddleware } from "./middleware/auth";
import { errorMiddleware } from "./middleware/error";
import { Pool } from "node-postgres";

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.get("/ping", (_, res) => {
  res.send("ping");
});

// pre-middleware
app.use(context.middleware);
app.use(authMiddleware);

// routes
// app.get("/user/:id");

// error-middleware
app.use(errorMiddleware);

const server = app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});
