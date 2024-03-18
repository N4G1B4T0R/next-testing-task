'use server';

import { z } from 'zod';
import { AxiosError } from 'axios';
import axios from '@/app/shared/lib/api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ForgotPasswordSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Invalid password')
});

export async function authenticate(prevState: unknown, formData: FormData) {
  const cookieStore = cookies();

  const validatedFields = ForgotPasswordSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid Data'
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const { data } = await axios.post('/v1/auth/login', { email, password });

    if (!data) return {
      message: "User not found"
    };

    cookieStore.set('access_token', data?.access_token);
    cookieStore.set('email', email);
    cookieStore.set('refresh_token', data?.refresh_token);
    cookieStore.set('token_expire', data?.token_expire);
    cookieStore.set('refresh_token_expire', data?.refresh_token_expire);

  } catch (error) {
    const err = error as AxiosError<Record<string, unknown>>;
    return {
      message: err?.response?.data?.detail as string || 'Failed to login'
    };
  }

  redirect('/dashboard');
}
