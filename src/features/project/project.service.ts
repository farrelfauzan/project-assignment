import { Assignment } from "../../models/assignment";
import { Employee } from "../../models/employee";
import { Project } from "../../models/project";
import { ProjectInput } from "../../schemas/projectSchema";

export class ProjectService {
  async createProject(options: ProjectInput) {
    return await Project.create(options);
  }

  async getAllProjects(
    page: number = 1,
    limit: number = 10,
    order: string = "ASC",
    sortBy: string = "createdAt"
  ) {
    const offset = (page - 1) * limit;

    return await Project.findAndCountAll({
      limit,
      offset,
      include: Employee,
      order: [[sortBy, order]],
    });
  }

  async getProjectById(id: string) {
    return await Project.findByPk(id, {
      include: Employee,
    });
  }

  async updateProject(id: string, options: Partial<ProjectInput>) {
    const project = await Project.findByPk(id, {
      include: Employee,
    });

    if (!project) {
      throw new Error("Project not found");
    }

    return await project.update(options);
  }

  async deleteProject(id: string) {
    const project = await Project.findByPk(id);

    if (!project) {
      throw new Error("Project not found");
    }

    return await project.destroy();
  }
}

export const projectService = new ProjectService();
