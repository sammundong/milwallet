// 밀월렛 건강 카테고리 데이터

// ============================================
// 건강 카테고리 - 추천 상품
// ============================================
export const wellnessProducts = {
  essentials: [
    {
      id: 'w-ess-001',
      name: '센트룸 어드밴스 남성 60정',
      brand: '센트룸',
      category: '필수 기초 영양제',
      price: 19900,
      pxAvailable: true,
      links: { coupang: 'https://www.coupang.com', oliveyoung: 'https://www.oliveyoung.co.kr' },
      commissionRate: 0.03,
      tags: ['기초필수', '면역력', '종합영양'],
      reviewCount: 2341,
      rating: 4.6,
      description: '남성에게 필요한 비타민/미네랄을 한 번에',
      dosage: '1일 1정, 식후 섭취',
      caution: '다른 비타민제와 중복 섭취 주의'
    },
    {
      id: 'w-ess-002',
      name: '노르딕내추럴스 얼티메이트 오메가 180캡슐',
      brand: 'Nordic Naturals',
      category: '필수 기초 영양제',
      price: 42900,
      pxAvailable: false,
      links: { coupang: 'https://www.coupang.com', oliveyoung: null },
      commissionRate: 0.03,
      tags: ['심혈관', '집중력', '뇌건강'],
      reviewCount: 1567,
      rating: 4.8,
      description: '고순도 오메가3, 집중력과 뇌건강에 도움',
      dosage: '1일 2캡슐, 식사 중 섭취',
      caution: '혈액응고 관련 약 복용 시 의사 상담'
    },
    {
      id: 'w-ess-003',
      name: '닥터베스트 비타민D3 5000IU + K2',
      brand: "Doctor's Best",
      category: '필수 기초 영양제',
      price: 16900,
      pxAvailable: false,
      links: { coupang: 'https://www.coupang.com', oliveyoung: null },
      commissionRate: 0.03,
      tags: ['뼈건강', '면역력', '수면'],
      reviewCount: 890,
      rating: 4.7,
      description: '실내 생활이 많은 군인에게 필수 비타민D',
      dosage: '1일 1캡슐, 지방이 포함된 식사와 함께',
      caution: '과량 섭취 시 칼슘 과잉 주의'
    },
    {
      id: 'w-ess-004',
      name: 'NOW Foods 비타민C 1000mg',
      brand: 'NOW Foods',
      category: '필수 기초 영양제',
      price: 12900,
      pxAvailable: false,
      links: { coupang: 'https://www.coupang.com', oliveyoung: null },
      commissionRate: 0.03,
      tags: ['면역력', '항산화', '피로회복'],
      reviewCount: 1234,
      rating: 4.5,
      description: '면역력 강화와 피로 회복에 기본',
      dosage: '1일 1정, 식후',
      caution: '공복 섭취 시 위장 자극 가능'
    },
    {
      id: 'w-ess-005',
      name: '종근당 락토핏 골드 50포',
      brand: '종근당',
      category: '필수 기초 영양제',
      price: 22900,
      pxAvailable: true,
      links: { coupang: 'https://www.coupang.com', oliveyoung: 'https://www.oliveyoung.co.kr' },
      commissionRate: 0.03,
      tags: ['장건강', '면역력', '소화'],
      reviewCount: 3456,
      rating: 4.7,
      description: 'PX에서도 구매 가능한 인기 유산균',
      dosage: '1일 1포, 식전 또는 취침 전',
      caution: '냉장 보관 권장'
    }
  ],
  functional: [
    {
      id: 'w-func-001',
      name: '정관장 홍삼정 에브리타임 10포',
      brand: '정관장',
      category: '기능별 영양제',
      price: 14900,
      pxAvailable: true,
      links: { coupang: 'https://www.coupang.com', oliveyoung: 'https://www.oliveyoung.co.kr' },
      commissionRate: 0.03,
      tags: ['피로회복', '면역력', '체력증진'],
      reviewCount: 2890,
      rating: 4.8,
      description: 'PX 인기 1위, 훈련 피로 회복에 최적',
      dosage: '1일 1포',
      caution: '카페인 음료와 시간차 섭취 권장',
      goalTags: ['피로', '활력', '면역력']
    },
    {
      id: 'w-func-002',
      name: '닥터베스트 마그네슘 글리시네이트',
      brand: "Doctor's Best",
      category: '기능별 영양제',
      price: 19900,
      pxAvailable: false,
      links: { coupang: 'https://www.coupang.com', oliveyoung: null },
      commissionRate: 0.03,
      tags: ['수면질개선', '군생활스트레스', '근육이완'],
      reviewCount: 567,
      rating: 4.6,
      description: '수면 질 개선에 특화된 마그네슘 형태',
      dosage: '취침 30분 전 2캡슐',
      caution: '설사 증상 시 감량',
      goalTags: ['수면', '피로']
    },
    {
      id: 'w-func-003',
      name: '나우푸드 L-테아닌 200mg',
      brand: 'NOW Foods',
      category: '기능별 영양제',
      price: 18900,
      pxAvailable: false,
      links: { coupang: 'https://www.coupang.com', oliveyoung: null },
      commissionRate: 0.03,
      tags: ['집중력', '스트레스완화', '학습효율'],
      reviewCount: 345,
      rating: 4.5,
      description: '자격증 공부 시 집중력 향상에 도움',
      dosage: '1일 1~2캡슐',
      caution: '졸음 유발 가능, 시험 당일 복용 주의',
      goalTags: ['집중력', '수면']
    },
    {
      id: 'w-func-004',
      name: '아이클리어 루테인',
      brand: '아이클리어',
      category: '기능별 영양제',
      price: 14900,
      pxAvailable: false,
      links: { coupang: 'https://www.coupang.com', oliveyoung: 'https://www.oliveyoung.co.kr' },
      commissionRate: 0.03,
      tags: ['야간근무', '모니터작업', '눈건강'],
      reviewCount: 678,
      rating: 4.4,
      description: '야간 근무, 스마트폰 사용이 많은 장병 필수',
      dosage: '1일 1캡슐, 식후',
      caution: '흡연자는 베타카로틴 함유 제품 주의',
      goalTags: ['눈건강']
    }
  ]
};

// 건강 목표 옵션
export const healthGoals = [
  { id: 'fatigue', label: '피로·활력', emoji: '⚡' },
  { id: 'immune', label: '면역력', emoji: '🛡️' },
  { id: 'sleep', label: '수면', emoji: '😴' },
  { id: 'muscle', label: '근육·체력', emoji: '💪' },
  { id: 'focus', label: '집중력', emoji: '🎯' },
  { id: 'skin', label: '피부', emoji: '✨' },
  { id: 'gut', label: '장건강', emoji: '🫄' },
  { id: 'eye', label: '눈건강', emoji: '👁️' }
];

// 식단 가이드
export const dietGuides = [
  {
    id: 'dg-001',
    title: '급식으로 단백질 목표 채우는 법',
    emoji: '🍖',
    content: [
      '급식 메뉴에서 단백질 식품(고기, 생선, 두부) 우선 선택',
      '계란 추가 섭취: PX에서 삶은 계란 구매 활용',
      '두부 메뉴일 때 반찬 추가 요청',
      '국에 포함된 고기/해물도 단백질원으로 활용'
    ],
    recommendedProducts: ['h-sup-002'],
    tip: '급식만으로 부족한 단백질은 유청단백질로 보충'
  },
  {
    id: 'dg-002',
    title: '체중 관리 시기별 식단 전략',
    emoji: '⚖️',
    content: [
      '벌크업 시기: 급식 2인분 + 단백질 보충제 + PX 간식 활용',
      '커팅 시기: 급식 중 탄수화물 절반만 섭취 + 단백질 우선',
      '칼로리 계산: 체중(kg) x 33 = 벌크업 목표 칼로리',
      '체중(kg) x 25 = 커팅 목표 칼로리'
    ],
    recommendedProducts: ['w-ess-001', 'w-ess-002'],
    tip: '급격한 식단 변화는 체력 저하 원인, 점진적 조절 권장'
  },
  {
    id: 'dg-003',
    title: 'PX 활용 건강 간식 가이드',
    emoji: '🏪',
    content: [
      '견과류 믹스: 200kcal, 단백질 7g - 오후 간식 최적',
      '그릭요거트: 130kcal, 단백질 15g - 취침 전 카제인 대용',
      '단백질바: 180kcal, 단백질 20g - 운동 후 보충',
      '고구마 스낵: 150kcal, 식이섬유 풍부 - 건강한 탄수화물'
    ],
    recommendedProducts: [],
    tip: 'PX 간식도 전략적으로 선택하면 영양 보충 가능'
  }
];
