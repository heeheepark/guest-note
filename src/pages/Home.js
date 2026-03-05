import EventoryLogo from "../components/EventoryLogo";
import "../css/home.css";
import { Mail, Lock } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 to-blue-400">
      <div className="backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-xl w-96">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="mb-1 text-center">
            <EventoryLogo size={200} />
          </div>
          <div id="descWrap">
            <h2 className="text-xl font-semibold text-gray-800">
              당신의 소중한 날을 더 편리하게
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              방명록부터 정산까지, 이벤토리에서 한 번에!
            </p>
          </div>
          <div id="loginWrap" className="space-y-4 mt-4 w-full">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-gray-300 
                       pl-10 pr-4 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-400 
                       focus:border-blue-400 transition"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border border-gray-300 
                       pl-10 pr-4 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-400 
                       focus:border-blue-400 transition"
              />
            </div>

            {/* 로그인 버튼 */}
            <button
              className="w-full bg-black text-white rounded-xl py-2.5 text-sm 
                           font-medium hover:bg-gray-800 transition"
            >
              로그인
            </button>

            {/* 회원가입 / 비밀번호 찾기 */}
            <div className="flex justify-between text-xs text-gray-500">
              <button className="hover:text-gray-700 transition">
                회원가입
              </button>
              <button className="hover:text-gray-700 transition">
                비밀번호 찾기
              </button>
            </div>

            {/* 구분선 */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400">또는</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* 카카오 로그인 */}
            <button
              className="w-full bg-[#FEE500] text-black rounded-xl py-2.5 
                           text-sm font-medium flex items-center 
                           justify-center gap-2 hover:brightness-95 transition"
            >
              {/* 카카오 아이콘 */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
                <path d="M12 3C6.48 3 2 6.58 2 10.87c0 2.72 1.92 5.1 4.83 6.5l-1.01 3.7c-.09.33.28.6.57.41l4.33-2.86c.42.04.85.06 1.28.06 5.52 0 10-3.58 10-7.87S17.52 3 12 3z" />
              </svg>
              카카오로 로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
