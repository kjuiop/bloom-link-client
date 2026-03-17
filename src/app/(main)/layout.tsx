import { Header } from '@/components/common/Header';
import { Sidebar } from '@/components/common/Sidebar';
import { QuickMenuBar } from '@/components/common/QuickMenuBar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-rose-50/30">
      <Header />
      <div className="flex flex-1">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <QuickMenuBar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}
