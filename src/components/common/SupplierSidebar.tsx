'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ClipboardList, Package } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/supplier/dashboard', label: '대시보드', icon: LayoutDashboard },
  { href: '/supplier/orders', label: '수주 관리', icon: ClipboardList },
  { href: '/supplier/products', label: '상품 관리', icon: Package },
];

export function SupplierSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 border-r bg-white shrink-0">
      <nav className="flex flex-col gap-1 p-3">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
              pathname === href || pathname.startsWith(href + '/')
                ? 'bg-green-50 text-green-700'
                : 'text-gray-600 hover:bg-gray-100'
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
