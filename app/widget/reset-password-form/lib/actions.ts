'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import axios from '@/app/shared/lib/api';
import { AxiosError } from 'axios';

const ForgotPasswordSchema = z.object({
  password: z.string().min(8, 'Invalid password'),
  confirmPassword: z.string().min(8, 'Invalid password'),
  token: z.string().min(1, 'Required token from url'),
  secret: z.string().min(1, 'Required secret from url')
});

export async function resetPassword(prevState: unknown, formData: FormData) {
  const validatedFields = ForgotPasswordSchema.safeParse({
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
    token: formData.get('token'),
    secret: formData.get('secret')
  });

  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;
    return {
      errors,
      message: Object.values(errors)?.[0]?.[0]
    };
  }

  const { password, confirmPassword, token, secret } = validatedFields.data;

  if (confirmPassword !== password) {
    return {
      message: 'The passwords did not match'
    };
  }

  try {
    await axios.post('/v1/auth/password-set', { password, token, secret });
  } catch (error) {
    const err = error as AxiosError<Record<string, unknown>>;
    return {
      message: err?.response?.data?.detail as string || 'Failed to login'
    };
  }

  revalidatePath('/auth/login');
  redirect('/auth/login');
}
