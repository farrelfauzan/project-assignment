import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof Error) {
    res.status(500).json({ message: err.message });
  } else {
    res.status(400).json({ message: "Something went wrong" });
  }
};

export default errorHandler;
