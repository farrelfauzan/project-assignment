import { Employee } from "../../models/employee";
import { Project } from "../../models/project";
import { EmployeeInput } from "../../schemas/employeeSchema";

export class EmployeeService {
  async createEmployee(options: EmployeeInput) {
    return await Employee.create(options);
  }

  async getAllEmployees(
    page: number = 1,
    limit: number = 10,
    order: string = "ASC",
    sortBy: string = "createdAt"
  ) {
    const offset = (page - 1) * limit;

    return await Employee.findAndCountAll({
      limit,
      offset,
      include: Project,
      order: [[sortBy, order]],
    });
  }

  async getEmployeeById(id: string) {
    return await Employee.findByPk(id, {
      include: Project,
    });
  }

  async updateEmployee(id: string, options: Partial<EmployeeInput>) {
    const employee = await Employee.findByPk(id, {
      include: Project,
    });

    if (!employee) {
      throw new Error("Employee not found");
    }

    return await employee.update(options);
  }

  async deleteEmployee(id: string) {
    const employee = await Employee.findByPk(id);

    if (!employee) {
      throw new Error("Employee not found");
    }

    return await employee.destroy();
  }
}

export const employeeService = new EmployeeService();
