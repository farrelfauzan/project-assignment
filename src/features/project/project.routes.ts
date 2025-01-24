import { Router } from "express";
import { projectController } from "./project.controller";

const router = Router();

router.post("/", projectController.create.bind(projectController));
router.get("/", projectController.getAll.bind(projectController));
router.get("/:id", projectController.getById.bind(projectController));
router.put("/:id", projectController.update.bind(projectController));
router.delete("/:id", projectController.delete.bind(projectController));

export default router;
