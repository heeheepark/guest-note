import { useState } from "react";
import GuestNoteLogo from "../components/GuestNoteLogo";

function CheckIn() {
  const [name, setName] = useState("");
  const [side, setSide] = useState("groom"); // groom | bride
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    // TODO: 참석자 등록 API 연결
    // name + side 전송

    setCompleted(true);

    setTimeout(() => {
      setName("");
      setCompleted(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 to-blue-400 px-4">
      <div
        className="
          w-full max-w-xl
          rounded-[40px]
          bg-white/30
          backdrop-blur-xl
          shadow-2xl
          border border-white/20
          px-10 py-12
        "
      >
        {!completed ? (
          <div className="flex flex-col items-center text-center">
            {/* 로고 */}
            <div className="mb-6">
              <GuestNoteLogo width={220} />
            </div>

            {/* 안내 문구 */}
            <h1 className="text-4xl font-bold text-slate-900 leading-snug">
              성함을 입력해주세요
            </h1>

            <p className="mt-4 text-lg text-slate-500">
              신랑 · 신부의 소중한 날을 함께 기록합니다
            </p>

            {/* 신랑측 / 신부측 선택 */}
            <div className="mt-10 flex w-full rounded-3xl bg-white/40 p-2 shadow-md">
              <button
                type="button"
                onClick={() => setSide("groom")}
                className={`
                  flex-1
                  h-16
                  rounded-2xl
                  text-xl
                  font-bold
                  transition
                  ${
                    side === "groom"
                      ? "bg-sky-400 text-white shadow-lg"
                      : "text-slate-500"
                  }
                `}
              >
                🤵 신랑측
              </button>

              <button
                type="button"
                onClick={() => setSide("bride")}
                className={`
                  flex-1
                  h-16
                  rounded-2xl
                  text-xl
                  font-bold
                  transition
                  ${
                    side === "bride"
                      ? "bg-pink-300 text-white shadow-lg"
                      : "text-slate-500"
                  }
                `}
              >
                👰 신부측
              </button>
            </div>

            {/* 입력 폼 */}
            <form
              onSubmit={handleSubmit}
              className="w-full mt-8 flex flex-col gap-6"
            >
              <input
                type="text"
                value={name}
                autoFocus
                onChange={(e) => setName(e.target.value)}
                placeholder="예: 홍길동"
                className="
                  w-full
                  h-24
                  rounded-3xl
                  bg-white/80
                  border border-white/50
                  shadow-lg
                  px-8
                  text-center
                  text-3xl
                  font-semibold
                  text-slate-800
                  placeholder:text-slate-400
                  focus:outline-none
                  focus:ring-4
                  focus:ring-sky-200
                  transition
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  h-20
                  rounded-3xl
                  bg-[#FEE500]
                  text-black
                  text-2xl
                  font-bold
                  shadow-lg
                  hover:brightness-95
                  active:scale-[0.99]
                  transition
                "
              >
                참석 등록하기
              </button>
            </form>
          </div>
        ) : (
          /* 완료 화면 */
          <div className="flex flex-col items-center justify-center text-center py-16">
            <div className="text-6xl mb-6">
              {side === "groom" ? "🤵" : "👰"}
            </div>

            <p className="text-lg text-slate-500 mb-2">
              {side === "groom" ? "신랑측" : "신부측"}
            </p>

            <h2 className="text-4xl font-bold text-slate-900">
              {name}님
            </h2>

            <p className="mt-4 text-2xl text-slate-600">
              참석이 등록되었습니다
            </p>

            <p className="mt-3 text-lg text-slate-400">
              참석해주셔서 감사합니다
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckIn;