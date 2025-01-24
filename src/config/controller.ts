import { Request, Response } from "express";

export abstract class BaseController {
  protected sendSuccessResponse(
    res: Response,
    data: any,
    message: string = "Success",
    statusCode: number = 200
  ) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

  protected sendErrorResponse(
    res: Response,
    error: Error,
    statusCode: number = 500
  ) {
    return res.status(statusCode).json({
      success: false,
      message: error.message,
      error:
        process.env.NODE_ENV === "development"
          ? error.stack
          : "Internal Server Error",
    });
  }
}
