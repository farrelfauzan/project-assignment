import { Router } from "express";
import { employeeController } from "./employee.controller";

const router = Router();

router.post("/", employeeController.create.bind(employeeController));
router.get("/", employeeController.getAll.bind(employeeController));
router.get("/:id", employeeController.getById.bind(employeeController));
router.put("/:id", employeeController.update.bind(employeeController));
router.delete("/:id", employeeController.delete.bind(employeeController));

export default router;
