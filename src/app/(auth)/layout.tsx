export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* 왼쪽 브랜드 패널 */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-rose-400 via-pink-400 to-fuchsia-400 flex-col justify-between p-12 text-white relative overflow-hidden">
        {/* 배경 꽃 장식 */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <span className="absolute top-8 right-12 text-7xl opacity-20">🌸</span>
          <span className="absolute top-1/3 right-4 text-5xl opacity-15">🌺</span>
          <span className="absolute bottom-1/3 right-16 text-6xl opacity-20">🌷</span>
          <span className="absolute bottom-10 right-6 text-4xl opacity-15">🌼</span>
          <span className="absolute top-1/2 left-4 text-3xl opacity-10">🌻</span>
        </div>

        <div className="flex items-center gap-2 relative">
          <span className="text-3xl">🌸</span>
          <span className="text-2xl font-bold tracking-tight">BloomLink</span>
        </div>

        <div className="relative">
          <h1 className="text-4xl font-bold leading-snug mb-4">
            화환 수발주의<br />새로운 기준
          </h1>
          <p className="text-pink-100 text-lg leading-relaxed">
            공급자와 주문자를 직접 연결하는<br />
            스마트 화환 플랫폼입니다.
          </p>
        </div>

        <div className="flex gap-8 text-pink-100 text-sm relative">
          <div>
            <p className="text-2xl font-bold text-white">500+</p>
            <p>등록 꽃집</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">12,000+</p>
            <p>누적 주문</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">98%</p>
            <p>배송 완료율</p>
          </div>
        </div>
      </div>

      {/* 오른쪽 폼 영역 */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-rose-50">
        <div className="w-full max-w-sm">
          {/* 모바일 로고 */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <span className="text-2xl">🌸</span>
            <span className="text-xl font-bold text-rose-500">BloomLink</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
