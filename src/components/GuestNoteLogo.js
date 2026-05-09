const GuestNoteLogo = ({ width = 250 }) => {
  return (
    <svg
      width={width}
      viewBox="0 0 220 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* 그라데이션 */}
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B7D7FF" />
          <stop offset="100%" stopColor="#8CB8FF" />
        </linearGradient>
      </defs>

      {/* 아이콘 배경 */}
      <rect
        x="5"
        y="5"
        width="50"
        height="50"
        rx="16"
        fill="url(#logoGrad)"
      />

      {/* 노트 커버 */}
      <rect
        x="12"
        y="12"
        width="36"
        height="36"
        rx="6"
        fill="white"
      />

      {/* 바인딩 */}
      <line
        x1="20"
        y1="18"
        x2="20"
        y2="42"
        stroke="#A8C7FF"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* 링 */}
      <circle cx="20" cy="20" r="1.8" fill="#A8C7FF" />
      <circle cx="20" cy="28" r="1.8" fill="#A8C7FF" />
      <circle cx="20" cy="36" r="1.8" fill="#A8C7FF" />

      {/* 하트 */}
      <path
        d="
          M31 34
          C29 32, 26 30, 26 27
          C26 25, 28 24, 30 26
          C32 24, 34 25, 34 27
          C34 30, 31 32, 29 34 Z
        "
        fill="#F6AFC8"
      />

      {/* 브랜드명 */}
      <text
        x="70"
        y="38"
        fontSize="28"
        fontWeight="700"
        fill="#1E293B"
        fontFamily="Pretendard, sans-serif"
      >
        하객노트
      </text>

      {/* 서브 텍스트 */}
      <text
        x="72"
        y="52"
        fontSize="10"
        fontWeight="500"
        fill="#7C8AA5"
        fontFamily="Pretendard, sans-serif"
        letterSpacing="0.08em"
      >
        WEDDING GUEST MANAGER
      </text>
    </svg>
  );
};

export default GuestNoteLogo;