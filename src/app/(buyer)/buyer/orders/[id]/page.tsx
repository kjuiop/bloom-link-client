export default function BuyerOrderDetailPage({ params }: { params: { id: string } }) {
  return <div className="p-6"><h1 className="text-2xl font-bold">주문 상세 #{params.id}</h1></div>;
}
