export default function EditProductPage({ params }: { params: { id: string } }) {
  return <div className="p-6"><h1 className="text-2xl font-bold">상품 수정 #{params.id}</h1></div>;
}
