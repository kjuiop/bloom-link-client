'use client';

import Link from 'next/link';
import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="h-14 border-b bg-white flex items-center justify-between px-6 shrink-0">
      <Link href="/" className="font-bold text-lg text-green-700">
        BloomLink
      </Link>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
