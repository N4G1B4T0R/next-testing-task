'use server';

import { signOut } from '@/auth';
import { cookies } from 'next/headers';

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete('access_token');
  cookieStore.delete('refresh_token');
  cookieStore.delete('token_expire');
  cookieStore.delete('refresh_token_expire');

  await signOut({ redirectTo: '/auth/login' });
}
