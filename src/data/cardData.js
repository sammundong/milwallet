// 나라사랑카드 혜택 데이터 (2026~2033년 기준)

export const cardData = {
  shinhan: {
    id: 'shinhan',
    name: '신한 나라사랑카드',
    brand: 'VISA',
    color: '#0046FF',
    emoji: '💳',
    tiers: [
      { min: 0, label: '무실적' },
      { min: 100000, label: '10만원' },
      { min: 200000, label: '20만원' },
    ],
    benefits: {
      px: { desc: 'PX 20% 캐시백', limit: '월 10만원', condition: '무실적', detail: '3만원 이상 결제 시. 소액(3만원 미만) 1일1회 최대 1천원' },
      transport: { desc: '대중교통 20% 캐시백', limit: '월 5천원', condition: '전월 10만원' },
      cu: { desc: 'CU 즉시10% + 캐시백20%', limit: '최대 28%', condition: '무실적', detail: '팝카드 내장, GS25 일부 10%' },
      movie: { desc: 'CGV 6천원 관람', limit: '월 2회 (동반1인)', condition: '전월 10만원' },
      ott: { desc: '넷플릭스/쿠팡플레이 캐시백', limit: '월 5천원', condition: '전월 20만원' },
      cafe: { desc: '카페 10% 캐시백', limit: '월 3천원', condition: '전월 10만원', detail: '스타벅스 포함' },
      telecom: { desc: '이동통신 자동납부 캐시백', limit: '월 5천원', condition: '무실적' },
      membership: { desc: 'CJ ONE 등 5대 멤버십 자동적립', limit: '-', condition: '무실적' },
    },
    savingsRate: '최대 연 10.2%',
    bestFor: ['PX 추가 캐시백 (IBK 한도 소진 후)', 'CU 편의점 최대 28%', '영화 CGV'],
  },
  ibk: {
    id: 'ibk',
    name: 'IBK 나라사랑카드',
    brand: 'Mastercard',
    color: '#003DA5',
    emoji: '🏦',
    tiers: [
      { min: 0, label: '무실적' },
      { min: 80000, label: '8만원' },
      { min: 200000, label: '20만원' },
      { min: 250000, label: '25만원' },
    ],
    benefits: {
      px: { desc: 'PX 기본 15~30% + 특별 최대 50%', limit: '소액 월3회 1만원 / 3만원↑ 월5만원', condition: '무실적(기본), 급여이체+25만원(특별)', detail: '급여이체 시 기본+특별 합산 최대 50%' },
      convenience: { desc: 'CU/GS25 10% 청구할인', limit: '일1회 월5회', condition: '무실적' },
      ktx: { desc: 'KTX/SRT 5% 청구할인', limit: '월2회 연4회', condition: '전월 8만원', detail: '연간 한도 상한 3사 최고' },
      megacoffee: { desc: '메가커피 주말30% 평일20%', limit: '-', condition: '무실적', detail: '메가오더 앱 결제 시' },
      naverpay: { desc: '네이버페이 10% Npay적립', limit: '온오프라인 모두', condition: '전월 25만원', detail: '3기 카드 중 유일 오프라인 적용' },
      movie: { desc: 'CGV/메가박스 30~50%', limit: '-', condition: '전월 8만원' },
      themepark: { desc: '롯데월드/에버랜드 50%', limit: '월 2회', condition: '전월 8만원' },
      overseas: { desc: '해외결제 수수료 면제', limit: '-', condition: '무실적' },
      lounge: { desc: '더라운지 공항 라운지', limit: '-', condition: '무실적', detail: '3기 카드 중 독점' },
      insurance: { desc: '상해보험/병역생활 안심보험', limit: '-', condition: '무실적' },
    },
    conditions: {
      activeService: '장병내일준비적금 보유 시 자동 인정',
      salaryTransfer: '급여이체 시 PX 특별할인 + 실적 면제',
    },
    savingsRate: '최대 연 10.2%',
    bestFor: ['PX 대량구매 최대 50%', 'KTX/SRT 연간 최대', '네이버페이 온오프 10%', '공항 라운지'],
  },
  hana: {
    id: 'hana',
    name: '하나 나라사랑카드',
    brand: 'VISA',
    color: '#009775',
    emoji: '💚',
    tiers: [
      { min: 0, label: '무실적' },
      { min: 100000, label: '10만원' },
    ],
    benefits: {
      px: { desc: 'PX 소액 30% / 고액 20%', limit: '소액 월5천원 / 10만원↑ 일2만원 월10만원', condition: '무실적' },
      cu: { desc: 'CU 10% 즉시할인+캐시백', limit: '-', condition: '무실적' },
      travellog: { desc: '트래블로그 해외 수수료 면제', limit: '-', condition: '무실적', detail: '해외 ATM 출금도 면제' },
      transport: { desc: '대중교통 20% 캐시백', limit: '월 5천원', condition: '전월 10만원' },
      delivery: { desc: '배달 최대 20% 캐시백', limit: '월 5천원', condition: '전월 10만원' },
      taxi: { desc: '택시 최대 20% 캐시백', limit: '월 3천원', condition: '전월 10만원' },
      cafe: { desc: '카페 최대 20% 캐시백', limit: '월 3천원', condition: '전월 10만원' },
      ktx: { desc: 'KTX/SRT 5% 캐시백', limit: '월 1만원', condition: '전월 10만원' },
      telecom: { desc: '통신 1,500원 캐시백', limit: '월 1회', condition: '전월 10만원' },
      books: { desc: '알라딘/교보문고 10%', limit: '월 5천원', condition: '전월 10만원' },
      themepark: { desc: '놀이공원 50%', limit: '월 1회', condition: '전월 10만원', detail: '3사 놀이공원 카테고리 최강' },
      ott: { desc: 'OTT 10~20% 직접할인', limit: '월 5천원', condition: '전월 10만원' },
    },
    savingsRate: '최대 연 10.0%',
    bestFor: ['PX 소액 무실적 30%', '배달/OTT 최강', '놀이공원 월1회 50%', '해외결제 수수료 면제'],
  },
  kb: {
    id: 'kb',
    name: 'KB국민 나라사랑카드',
    brand: 'VISA',
    color: '#FFBC00',
    emoji: '⭐',
    isLegacy: true,
    legacyNote: '2025.12.24 신규발급 단종, 기발급자 최대 2030년까지 사용 가능',
    benefits: {
      px: { desc: 'PX 20% 환급할인', limit: '월 5만원', condition: '-' },
      transport: { desc: '대중교통 20% 청구할인', limit: '월 1만원', condition: '-', detail: 'K-패스 중복 적용 가능' },
      gs25: { desc: 'GS25 팝카드 10%', limit: '-', condition: '-' },
      movie: { desc: 'CGV 최대 35% 환급할인', limit: '월 2회 (온라인 예매 포함)', condition: '-' },
      themepark: { desc: '놀이공원 50% 현장할인', limit: '-', condition: '-' },
      bakery: { desc: '뚜레쥬르 10%', limit: '-', condition: '-' },
      restaurant: { desc: '아웃백 10%', limit: '-', condition: '-' },
      insurance: { desc: '복무 중 상해보험', limit: '영내 사고 포함', condition: '-', detail: '보장금액 3사 대비 최고' },
    },
    bestFor: ['CGV 35% (기발급자)', '영내 사고 포함 상해보험'],
  },
};

// 카테고리별 최적 카드 매핑
export const categoryBestCard = {
  pxBulk: { card: 'ibk', reason: '급여이체 시 최대 50%' },
  pxAfterLimit: { card: 'shinhan', reason: '월 10만원 한도 무실적 20%' },
  pxSmall: { card: 'hana', reason: '무실적 30%' },
  ktx: { card: 'ibk', reason: '연간 한도 상한 최고' },
  cu: { card: 'shinhan', reason: '최대 28%' },
  megacoffee: { card: 'ibk', reason: '주말 30% 평일 20%' },
  delivery: { card: 'hana', reason: '최대 20% 캐시백' },
  ott: { card: 'hana', reason: '10~20% 직접할인' },
  naverpay: { card: 'ibk', reason: '온오프 10% (3기 독점)' },
  themepark: { card: 'hana', reason: '50% 월1회' },
  movie: { card: 'ibk', reason: '30~50%' },
  overseas: { card: 'ibk', reason: '수수료 면제 + 라운지' },
};

// 추천 카드 조합
export const cardCombos = [
  {
    name: '가장 인기있는 조합',
    emoji: '🏅',
    cards: [
      { card: 'ibk', role: '메인', usage: 'PX, 네이버페이, KTX' },
      { card: 'hana', role: '서브', usage: '배달, OTT, 일상소비' },
      { card: 'shinhan', role: '보조', usage: 'IBK PX 한도 소진 후 + 영화' },
    ]
  },
  {
    name: '미니멀 조합',
    emoji: '✨',
    cards: [
      { card: 'ibk', role: '메인', usage: 'PX + 전반적 할인' },
      { card: 'hana', role: '서브', usage: '배달 + OTT + 해외' },
    ]
  },
];

// 혜택 카테고리 (무신사식 좌측 사이드바)
export const benefitCategories = [
  {
    id: 'px', label: 'PX', emoji: '🏪',
    subs: [
      { id: 'px-mart', label: '군마트', emoji: '🛒' },
      { id: 'px-online', label: '인터넷PX', emoji: '💻' },
    ]
  },
  {
    id: 'transport', label: '교통·TMO', emoji: '🚄',
    subs: [
      { id: 'tr-ktx', label: 'KTX/SRT', emoji: '🚅' },
      { id: 'tr-bus', label: '고속버스', emoji: '🚌' },
      { id: 'tr-air', label: '항공', emoji: '✈️' },
      { id: 'tr-tmo', label: 'TMO', emoji: '📋' },
      { id: 'tr-local', label: '시내교통', emoji: '🚇' },
    ]
  },
  {
    id: 'movie', label: '영화', emoji: '🎬',
    subs: [
      { id: 'mv-cgv', label: 'CGV', emoji: '🎥' },
      { id: 'mv-mega', label: '메가박스', emoji: '🎞️' },
      { id: 'mv-lotte', label: '롯데시네마', emoji: '🍿' },
    ]
  },
  {
    id: 'convenience', label: '편의점', emoji: '🏬',
    subs: [
      { id: 'cv-cu', label: 'CU', emoji: '🟣' },
      { id: 'cv-gs25', label: 'GS25', emoji: '🟢' },
      { id: 'cv-emart24', label: '이마트24', emoji: '🟡' },
      { id: 'cv-seven', label: '세븐일레븐', emoji: '🔴' },
    ]
  },
  {
    id: 'themepark', label: '놀이공원·레저', emoji: '🎢',
    subs: [
      { id: 'tp-ever', label: '에버랜드', emoji: '🎡', detail: '현역 본인 무료, 동반1인 50%' },
      { id: 'tp-lotte', label: '롯데월드', emoji: '🏰', detail: '본인 50%, 동반1인 30%' },
      { id: 'tp-gyeongju', label: '경주월드', emoji: '🎠', detail: '30~50%' },
      { id: 'tp-caribbean', label: '캐리비안베이', emoji: '🏊', detail: '30~50%' },
    ]
  },
  {
    id: 'telecom', label: '통신', emoji: '📱',
    subs: [
      { id: 'tc-skt', label: 'SKT', emoji: '📶' },
      { id: 'tc-kt', label: 'KT', emoji: '📡' },
      { id: 'tc-lgu', label: 'LGU+', emoji: '📲' },
      { id: 'tc-mvno', label: '알뜰폰', emoji: '💰' },
    ]
  },
  {
    id: 'military', label: '군 복지시설', emoji: '🏨',
    subs: [
      { id: 'ml-hotel', label: '군 호텔/콘도', emoji: '🛏️' },
      { id: 'ml-golf', label: '군 골프장', emoji: '⛳' },
      { id: 'ml-ski', label: '스키장 40%', emoji: '⛷️' },
      { id: 'ml-gym', label: '군 헬스장', emoji: '🏋️' },
    ]
  },
  {
    id: 'digital', label: '가전·디지털', emoji: '📺',
    subs: [
      { id: 'dg-samsung', label: '삼성 K-Hero', emoji: '📱', detail: '연1회 최대 50%' },
      { id: 'dg-welfare', label: '군지원센터 복지몰', emoji: '🛍️' },
      { id: 'dg-wamall', label: '국군복지단 와몰', emoji: '🏪' },
      { id: 'dg-lg', label: 'LG Best Shop', emoji: '🖥️' },
    ]
  },
  {
    id: 'regional', label: '지역 혜택', emoji: '📍',
    subs: [
      { id: 'rg-chain', label: '전국 체인', emoji: '🔗', detail: '블루클럽 20% 등' },
      { id: 'rg-seoul', label: '서울', emoji: '🏙️' },
      { id: 'rg-gyeonggi', label: '경기', emoji: '🌳' },
      { id: 'rg-chungcheong', label: '충청', emoji: '🌾' },
      { id: 'rg-gangwon', label: '강원', emoji: '🏔️' },
      { id: 'rg-gyeongsang', label: '경상', emoji: '🌊' },
      { id: 'rg-jeolla', label: '전라', emoji: '🌿' },
      { id: 'rg-jeju', label: '제주', emoji: '🏝️' },
    ]
  },
];

// 빠른 바로가기
export const quickLinks = [
  { id: 'savings', label: '장병적금 신청', emoji: '💰', url: '#' },
  { id: 'bookgrant', label: '도서지원금', emoji: '📚', url: '#' },
  { id: 'certgrant', label: '자격증학원 지원', emoji: '🏆', url: '#' },
  { id: 'pension', label: '국민연금 크레딧', emoji: '🏛️', url: '#' },
];

// 군 복무 크레딧 등 정책 정보
export const policyInfo = [
  { title: '군복무 크레딧', desc: '복무기간 최대 12개월 국민연금 가입기간 인정 (2027년부터 전체 인정 예정)', emoji: '🏛️' },
  { title: '장병내일준비적금', desc: '월 최대 40만원, 정부 지원금 포함 월 205만원 수령 가능', emoji: '💰' },
  { title: '도서지원금', desc: '연간 일정 금액 도서 구입 지원', emoji: '📚' },
  { title: '자격증 응시료 지원', desc: '국가기술자격 응시료 지원', emoji: '🏆' },
];
