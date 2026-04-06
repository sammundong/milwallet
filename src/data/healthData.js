// 밀월렛 헬스 카테고리 데이터

// ============================================
// 헬스 카테고리 - 추천 상품
// ============================================
export const healthProducts = {
  supplements: [
    {
      id: 'h-sup-001',
      name: 'ON 크레아틴 모노하이드레이트 300g',
      brand: 'Optimum Nutrition',
      category: '운동 보조제',
      price: 18900,
      pxAvailable: false,
      links: {
        coupang: 'https://www.coupang.com',
        oliveyoung: null
      },
      commissionRate: 0.03,
      tags: ['벌크업', '근력향상', '특급전사도전'],
      reviewCount: 1247,
      rating: 4.7,
      description: '근력 향상과 근육 성장에 필수적인 크레아틴 보충제'
    },
    {
      id: 'h-sup-002',
      name: '머슬팜 컴뱃 프로틴 초콜릿 1816g',
      brand: 'MusclePharm',
      category: '운동 보조제',
      price: 54900,
      pxAvailable: false,
      links: {
        coupang: 'https://www.coupang.com',
        oliveyoung: null
      },
      commissionRate: 0.03,
      tags: ['단백질보충', '벌크업', '체력검정'],
      reviewCount: 892,
      rating: 4.5,
      description: '1스쿱당 단백질 25g, 복무 중 단백질 보충 최적'
    },
    {
      id: 'h-sup-003',
      name: '나우푸드 스포츠 BCAA 파우더 340g',
      brand: 'NOW Foods',
      category: '운동 보조제',
      price: 23900,
      pxAvailable: false,
      links: {
        coupang: 'https://www.coupang.com',
        oliveyoung: null
      },
      commissionRate: 0.03,
      tags: ['근육회복', '운동중섭취', '지구력'],
      reviewCount: 634,
      rating: 4.4,
      description: '운동 중/후 근육 회복을 도와주는 분지사슬아미노산'
    },
    {
      id: 'h-sup-004',
      name: '나우푸드 마그네슘 시트레이트',
      brand: 'NOW Foods',
      category: '운동 보조제',
      price: 12900,
      pxAvailable: false,
      links: {
        coupang: 'https://www.coupang.com',
        oliveyoung: null
      },
      commissionRate: 0.03,
      tags: ['수면개선', '근육피로', '회복'],
      reviewCount: 456,
      rating: 4.6,
      description: '근육 이완과 수면 질 개선에 도움'
    },
    {
      id: 'h-sup-005',
      name: '솔가 아연 100정',
      brand: 'Solgar',
      category: '운동 보조제',
      price: 15900,
      pxAvailable: false,
      links: {
        coupang: 'https://www.coupang.com',
        oliveyoung: null
      },
      commissionRate: 0.03,
      tags: ['면역력', '테스토스테론', '피부건강'],
      reviewCount: 378,
      rating: 4.5,
      description: '면역력 강화와 테스토스테론 유지에 필수'
    }
  ],
  equipment: [
    {
      id: 'h-eq-001',
      name: '점탄성 폼롤러',
      brand: '일반',
      category: '운동 용품',
      price: 19900,
      pxAvailable: 'partial', // 부대 따라 다름
      links: {
        coupang: 'https://www.coupang.com',
        oliveyoung: null
      },
      commissionRate: 0.04,
      tags: ['근막이완', '회복', '쿨다운'],
      reviewCount: 521,
      rating: 4.6,
      description: '운동 후 근막 이완과 근육 회복에 필수'
    },
    {
      id: 'h-eq-002',
      name: '저항밴드 세트 (5단계)',
      brand: '일반',
      category: '운동 용품',
      price: 12900,
      pxAvailable: false,
      links: {
        coupang: 'https://www.coupang.com',
        oliveyoung: null
      },
      commissionRate: 0.04,
      tags: ['영내운동', '맨몸운동', '저항훈련'],
      reviewCount: 789,
      rating: 4.7,
      description: '생활관에서도 다양한 근력 운동 가능'
    },
    {
      id: 'h-eq-003',
      name: '악력기 (조절식)',
      brand: '일반',
      category: '운동 용품',
      price: 7900,
      pxAvailable: true,
      links: {
        coupang: 'https://www.coupang.com',
        oliveyoung: null
      },
      commissionRate: 0.04,
      tags: ['악력강화', '전완근', '간편운동'],
      reviewCount: 1123,
      rating: 4.3,
      description: 'PX에서도 구매 가능, 언제든 전완근 훈련'
    },
    {
      id: 'h-eq-004',
      name: '도수치료용 마사지볼',
      brand: '일반',
      category: '운동 용품',
      price: 6900,
      pxAvailable: false,
      links: {
        coupang: 'https://www.coupang.com',
        oliveyoung: null
      },
      commissionRate: 0.04,
      tags: ['통증완화', '트리거포인트', '자가마사지'],
      reviewCount: 345,
      rating: 4.5,
      description: '어깨, 등 통증 부위 셀프 마사지에 최적'
    },
    {
      id: 'h-eq-005',
      name: '줄넘기 무게추가형',
      brand: '일반',
      category: '운동 용품',
      price: 9900,
      pxAvailable: false,
      links: {
        coupang: 'https://www.coupang.com',
        oliveyoung: null
      },
      commissionRate: 0.04,
      tags: ['유산소', '체력검정', '칼로리소모'],
      reviewCount: 567,
      rating: 4.4,
      description: '무게 추가로 유산소 효율 극대화'
    }
  ]
};

// ============================================
// 헬스 카테고리 - 루틴 데이터
// ============================================
export const healthRoutines = [
  {
    id: 'hr-001',
    name: '영내 맨몸운동 루틴',
    difficulty: '초급',
    goal: '체력검정 합격',
    duration: 30,
    equipment: '없음',
    steps: [
      { order: 1, name: '워밍업', duration: 5, detail: '제자리 뛰기 + 동적 스트레칭' },
      { order: 2, name: '팔굽혀펴기', sets: 4, reps: '15회', rest: 60, detail: '4세트 x 15회, 세트 간 60초 휴식' },
      { order: 3, name: '윗몸일으키기', sets: 4, reps: '20회', rest: 60, detail: '4세트 x 20회, 세트 간 60초 휴식' },
      { order: 4, name: '스쿼트', sets: 4, reps: '20회', rest: 60, detail: '4세트 x 20회, 세트 간 60초 휴식' },
      { order: 5, name: '쿨다운', duration: 5, detail: '정적 스트레칭 + 심호흡' }
    ],
    recommendedProducts: ['h-sup-004', 'h-eq-003'],
    emoji: '💪'
  },
  {
    id: 'hr-002',
    name: '벌크업 집중 루틴',
    difficulty: '중급',
    goal: '근육량 증가',
    duration: 45,
    equipment: '저항밴드',
    steps: [
      { order: 1, name: '워밍업', duration: 5, detail: '가벼운 유산소 + 동적 스트레칭' },
      { order: 2, name: '풀업 변형', sets: 4, reps: '8회', rest: 90, detail: '문턱 풀업 또는 밴드 보조 풀업' },
      { order: 3, name: '딥스', sets: 4, reps: '12회', rest: 90, detail: '의자 딥스 또는 밴드 딥스' },
      { order: 4, name: '파이크 푸시업', sets: 3, reps: '10회', rest: 90, detail: '어깨 집중 변형 푸시업' },
      { order: 5, name: '밴드 로우', sets: 4, reps: '12회', rest: 60, detail: '저항밴드를 이용한 등 운동' },
      { order: 6, name: '코어 운동', sets: 3, reps: '30초', rest: 60, detail: '플랭크 + 사이드 플랭크' },
      { order: 7, name: '쿨다운', duration: 5, detail: '폼롤러 + 정적 스트레칭' }
    ],
    recommendedProducts: ['h-sup-001', 'h-sup-002', 'h-eq-002'],
    emoji: '🏋️'
  },
  {
    id: 'hr-003',
    name: '특급전사 도전 루틴',
    difficulty: '상급',
    goal: '체력검정 특급',
    duration: 60,
    equipment: '폼롤러',
    steps: [
      { order: 1, name: '워밍업', duration: 5, detail: '버피 10회 + 동적 스트레칭' },
      { order: 2, name: '인터벌 팔굽혀펴기', sets: 5, reps: '25회', rest: 45, detail: '5세트 x 25회, 짧은 휴식' },
      { order: 3, name: '인터벌 윗몸일으키기', sets: 5, reps: '30회', rest: 45, detail: '5세트 x 30회, 짧은 휴식' },
      { order: 4, name: '스쿼트 점프', sets: 4, reps: '20회', rest: 60, detail: '폭발적 하체 파워 훈련' },
      { order: 5, name: '버피 테스트', sets: 3, reps: '15회', rest: 60, detail: '전신 인터벌 트레이닝' },
      { order: 6, name: '마운틴 클라이머', sets: 3, reps: '40초', rest: 30, detail: '코어 + 유산소 동시 훈련' },
      { order: 7, name: '3km 달리기 페이스 훈련', duration: 15, detail: '목표 페이스로 인터벌 러닝' },
      { order: 8, name: '쿨다운', duration: 5, detail: '폼롤러 근막이완 + 호흡' }
    ],
    recommendedProducts: ['h-sup-003', 'h-eq-001', 'h-sup-002'],
    emoji: '🔥'
  }
];

// 체력검정 기준표 (공군 20~21세 남자)
export const fitnessStandards = {
  pushups: { special: 72, grade1: 64, grade2: 56, grade3: 48, unit: '회/2분' },
  situps: { special: 86, grade1: 78, grade2: 70, grade3: 60, unit: '회/2분' },
  running3km: { special: 720, grade1: 780, grade2: 840, grade3: 900, unit: '초' }
};
