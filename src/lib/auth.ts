import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';
const AUTH_COOKIE = 'admin_auth';

export async function validateCredentials(username: string, password: string): Promise<boolean> {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export async function setAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE, 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7 // 7 days
  });
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE);
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE)?.value === 'authenticated';
}

export async function requireAuth() {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    redirect('/admin/login');
  }
}