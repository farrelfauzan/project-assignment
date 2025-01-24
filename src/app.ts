import express, { Express } from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler";
import employeeRoutes from "./features/employee/employee.routes";
import projectRoutes from "./features/project/project.routes";
import assignmentRoutes from "./features/assignment/assignment.routes";

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.errorHandler();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(
      cors({
        origin: "*",
      })
    );
  }

  private errorHandler(): void {
    this.app.use(errorHandler);
  }

  private routes(): void {
    this.app.use("/employees", employeeRoutes);
    this.app.use("/projects", projectRoutes);
    this.app.use("/assignments", assignmentRoutes);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }
}

const app = new App();
app.start(3000);
