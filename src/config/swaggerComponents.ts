import { Components } from "swagger-jsdoc";

// filepath: /E:/myCode/test-hibilis/src/config/swaggerComponents.ts
export const components: Components = {
  schemas: {
    ProjectInput: {
      type: "object",
      required: ["name", "description"],
      properties: {
        name: {
          type: "string",
          description: "Name of the project",
        },
        description: {
          type: "string",
          description: "Description of the project",
        },
      },
      example: {
        name: "Project Alpha",
        description: "Description of Project Alpha",
      },
    },
    EmployeeInput: {
      type: "object",
      required: ["name", "email", "role"],
      properties: {
        name: {
          type: "string",
          description: "Name of the employee",
        },
        email: {
          type: "string",
          description: "Email of the employee",
        },
        role: {
          type: "string",
          description: "Role of the employee",
        },
      },
      example: {
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Developer",
      },
    },
    AssignmentInput: {
      type: "object",
      required: ["employeeId", "projectId", "role"],
      properties: {
        employeeId: {
          type: "string",
          description: "ID of the employee",
        },
        projectId: {
          type: "string",
          description: "ID of the project",
        },
        role: {
          type: "string",
          description: "Role of the employee in the project",
        },
      },
      example: {
        employeeId: "123e4567-e89b-12d3-a456-426614174000",
        projectId: "123e4567-e89b-12d3-a456-426614174001",
        role: "Developer",
      },
    },
  },
};
