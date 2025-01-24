import { Request, Response } from "express";
import { ProjectSchema } from "../../schemas/projectSchema";
import { projectService } from "./project.service";
import { BaseController } from "../../config/controller";

export class ProjectController extends BaseController {
  async create(req: Request, res: Response) {
    try {
      const validateData = ProjectSchema.parse(req.body);
      const project = await projectService.createProject(validateData);
      this.sendSuccessResponse(res, project, "Project created successfully");
    } catch (error) {
      this.sendErrorResponse(res, error as Error);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const projects = await projectService.getAllProjects(
        Number(page),
        Number(limit)
      );
      this.sendSuccessResponse(res, projects, "Projects fetched successfully");
    } catch (error) {
      this.sendErrorResponse(res, error as Error);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const project = await projectService.getProjectById(id);
      if (!project) {
        throw new Error("Project not found");
      }
      this.sendSuccessResponse(res, project, "Project fetched successfully");
    } catch (error) {
      this.sendErrorResponse(res, error as Error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const validateData = ProjectSchema.parse(req.body);
      const project = await projectService.updateProject(id, validateData);
      this.sendSuccessResponse(res, project, "Project updated successfully");
    } catch (error) {
      this.sendErrorResponse(res, error as Error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const project = await projectService.deleteProject(id);
      this.sendSuccessResponse(res, project, "Project deleted successfully");
    } catch (error) {
      this.sendErrorResponse(res, error as Error);
    }
  }
}

export const projectController = new ProjectController();
