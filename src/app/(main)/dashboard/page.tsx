import Link from 'next/link';
import { ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock 데이터
const statCards = [
  { label: '오늘 신규 수주',      value: '12건',   sub: '어제보다 +3건',   trend: 'up' },
  { label: '오늘 배송 예정',      value: '8건',    sub: '3시간 내 2건',    trend: 'up' },
  { label: '처리 대기 수주',      value: '5건',    sub: '즉시 확인 필요',  trend: 'down' },
  { label: '이번 달 발주/수주',   value: '64/89',  sub: '발주 64 · 수주 89', trend: 'up' },
];

const recentOrders = [
  { id: 'ORD-0241', product: '근조화환 3단', partner: '한강꽃집', date: '03.17 14:00', status: 'DELIVERING' },
  { id: 'ORD-0240', product: '축하화환 2단', partner: '서울플라워', date: '03.17 11:30', status: 'CONFIRMED' },
  { id: 'ORD-0239', product: '개업화환 1단', partner: '미소꽃집',  date: '03.17 09:00', status: 'DELIVERED' },
  { id: 'ORD-0238', product: '근조화환 2단', partner: '한강꽃집',  date: '03.16 16:00', status: 'DELIVERED' },
  { id: 'ORD-0237', product: '졸업화환',     partner: '서울플라워', date: '03.16 10:00', status: 'CANCELLED' },
];

const recentReceived = [
  { id: 'RCV-0183', product: '근조화환 3단', partner: '강남꽃도매', date: '03.17 13:00', status: 'PENDING' },
  { id: 'RCV-0182', product: '축하화환 1단', partner: '종로화원',   date: '03.17 10:00', status: 'PREPARING' },
  { id: 'RCV-0181', product: '개업화환 2단', partner: '강남꽃도매', date: '03.17 08:30', status: 'DELIVERING' },
  { id: 'RCV-0180', product: '근조화환 1단', partner: '종로화원',   date: '03.16 15:00', status: 'DELIVERED' },
  { id: 'RCV-0179', product: '졸업화환',     partner: '강남꽃도매', date: '03.16 09:00', status: 'DELIVERED' },
];

const statusMap: Record<string, { label: string; color: string }> = {
  PENDING:    { label: '접수 대기', color: 'bg-yellow-100 text-yellow-700' },
  CONFIRMED:  { label: '확인 완료', color: 'bg-blue-100 text-blue-700' },
  PREPARING:  { label: '제작 중',   color: 'bg-purple-100 text-purple-700' },
  DELIVERING: { label: '배송 중',   color: 'bg-orange-100 text-orange-700' },
  DELIVERED:  { label: '완료',      color: 'bg-green-100 text-green-700' },
  CANCELLED:  { label: '취소',      color: 'bg-gray-100 text-gray-500' },
};

export default function DashboardPage() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* 통계 카드 - 모바일 2열 / 데스크톱 4열 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {statCards.map(({ label, value, sub, trend }) => (
          <Card key={label} className="border-rose-100 shadow-none">
            <CardContent className="p-4 md:p-5">
              <p className="text-xs md:text-sm text-gray-500 mb-1">{label}</p>
              <p className="text-xl md:text-2xl font-bold text-gray-800">{value}</p>
              <div className="flex items-center gap-1 mt-1">
                {trend === 'up'
                  ? <TrendingUp className="h-3 w-3 text-rose-400" />
                  : <TrendingDown className="h-3 w-3 text-gray-400" />}
                <p className="text-[11px] md:text-xs text-gray-400">{sub}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 목록 - 모바일 1열 / 데스크톱 2열 */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">

        {/* 최근 발주 목록 */}
        <Card className="border-rose-100 shadow-none">
          <CardHeader className="pb-3 px-4 md:px-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold text-gray-700">3월 발주 목록</CardTitle>
              <Link href="/orders" className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-500">
                전체보기 <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </CardHeader>
          <CardContent className="px-4 md:px-6 pb-4">
            {/* 모바일: 카드형 */}
            <div className="flex flex-col gap-2 md:hidden">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-gray-700">{order.product}</p>
                    <p className="text-xs text-gray-400">{order.partner} · {order.date}</p>
                  </div>
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusMap[order.status].color}`}>
                    {statusMap[order.status].label}
                  </span>
                </div>
              ))}
            </div>
            {/* 데스크톱: 테이블형 */}
            <div className="hidden md:block">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-gray-400 border-b border-gray-100">
                    <th className="text-left pb-2 font-medium">주문번호</th>
                    <th className="text-left pb-2 font-medium">상품</th>
                    <th className="text-left pb-2 font-medium">거래처</th>
                    <th className="text-left pb-2 font-medium">상태</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-50 last:border-0">
                      <td className="py-2.5 text-gray-500 text-xs">{order.id}</td>
                      <td className="py-2.5 font-medium text-gray-700">{order.product}</td>
                      <td className="py-2.5 text-gray-500">{order.partner}</td>
                      <td className="py-2.5">
                        <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusMap[order.status].color}`}>
                          {statusMap[order.status].label}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 최근 수주 목록 */}
        <Card className="border-rose-100 shadow-none">
          <CardHeader className="pb-3 px-4 md:px-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold text-gray-700">3월 수주 목록</CardTitle>
              <Link href="/received-orders" className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-500">
                전체보기 <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </CardHeader>
          <CardContent className="px-4 md:px-6 pb-4">
            {/* 모바일: 카드형 */}
            <div className="flex flex-col gap-2 md:hidden">
              {recentReceived.map((order) => (
                <div key={order.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-gray-700">{order.product}</p>
                    <p className="text-xs text-gray-400">{order.partner} · {order.date}</p>
                  </div>
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusMap[order.status].color}`}>
                    {statusMap[order.status].label}
                  </span>
                </div>
              ))}
            </div>
            {/* 데스크톱: 테이블형 */}
            <div className="hidden md:block">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-gray-400 border-b border-gray-100">
                    <th className="text-left pb-2 font-medium">주문번호</th>
                    <th className="text-left pb-2 font-medium">상품</th>
                    <th className="text-left pb-2 font-medium">거래처</th>
                    <th className="text-left pb-2 font-medium">상태</th>
                  </tr>
                </thead>
                <tbody>
                  {recentReceived.map((order) => (
                    <tr key={order.id} className="border-b border-gray-50 last:border-0">
                      <td className="py-2.5 text-gray-500 text-xs">{order.id}</td>
                      <td className="py-2.5 font-medium text-gray-700">{order.product}</td>
                      <td className="py-2.5 text-gray-500">{order.partner}</td>
                      <td className="py-2.5">
                        <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusMap[order.status].color}`}>
                          {statusMap[order.status].label}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
