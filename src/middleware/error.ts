import express from "express";

export const errorMiddleware: express.ErrorRequestHandler = (
  err,
  _,
  res,
  next
) => {
  if (!err) return next();
  // NOTE: we have written all the errors so
  // it should accept all errors with status
  //@ts-ignore
  res.status(err.status).send(err.message);
};
