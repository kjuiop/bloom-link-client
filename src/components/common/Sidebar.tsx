'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  SendHorizonal,
  List,
  ClipboardList,
  Package,
  Users,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navSections = [
  {
    items: [
      { href: '/dashboard', label: '대시보드', icon: LayoutDashboard },
    ],
  },
  {
    title: '발주관리',
    items: [
      { href: '/orders/new', label: '발주하기', icon: SendHorizonal },
      { href: '/orders', label: '발주 목록', icon: List },
    ],
  },
  {
    title: '수주관리',
    items: [
      { href: '/received-orders', label: '수주 목록', icon: ClipboardList },
    ],
  },
  {
    title: '설정',
    items: [
      { href: '/products', label: '상품 관리', icon: Package },
      { href: '/members', label: '거래처', icon: Users },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== '/dashboard' && pathname.startsWith(href));

  return (
    <aside className="w-56 border-r border-rose-100 bg-white shrink-0 flex flex-col">
      <nav className="flex flex-col gap-4 p-3 pt-4">
        {navSections.map((section, i) => (
          <div key={i}>
            {section.title && (
              <p className="px-3 mb-1 text-[11px] font-semibold text-rose-300 uppercase tracking-wider">
                {section.title}
              </p>
            )}
            <div className="flex flex-col gap-0.5">
              {section.items.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive(href)
                      ? 'bg-rose-50 text-rose-600'
                      : 'text-gray-500 hover:bg-rose-50 hover:text-rose-500'
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
