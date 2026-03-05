const EventoryLogo = ({ width = 130 }) => {
  return (
    <svg
      width={width} // 전체 가로 크기 (props로 조절 가능)
      viewBox="0 0 160 50" // 실제 그려지는 좌표 영역 (여백 최소화)
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }} // inline 요소 여백 제거용
    >
      {/* =========================
          🎨 그라데이션 정의 영역
         ========================= */}
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          {/* 시작 색 (연핑크) */}
          <stop offset="0%" stopColor="#F8C8DC" />
          {/* 끝 색 (조금 더 진한 핑크) */}
          <stop offset="100%" stopColor="#F4A6C1" />
        </linearGradient>
      </defs>

      {/* =========================
          🟪 아이콘 배경 (둥근 사각형)
         ========================= */}
      <rect
        x="5" // 왼쪽 시작 위치
        y="5" // 위쪽 시작 위치
        width="40" // 가로 길이
        height="40" // 세로 길이
        rx="14" // 모서리 둥글기 (radius)
        fill="url(#grad)" // 위에서 정의한 그라데이션 적용
      />

      {/* =========================
          📅 캘린더 몸통 (흰색 박스)
         ========================= */}
      <rect x="12" y="16" width="26" height="20" rx="5" fill="white" />

      {/* =========================
          📎 캘린더 상단 고리
         ========================= */}
      <circle cx="18" cy="13" r="2.5" fill="#F4A6C1" />
      <circle cx="34" cy="13" r="2.5" fill="#F4A6C1" />

      {/* =========================
          💖 하트 (웨딩 감성 포인트)
         ========================= */}
      <path
        d="
          M25 30
          C23 28, 20 26, 20 23
          C20 21, 22 20, 24 22
          C26 20, 28 21, 28 23
          C28 26, 25 28, 23 30 Z
        "
        fill="#F4A6C1"
      />

      {/* =========================
          ✍ 브랜드 텍스트
         ========================= */}
      <text
        x="60" // 텍스트 시작 x좌표
        y="34" // 텍스트 기준선 y좌표
        fontSize="24" // 글자 크기
        fontWeight="600" // Semi-bold
        fill="#444" // 다크그레이 (부드러운 느낌)
        fontFamily="Segoe UI, sans-serif"
      >
        Eventory
      </text>
    </svg>
  );
};

export default EventoryLogo;
