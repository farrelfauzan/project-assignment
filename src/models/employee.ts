import { sequelize } from "../config/database";
import {
  DataTypes,
  HasManyAddAssociationMixin,
  HasManyRemoveAssociationMixin,
  Model,
} from "sequelize";
import { Project } from "./project";
import { Assignment } from "./assignment";

export class Employee extends Model {
  public id!: string;
  public name!: string;
  public email!: string;
  public role!: string;
  public deletedAt!: Date | null;

  public addProject!: HasManyAddAssociationMixin<Project, string>;
  public removeProject!: HasManyRemoveAssociationMixin<Project, string>;
}

Employee.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Employee",
    tableName: "Employees",
    timestamps: true,
    paranoid: true,
  }
);
