import { z } from "zod";

export const AssignmentSchema = z.object({
  employeeIds: z.array(z.string().uuid("Invalid employee ID")),
  projectId: z.string(),
});

export type AssignmentInput = z.infer<typeof AssignmentSchema>;
