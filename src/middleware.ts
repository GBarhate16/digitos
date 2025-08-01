import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';

const isProtectedRoute = (pathname: string) => {
  return pathname.startsWith('/admin/dashboard');
};

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isProtectedRoute(pathname)) {
    const authenticated = await isAuthenticated();
    
    if (!authenticated) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)'
  ]
};
