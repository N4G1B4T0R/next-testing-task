'use server';

import { z } from 'zod';
import { AxiosError } from 'axios';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import axios from '@/app/shared/lib/api';

const ForgotPasswordSchema = z.object({
  email: z.string().email()
});

export async function forgotPassword(prevState: unknown, formData: FormData) {
  const validatedFields = ForgotPasswordSchema.safeParse({
    email: formData.get('email')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid email'
    };
  }

  const { email } = validatedFields.data;

  try {
    await axios.post('/v1/auth/password-reset', { email });
  } catch (error) {
    const err = error as AxiosError<Record<string, unknown>>;
    return {
      message: err?.response?.data?.detail as string || 'Failed to login'
    };
  }

  revalidatePath('/auth/login');
  redirect('/auth/login');
}
