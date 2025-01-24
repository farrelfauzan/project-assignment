import { Assignment } from "../../models/assignment";
import { AssignmentInput } from "../../schemas/assignmentSchema";

export class AssignmentService {
  async createAssignment(options: AssignmentInput) {
    const { employeeIds, projectId } = options;

    const assignments = employeeIds.map((employeeId) => {
      return {
        employeeId,
        projectId,
      };
    });

    return await Assignment.bulkCreate(assignments);
  }
}

export const assignmentService = new AssignmentService();
