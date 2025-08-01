import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IconArrowRight, IconLayoutDashboard, IconShield, IconStar } from '@tabler/icons-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <IconLayoutDashboard className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Admin Dashboard</span>
            </div>
            <Link href="/admin/login">
              <Button variant="outline" className="gap-2">
                <IconShield className="h-4 w-4" />
                Admin Login
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="gap-2">
              <IconStar className="h-3 w-3" />
              Next.js 15 Dashboard
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Modern Admin
              <span className="text-primary block">Dashboard</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A powerful and intuitive admin dashboard built with Next.js 15, 
              featuring modern UI components and comprehensive management tools.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admin/login">
              <Button size="lg" className="gap-2">
                Access Dashboard
                <IconArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Kiranism/next-shadcn-dashboard-starter" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <Card className="text-center">
            <CardHeader>
              <IconLayoutDashboard className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Comprehensive Dashboard</CardTitle>
              <CardDescription>
                Complete overview with analytics, charts, and key metrics
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <IconShield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Secure Access</CardTitle>
              <CardDescription>
                Protected admin area with authentication and role-based access
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <IconStar className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Modern UI</CardTitle>
              <CardDescription>
                Built with shadcn/ui components and Tailwind CSS for a premium experience
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Demo Credentials */}
        <Card className="mt-16 max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Demo Credentials</CardTitle>
            <CardDescription className="text-center">
              Use these credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="font-medium">Username:</span>
              <code className="bg-background px-2 py-1 rounded text-sm">admin</code>
            </div>
            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="font-medium">Password:</span>
              <code className="bg-background px-2 py-1 rounded text-sm">admin123</code>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Admin Dashboard. Built with Next.js and shadcn/ui.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
