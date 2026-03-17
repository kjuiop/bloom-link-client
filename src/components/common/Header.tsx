'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const quickMenus = [
  { href: '/orders/headquarters', label: '본부발주' },
  { href: '/orders/members',      label: '회원간발주' },
  { href: '/received-orders',     label: '수주조회' },
  { href: '/orders',              label: '발주조회' },
  { href: '/stats/settlement',    label: '정산조회' },
  { href: '/board/photos',        label: '사진방' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-rose-100 bg-white shrink-0">
      {/* 상단 바 */}
      <div className="h-14 flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg">🌸</span>
          <span className="font-bold text-lg text-rose-500">BloomLink</span>
        </Link>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-rose-500 hover:bg-rose-50">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-rose-500 hover:bg-rose-50">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* 퀵 메뉴 바 */}
      <div className="h-10 bg-rose-500 flex items-center px-6 gap-1">
        {quickMenus.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'px-4 h-full flex items-center text-sm font-medium transition-colors',
              pathname === href || pathname.startsWith(href + '/')
                ? 'bg-white text-rose-500'
                : 'text-rose-100 hover:bg-rose-400 hover:text-white'
            )}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}
