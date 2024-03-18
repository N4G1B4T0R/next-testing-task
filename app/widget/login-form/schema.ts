import { z } from 'zod';

export const FormSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Invalid password')
});

export const EmailSchema = z.object({
  email: z.string().email('Invalid email')
});

export type LoginFormSchema = z.infer<typeof FormSchema>;
