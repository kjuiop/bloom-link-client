'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const quickMenus = [
  { href: '/orders/headquarters', label: '본부발주' },
  { href: '/orders/members',      label: '회원간발주' },
  { href: '/received-orders',     label: '수주조회' },
  { href: '/orders',              label: '발주조회' },
  { href: '/stats/settlement',    label: '정산조회' },
  { href: '/board/photos',        label: '사진방' },
];

export function QuickMenuBar() {
  const pathname = usePathname();

  return (
    <div className="border-b border-rose-100 bg-white px-4 md:px-6 overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-1">
        {quickMenus.map(({ href, label }) => {
          const active = pathname === href || pathname.startsWith(href + '/');
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'relative px-4 py-3 text-[15px] font-bold whitespace-nowrap transition-colors shrink-0',
                active
                  ? 'text-rose-500'
                  : 'text-gray-500 hover:text-rose-400'
              )}
            >
              {label}
              {active && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
