import { SupplierSidebar } from '@/components/common/SupplierSidebar';
import { Header } from '@/components/common/Header';

export default function SupplierLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <SupplierSidebar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
