'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ShoppingCart, List, Store } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/buyer/dashboard', label: '대시보드', icon: LayoutDashboard },
  { href: '/buyer/orders/new', label: '주문하기', icon: ShoppingCart },
  { href: '/buyer/orders', label: '내 주문', icon: List },
  { href: '/buyer/suppliers', label: '꽃집 찾기', icon: Store },
];

export function BuyerSidebar() {
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
