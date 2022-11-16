import express from "express";
import admin from "../auth/firebase";

import context from "express-http-context";
import UnauthorizedError from "../error/unauthorized";

export const authMiddleware: express.RequestHandler = (req, _, next) => {
  const token = req.headers.authorization;
  if (!token) throw new UnauthorizedError("Auth token is required");

  admin
    .auth()
    .verifyIdToken(token)
    .then((data) => {
      context.set("id", data.uid);
      next();
    })
    .catch(() => {
      next(new Error("no auth"));
    });
};
