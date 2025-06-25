import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow /admin/login and /api/auth routes
  if (
    pathname === '/admin/login' ||
    pathname === '/admin/login/' ||
    pathname.startsWith('/api/auth')
  ) {
    return NextResponse.next();
  }

  // TEMPORARILY DISABLED - Only protect /admin and /admin/* (but not /admin/login)
  // if (
  //   pathname === '/admin' ||
  //   (pathname.startsWith('/admin/') && pathname !== '/admin/login' && pathname !== '/admin/login/')
  // ) {
  //   const token =
  //     request.cookies.get('next-auth.session-token') ||
  //     request.cookies.get('__Secure-next-auth.session-token');
  //   if (!token) {
  //     const loginUrl = new URL('/admin/login', request.url);
  //     return NextResponse.redirect(loginUrl);
  //   }
  // }

  return NextResponse.next();
}

// COMPLETELY DISABLED - No middleware will run
// export const config = {
//   matcher: [
//     '/admin',
//     '/admin/:path*'
//   ]
// }; 