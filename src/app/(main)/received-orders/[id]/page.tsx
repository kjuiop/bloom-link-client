export default function ReceivedOrderDetailPage({ params }: { params: { id: string } }) {
  return <div className="p-6"><h1 className="text-2xl font-bold">수주 상세 #{params.id}</h1></div>;
}
