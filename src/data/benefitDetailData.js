// 혜택 카테고리별 상세 데이터

const COLORS_PRIMARY = '#1B5E20';

// PX 할인 계산기 공통 데이터
const PX_CALCULATOR = [
  {
    id: 'ibk', name: 'IBK', color: '#003DA5',
    tiers: [
      { min: 0, max: 29999, rate: 0.15, label: '소액 15%', limit: '월 3회, 1만원', condition: '무실적' },
      { min: 30000, max: 99999, rate: 0.30, label: '3만원↑ 30%', limit: '월 5만원', condition: '무실적' },
      { min: 30000, max: 99999, rate: 0.50, label: '급여이체 시 50%', limit: '월 5만원', condition: '급여이체+25만원', bonus: true },
      { min: 100000, max: 999999, rate: 0.30, label: '10만원↑ 30%', limit: '월 5만원', condition: '무실적' },
      { min: 100000, max: 999999, rate: 0.50, label: '급여이체 시 50%', limit: '월 5만원', condition: '급여이체+25만원', bonus: true },
    ],
  },
  {
    id: 'hana', name: '하나', color: '#009775',
    tiers: [
      { min: 0, max: 29999, rate: 0.30, label: '소액 30%', limit: '월 5천원', condition: '무실적' },
      { min: 30000, max: 99999, rate: 0.10, label: '3만원↑ 10%', limit: '일 5천원, 월 2만원', condition: '무실적' },
      { min: 100000, max: 999999, rate: 0.20, label: '10만원↑ 20%', limit: '일 2만원, 월 10만원', condition: '무실적' },
    ],
  },
  {
    id: 'shinhan', name: '신한', color: '#0046FF',
    tiers: [
      { min: 0, max: 29999, rate: 0, label: '소액 1일1회 1천원', limit: '월 한도 통합', condition: '무실적', fixedAmount: 1000 },
      { min: 30000, max: 999999, rate: 0.20, label: '20% 캐시백', limit: '월 10만원', condition: '무실적' },
    ],
  },
];

export const benefitDetails = {
  // ──────────────────────────────────────────
  // 추천 카테고리
  // ──────────────────────────────────────────
  'rec-px': {
    title: 'PX 최적 카드 추천',
    emoji: '🏪',
    description: 'PX 구매 시 카드별 할인율을 비교해서 가장 유리한 카드를 찾아보세요.',
    cards: [
      { card: 'IBK', highlight: '최대 50%', desc: '급여이체 시 기본 30% + 특별 20% 합산. 3만원 이상 결제 시 적용, 소액(3만원 미만) 15% 월3회', condition: '급여이체 + 전월 25만원', limit: '소액 월 1만원 / 3만원↑ 월 5만원', color: '#003DA5' },
      { card: '하나', highlight: '소액 30%', desc: '소액 결제 30% 캐시백 무실적! 10만원 이상 건당 20%', condition: '무실적', limit: '소액 월 5천원 / 고액 일 2만원 월 10만원', color: '#009775' },
      { card: '신한', highlight: '20% 캐시백', desc: '3만원 이상 20% 캐시백. IBK 한도 소진 후 추가 사용에 최적', condition: '무실적', limit: '월 10만원 (소액 1일1회 1천원 포함)', color: '#0046FF' },
      { card: 'KB국민', highlight: '20% 환급', desc: '레거시 카드 보유자 한정. 2030년까지 사용 가능', condition: '-', limit: '월 5만원', color: '#FFBC00', isLegacy: true },
    ],
    howTo: [
      '1. 나라사랑카드를 PX 결제 단말기에 삽입 또는 터치',
      '2. 할인은 결제 시 자동 적용 (별도 쿠폰 불필요)',
      '3. 영수증에서 할인 금액 확인',
      '4. 월 한도 소진 여부는 카드사 앱에서 확인 가능',
      '5. IBK 한도가 소진되면 신한 카드로 교체하여 결제',
    ],
    links: [
      { label: 'IBK 나라사랑카드 신청', url: 'https://www.ibk.co.kr', emoji: '🏦' },
      { label: '신한 나라사랑카드 신청', url: 'https://www.shinhancard.com', emoji: '💳' },
      { label: '하나 나라사랑카드 신청', url: 'https://www.hanacard.co.kr', emoji: '💳' },
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '💡 팁: IBK를 메인으로 쓰고 한도 소진 후 신한으로 전환하면 PX 할인을 최대로 활용할 수 있어요!',
    calculator: PX_CALCULATOR,
  },
  'rec-cu': {
    title: 'CU 편의점 할인',
    emoji: '🟣',
    description: 'CU에서 간식 살 때 어떤 카드가 가장 유리할까요?',
    cards: [
      { card: '신한', highlight: '최대 28%', desc: '즉시 10% 할인 + 20% 캐시백. 팝카드 내장으로 GS25 일부 상품 10%도 별도 적용', condition: '무실적', limit: '-', color: '#0046FF' },
      { card: 'IBK', highlight: '10% 청구할인', desc: 'CU, GS25 두 곳 모두 10% 청구할인', condition: '무실적', limit: '일 1회, 월 5회', color: '#003DA5' },
      { card: '하나', highlight: '10% 즉시+캐시백', desc: 'CU 10% 즉시할인에 캐시백 추가', condition: '무실적', limit: '-', color: '#009775' },
    ],
    howTo: [
      '1. CU 매장에서 상품 선택 후 카운터로 이동',
      '2. 나라사랑카드(신한 추천)를 결제 단말기에 삽입 또는 터치',
      '3. 즉시할인은 결제 시 바로 적용, 캐시백은 다음 달 카드 청구 시 차감',
      '4. 팝카드(신한/KB) 내장 시 팝카드 할인도 자동 적용',
    ],
    links: [
      { label: 'CU 매장 찾기', url: 'https://cu.bgfretail.com', emoji: '🏪' },
      { label: '신한 나라사랑카드', url: 'https://www.shinhancard.com', emoji: '💳' },
    ],
    tip: '💡 팁: CU는 신한이 28%로 압도적! 다만 GS25도 자주 간다면 IBK가 두 곳 다 10%라 유리해요.',
  },
  'rec-mega': {
    title: '메가커피 할인',
    emoji: '☕',
    description: '메가커피 메가오더 앱 결제 시 할인받는 방법',
    cards: [
      { card: 'IBK', highlight: '주말 30% / 평일 20%', desc: '메가오더 앱에서 IBK 나라사랑카드로 결제 시 자동 적용', condition: '무실적', limit: '-', color: '#003DA5' },
      { card: '신한', highlight: '카페 10%', desc: '스타벅스 포함 카페 전반 10% 캐시백', condition: '전월 10만원', limit: '월 3천원', color: '#0046FF' },
      { card: '하나', highlight: '카페 20%', desc: '카페 카테고리 최대 20% 캐시백', condition: '전월 10만원', limit: '월 3천원', color: '#009775' },
    ],
    howTo: [
      '1. 메가오더 앱 설치 (앱스토어/플레이스토어에서 "메가오더" 검색)',
      '2. 회원가입 후 결제수단에 IBK 나라사랑카드 등록',
      '3. 원하는 매장/메뉴 선택 후 IBK 카드로 결제',
      '4. 주문 완료 후 매장에서 음료 픽업',
      '5. 할인은 결제 시 자동 적용 (별도 쿠폰 불필요)',
    ],
    links: [
      { label: '메가오더 앱/매장 찾기', url: 'https://www.mega-mgccoffee.com', emoji: '☕' },
      { label: 'IBK 나라사랑카드', url: 'https://www.ibk.co.kr', emoji: '💳' },
    ],
    tip: '💡 팁: 메가커피는 IBK 독보적! 다른 카페(스타벅스 등)는 하나가 20%로 유리해요.',
  },
  'rec-delivery': {
    title: '배달 할인',
    emoji: '🛵',
    description: '배달의민족, 요기요, 쿠팡이츠 결제 시 할인',
    cards: [
      { card: '하나', highlight: '최대 20%', desc: '배달 카테고리 최대 20% 캐시백', condition: '전월 10만원', limit: '월 5천원', color: '#009775' },
    ],
    howTo: [
      '1. 배달의민족/요기요/쿠팡이츠 앱에서 주문',
      '2. 결제수단을 하나 나라사랑카드로 선택',
      '3. 결제 완료 시 캐시백 자동 적립',
      '4. 캐시백은 다음 달 카드 청구 시 차감',
    ],
    links: [
      { label: '하나 나라사랑카드', url: 'https://www.hanacard.co.kr', emoji: '💳' },
    ],
    tip: '💡 팁: 배달 할인은 하나가 유일! 외출 못하는 날 배달 시킬 때 하나 카드로 결제하세요.',
  },
  'rec-movie': {
    title: '영화 할인',
    emoji: '🎬',
    description: 'CGV, 메가박스, 롯데시네마 카드별 할인 비교',
    cards: [
      { card: 'IBK', highlight: '30~50%', desc: 'CGV, 메가박스 30~50% 할인', condition: '전월 8만원', limit: '-', color: '#003DA5' },
      { card: '신한', highlight: 'CGV 6천원', desc: 'CGV 2D 관람권 6천원 구매. 동반 1인 포함', condition: '전월 10만원', limit: '월 2회', color: '#0046FF' },
      { card: 'KB국민', highlight: 'CGV 35%', desc: 'CGV 최대 35% 환급할인. 온라인 예매 포함', condition: '-', limit: '월 2회', color: '#FFBC00', isLegacy: true },
    ],
    howTo: [
      '1. CGV/메가박스 앱 또는 웹사이트에서 영화 예매',
      '2. 결제수단에서 나라사랑카드(IBK 또는 신한) 선택',
      '3. 할인은 결제 시 자동 적용',
      '4. 신한 6천원 관람권은 신한카드 앱에서 별도 구매 후 예매에 사용',
      '5. 현장 매표소에서도 카드 제시 시 할인 적용 가능',
    ],
    links: [
      { label: 'CGV 영화 예매', url: 'https://www.cgv.co.kr', emoji: '🎥' },
      { label: '메가박스 영화 예매', url: 'https://www.megabox.co.kr', emoji: '🎞️' },
      { label: 'IBK 나라사랑카드', url: 'https://www.ibk.co.kr', emoji: '💳' },
      { label: '신한 나라사랑카드', url: 'https://www.shinhancard.com', emoji: '💳' },
    ],
    tip: '💡 팁: KB국민 레거시 보유자는 CGV 35%가 최강! 미보유자는 IBK 30~50% 또는 신한 6천원 중 선택.',
  },
  'rec-ott': {
    title: 'OTT 할인',
    emoji: '📺',
    description: '넷플릭스, 유튜브프리미엄, 티빙, 웨이브, 쿠팡플레이 할인',
    cards: [
      { card: '하나', highlight: '10~20%', desc: 'OTT 구독료 10~20% 직접 할인', condition: '전월 10만원', limit: '월 5천원', color: '#009775' },
      { card: '신한', highlight: '캐시백', desc: '넷플릭스, 쿠팡플레이 캐시백', condition: '전월 20만원', limit: '월 5천원', color: '#0046FF' },
    ],
    howTo: [
      '1. 넷플릭스/쿠팡플레이 등 OTT 서비스 가입',
      '2. 결제수단을 하나 나라사랑카드로 등록',
      '3. 월 구독료 자동결제 시 캐시백 자동 적용',
      '4. 캐시백 내역은 카드사 앱에서 확인 가능',
    ],
    links: [
      { label: '넷플릭스 가입', url: 'https://www.netflix.com', emoji: '🎬' },
      { label: '쿠팡플레이 가입', url: 'https://www.coupangplay.com', emoji: '📺' },
      { label: '하나 나라사랑카드', url: 'https://www.hanacard.co.kr', emoji: '💳' },
    ],
    tip: '💡 팁: OTT는 하나가 10만원 실적만으로 할인! 신한은 20만원 필요해서 하나가 유리.',
  },
  'rec-themepark': {
    title: '놀이공원 할인',
    emoji: '🎢',
    description: '에버랜드, 롯데월드, 경주월드, 캐리비안베이 할인',
    cards: [
      { card: '하나', highlight: '50% (월1회)', desc: '놀이공원 50% 할인. 3사 놀이공원 카테고리 최강', condition: '전월 10만원', limit: '월 1회', color: '#009775' },
      { card: 'IBK', highlight: '50% (월2회)', desc: '롯데월드, 에버랜드 50% 현장할인', condition: '전월 8만원', limit: '월 2회', color: '#003DA5' },
      { card: 'KB국민', highlight: '50%', desc: '놀이공원 50% 현장할인', condition: '-', limit: '-', color: '#FFBC00', isLegacy: true },
    ],
    howTo: [
      '1. 에버랜드: 현역 군인은 신분증만으로 무료입장! 동반자는 매표소에서 나라사랑카드 제시',
      '2. 롯데월드: 매표소에서 군인 신분증 + 나라사랑카드 제시',
      '3. 온라인 예매 시 카드사 할인이 적용되지 않을 수 있으니 현장 구매 추천',
      '4. 동반 1인까지 할인 적용 가능 (카드별 상이)',
    ],
    links: [
      { label: '에버랜드 이용 안내', url: 'https://www.everland.com', emoji: '🎡' },
      { label: '롯데월드 이용 안내', url: 'https://www.lotteworld.com', emoji: '🏰' },
      { label: 'IBK 나라사랑카드', url: 'https://www.ibk.co.kr', emoji: '💳' },
      { label: '하나 나라사랑카드', url: 'https://www.hanacard.co.kr', emoji: '💳' },
    ],
    tip: '💡 팁: 에버랜드는 현역 본인 무료입장! 동반 1인은 IBK/하나 50% 할인 적용하세요.',
  },
  'rec-naverpay': {
    title: '네이버페이 적립',
    emoji: '💚',
    description: '네이버페이로 결제 시 추가 적립받는 방법',
    cards: [
      { card: 'IBK', highlight: '10% Npay 적립', desc: '온라인+오프라인 모두 10% Npay 포인트 적립. 3기 카드 중 유일하게 오프라인도 적용!', condition: '전월 25만원', limit: '-', color: '#003DA5' },
    ],
    howTo: [
      '1. 네이버페이 앱 설치 후 회원가입',
      '2. 결제수단에 IBK 나라사랑카드 등록',
      '3. 온라인: 네이버 쇼핑에서 결제 시 네이버페이+IBK 카드 선택',
      '4. 오프라인: 네이버페이 바코드 결제 시 IBK 카드가 자동 연동',
      '5. 적립된 Npay 포인트는 네이버페이 앱에서 확인 및 사용 가능',
    ],
    links: [
      { label: '네이버페이', url: 'https://pay.naver.com', emoji: '💚' },
      { label: 'IBK 나라사랑카드', url: 'https://www.ibk.co.kr', emoji: '💳' },
    ],
    tip: '💡 팁: 네이버페이 10%는 IBK 독점! 오프라인 매장에서도 네이버페이+IBK 조합으로 적립 가능.',
  },
  'rec-ktx': {
    title: 'KTX/SRT 할인',
    emoji: '🚅',
    description: '휴가 때 KTX, SRT 할인받는 방법',
    cards: [
      { card: 'IBK', highlight: '5% (연간 최대)', desc: 'KTX, SRT 5% 청구할인. 연간 한도 상한이 3사 중 최고', condition: '전월 8만원', limit: '월 2회, 연 4회', color: '#003DA5' },
      { card: '하나', highlight: '5% 캐시백', desc: 'KTX, SRT 5% 캐시백', condition: '전월 10만원', limit: '월 1만원', color: '#009775' },
    ],
    howTo: [
      '1. 코레일톡 앱 또는 레츠코레일 웹사이트에서 열차 예매',
      '2. 결제수단에서 IBK 또는 하나 나라사랑카드 선택',
      '3. 5% 할인은 결제 시 자동 청구할인/캐시백 적용',
      '4. 현장 매표소에서도 나라사랑카드 결제 시 동일 적용',
      '5. TMO 할인과 중복 적용 가능하니 함께 활용',
    ],
    links: [
      { label: '레츠코레일 (KTX 예매)', url: 'https://www.letskorail.com', emoji: '🚅' },
      { label: 'IBK 나라사랑카드', url: 'https://www.ibk.co.kr', emoji: '💳' },
      { label: '하나 나라사랑카드', url: 'https://www.hanacard.co.kr', emoji: '💳' },
    ],
    tip: '💡 팁: 장거리 자주 이용하면 IBK가 연간 한도 최고라 유리! 단거리는 하나도 OK.',
  },

  // ──────────────────────────────────────────
  // PX 카테고리
  // ──────────────────────────────────────────
  'px-mart': {
    title: '군마트 (PX) 할인',
    emoji: '🛒',
    description: 'PX 오프라인 매장에서 나라사랑카드 할인 받기',
    cards: [
      { card: 'IBK', highlight: '최대 50%', desc: '기본 15~30% + 급여이체 시 특별 20% 추가. 3만원 이상 최대 50%', condition: '급여이체 + 전월 25만원', limit: '소액 월3회 1만원 / 3만원↑ 월 5만원', color: '#003DA5' },
      { card: '하나', highlight: '소액 30%', desc: '소액 결제 30% 캐시백 (무실적)', condition: '무실적', limit: '소액 월 5천원', color: '#009775' },
      { card: '신한', highlight: '20%', desc: '3만원 이상 20% 캐시백', condition: '무실적', limit: '월 10만원', color: '#0046FF' },
    ],
    howTo: [
      '1. 나라사랑카드를 PX 결제 단말기에 삽입 또는 터치',
      '2. 할인은 결제 시 자동 적용 (별도 쿠폰 불필요)',
      '3. 영수증에서 할인 금액 확인',
      '4. 월 한도 소진 여부는 카드사 앱에서 확인 가능',
      '5. 대량 구매(3만원 이상)는 IBK, 소액 간식은 하나, IBK 한도 소진 후 신한 사용',
    ],
    links: [
      { label: 'IBK 나라사랑카드', url: 'https://www.ibk.co.kr', emoji: '🏦' },
      { label: '신한 나라사랑카드', url: 'https://www.shinhancard.com', emoji: '💳' },
      { label: '하나 나라사랑카드', url: 'https://www.hanacard.co.kr', emoji: '💳' },
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '💡 팁: 대량 구매는 IBK(50%), 소액 간식은 하나(30%), IBK 한도 소진 후 신한(20%)!',
    calculator: PX_CALCULATOR,
  },
  'px-online': {
    title: '인터넷 PX',
    emoji: '💻',
    description: '인터넷 PX에서도 나라사랑카드 할인이 적용됩니다.',
    cards: [
      { card: 'IBK', highlight: '최대 50%', desc: '오프라인 PX와 동일한 할인 적용', condition: '급여이체 + 전월 25만원', limit: '오프라인과 한도 합산', color: '#003DA5' },
      { card: '신한', highlight: '20%', desc: '3만원 이상 20% 캐시백', condition: '무실적', limit: '오프라인과 한도 합산', color: '#0046FF' },
    ],
    howTo: [
      '1. 인터넷 PX 사이트에 군인 인증 후 로그인',
      '2. 원하는 상품을 장바구니에 담기',
      '3. 결제 시 나라사랑카드(IBK 또는 신한) 선택',
      '4. 할인은 결제 시 자동 적용',
      '5. 주의: 오프라인 PX와 할인 한도가 합산되므로 한도 관리 필요',
    ],
    links: [
      { label: 'IBK 나라사랑카드', url: 'https://www.ibk.co.kr', emoji: '🏦' },
      { label: '신한 나라사랑카드', url: 'https://www.shinhancard.com', emoji: '💳' },
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '💡 팁: 인터넷 PX는 오프라인 PX와 한도가 합산돼요. 한 곳에서 몰아서 사용하세요!',
    calculator: PX_CALCULATOR,
  },

  // ──────────────────────────────────────────
  // 교통·TMO
  // ──────────────────────────────────────────
  'tr-ktx': {
    title: 'KTX / SRT 할인',
    emoji: '🚅',
    description: '휴가, 외출 시 KTX/SRT 할인받는 방법',
    cards: [
      { card: 'IBK', highlight: '5%', desc: 'KTX, SRT 5% 청구할인', condition: '전월 8만원', limit: '월 2회, 연 4회', color: '#003DA5' },
      { card: '하나', highlight: '5%', desc: 'KTX, SRT 5% 캐시백', condition: '전월 10만원', limit: '월 1만원', color: '#009775' },
    ],
    howTo: [
      '1. 코레일톡 앱 설치 후 회원가입',
      '2. 원하는 열차/좌석 선택 후 결제 단계로 이동',
      '3. 결제수단에서 IBK 또는 하나 나라사랑카드 선택',
      '4. 5% 청구할인/캐시백은 자동 적용',
      '5. TMO 이동 명령 시 TMO 할인과 중복 적용 가능',
    ],
    links: [
      { label: '레츠코레일 (KTX 예매)', url: 'https://www.letskorail.com', emoji: '🚅' },
      { label: 'IBK 나라사랑카드', url: 'https://www.ibk.co.kr', emoji: '💳' },
      { label: '하나 나라사랑카드', url: 'https://www.hanacard.co.kr', emoji: '💳' },
    ],
    tip: '💡 팁: 나라사랑카드 5% + 국방부 TMO 할인을 중복 적용할 수 있어요!',
  },
  'tr-bus': {
    title: '고속버스 할인',
    emoji: '🚌',
    description: '고속버스 나라사랑카드 5% 할인 안내',
    cards: [
      { card: '공통', highlight: '5% 할인', desc: '나라사랑카드로 고속버스 결제 시 5% 할인', condition: '-', limit: '-', color: COLORS_PRIMARY },
    ],
    howTo: [
      '1. 고속버스 터미널 매표소 방문 또는 고속버스 앱에서 예매',
      '2. 결제 시 나라사랑카드(어떤 카드사든 가능)로 결제',
      '3. 5% 할인이 자동 적용',
      '4. 온라인 예매 시에도 동일 적용',
    ],
    links: [
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '💡 팁: 고속버스 5% 할인은 카드사 무관! 어떤 나라사랑카드든 적용됩니다.',
  },
  'tr-air': {
    title: '항공 할인',
    emoji: '✈️',
    description: '대한항공, 아시아나 군인 할인 운임',
    cards: [
      { card: '대한항공', highlight: '군인 할인', desc: '군인 신분 확인 시 특별 할인 운임 적용. 국내선/국제선 모두 가능', condition: '군인 신분증', limit: '-', color: '#003DA5' },
      { card: '아시아나', highlight: '군인 할인', desc: '군인 전용 할인 운임. 탑승 시 신분증 제시 필요', condition: '군인 신분증', limit: '-', color: '#C40000' },
    ],
    howTo: [
      '1. 대한항공/아시아나 홈페이지 또는 앱에서 항공편 검색',
      '2. 예매 시 탑승자 유형에서 "군인" 또는 "국방부 할인" 선택',
      '3. 군인 신분증 번호 입력',
      '4. 탑승 당일 공항 카운터에서 군인 신분증 제시 (필수)',
      '5. 신분증 미지참 시 할인 취소될 수 있으니 반드시 지참',
    ],
    links: [
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '💡 팁: 항공사 군인 할인은 나라사랑카드와 별개! 군인 신분증만으로 적용됩니다.',
  },
  'tr-tmo': {
    title: 'TMO 이용 안내',
    emoji: '📋',
    description: '각 군종별 TMO 연락처 및 이용 조건',
    info: [
      { label: '공무 출장/전속', desc: '이동 명령서 기반 교통 지원. 부대 TMO 사무실에서 신청' },
      { label: '일반 외출/외박', desc: '나라사랑카드 교통 할인 혜택 활용. TMO 별도 지원 없음' },
      { label: '신청 절차', desc: '1) 이동 명령서 발급 → 2) TMO 사무실 방문 → 3) 교통편 배정' },
    ],
    howTo: [
      '1. 부대 행정관에게 이동 명령서 발급 요청',
      '2. 이동 명령서를 지참하고 부대 내 TMO 사무실 방문',
      '3. TMO 담당관에게 이동 경로 및 일정 전달',
      '4. 교통편(KTX, 고속버스 등) 배정 확인',
      '5. 배정된 교통편 이용 후 도착 부대 TMO에 도착 보고',
    ],
    links: [
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
      { label: '국군복지단', url: 'https://www.mwb.mil.kr', emoji: '🏢' },
    ],
    tip: '💡 팁: TMO는 공무 이동에만 적용! 일반 외출/외박은 나라사랑카드 교통 혜택을 활용하세요.',
  },
  'tr-local': {
    title: '시내 교통 할인',
    emoji: '🚇',
    description: '시내버스, 지하철 나라사랑카드 할인',
    cards: [
      { card: '신한', highlight: '20% 캐시백', desc: '시내버스, 지하철 20% 캐시백', condition: '전월 10만원', limit: '월 5천원', color: '#0046FF' },
      { card: '하나', highlight: '20% 캐시백', desc: '대중교통 20% 캐시백', condition: '전월 10만원', limit: '월 5천원', color: '#009775' },
      { card: 'KB국민', highlight: '20%+K패스', desc: '20% 청구할인. K-패스 중복 적용 가능!', condition: '-', limit: '월 1만원', color: '#FFBC00', isLegacy: true },
    ],
    howTo: [
      '1. 나라사랑카드를 교통카드로 사용 (후불교통 기능 내장)',
      '2. 버스/지하철 탑승 시 단말기에 카드 태그',
      '3. 20% 캐시백은 다음 달 카드 청구 시 자동 차감',
      '4. KB국민 보유자는 K-패스 앱에 카드 등록하면 중복 할인 가능',
    ],
    links: [
      { label: '신한 나라사랑카드', url: 'https://www.shinhancard.com', emoji: '💳' },
      { label: '하나 나라사랑카드', url: 'https://www.hanacard.co.kr', emoji: '💳' },
    ],
    tip: '💡 팁: KB국민 레거시 보유자는 K-패스 중복 적용으로 최대 혜택! 나머지는 신한/하나 동급.',
  },

  // ──────────────────────────────────────────
  // 영화
  // ──────────────────────────────────────────
  'mv-cgv': {
    title: 'CGV 할인',
    emoji: '🎥',
    description: 'CGV 영화 관람 카드별 할인 비교',
    cards: [
      { card: 'KB국민', highlight: '최대 35%', desc: 'CGV 최대 35% 환급할인. 온라인 예매도 포함', condition: '-', limit: '월 2회', color: '#FFBC00', isLegacy: true },
      { card: 'IBK', highlight: '30~50%', desc: 'CGV 30~50% 할인', condition: '전월 8만원', limit: '-', color: '#003DA5' },
      { card: '신한', highlight: '6천원 관람', desc: '2D 관람권 6천원 구매. 동반 1인 포함 월 2회', condition: '전월 10만원', limit: '월 2회', color: '#0046FF' },
    ],
    howTo: [
      '1. CGV 앱/웹사이트에서 영화 및 상영 시간 선택',
      '2. 좌석 선택 후 결제 단계로 이동',
      '3. IBK/KB국민: 결제수단에서 해당 카드 선택하면 할인 자동 적용',
      '4. 신한 6천원 관람권: 신한카드 앱 > 혜택 > CGV 관람권 메뉴에서 구매',
      '5. 현장 매표소에서도 카드 제시 시 할인 가능',
    ],
    links: [
      { label: 'CGV 영화 예매', url: 'https://www.cgv.co.kr', emoji: '🎥' },
      { label: 'IBK 나라사랑카드', url: 'https://www.ibk.co.kr', emoji: '💳' },
      { label: '신한 나라사랑카드', url: 'https://www.shinhancard.com', emoji: '💳' },
    ],
    tip: '💡 팁: KB국민 레거시 35% > 신한 6천원 > IBK 30~50% 순. KB 있으면 무조건 KB!',
  },
  'mv-mega': {
    title: '메가박스 할인',
    emoji: '🎞️',
    description: '메가박스 카드별 할인',
    cards: [
      { card: 'IBK', highlight: '30~50%', desc: '메가박스 30~50% 할인', condition: '전월 8만원', limit: '-', color: '#003DA5' },
    ],
    howTo: [
      '1. 메가박스 앱/웹사이트에서 영화 및 상영 시간 선택',
      '2. 좌석 선택 후 결제 단계로 이동',
      '3. 결제수단에서 IBK 나라사랑카드 선택',
      '4. 할인은 결제 시 자동 적용',
      '5. 현장 매표소에서도 카드 제시 시 할인 가능',
    ],
    links: [
      { label: '메가박스 영화 예매', url: 'https://www.megabox.co.kr', emoji: '🎞️' },
      { label: 'IBK 나라사랑카드', url: 'https://www.ibk.co.kr', emoji: '💳' },
    ],
    tip: '💡 팁: 메가박스는 IBK가 유일하게 할인을 제공합니다.',
  },
  'mv-lotte': {
    title: '롯데시네마 할인',
    emoji: '🍿',
    description: '롯데시네마는 현재 나라사랑카드 직접 할인이 제한적입니다.',
    cards: [],
    howTo: [
      '1. 롯데시네마는 나라사랑카드 전용 할인이 없음',
      '2. 대안: CGV(IBK/신한/KB) 또는 메가박스(IBK) 이용 추천',
      '3. 롯데시네마 자체 할인(L.POINT, 통신사 할인 등) 활용 가능',
    ],
    links: [
      { label: 'CGV 영화 예매 (추천)', url: 'https://www.cgv.co.kr', emoji: '🎥' },
      { label: '메가박스 영화 예매 (추천)', url: 'https://www.megabox.co.kr', emoji: '🎞️' },
    ],
    tip: '💡 팁: 롯데시네마는 나라사랑카드 혜택이 적어요. CGV나 메가박스 이용을 추천합니다.',
  },

  // ──────────────────────────────────────────
  // 편의점
  // ──────────────────────────────────────────
  'cv-cu': {
    title: 'CU 할인',
    emoji: '🟣',
    description: 'CU 편의점 카드별 할인 비교',
    cards: [
      { card: '신한', highlight: '최대 28%', desc: '즉시 10% + 캐시백 20%. 팝카드 내장', condition: '무실적', limit: '-', color: '#0046FF' },
      { card: 'IBK', highlight: '10%', desc: '10% 청구할인', condition: '무실적', limit: '일 1회, 월 5회', color: '#003DA5' },
      { card: '하나', highlight: '10%+캐시백', desc: '10% 즉시할인 + 캐시백', condition: '무실적', limit: '-', color: '#009775' },
    ],
    howTo: [
      '1. CU 매장에서 상품 선택 후 카운터로 이동',
      '2. 신한 나라사랑카드를 결제 단말기에 삽입 또는 터치 (28% 최대 할인)',
      '3. 즉시할인 10%는 영수증에서 바로 확인 가능',
      '4. 캐시백 20%는 다음 달 카드 청구 시 차감',
      '5. 모든 카드 무실적이라 부담 없이 사용 가능',
    ],
    links: [
      { label: 'CU 매장 찾기', url: 'https://cu.bgfretail.com', emoji: '🏪' },
      { label: '신한 나라사랑카드', url: 'https://www.shinhancard.com', emoji: '💳' },
    ],
    tip: '💡 팁: CU는 신한이 28%로 최강! 모든 카드 무실적이라 부담 없이 사용 가능.',
  },
  'cv-gs25': {
    title: 'GS25 할인',
    emoji: '🟢',
    description: 'GS25 카드별 할인',
    cards: [
      { card: 'IBK', highlight: '10%', desc: 'CU와 GS25 두 곳 모두 10% 청구할인', condition: '무실적', limit: '일 1회, 월 5회 (CU와 합산)', color: '#003DA5' },
      { card: '신한', highlight: '팝카드 10%', desc: '팝카드 내장으로 일부 상품 10% 할인', condition: '무실적', limit: '-', color: '#0046FF' },
      { card: 'KB국민', highlight: '팝카드 10%', desc: '팝카드 10% 할인', condition: '-', limit: '-', color: '#FFBC00', isLegacy: true },
    ],
    howTo: [
      '1. GS25 매장에서 상품 선택 후 카운터로 이동',
      '2. IBK 나라사랑카드를 결제 단말기에 삽입 또는 터치 (확실한 10%)',
      '3. 10% 청구할인은 다음 달 카드 청구 시 차감',
      '4. 신한/KB 팝카드 할인은 일부 상품에만 적용되므로 IBK 추천',
    ],
    links: [
      { label: 'GS25 매장 찾기', url: 'https://gs25.gsretail.com', emoji: '🏪' },
      { label: 'IBK 나라사랑카드', url: 'https://www.ibk.co.kr', emoji: '💳' },
    ],
    tip: '💡 팁: GS25는 IBK가 가장 확실한 10%! 신한/KB는 팝카드 일부 상품만 적용.',
  },
  'cv-emart24': {
    title: '이마트24',
    emoji: '🟡',
    description: '이마트24는 현재 나라사랑카드 전용 할인이 제한적입니다.',
    cards: [],
    howTo: [
      '1. 이마트24는 나라사랑카드 전용 할인이 없음',
      '2. 대안: CU(신한 28%) 또는 GS25(IBK 10%) 이용 추천',
      '3. 이마트24 자체 할인(신세계포인트 등) 활용 가능',
    ],
    links: [
      { label: 'CU 매장 찾기 (추천)', url: 'https://cu.bgfretail.com', emoji: '🏪' },
      { label: 'GS25 매장 찾기 (추천)', url: 'https://gs25.gsretail.com', emoji: '🏪' },
    ],
    tip: '💡 팁: 이마트24는 나라사랑카드 혜택이 적어요. CU나 GS25 이용을 추천합니다.',
  },
  'cv-seven': {
    title: '세븐일레븐',
    emoji: '🔴',
    description: '세븐일레븐도 현재 나라사랑카드 전용 할인이 제한적입니다.',
    cards: [],
    howTo: [
      '1. 세븐일레븐은 나라사랑카드 전용 할인이 없음',
      '2. 대안: CU(신한 28%) 이용 추천',
      '3. 세븐일레븐 자체 할인(통신사 할인 등) 활용 가능',
    ],
    links: [
      { label: 'CU 매장 찾기 (추천)', url: 'https://cu.bgfretail.com', emoji: '🏪' },
    ],
    tip: '💡 팁: 세븐일레븐은 나라사랑카드 혜택이 적어요. CU(신한 28%) 이용을 추천합니다.',
  },

  // ──────────────────────────────────────────
  // 놀이공원·레저
  // ──────────────────────────────────────────
  'tp-ever': {
    title: '에버랜드',
    emoji: '🎡',
    description: '에버랜드 현역 군인 무료입장 + 동반자 할인',
    cards: [
      { card: '현역 본인', highlight: '무료 입장', desc: '현역 군인 본인은 신분증 제시만으로 무료 입장!', condition: '군인 신분증', limit: '-', color: '#4CAF50' },
      { card: 'IBK', highlight: '동반 1인 50%', desc: '에버랜드 50% 현장할인', condition: '전월 8만원', limit: '월 2회', color: '#003DA5' },
      { card: '하나', highlight: '50%', desc: '놀이공원 50% 할인', condition: '전월 10만원', limit: '월 1회', color: '#009775' },
    ],
    howTo: [
      '1. 에버랜드 정문 매표소 방문',
      '2. 현역 본인: 군인 신분증 제시 → 무료 입장',
      '3. 동반자: 매표소에서 나라사랑카드(IBK/하나) 제시 → 50% 할인 티켓 구매',
      '4. 자유이용권 기준으로 할인 적용',
      '5. 온라인 예매는 할인 미적용될 수 있으니 현장 구매 추천',
    ],
    links: [
      { label: '에버랜드 이용 안내', url: 'https://www.everland.com', emoji: '🎡' },
      { label: 'IBK 나라사랑카드', url: 'https://www.ibk.co.kr', emoji: '💳' },
      { label: '하나 나라사랑카드', url: 'https://www.hanacard.co.kr', emoji: '💳' },
    ],
    tip: '💡 팁: 본인은 무료! 여자친구/가족은 IBK/하나 50% 할인 적용하세요.',
  },
  'tp-lotte': {
    title: '롯데월드',
    emoji: '🏰',
    description: '롯데월드 군인 할인',
    cards: [
      { card: '현역 본인', highlight: '50% 할인', desc: '현역 군인 본인 50% 현장 할인', condition: '군인 신분증', limit: '-', color: '#4CAF50' },
      { card: '동반 1인', highlight: '30% 할인', desc: '동반 1인 30% 할인', condition: '군인 신분증', limit: '-', color: '#FF9800' },
      { card: 'IBK', highlight: '50%', desc: '롯데월드 50% 현장할인', condition: '전월 8만원', limit: '월 2회', color: '#003DA5' },
    ],
    howTo: [
      '1. 롯데월드 잠실역 매표소 방문',
      '2. 현역 본인: 군인 신분증 제시 → 50% 할인 구매',
      '3. 동반 1인: 군인 신분증 + 나라사랑카드 제시 → 30~50% 할인',
      '4. IBK 카드 결제 시 카드 할인과 군인 할인 중 유리한 것 적용',
      '5. 자유이용권 기준으로 적용',
    ],
    links: [
      { label: '롯데월드 이용 안내', url: 'https://www.lotteworld.com', emoji: '🏰' },
      { label: 'IBK 나라사랑카드', url: 'https://www.ibk.co.kr', emoji: '💳' },
    ],
    tip: '💡 팁: 롯데월드는 군인 할인 + 나라사랑카드 할인 중 유리한 것 적용!',
  },
  'tp-gyeongju': {
    title: '경주월드',
    emoji: '🎠',
    description: '경주월드 30~50% 군인 할인',
    cards: [
      { card: '공통', highlight: '30~50%', desc: '현역 군인 30~50% 할인', condition: '군인 신분증', limit: '-', color: COLORS_PRIMARY },
    ],
    howTo: [
      '1. 경주월드 매표소 방문',
      '2. 군인 신분증 제시',
      '3. 30~50% 할인된 가격으로 입장권 구매',
      '4. 시즌/요일에 따라 할인율 변동 가능',
    ],
    links: [
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '💡 팁: 경주 인근 자대라면 꼭 활용하세요!',
  },
  'tp-caribbean': {
    title: '캐리비안베이',
    emoji: '🏊',
    description: '캐리비안베이 30~50% 군인 할인',
    cards: [
      { card: '공통', highlight: '30~50%', desc: '현역 군인 30~50% 할인', condition: '군인 신분증', limit: '-', color: COLORS_PRIMARY },
    ],
    howTo: [
      '1. 캐리비안베이 매표소 방문',
      '2. 군인 신분증 제시',
      '3. 30~50% 할인된 가격으로 입장권 구매',
      '4. 여름 성수기에도 할인 적용 (단, 혼잡 시 입장 제한 가능)',
    ],
    links: [
      { label: '에버랜드/캐리비안베이', url: 'https://www.everland.com', emoji: '🏊' },
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '💡 팁: 여름 휴가 때 에버랜드 무료 + 캐리비안베이 할인 조합 추천!',
  },

  // ──────────────────────────────────────────
  // 통신
  // ──────────────────────────────────────────
  'tc-skt': {
    title: 'SKT 군인 요금제',
    emoji: '📶',
    description: 'SKT 군인 전용 요금제 안내',
    info: [
      { label: '0 군인 데이터 무제한', desc: '월 33,000원, 데이터 무제한, 통화 무제한' },
      { label: '나사카 캐시백', desc: '신한: 이동통신 자동납부 월 5천원 캐시백 (무실적)' },
      { label: '하나 캐시백', desc: '하나: 통신 1,500원 캐시백 월 1회 (전월 10만원)' },
    ],
    howTo: [
      '1. SKT 대리점 방문 또는 T월드 앱/웹사이트 접속',
      '2. 군인 전용 요금제 "0 군인 데이터 무제한" 선택',
      '3. 군인 신분증으로 본인 인증',
      '4. 자동납부 결제수단을 신한 나라사랑카드로 설정 (월 5천원 캐시백)',
      '5. 기존 요금제에서 변경 시 위약금 확인 필요',
    ],
    links: [
      { label: 'SKT T월드', url: 'https://www.tworld.co.kr', emoji: '📶' },
      { label: '신한 나라사랑카드', url: 'https://www.shinhancard.com', emoji: '💳' },
    ],
    tip: '💡 팁: 통신비 자동납부를 신한으로 걸어두면 월 5천원 캐시백 무실적!',
  },
  'tc-kt': {
    title: 'KT 군인 요금제',
    emoji: '📡',
    description: 'KT 군인 전용 요금제',
    info: [
      { label: 'Y 군인 요금제', desc: '월 33,000원대, 데이터 무제한' },
    ],
    howTo: [
      '1. KT 대리점 방문 또는 KT 앱/웹사이트 접속',
      '2. 군인 전용 요금제 검색 후 선택',
      '3. 군인 신분증으로 본인 인증',
      '4. 자동납부 결제수단을 신한 나라사랑카드로 설정 추천',
      '5. 부대 내 KT 수신 상태 먼저 확인',
    ],
    links: [
      { label: 'KT 군인 요금제', url: 'https://www.kt.com', emoji: '📡' },
      { label: '신한 나라사랑카드', url: 'https://www.shinhancard.com', emoji: '💳' },
    ],
    tip: '💡 팁: KT도 군인 전용 요금제가 있어요. 기지국 수신 상태 기준으로 통신사 선택하세요.',
  },
  'tc-lgu': {
    title: 'LGU+ 군인 요금제',
    emoji: '📲',
    description: 'LGU+ 군인 전용 요금제',
    info: [
      { label: '군인 전용 요금제', desc: '월 33,000원대, 데이터 무제한' },
    ],
    howTo: [
      '1. LGU+ 대리점 방문 또는 LGU+ 앱/웹사이트 접속',
      '2. 군인 전용 요금제 검색 후 선택',
      '3. 군인 신분증으로 본인 인증',
      '4. 자동납부 결제수단을 신한 나라사랑카드로 설정 추천',
      '5. 부대 내 LGU+ 수신 상태 먼저 확인',
    ],
    links: [
      { label: 'LGU+ 군인 요금제', url: 'https://www.lguplus.com', emoji: '📲' },
      { label: '신한 나라사랑카드', url: 'https://www.shinhancard.com', emoji: '💳' },
    ],
    tip: '💡 팁: 부대 내 수신 상태가 가장 중요! 같은 부대 선임들에게 어떤 통신사가 잘 터지는지 물어보세요.',
  },
  'tc-mvno': {
    title: '알뜰폰 군인 요금제',
    emoji: '💰',
    description: '알뜰폰(MVNO) 군인 전용 요금제',
    info: [
      { label: '알뜰폰 군인 요금제', desc: '월 20,000원대부터, 데이터 무제한 가능' },
      { label: '장점', desc: '3대 통신사 대비 월 1만원 이상 절약 가능' },
      { label: '주의', desc: '부대 내 수신 상태 확인 필수. 알뜰폰도 3대 통신사 망 사용' },
    ],
    howTo: [
      '1. 알뜰폰 통신사(헬로모바일, 리브모바일 등) 웹사이트 접속',
      '2. 군인 전용 요금제 또는 무제한 요금제 검색',
      '3. 유심 배송 또는 eSIM 개통 선택',
      '4. 알뜰폰도 SKT/KT/LGU+ 망을 사용하므로 부대 내 잘 터지는 통신사 망 선택',
      '5. 월 1만원 절약 시 연 12만원, 이를 적금에 추가 적립 추천',
    ],
    links: [
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '💡 팁: 월 1만원 아끼면 연 12만원! 통신비 절약해서 적금에 더 넣으세요.',
  },

  // ──────────────────────────────────────────
  // 군 복지시설
  // ──────────────────────────────────────────
  'ml-hotel': {
    title: '군 호텔 / 콘도',
    emoji: '🛏️',
    description: '전국 20개 군 호텔 및 콘도 이용 안내',
    info: [
      { label: '이용 자격', desc: '현역 군인 및 가족 (군인 신분증 필수)' },
      { label: '예약 방법', desc: '국군복지단 홈페이지 또는 전화 예약' },
      { label: '주요 시설', desc: '설악 군 리조트, 지리산 군 콘도, 경주 군 호텔 등 전국 20개소' },
      { label: '요금', desc: '일반 호텔 대비 50~70% 저렴' },
    ],
    howTo: [
      '1. 국군복지단 홈페이지 접속 후 회원가입 (군인 인증 필요)',
      '2. 숙박 시설 > 예약 메뉴에서 원하는 시설/날짜 검색',
      '3. 빈 객실 확인 후 온라인 예약 (전화 예약도 가능)',
      '4. 체크인 시 군인 신분증 제시',
      '5. 성수기(7~8월, 연말연시)는 빨리 마감되니 휴가 확정 즉시 예약',
    ],
    links: [
      { label: '국군복지단', url: 'https://www.mwb.mil.kr', emoji: '🏢' },
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '💡 팁: 성수기에는 조기 마감! 휴가 확정되면 바로 예약하세요.',
  },
  'ml-golf': {
    title: '군 골프장',
    emoji: '⛳',
    description: '군 골프장 이용 안내',
    info: [
      { label: '이용 자격', desc: '현역 군인 (일부 시설 가족 동반 가능)' },
      { label: '예약', desc: '부대 복지 담당관 또는 국군복지단 예약' },
    ],
    howTo: [
      '1. 부대 복지 담당관에게 군 골프장 이용 문의',
      '2. 국군복지단 홈페이지에서 예약 가능 여부 확인',
      '3. 예약 후 해당 일시에 골프장 방문',
      '4. 군인 신분증 제시 후 이용',
    ],
    links: [
      { label: '국군복지단', url: 'https://www.mwb.mil.kr', emoji: '🏢' },
    ],
    tip: '💡 팁: 전역 후에는 이용이 어려워요. 복무 중에 경험해보세요!',
  },
  'ml-ski': {
    title: '스키장 할인',
    emoji: '⛷️',
    description: '스키장 시즌권 40% 군인 할인',
    info: [
      { label: '할인율', desc: '시즌권 최대 40% 할인' },
      { label: '이용 조건', desc: '군인 신분증 제시. 부대별 단체 할인도 가능' },
    ],
    howTo: [
      '1. 겨울 시즌 시작 전 부대 복지 담당관에게 스키장 단체 할인 문의',
      '2. 개인 이용 시 스키장 매표소에서 군인 신분증 제시',
      '3. 리프트권, 장비 대여 등 40% 할인 적용',
      '4. 단체(10명 이상) 신청 시 추가 할인 가능',
    ],
    links: [
      { label: '국군복지단', url: 'https://www.mwb.mil.kr', emoji: '🏢' },
    ],
    tip: '💡 팁: 겨울 휴가 때 스키장 시즌권 40% 할인은 큰 혜택! 동기들과 단체로 가면 더 저렴.',
  },
  'ml-gym': {
    title: '군 헬스장',
    emoji: '🏋️',
    description: '부대 내 헬스장 무료 이용',
    info: [
      { label: '이용 시간', desc: '부대별 상이 (보통 06:00~22:00)' },
      { label: '이용 요금', desc: '무료!' },
      { label: '시설', desc: '러닝머신, 벤치프레스, 덤벨 등 기본 장비 구비' },
    ],
    howTo: [
      '1. 부대 내 체력단련실(헬스장) 위치 확인',
      '2. 이용 시간 확인 (부대 내 게시판 또는 행정관 문의)',
      '3. 운동복 착용 후 방문 (별도 신청 불필요)',
      '4. 이용 후 장비 정리 및 청결 유지',
    ],
    links: [
      { label: '국군복지단', url: 'https://www.mwb.mil.kr', emoji: '🏢' },
    ],
    tip: '💡 팁: 군 헬스장은 무료! 자기계발 탭의 운동 루틴과 함께 활용하세요.',
  },

  // ──────────────────────────────────────────
  // 가전·디지털
  // ──────────────────────────────────────────
  'dg-samsung': {
    title: '삼성 K-Hero Festa',
    emoji: '📱',
    description: '삼성전자 연 1회 군인 전용 할인 행사',
    info: [
      { label: '행사 내용', desc: '갤럭시 스마트폰, TV, 냉장고, 세탁기 등 주요 가전 최대 50% 할인' },
      { label: '시기', desc: '연 1회 (보통 하반기). 부대 공지 확인 필수' },
      { label: '구매 방법', desc: '군인 신분 인증 후 전용 온라인몰에서 구매' },
    ],
    howTo: [
      '1. 삼성닷컴 K-Hero Festa 페이지 접속 (행사 기간에만 오픈)',
      '2. 군인 신분 인증 (나라사랑포털 또는 군인 신분증)',
      '3. 원하는 제품 선택 후 할인 가격 확인',
      '4. 결제 및 배송지 입력 (부대 배송 가능)',
      '5. 행사 시기는 부대 공지사항 또는 나라사랑포털에서 확인',
    ],
    links: [
      { label: '삼성 K-Hero', url: 'https://www.samsung.com/sec/', emoji: '📱' },
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '💡 팁: 전역 전 가전 구매 계획이 있다면 K-Hero Festa를 기다리세요! 최대 50% 할인.',
  },
  'dg-welfare': {
    title: '군지원센터 복지몰',
    emoji: '🛍️',
    description: '군지원센터에서 운영하는 복지몰',
    info: [
      { label: '이용 방법', desc: '군지원센터 홈페이지 접속 → 군인 인증 → 구매' },
      { label: '상품', desc: '가전, 생활용품, 식품 등 군인 할인 상품' },
    ],
    howTo: [
      '1. 군지원센터 복지몰 홈페이지 접속',
      '2. 군인 인증 후 회원가입/로그인',
      '3. 원하는 상품 검색 및 장바구니 담기',
      '4. 결제 시 나라사랑카드 사용 추천 (추가 할인 가능)',
      '5. 배송지를 부대 주소로 설정 가능',
    ],
    links: [
      { label: '국군복지단', url: 'https://www.mwb.mil.kr', emoji: '🏢' },
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '💡 팁: 정기적으로 특가 행사가 있으니 자주 확인하세요!',
  },
  'dg-wamall': {
    title: '국군복지단 와몰',
    emoji: '🏪',
    description: '국군복지단에서 운영하는 온라인 쇼핑몰',
    info: [
      { label: '이용 방법', desc: '와몰 홈페이지 → 군인 인증 → 구매' },
      { label: '특징', desc: '군인 전용 할인 + 부대 배송 가능' },
    ],
    howTo: [
      '1. 국군복지단 와몰 홈페이지 접속',
      '2. 군인 인증 후 로그인',
      '3. 원하는 상품 검색 및 주문',
      '4. 결제 시 나라사랑카드 사용',
      '5. 부대 배송 선택 시 부대 주소 입력',
    ],
    links: [
      { label: '국군복지단', url: 'https://www.mwb.mil.kr', emoji: '🏢' },
    ],
    tip: '💡 팁: 부대 배송이 가능해서 편리해요!',
  },
  'dg-lg': {
    title: 'LG Best Shop 군인 할인',
    emoji: '🖥️',
    description: 'LG전자 Best Shop 군인 할인',
    info: [
      { label: '할인 내용', desc: 'LG 가전제품 군인 할인 (매장별 상이)' },
      { label: '이용 방법', desc: '매장 방문 시 군인 신분증 제시' },
    ],
    howTo: [
      '1. LG Best Shop 매장 방문',
      '2. 군인 신분증 제시 후 군인 할인 요청',
      '3. 매장별로 할인율이 다르므로 여러 매장 비교 추천',
      '4. 삼성 K-Hero Festa와 비교 후 유리한 쪽에서 구매',
    ],
    links: [
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '💡 팁: 삼성 K-Hero와 비교해서 유리한 쪽에서 구매하세요!',
  },

  // ──────────────────────────────────────────
  // 지역 혜택
  // ──────────────────────────────────────────
  'rg-chain': {
    title: '전국 체인 할인',
    emoji: '🔗',
    description: '전국 어디서나 이용 가능한 군인 할인 체인',
    info: [
      { label: '블루클럽', desc: '전국 블루클럽 미용실 20% 할인 (군인 신분증 제시)' },
      { label: '이디야커피', desc: '일부 매장 군인 할인 (매장별 상이)' },
      { label: '교보문고', desc: '하나 나라사랑카드 10% 할인 (전월 10만원)' },
      { label: '알라딘', desc: '하나 나라사랑카드 10% 할인 (전월 10만원)' },
    ],
    howTo: [
      '1. 블루클럽: 매장 방문 시 군인 신분증 제시 → 20% 할인',
      '2. 교보문고/알라딘: 하나 나라사랑카드로 결제 → 10% 할인',
      '3. 이디야커피: 매장별로 할인 여부 다르므로 주문 전 확인',
      '4. 외출 시 군인 신분증 반드시 지참',
    ],
    links: [
      { label: '블루클럽 매장 찾기', url: 'https://www.blueclub.co.kr', emoji: '💇' },
      { label: '하나 나라사랑카드', url: 'https://www.hanacard.co.kr', emoji: '💳' },
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '💡 팁: 블루클럽 20%는 전국 어디서나! 외출 시 이발비 절약하세요.',
  },
  'rg-seoul': {
    title: '서울 지역 혜택',
    emoji: '🏙️',
    description: '서울 지역 군인 우대 업체',
    info: [
      { label: '안내', desc: '자대 인근 군인 할인 업체를 앱에서 제보하고 확인할 수 있어요. (곧 오픈 예정)' },
    ],
    howTo: [
      '1. 외출/외박 시 서울 지역 군인 우대 업체 확인',
      '2. 군인 신분증 제시 시 할인 가능 여부 매장에 문의',
      '3. 주변 장병들에게 숨은 할인 업체 정보 공유',
    ],
    links: [
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '💡 팁: 주변 장병들에게 물어보면 숨은 할인 업체를 찾을 수 있어요!',
  },
  'rg-gyeonggi': {
    title: '경기 지역 혜택',
    emoji: '🌳',
    description: '경기 지역 군인 우대 업체',
    info: [
      { label: '안내', desc: '곧 오픈 예정' },
    ],
    howTo: [
      '1. 경기 지역 군인 우대 업체 정보는 준비 중입니다',
      '2. 나라사랑포털에서 지역별 혜택 확인 가능',
    ],
    links: [
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '',
  },
  'rg-chungcheong': {
    title: '충청 지역 혜택',
    emoji: '🌾',
    description: '충청 지역 군인 우대 업체',
    info: [
      { label: '안내', desc: '곧 오픈 예정' },
    ],
    howTo: [
      '1. 충청 지역 군인 우대 업체 정보는 준비 중입니다',
      '2. 나라사랑포털에서 지역별 혜택 확인 가능',
    ],
    links: [
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '',
  },
  'rg-gangwon': {
    title: '강원 지역 혜택',
    emoji: '🏔️',
    description: '강원 지역 군인 우대 업체',
    info: [
      { label: '안내', desc: '곧 오픈 예정' },
    ],
    howTo: [
      '1. 강원 지역 군인 우대 업체 정보는 준비 중입니다',
      '2. 나라사랑포털에서 지역별 혜택 확인 가능',
    ],
    links: [
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '',
  },
  'rg-gyeongsang': {
    title: '경상 지역 혜택',
    emoji: '🌊',
    description: '경상 지역 군인 우대 업체',
    info: [
      { label: '안내', desc: '곧 오픈 예정' },
    ],
    howTo: [
      '1. 경상 지역 군인 우대 업체 정보는 준비 중입니다',
      '2. 나라사랑포털에서 지역별 혜택 확인 가능',
    ],
    links: [
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '',
  },
  'rg-jeolla': {
    title: '전라 지역 혜택',
    emoji: '🌿',
    description: '전라 지역 군인 우대 업체',
    info: [
      { label: '안내', desc: '곧 오픈 예정' },
    ],
    howTo: [
      '1. 전라 지역 군인 우대 업체 정보는 준비 중입니다',
      '2. 나라사랑포털에서 지역별 혜택 확인 가능',
    ],
    links: [
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '',
  },
  'rg-jeju': {
    title: '제주 지역 혜택',
    emoji: '🏝️',
    description: '제주 지역 군인 우대 업체',
    info: [
      { label: '안내', desc: '곧 오픈 예정' },
    ],
    howTo: [
      '1. 제주 지역 군인 우대 업체 정보는 준비 중입니다',
      '2. 나라사랑포털에서 지역별 혜택 확인 가능',
    ],
    links: [
      { label: '나라사랑포털', url: 'https://www.narasarang.or.kr', emoji: '🔗' },
    ],
    tip: '',
  },
};
