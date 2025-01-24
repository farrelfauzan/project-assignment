import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import { components } from "./swaggerComponents";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Employee Project Management API",
      version: "1.0.0",
      description: "API documentation for Employee Project Management",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: components,
    paths: {
      "/projects": {
        post: {
          summary: "Create a new project",
          tags: ["Projects"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProjectInput",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Project created successfully",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
        get: {
          summary: "Get all projects",
          tags: ["Projects"],
          parameters: [
            {
              in: "query",
              name: "page",
              schema: {
                type: "integer",
              },
              description: "Page number",
            },
            {
              in: "query",
              name: "limit",
              schema: {
                type: "integer",
              },
              description: "Number of items per page",
            },
          ],
          responses: {
            200: {
              description: "Projects fetched successfully",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
      },
      "/projects/{id}": {
        get: {
          summary: "Get a project by ID",
          tags: ["Projects"],
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: {
                type: "string",
              },
              description: "Project ID",
            },
          ],
          responses: {
            200: {
              description: "Project fetched successfully",
            },
            404: {
              description: "Project not found",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
        put: {
          summary: "Update a project by ID",
          tags: ["Projects"],
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: {
                type: "string",
              },
              description: "Project ID",
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProjectInput",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Project updated successfully",
            },
            404: {
              description: "Project not found",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
        delete: {
          summary: "Delete a project by ID",
          tags: ["Projects"],
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: {
                type: "string",
              },
              description: "Project ID",
            },
          ],
          responses: {
            200: {
              description: "Project deleted successfully",
            },
            404: {
              description: "Project not found",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
      },
      "/employees": {
        post: {
          summary: "Create a new employee",
          tags: ["Employees"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/EmployeeInput",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Employee created successfully",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
        get: {
          summary: "Get all employees",
          tags: ["Employees"],
          parameters: [
            {
              in: "query",
              name: "page",
              schema: {
                type: "integer",
              },
              description: "Page number",
            },
            {
              in: "query",
              name: "limit",
              schema: {
                type: "integer",
              },
              description: "Number of items per page",
            },
          ],
          responses: {
            200: {
              description: "Employees fetched successfully",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
      },
      "/employees/{id}": {
        get: {
          summary: "Get an employee by ID",
          tags: ["Employees"],
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: {
                type: "string",
              },
              description: "Employee ID",
            },
          ],
          responses: {
            200: {
              description: "Employee fetched successfully",
            },
            404: {
              description: "Employee not found",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
        put: {
          summary: "Update an employee by ID",
          tags: ["Employees"],
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: {
                type: "string",
              },
              description: "Employee ID",
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/EmployeeInput",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Employee updated successfully",
            },
            404: {
              description: "Employee not found",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
        delete: {
          summary: "Delete an employee by ID",
          tags: ["Employees"],
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: {
                type: "string",
              },
              description: "Employee ID",
            },
          ],
          responses: {
            200: {
              description: "Employee deleted successfully",
            },
            404: {
              description: "Employee not found",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
      },
      "/assignments": {
        post: {
          summary: "Create a new assignment",
          tags: ["Assignments"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AssignmentInput",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Assignment created successfully",
            },
            500: {
              description: "Internal server error",
            },
          },
        },
      },
    },
  },
  apis: ["./src/features/**/*.ts"],
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
