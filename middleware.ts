'use server'
import NextAuth from 'next-auth';

import { authConfig } from './auth.config';
import { authRoutes } from '@/routes';

const { auth } = NextAuth(authConfig);

// @ts-ignore
export default auth((req ) => {
  const { nextUrl, cookies } = req;

  const isLoggedIn = !!req.auth || cookies.get('access_token')?.value;
  const isApiAuthRoute = nextUrl.pathname.startsWith('/api/auth');
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL('/dashboard', nextUrl));
    }
    return null;
  }

  if (!isLoggedIn) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl));
  }

  return null;
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
};
