import { DataTypes, Model } from "sequelize";
import { Employee } from "./employee";
import { Project } from "./project";
import { sequelize } from "../config/database";

export class Assignment extends Model {
  public employeeId!: string;
  public projectId!: string;
}

Assignment.init(
  {
    employeeId: {
      type: DataTypes.UUID,
      references: {
        model: Employee,
        key: "id",
      },
    },
    projectId: {
      type: DataTypes.UUID,
      references: {
        model: Project,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Assignment",
    tableName: "ProjectAssignments",
    timestamps: true,
  }
);

Employee.belongsToMany(Project, {
  through: Assignment,
  foreignKey: "employeeId",
});
Project.belongsToMany(Employee, {
  through: Assignment,
  foreignKey: "projectId",
});
