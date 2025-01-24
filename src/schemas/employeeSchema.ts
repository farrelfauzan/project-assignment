import { z } from "zod";

export const EmployeeSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email format"),
  role: z.string().min(2, "Role must be at least 2 characters long"),
});

export type EmployeeInput = z.infer<typeof EmployeeSchema>;
