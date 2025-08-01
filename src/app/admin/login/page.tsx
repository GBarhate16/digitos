import { isAuthenticated } from '@/lib/auth';
import { redirect } from 'next/navigation';
import LoginForm from '@/components/auth/login-form';

export const metadata = {
  title: 'Admin Login',
  description: 'Login to access the admin dashboard'
};

export default async function AdminLoginPage() {
  const authenticated = await isAuthenticated();
  
  if (authenticated) {
    redirect('/admin/dashboard');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <LoginForm />
    </div>
  );
}