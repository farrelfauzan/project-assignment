import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import { v4 as uuidv4 } from "uuid";
import { Assignment } from "./assignment";
import { Employee } from "./employee";

export class Project extends Model {
  public id!: string;
  public name!: string;
  public deadline!: Date;
  public status!: "Pending" | "In Progress" | "Completed";
  public deletedAt!: Date | null;
}

Project.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuidv4(),
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Pending", "In Progress", "Completed"),
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Project",
    tableName: "Projects",
    timestamps: true,
    paranoid: true,
  }
);
