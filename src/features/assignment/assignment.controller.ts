import { Request, Response } from "express";
import { BaseController } from "../../config/controller";
import { AssignmentSchema } from "../../schemas/assignmentSchema";
import { assignmentService } from "./assignment.service";

export class AssignmentController extends BaseController {
  async createAssignment(req: Request, res: Response) {
    try {
      const validateData = AssignmentSchema.parse(req.body);
      const assignment = await assignmentService.createAssignment(validateData);
      this.sendSuccessResponse(
        res,
        assignment,
        "Assignment created successfully"
      );
    } catch (error) {
      console.log(error);
      this.sendErrorResponse(res, error as Error);
    }
  }
}

export const assignmentController = new AssignmentController();
