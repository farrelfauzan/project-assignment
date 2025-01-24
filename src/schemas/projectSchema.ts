import { z } from "zod";

export const ProjectStatus = z.enum(["Pending", "In Progress", "Completed"]);

export const ProjectSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  deadline: z.coerce.date(),
  status: ProjectStatus,
});

export type ProjectInput = z.infer<typeof ProjectSchema>;
