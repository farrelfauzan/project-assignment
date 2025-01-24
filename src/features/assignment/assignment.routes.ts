import { Router } from "express";
import { assignmentController } from "./assignment.controller";

const router = Router();

router.post(
  "/",
  assignmentController.createAssignment.bind(assignmentController)
);

export default router;
