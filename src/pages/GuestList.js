import { useMemo, useState } from "react";
import {
  Search,
  Download,
  FileText,
  Pencil,
} from "lucide-react";

function GuestList() {
  const guests = [
    {
      id: 1,
      name: "김민수",
      side: "신랑측",
      amount: 100000,
      memo: "회사 동료",
      checkedInAt: "13:10",
    },
    {
      id: 2,
      name: "박서연",
      side: "신부측",
      amount: 50000,
      memo: "대학 친구",
      checkedInAt: "13:24",
    },
    {
      id: 3,
      name: "이준호",
      side: "신랑측",
      amount: 70000,
      memo: "",
      checkedInAt: "13:40",
    },
  ];

  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState("전체");
  const [search, setSearch] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState(null);

  const [editName, setEditName] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [editMemo, setEditMemo] = useState("");

  /* 수정 버튼 클릭 */
  const handleEditClick = (guest) => {
    setSelectedGuest(guest);

    setEditName(guest.name);
    setEditAmount(guest.amount);
    setEditMemo(guest.memo);

    setIsModalOpen(true);
  };

  /* 필터 + 검색 + 정렬 */
  const filteredGuests = useMemo(() => {
    let filtered = [...guests];

    // 측 필터
    if (filter !== "전체") {
      filtered = filtered.filter(
        (guest) => guest.side === filter
      );
    }

    // 검색
    if (search.trim()) {
      filtered = filtered.filter((guest) =>
        guest.name.includes(search)
      );
    }

    // 정렬
    filtered.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name, "ko");
      }

      return b.name.localeCompare(a.name, "ko");
    });

    return filtered;
  }, [guests, filter, search, sortOrder]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 to-blue-400 p-6">
      <div className="max-w-6xl mx-auto">
        {/* 상단 헤더 */}
        <div
          className="
            bg-white/30
            backdrop-blur-xl
            border border-white/20
            rounded-[36px]
            shadow-2xl
            px-8 py-7
          "
        >
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* 타이틀 */}
            <div>
              <h1 className="text-4xl font-extrabold text-slate-900">
                하객 명단
              </h1>

              <p className="mt-2 text-slate-500 text-lg">
                참석자 현황 및 축의금 관리
              </p>
            </div>

            {/* 버튼 */}
            <div className="flex gap-3">
              <button
                className="
                  h-14 px-6
                  rounded-2xl
                  bg-white/70
                  text-slate-700
                  font-semibold
                  flex items-center gap-2
                  shadow-md
                  hover:bg-white
                  transition
                "
              >
                <Download size={20} />
                엑셀 다운로드
              </button>

              <button
                className="
                  h-14 px-6
                  rounded-2xl
                  bg-[#FEE500]
                  text-black
                  font-bold
                  flex items-center gap-2
                  shadow-md
                  hover:brightness-95
                  transition
                "
              >
                <FileText size={20} />
                PDF 저장
              </button>
            </div>
          </div>

          {/* 검색 */}
          <div className="mt-6 relative">
            <Search
              className="
                absolute
                left-5 top-1/2
                -translate-y-1/2
                text-slate-400
              "
              size={20}
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="참석자 이름 검색"
              className="
                w-full
                h-16
                rounded-2xl
                bg-white/70
                border border-white/40
                pl-14 pr-5
                text-lg
                text-slate-700
                placeholder:text-slate-400
                shadow-md
                focus:outline-none
                focus:ring-4
                focus:ring-sky-200
              "
            />
          </div>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          <div
            className="
              bg-white/30
              backdrop-blur-xl
              rounded-3xl
              border border-white/20
              shadow-xl
              p-6
            "
          >
            <p className="text-slate-500 text-sm">
              총 참석자
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              {guests.length}명
            </h2>
          </div>

          <div
            className="
              bg-white/30
              backdrop-blur-xl
              rounded-3xl
              border border-white/20
              shadow-xl
              p-6
            "
          >
            <p className="text-slate-500 text-sm">
              신랑측 / 신부측
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              {
                guests.filter(
                  (guest) => guest.side === "신랑측"
                ).length
              }{" "}
              /{" "}
              {
                guests.filter(
                  (guest) => guest.side === "신부측"
                ).length
              }
            </h2>
          </div>

          <div
            className="
              bg-white/30
              backdrop-blur-xl
              rounded-3xl
              border border-white/20
              shadow-xl
              p-6
            "
          >
            <p className="text-slate-500 text-sm">
              총 축의금
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              {guests
                .reduce(
                  (sum, guest) => sum + guest.amount,
                  0
                )
                .toLocaleString()}
              원
            </h2>
          </div>
        </div>

        {/* 필터 탭 */}
        <div className="flex gap-3 mt-6">
          {["전체", "신랑측", "신부측"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`
                h-14 px-6
                rounded-2xl
                font-semibold
                shadow-md
                transition
                ${
                  filter === item
                    ? item === "신랑측"
                      ? "bg-sky-400 text-white"
                      : item === "신부측"
                      ? "bg-pink-300 text-white"
                      : "bg-slate-900 text-white"
                    : "bg-white/70 text-slate-600 hover:bg-white"
                }
              `}
            >
              {item === "신랑측" && "🤵 "}
              {item === "신부측" && "👰 "}
              {item}
            </button>
          ))}
        </div>

        {/* 리스트 */}
        <div
          className="
            mt-6
            bg-white/30
            backdrop-blur-xl
            rounded-[36px]
            border border-white/20
            shadow-2xl
            overflow-hidden
          "
        >
          {/* 헤더 */}
          <div
            className="
              grid grid-cols-6
              px-8 py-5
              bg-white/40
              text-slate-600
              font-semibold
              text-lg
            "
          >
            {/* 이름 정렬 */}
            <button
              onClick={() =>
                setSortOrder(
                  sortOrder === "asc"
                    ? "desc"
                    : "asc"
                )
              }
              className="
                flex items-center gap-2
                hover:text-slate-900
                transition
              "
            >
              성함

              <span className="text-sm">
                {sortOrder === "asc" ? "↑" : "↓"}
              </span>
            </button>

            <div>구분</div>
            <div>축의금</div>
            <div>메모</div>
            <div>등록 시간</div>
            <div className="text-center">관리</div>
          </div>

          {/* 리스트 */}
          <div className="divide-y divide-white/20">
            {filteredGuests.map((guest) => (
              <div
                key={guest.id}
                className="
                  grid grid-cols-6
                  items-center
                  px-8 py-6
                  text-slate-800
                  hover:bg-white/20
                  transition
                "
              >
                {/* 이름 */}
                <div className="font-bold text-xl">
                  {guest.name}
                </div>

                {/* 구분 */}
                <div>
                  <span
                    className={`
                      px-4 py-2
                      rounded-full
                      text-sm
                      font-semibold
                      ${
                        guest.side === "신랑측"
                          ? "bg-sky-100 text-sky-700"
                          : "bg-pink-100 text-pink-700"
                      }
                    `}
                  >
                    {guest.side}
                  </span>
                </div>

                {/* 축의금 */}
                <div className="font-semibold text-lg">
                  {guest.amount.toLocaleString()}원
                </div>

                {/* 메모 */}
                <div className="text-slate-500">
                  {guest.memo || "-"}
                </div>

                {/* 등록 시간 */}
                <div className="text-slate-500">
                  {guest.checkedInAt}
                </div>

                {/* 수정 버튼 */}
                <div className="flex justify-center">
                  <button
                    onClick={() =>
                      handleEditClick(guest)
                    }
                    className="
                      w-11 h-11
                      rounded-xl
                      bg-white/70
                      flex items-center justify-center
                      shadow-md
                      hover:bg-white
                      transition
                    "
                  >
                    <Pencil
                      size={18}
                      className="text-slate-600"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 수정 모달 */}
      {isModalOpen && (
        <div
          className="
            fixed inset-0
            bg-black/30
            backdrop-blur-sm
            flex items-center justify-center
            z-50
          "
        >
          <div
            className="
              w-full max-w-md
              rounded-[32px]
              bg-white
              shadow-2xl
              p-8
            "
          >
            {/* 타이틀 */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                참석자 수정
              </h2>

              <p className="mt-2 text-slate-500">
                {selectedGuest?.name}님의 정보를
                수정합니다
              </p>
            </div>

            {/* 이름 */}
            <div className="mt-8">
              <label className="text-sm font-semibold text-slate-500">
                성함
              </label>

              <input
                type="text"
                value={editName}
                onChange={(e) =>
                  setEditName(e.target.value)
                }
                className="
                  mt-2
                  w-full
                  h-14
                  rounded-2xl
                  border border-slate-200
                  px-5
                  text-lg
                  focus:outline-none
                  focus:ring-4
                  focus:ring-sky-100
                "
              />
            </div>

            {/* 금액 */}
            <div className="mt-5">
              <label className="text-sm font-semibold text-slate-500">
                축의금
              </label>

              <input
                type="number"
                value={editAmount}
                onChange={(e) =>
                  setEditAmount(e.target.value)
                }
                className="
                  mt-2
                  w-full
                  h-14
                  rounded-2xl
                  border border-slate-200
                  px-5
                  text-lg
                  focus:outline-none
                  focus:ring-4
                  focus:ring-sky-100
                "
              />
            </div>

            {/* 메모 */}
            <div className="mt-5">
              <label className="text-sm font-semibold text-slate-500">
                메모
              </label>

              <textarea
                value={editMemo}
                onChange={(e) =>
                  setEditMemo(e.target.value)
                }
                rows={4}
                className="
                  mt-2
                  w-full
                  rounded-2xl
                  border border-slate-200
                  px-5 py-4
                  text-lg
                  resize-none
                  focus:outline-none
                  focus:ring-4
                  focus:ring-sky-100
                "
              />
            </div>

            {/* 버튼 */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={() =>
                  setIsModalOpen(false)
                }
                className="
                  flex-1
                  h-14
                  rounded-2xl
                  bg-slate-100
                  text-slate-600
                  font-semibold
                  hover:bg-slate-200
                  transition
                "
              >
                취소
              </button>

              <button
                onClick={() => {
                  // TODO: API 저장
                  setIsModalOpen(false);
                }}
                className="
                  flex-1
                  h-14
                  rounded-2xl
                  bg-sky-400
                  text-white
                  font-bold
                  hover:bg-sky-500
                  transition
                "
              >
                저장하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GuestList;