'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

type BreadcrumbItem = {
  title: string;
  link: string;
};

// This allows to add custom title as well
const routeMapping: Record<string, BreadcrumbItem[]> = {
  '/admin/dashboard': [{ title: 'Dashboard', link: '/admin/dashboard' }],
  '/admin/dashboard/overview': [
    { title: 'Dashboard', link: '/admin/dashboard' },
    { title: 'Overview', link: '/admin/dashboard/overview' }
  ],
  '/admin/dashboard/product': [
    { title: 'Dashboard', link: '/admin/dashboard' },
    { title: 'Product', link: '/admin/dashboard/product' }
  ],
  '/admin/dashboard/kanban': [
    { title: 'Dashboard', link: '/admin/dashboard' },
    { title: 'Kanban', link: '/admin/dashboard/kanban' }
  ],
  '/admin/dashboard/profile': [
    { title: 'Dashboard', link: '/admin/dashboard' },
    { title: 'Profile', link: '/admin/dashboard/profile' }
  ]
  // Add more custom mappings as needed
};

export function useBreadcrumbs() {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    // Check if we have a custom mapping for this exact path
    if (routeMapping[pathname]) {
      return routeMapping[pathname];
    }

    // If no exact match, fall back to generating breadcrumbs from the path
    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        link: path
      };
    });
  }, [pathname]);

  return breadcrumbs;
}
