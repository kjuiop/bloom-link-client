import Link from 'next/link';
import { ArrowRight, TrendingUp, TrendingDown, CheckSquare, Printer, ImageIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock 데이터
const statCards = [
  { label: '오늘 신규 수주',    value: '12건',  sub: '어제보다 +3건',     trend: 'up' },
  { label: '오늘 배송 예정',    value: '8건',   sub: '3시간 내 2건',      trend: 'up' },
  { label: '처리 대기 수주',    value: '5건',   sub: '즉시 확인 필요',    trend: 'down' },
  { label: '이번 달 발주/수주', value: '64/89', sub: '발주 64 · 수주 89', trend: 'up' },
];

const orders = [
  {
    id: 'ORD-0241',
    confirmed: true,
    receivedDate: '26-03-17 14:02',
    deliveryDate: '26-03-18 12시 예식',
    supplier: '한강꽃집',
    product: '근조화환 3단',
    address: '서울 강남구 테헤란로 123',
    sender: '홍길동',
    originalPrice: '150,000',
    orderPrice: '130,000',
    faxSent: true,
    deliveryStatus: '배송 중',
    hasPhoto: true,
    recipient: '김철수',
  },
  {
    id: 'ORD-0240',
    confirmed: true,
    receivedDate: '26-03-17 11:30',
    deliveryDate: '26-03-17 15시 입장',
    supplier: '서울플라워',
    product: '축하화환 2단',
    address: '서울 송파구 올림픽로 300',
    sender: '이영희',
    originalPrice: '120,000',
    orderPrice: '100,000',
    faxSent: true,
    deliveryStatus: '확인 완료',
    hasPhoto: false,
    recipient: '',
  },
  {
    id: 'ORD-0239',
    confirmed: false,
    receivedDate: '26-03-17 09:15',
    deliveryDate: '26-03-19 10시',
    supplier: '미소꽃집',
    product: '개업화환 1단',
    address: '서울 마포구 합정동 45',
    sender: '박민준',
    originalPrice: '90,000',
    orderPrice: '80,000',
    faxSent: false,
    deliveryStatus: '접수 대기',
    hasPhoto: false,
    recipient: '',
  },
  {
    id: 'ORD-0238',
    confirmed: true,
    receivedDate: '26-03-16 16:44',
    deliveryDate: '26-03-17 11시 발인',
    supplier: '한강꽃집',
    product: '근조화환 2단',
    address: '서울 용산구 이태원로 200',
    sender: '최수진',
    originalPrice: '130,000',
    orderPrice: '110,000',
    faxSent: true,
    deliveryStatus: '완료',
    hasPhoto: true,
    recipient: '이민호',
  },
  {
    id: 'ORD-0237',
    confirmed: true,
    receivedDate: '26-03-16 08:59',
    deliveryDate: '26-03-16 13시 졸업식',
    supplier: '서울플라워',
    product: '졸업화환',
    address: '서울 노원구 공릉동 172',
    sender: '정다은',
    originalPrice: '80,000',
    orderPrice: '70,000',
    faxSent: true,
    deliveryStatus: '완료',
    hasPhoto: true,
    recipient: '강지훈',
  },
];

const receivedOrders = [
  {
    id: 'RCV-0183',
    confirmed: false,
    receivedDate: '26-03-17 13:05',
    deliveryDate: '26-03-18 10시 발인',
    supplier: '강남꽃도매',
    product: '근조화환 3단',
    address: '서울 강남구 선릉로 100',
    sender: '오세훈',
    originalPrice: '150,000',
    orderPrice: '130,000',
    faxSent: false,
    deliveryStatus: '접수 대기',
    hasPhoto: false,
    recipient: '',
  },
  {
    id: 'RCV-0182',
    confirmed: true,
    receivedDate: '26-03-17 10:22',
    deliveryDate: '26-03-17 14시 예식',
    supplier: '종로화원',
    product: '축하화환 1단',
    address: '서울 종로구 인사동 50',
    sender: '윤서연',
    originalPrice: '100,000',
    orderPrice: '85,000',
    faxSent: true,
    deliveryStatus: '제작 중',
    hasPhoto: false,
    recipient: '',
  },
  {
    id: 'RCV-0181',
    confirmed: true,
    receivedDate: '26-03-17 08:47',
    deliveryDate: '26-03-17 11시 개업',
    supplier: '강남꽃도매',
    product: '개업화환 2단',
    address: '서울 서초구 방배동 88',
    sender: '임재원',
    originalPrice: '120,000',
    orderPrice: '105,000',
    faxSent: true,
    deliveryStatus: '배송 중',
    hasPhoto: false,
    recipient: '',
  },
  {
    id: 'RCV-0180',
    confirmed: true,
    receivedDate: '26-03-16 15:11',
    deliveryDate: '26-03-16 18시 발인',
    supplier: '종로화원',
    product: '근조화환 1단',
    address: '서울 중구 을지로 55',
    sender: '한가람',
    originalPrice: '90,000',
    orderPrice: '78,000',
    faxSent: true,
    deliveryStatus: '완료',
    hasPhoto: true,
    recipient: '김도현',
  },
  {
    id: 'RCV-0179',
    confirmed: true,
    receivedDate: '26-03-16 09:03',
    deliveryDate: '26-03-16 13시 졸업식',
    supplier: '강남꽃도매',
    product: '졸업화환',
    address: '서울 성북구 안암동 5',
    sender: '배준혁',
    originalPrice: '80,000',
    orderPrice: '68,000',
    faxSent: true,
    deliveryStatus: '완료',
    hasPhoto: true,
    recipient: '송나영',
  },
];

const deliveryStatusColor: Record<string, string> = {
  '접수 대기': 'bg-yellow-100 text-yellow-700',
  '확인 완료': 'bg-blue-100 text-blue-700',
  '제작 중':   'bg-purple-100 text-purple-700',
  '배송 중':   'bg-orange-100 text-orange-700',
  '완료':      'bg-green-100 text-green-700',
  '취소':      'bg-gray-100 text-gray-400',
};

type Order = typeof orders[number];

function OrderTable({ data }: { data: Order[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs min-w-[900px]">
        <thead>
          <tr className="bg-rose-100 text-gray-900">
            <th className="px-3 py-2.5 text-center text-[13px] font-bold border-b border-rose-200 whitespace-nowrap">주문번호</th>
            <th className="px-3 py-2.5 text-center text-[13px] font-bold border-b border-rose-200 whitespace-nowrap">확인</th>
            <th className="px-3 py-2.5 text-center text-[13px] font-bold border-b border-rose-200 whitespace-nowrap leading-5">
              주문접수일<br />배송요구일
            </th>
            <th className="px-3 py-2.5 text-center text-[13px] font-bold border-b border-rose-200 whitespace-nowrap">수주화원</th>
            <th className="px-3 py-2.5 text-center text-[13px] font-bold border-b border-rose-200 whitespace-nowrap leading-5">
              상품명<br />배송지<br />보내는분
            </th>
            <th className="px-3 py-2.5 text-center text-[13px] font-bold border-b border-rose-200 whitespace-nowrap leading-5">
              원청금액<br />발주금액
            </th>
            <th className="px-3 py-2.5 text-center text-[13px] font-bold border-b border-rose-200 whitespace-nowrap">팩스전송</th>
            <th className="px-3 py-2.5 text-center text-[13px] font-bold border-b border-rose-200 whitespace-nowrap">배송현황</th>
            <th className="px-3 py-2.5 text-center text-[13px] font-bold border-b border-rose-200 whitespace-nowrap leading-5">
              배송사진<br />인수자
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((order, i) => (
            <tr key={order.id} className={`border-b-2 border-gray-200 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
              <td className="px-3 py-2.5 text-center text-gray-500 whitespace-nowrap">{order.id}</td>
              <td className="px-3 py-2.5 text-center">
                <CheckSquare className={`h-4 w-4 mx-auto ${order.confirmed ? 'text-rose-400' : 'text-gray-200'}`} />
              </td>
              <td className="px-3 py-2.5 text-center whitespace-nowrap">
                <p>{order.receivedDate}</p>
                <p className="text-rose-400 font-medium">{order.deliveryDate}</p>
              </td>
              <td className="px-3 py-2.5 text-center font-medium text-gray-700 whitespace-nowrap">{order.supplier}</td>
              <td className="px-3 py-2.5">
                <p className="font-medium text-gray-800">{order.product}</p>
                <p className="text-gray-400 truncate max-w-[160px]">{order.address}</p>
                <p className="text-gray-500">{order.sender}</p>
              </td>
              <td className="px-3 py-2.5 text-center whitespace-nowrap">
                <p className="text-gray-400 line-through">{order.originalPrice}</p>
                <p className="font-semibold text-gray-700">{order.orderPrice}</p>
              </td>
              <td className="px-3 py-2.5 text-center">
                <Printer className={`h-4 w-4 mx-auto ${order.faxSent ? 'text-blue-400' : 'text-gray-200'}`} />
              </td>
              <td className="px-3 py-2.5 text-center">
                <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${deliveryStatusColor[order.deliveryStatus] ?? 'bg-gray-100 text-gray-500'}`}>
                  {order.deliveryStatus}
                </span>
              </td>
              <td className="px-3 py-2.5 text-center whitespace-nowrap">
                <ImageIcon className={`h-4 w-4 mx-auto ${order.hasPhoto ? 'text-green-400' : 'text-gray-200'}`} />
                {order.recipient && <p className="text-gray-500 mt-0.5">{order.recipient}</p>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OrderMobileList({ data }: { data: Order[] }) {
  return (
    <div className="flex flex-col divide-y divide-gray-50">
      {data.map((order) => (
        <div key={order.id} className="py-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-800 text-sm">{order.product}</p>
              <p className="text-xs text-gray-400 truncate">{order.address}</p>
              <p className="text-xs text-gray-500 mt-0.5">{order.supplier} · {order.sender}</p>
              <p className="text-xs text-gray-400 mt-0.5">배송요구일 <span className="text-rose-400 font-medium">{order.deliveryDate}</span></p>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${deliveryStatusColor[order.deliveryStatus] ?? 'bg-gray-100 text-gray-500'}`}>
                {order.deliveryStatus}
              </span>
              <p className="text-xs font-semibold text-gray-700">{order.orderPrice}원</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* 통계 카드 */}
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

      {/* 발주 목록 */}
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
          <div className="md:hidden"><OrderMobileList data={orders} /></div>
          <div className="hidden md:block"><OrderTable data={orders} /></div>
        </CardContent>
      </Card>

      {/* 수주 목록 */}
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
          <div className="md:hidden"><OrderMobileList data={receivedOrders} /></div>
          <div className="hidden md:block"><OrderTable data={receivedOrders} /></div>
        </CardContent>
      </Card>
    </div>
  );
}
