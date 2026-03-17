'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Building2,
  Users,
  List,
  ClipboardList,
  AlertCircle,
  CalendarDays,
  ReceiptText,
  FileText,
  UserSearch,
  BarChart2,
  Megaphone,
  MessageSquare,
  Camera,
  HelpCircle,
  MessageCircle,
  Smartphone,
  Mail,
  ScrollText,
  ShieldAlert,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navSections = [
  {
    title: '수발주메뉴',
    items: [
      { href: '/orders/headquarters', label: '본부발주',        icon: Building2 },
      { href: '/orders/members',      label: '회원간발주',      icon: Users },
      { href: '/orders',              label: '전체발주리스트',  icon: List },
      { href: '/received-orders',     label: '전체수주리스트',  icon: ClipboardList },
      { href: '/orders/unconfirmed',  label: '주문미확인리스트', icon: AlertCircle },
      { href: '/orders/schedule',     label: '수발주일정표',    icon: CalendarDays },
    ],
  },
  {
    title: '통계메뉴',
    items: [
      { href: '/stats/settlement',    label: '정산내역',        icon: ReceiptText },
      { href: '/stats/invoice',       label: '계산서 발행내역', icon: FileText },
      { href: '/stats/members',       label: '회원검색',        icon: UserSearch },
      { href: '/stats/ranking',       label: '수발주순위',      icon: BarChart2 },
    ],
  },
  {
    title: '게시판',
    items: [
      { href: '/board/notices',       label: '공지사항',        icon: Megaphone },
      { href: '/board/community',     label: '회원게시판',      icon: MessageSquare },
      { href: '/board/photos',        label: '배송사진방',      icon: Camera },
      { href: '/board/qna',           label: '질문과 답변',     icon: HelpCircle },
    ],
  },
  {
    title: '기타메뉴',
    items: [
      { href: '/etc/sms',             label: 'SMS 관리',        icon: Smartphone },
      { href: '/etc/messages',        label: '쪽지관리',        icon: Mail },
      { href: '/etc/terms',           label: '회원약관',        icon: ScrollText },
      { href: '/etc/claims',          label: '클레임규정',      icon: ShieldAlert },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <aside className="w-52 border-r border-rose-100 bg-white shrink-0 overflow-y-auto">
      <nav className="flex flex-col gap-3 p-3 pt-4">
        {navSections.map((section) => (
          <div key={section.title}>
            <div className="px-3 py-1.5 mb-1 bg-rose-50 border-l-4 border-rose-400 rounded-r-md">
              <p className="text-xs font-bold text-rose-500 tracking-wide">
                {section.title}
              </p>
            </div>
            <div className="flex flex-col gap-0.5">
              {section.items.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'flex items-center gap-2.5 px-2 py-1.5 rounded-md text-sm transition-colors',
                    isActive(href)
                      ? 'bg-rose-50 text-rose-600 font-medium'
                      : 'text-gray-500 hover:bg-rose-50 hover:text-rose-500'
                  )}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
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
