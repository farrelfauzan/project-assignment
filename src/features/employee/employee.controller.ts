import { Request, Response } from "express";
import { BaseController } from "../../config/controller";
import { EmployeeSchema } from "../../schemas/employeeSchema";
import { employeeService } from "./employee.service";

export class EmployeeController extends BaseController {
  async create(req: Request, res: Response) {
    try {
      const validateData = EmployeeSchema.parse(req.body);
      const employee = await employeeService.createEmployee(validateData);

      this.sendSuccessResponse(res, employee, "Employee created successfully");
    } catch (error) {
      console.log(error);
      this.sendErrorResponse(res, error as Error);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const employees = await employeeService.getAllEmployees(
        Number(page),
        Number(limit)
      );

      this.sendSuccessResponse(
        res,
        employees,
        "Employees fetched successfully"
      );
    } catch (error) {
      this.sendErrorResponse(res, error as Error);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const employee = await employeeService.getEmployeeById(id);
      if (!employee) {
        throw new Error("Employee not found");
      }
      this.sendSuccessResponse(res, employee, "Employee fetched successfully");
    } catch (error) {
      this.sendErrorResponse(res, error as Error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const validateData = EmployeeSchema.parse(req.body);
      const employee = await employeeService.updateEmployee(id, validateData);
      this.sendSuccessResponse(res, employee, "Employee updated successfully");
    } catch (error) {
      this.sendErrorResponse(res, error as Error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      await employeeService.deleteEmployee(id);
      this.sendSuccessResponse(res, null, "Employee deleted successfully");
    } catch (error) {
      this.sendErrorResponse(res, error as Error);
    }
  }
}

export const employeeController = new EmployeeController();
