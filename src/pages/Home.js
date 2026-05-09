import GuestNoteLogo from "../components/GuestNoteLogo";
import "../css/home.css";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 to-blue-400 px-4">
      <div
        className="
          w-full max-w-md
          rounded-[36px]
          bg-white/30
          backdrop-blur-xl
          shadow-2xl
          px-8 py-8
          border border-white/20
        "
      >
        <div className="flex flex-col items-center text-center">
          {/* 로고 */}
          <div className="mb-2">
            <GuestNoteLogo size={170} />
          </div>

          {/* 메인 문구 */}
          <div className="mt-5">
            <h2 className="text-[24px] leading-tight font-bold text-slate-900">
              당신의 소중한 날을 더 편리하게
            </h2>

            <p className="mt-2 text-lg text-slate-500">
              참석자 관리부터 정산까지 한번에!
            </p>
          </div>

          {/* 일러스트 느낌 박스 */}
          <div className="mt-14 relative">
            <div
              className="
                w-36 h-36
                rounded-[28px]
                bg-gradient-to-b
                from-sky-100 to-sky-200
                shadow-lg
                rotate-[-8deg]
                flex items-center justify-center
              "
            >
              <div className="absolute top-6">
                <div className="w-10 h-10 rounded-full bg-pink-300 flex items-center justify-center shadow">
                  <span className="text-white text-lg">♥</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-10">
                <div className="w-16 h-2 rounded-full bg-white/80" />
                <div className="w-20 h-2 rounded-full bg-white/80" />
                <div className="w-14 h-2 rounded-full bg-white/80" />
              </div>
            </div>

            {/* 장식 하트 */}
            <div className="absolute -left-6 top-8 text-pink-300 text-2xl">
              ♥
            </div>

            <div className="absolute -right-4 bottom-6 text-pink-200 text-xl">
              ♥
            </div>
          </div>

          {/* 카카오 로그인 */}
          <button
            className="
              mt-14
              w-full
              h-16
              rounded-2xl
              bg-[#FEE500]
              text-black
              font-bold
              text-xl
              flex items-center justify-center gap-3
              shadow-lg
              hover:brightness-95
              active:scale-[0.99]
              transition
            "
          >
            {/* 카카오 아이콘 */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
              <path d="M12 3C6.48 3 2 6.58 2 10.87c0 2.72 1.92 5.1 4.83 6.5l-1.01 3.7c-.09.33.28.6.57.41l4.33-2.86c.42.04.85.06 1.28.06 5.52 0 10-3.58 10-7.87S17.52 3 12 3z" />
            </svg>

            카카오로 로그인
          </button>

          {/* 하단 문구 */}
          <div className="flex items-center gap-4 mt-10 w-full">
            <div className="flex-1 h-px bg-white/50" />

            <span className="text-sm text-slate-500 whitespace-nowrap">
              카카오 계정으로 간편하게 이용하세요
            </span>

            <div className="flex-1 h-px bg-white/50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;