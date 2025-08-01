import PageContainer from '@/components/layout/page-container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IconUser, IconShield } from '@tabler/icons-react';

export const metadata = {
  title: 'Admin Dashboard : Profile'
};

export default function ProfilePage() {
  return (
    <PageContainer>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Admin Profile</h2>
          <p className="text-muted-foreground">
            Manage your admin account settings and preferences.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <IconUser className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="flex items-center gap-2">
                  Administrator
                  <Badge variant="outline" className="gap-1">
                    <IconShield className="h-3 w-3" />
                    Admin
                  </Badge>
                </CardTitle>
                <CardDescription>
                  System Administrator Account
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Username</label>
                <p className="text-muted-foreground">admin</p>
              </div>
              <div>
                <label className="text-sm font-medium">Role</label>
                <p className="text-muted-foreground">System Administrator</p>
              </div>
              <div>
                <label className="text-sm font-medium">Access Level</label>
                <p className="text-muted-foreground">Full Access</p>
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <Badge variant="outline" className="w-fit">Active</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}