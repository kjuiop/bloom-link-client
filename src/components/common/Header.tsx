'use client';

import Link from 'next/link';
import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="h-14 border-b border-rose-100 bg-white flex items-center justify-between px-6 shrink-0">
      <Link href="/dashboard" className="flex items-center gap-2">
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
    </header>
  );
}
