// 밀월렛 자기계발 비즈니스 모델 데이터

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

// ============================================
// 도서 카테고리 - 추천 상품
// ============================================
export const bookProducts = {
  selfDev: [
    {
      id: 'b-sd-001',
      name: '아주 작은 습관의 힘',
      author: '제임스 클리어',
      publisher: '비즈니스북스',
      price: 17800,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '자기계발',
      militaryReason: '군 복무 중 매일 반복 가능한 작은 루틴 설계에 최적',
      keyMessage: '매일 1%만 개선하면 1년 후 37배 성장',
      emoji: '📗'
    },
    {
      id: 'b-sd-002',
      name: '원씽 (The ONE Thing)',
      author: '게리 켈러',
      publisher: '비즈니스북스',
      price: 16800,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '자기계발',
      militaryReason: '복무 중 자기계발 목표 하나에 집중하는 전략',
      keyMessage: '가장 중요한 한 가지에 집중하라',
      emoji: '🎯'
    },
    {
      id: 'b-sd-003',
      name: '미라클 모닝',
      author: '할 엘로드',
      publisher: '한빛비즈',
      price: 15800,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '자기계발',
      militaryReason: '기상나팔 후 개인정비 시간 30분 활용 루틴',
      keyMessage: '아침 루틴이 하루를 결정한다',
      emoji: '🌅'
    },
    {
      id: 'b-sd-004',
      name: '도둑맞은 집중력',
      author: '요한 하리',
      publisher: '어크로스',
      price: 18000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '자기계발',
      militaryReason: '스마트폰 제한 환경에서 집중력 극대화',
      keyMessage: '주의력은 한정 자원, 전략적으로 사용하라',
      emoji: '🧠'
    }
  ],
  finance: [
    {
      id: 'b-fn-001',
      name: '부의 추월차선',
      author: 'MJ 드마코',
      publisher: '토트',
      price: 18000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '재테크',
      militaryReason: '전역 후 창업 마인드셋 구축',
      keyMessage: '부는 느린 차선이 아닌 추월차선에서 만들어진다',
      emoji: '🚀'
    },
    {
      id: 'b-fn-002',
      name: '주식투자 무작정 따라하기',
      author: '윤재수',
      publisher: '길벗',
      price: 18000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '재테크',
      militaryReason: '장병적금 만기 후 투자 입문',
      keyMessage: '소액부터 시작하는 체계적 투자 입문',
      emoji: '📈'
    },
    {
      id: 'b-fn-003',
      name: '돈의 심리학',
      author: '모건 하우절',
      publisher: '인플루엔셜',
      price: 17800,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '재테크',
      militaryReason: '복무 중 자산 형성 마인드셋',
      keyMessage: '돈에 대한 올바른 생각이 부의 출발점',
      emoji: '💰'
    }
  ],
  language: [
    {
      id: 'b-lang-001',
      name: '해커스 TOEIC RC+LC 통합',
      author: '해커스',
      publisher: '해커스',
      price: 38000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '어학·시험',
      militaryReason: '군 도서관 비치 확인 후 개인 구매 권장',
      keyMessage: 'TOEIC 기초부터 실전까지 통합 학습',
      emoji: '🇺🇸'
    },
    {
      id: 'b-lang-002',
      name: '이기적 정보처리기사 필기',
      author: '영진닷컴',
      publisher: '영진닷컴',
      price: 32000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '어학·시험',
      militaryReason: 'IT 분야 진출의 첫 관문',
      keyMessage: '정보처리기사 필기 완벽 대비',
      emoji: '💻'
    },
    {
      id: 'b-lang-003',
      name: 'SQLD 자격증 한번에 합격하기',
      author: '시나공',
      publisher: '시나공',
      price: 28000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '어학·시험',
      militaryReason: '데이터 분야 입문 자격증',
      keyMessage: 'SQL 기초부터 자격증 합격까지',
      emoji: '🗄️'
    }
  ],
  humanities: [
    {
      id: 'b-hum-001',
      name: '사피엔스',
      author: '유발 하라리',
      publisher: '김영사',
      price: 22000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '인문·교양',
      militaryReason: '인류 역사에 대한 깊은 통찰',
      keyMessage: '호모 사피엔스는 어떻게 세상을 지배했는가',
      emoji: '🌍'
    },
    {
      id: 'b-hum-002',
      name: '총, 균, 쇠',
      author: '재레드 다이아몬드',
      publisher: '문학사상',
      price: 25000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '인문·교양',
      militaryReason: '문명의 발전 원리를 이해하는 명저',
      keyMessage: '환경이 문명의 운명을 결정한다',
      emoji: '🏛️'
    },
    {
      id: 'b-hum-003',
      name: '코스모스',
      author: '칼 세이건',
      publisher: '사이언스북스',
      price: 32000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '인문·교양',
      militaryReason: '야간 근무 시 별을 보며 읽기 좋은 책',
      keyMessage: '우주 속 인간의 위치를 탐구하다',
      emoji: '🌌'
    }
  ]
};

// 독서 루틴
export const readingRoutines = {
  militaryReading: {
    title: '군 생활 맞춤 독서법',
    methods: [
      '점호 후 취침 전 30분 독서 루틴',
      '외출/외박 시 도서관 방문 습관',
      '전자책 앱(밀리의 서재, 리디) 활용 가이드',
      '휴대폰 사용 시간 중 30분을 독서로 대체'
    ]
  },
  monthlyChallenge: [
    { month: 1, theme: '자기계발', emoji: '🎯' },
    { month: 2, theme: '재테크', emoji: '💰' },
    { month: 3, theme: '어학', emoji: '🌐' },
    { month: 4, theme: '인문', emoji: '📚' },
    { month: 5, theme: '과학/기술', emoji: '🔬' },
    { month: 6, theme: '역사', emoji: '🏛️' },
    { month: 7, theme: '심리학', emoji: '🧠' },
    { month: 8, theme: '경영/리더십', emoji: '👔' },
    { month: 9, theme: '철학', emoji: '🤔' },
    { month: 10, theme: '에세이', emoji: '✍️' },
    { month: 11, theme: '자유선택', emoji: '📖' },
    { month: 12, theme: '올해의 책 재독', emoji: '⭐' }
  ],
  recordTemplate: {
    fields: ['한줄평', '핵심문장 3개', '실천사항 1개']
  }
};

// ============================================
// 군수(군대수능) 카테고리 - 추천 상품
// ============================================
export const militaryExamProducts = {
  suneung: [
    {
      id: 'me-su-001',
      name: '수능완성 국어/수학/영어 세트',
      publisher: 'EBS',
      price: 27000,
      priceRange: '8,000~10,000원 (과목당)',
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '수능 대비',
      militaryReason: '복무 중 독학 최적 교재, EBS 연계율 높음',
      subjects: ['국어', '수학', '영어'],
      emoji: '📝'
    },
    {
      id: 'me-su-002',
      name: '수능특강 과목별',
      publisher: 'EBS',
      price: 24000,
      priceRange: '7,000~9,000원 (과목당)',
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '수능 대비',
      militaryReason: 'EBS 연계 교재의 기본, 개념 정리용',
      subjects: ['국어', '수학', '영어', '탐구'],
      emoji: '📖'
    },
    {
      id: 'me-su-003',
      name: '마더텅 수능기출 시리즈',
      publisher: '마더텅',
      price: 20000,
      priceRange: '18,000~22,000원 (과목당)',
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '수능 대비',
      militaryReason: '기출 반복 학습에 최적, 해설 상세',
      subjects: ['국어', '수학', '영어'],
      emoji: '📚'
    },
    {
      id: 'me-su-004',
      name: 'N제 시리즈 (국어/수학)',
      publisher: '다양',
      price: 16500,
      priceRange: '15,000~18,000원 (과목당)',
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '수능 대비',
      militaryReason: '실전 감각 키우기, 다양한 유형 연습',
      subjects: ['국어', '수학'],
      emoji: '✏️'
    }
  ],
  transfer: [
    {
      id: 'me-tr-001',
      name: '편입 영어 종합편',
      publisher: '넥서스',
      price: 25000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '편입 대비',
      militaryReason: '전역 후 편입 목표 장병 필수',
      emoji: '🇬🇧'
    },
    {
      id: 'me-tr-002',
      name: '편입 수학 기본서',
      publisher: '씨마스',
      price: 28000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '편입 대비',
      militaryReason: '이공계 편입 필수 교재',
      emoji: '🔢'
    },
    {
      id: 'me-tr-003',
      name: 'TOPIK 한국어능력시험 대비',
      publisher: '시대고시기획',
      price: 22000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '편입 대비',
      militaryReason: '다문화 장병 한국어능력 공인 취득',
      emoji: '🇰🇷'
    }
  ],
  onlineCourses: [
    {
      id: 'me-ol-001',
      name: '메가스터디 군인 할인 연간 이용권',
      provider: '메가스터디',
      price: 890000,
      discountPrice: 590000,
      links: { direct: 'https://www.megastudy.net' },
      commissionRate: 0.05,
      category: '온라인 강의',
      description: '군인 신분 인증 시 최대 40% 할인',
      emoji: '🎓'
    },
    {
      id: 'me-ol-002',
      name: '이투스 군인 패스',
      provider: '이투스',
      price: 790000,
      discountPrice: 490000,
      links: { direct: 'https://www.etoos.com' },
      commissionRate: 0.05,
      category: '온라인 강의',
      description: '군인 전용 할인 패키지',
      emoji: '📱'
    },
    {
      id: 'me-ol-003',
      name: 'EBSi 무료 강의',
      provider: 'EBS',
      price: 0,
      discountPrice: 0,
      links: { direct: 'https://www.ebsi.co.kr' },
      commissionRate: 0,
      category: '온라인 강의',
      description: '무료! 수능 연계 교재 강의 제공',
      emoji: '🆓'
    }
  ]
};

// 군수 학습 루틴
export const examRoutines = {
  yearPlan: {
    title: '복무 중 수능 준비 12개월 로드맵',
    phases: [
      { months: '1~3개월', phase: '기초 개념 정리', detail: 'EBS 수능특강으로 전 과목 기초 개념 학습', emoji: '🌱' },
      { months: '4~6개월', phase: '기출 집중', detail: '마더텅 기출문제집으로 유형별 반복 학습', emoji: '📊' },
      { months: '7~9개월', phase: '실전 모의고사', detail: 'N제 + 모의고사로 실전 감각 향상', emoji: '🎯' },
      { months: '10~12개월', phase: '파이널 정리', detail: '수능완성 + 오답노트 집중 복습', emoji: '🏁' }
    ]
  },
  dailyPlan: {
    title: '일일 학습 플랜',
    schedule: [
      { time: '기상 후 개인정비 (30분)', subject: '영어 단어', detail: '단어 50개 암기 + 전날 복습', emoji: '🌅' },
      { time: '점심 후 휴식 (30분)', subject: '수학 문제풀이', detail: '기출 5문제 풀이 + 오답 정리', emoji: '☀️' },
      { time: '취침 전 (30분)', subject: '국어 독서', detail: '비문학 지문 3개 읽기 + 분석', emoji: '🌙' }
    ]
  },
  subjectTips: [
    { subject: '국어', tip: '기출 지문 반복 읽기 - 지문 구조 파악 훈련', emoji: '📝' },
    { subject: '수학', tip: '오답노트 작성 필수 - 틀린 문제 3회 이상 반복', emoji: '🔢' },
    { subject: '영어', tip: '단어 500개 암기 우선 - 어휘력이 곧 점수', emoji: '🔤' }
  ]
};

// ============================================
// 자격증 카테고리 - 추천 상품
// ============================================
export const certProducts = {
  it: [
    {
      id: 'c-it-001',
      name: '이기적 정보처리기사 필기+실기 세트',
      publisher: '영진닷컴',
      price: 54000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com', coupang: 'https://www.coupang.com' },
      commissionRate: 0.03,
      category: 'IT 자격증',
      militaryReason: '전역 후 IT 취업 필수 자격증, 군 복무 중 독학 합격 사례 다수',
      passRate: '필기 42%, 실기 28%',
      prepPeriod: '3~4개월',
      militaryPassable: true,
      schedule: '매년 3회 시행 (3월, 7월, 11월)',
      emoji: '💻'
    },
    {
      id: 'c-it-002',
      name: '시나공 SQLD',
      publisher: '시나공',
      price: 28000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com', coupang: 'https://www.coupang.com' },
      commissionRate: 0.03,
      category: 'IT 자격증',
      militaryReason: '데이터 분야 입문 자격증, 난이도 중간',
      passRate: '약 50%',
      prepPeriod: '1~2개월',
      militaryPassable: true,
      schedule: '연 4회 시행',
      emoji: '🗄️'
    },
    {
      id: 'c-it-003',
      name: '컴퓨터활용능력 1급 기본서',
      publisher: '이기적',
      price: 25000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com', coupang: 'https://www.coupang.com' },
      commissionRate: 0.03,
      category: 'IT 자격증',
      militaryReason: '사무직 취업 시 필수, 실기가 관건',
      passRate: '필기 60%, 실기 35%',
      prepPeriod: '2~3개월',
      militaryPassable: true,
      schedule: '매월 시행',
      emoji: '🖥️'
    },
    {
      id: 'c-it-004',
      name: 'AWS 클라우드 자격증 준비',
      publisher: '영문교재',
      price: 45000,
      links: { coupang: 'https://www.coupang.com' },
      commissionRate: 0.03,
      category: 'IT 자격증',
      militaryReason: '클라우드 시대 필수 자격증, 영어 실력도 함께',
      passRate: '약 65%',
      prepPeriod: '2~3개월',
      militaryPassable: true,
      schedule: '온라인 상시',
      emoji: '☁️'
    }
  ],
  language: [
    {
      id: 'c-lang-001',
      name: 'TOEIC 종합서',
      publisher: '해커스',
      price: 38000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com', coupang: 'https://www.coupang.com' },
      commissionRate: 0.03,
      category: '어학 자격증',
      militaryReason: '취업 필수 스펙, 군 복무 중 집중 학습 최적',
      passRate: '목표 점수 달성률 약 40%',
      prepPeriod: '2~3개월 (750점 기준)',
      militaryPassable: true,
      schedule: '매월 시행',
      emoji: '🇺🇸'
    },
    {
      id: 'c-lang-002',
      name: 'JLPT N3/N2 대비',
      publisher: '시사일본어사',
      price: 18000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '어학 자격증',
      militaryReason: '일본어 능력 공인, 일본 취업/유학 목표 시',
      passRate: 'N3: 50%, N2: 35%',
      prepPeriod: 'N3: 3개월, N2: 6개월',
      militaryPassable: true,
      schedule: '연 2회 (7월, 12월)',
      emoji: '🇯🇵'
    },
    {
      id: 'c-lang-003',
      name: 'HSK 4급/5급 대비',
      publisher: '동양북스',
      price: 22000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '어학 자격증',
      militaryReason: '중국어 능력 공인, 무역/외교 분야 진출 시 유리',
      passRate: '4급: 60%, 5급: 40%',
      prepPeriod: '4급: 3개월, 5급: 6개월',
      militaryPassable: true,
      schedule: '매월 시행',
      emoji: '🇨🇳'
    },
    {
      id: 'c-lang-004',
      name: 'OPIc IM 공략',
      publisher: '해커스',
      price: 19800,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com', coupang: 'https://www.coupang.com' },
      commissionRate: 0.03,
      category: '어학 자격증',
      militaryReason: '영어 말하기 능력 증명, TOEIC과 병행 추천',
      passRate: 'IM2 이상 약 55%',
      prepPeriod: '1~2개월',
      militaryPassable: true,
      schedule: '매주 시행',
      emoji: '🗣️'
    }
  ],
  finance: [
    {
      id: 'c-fin-001',
      name: '한국사능력검정시험 심화',
      publisher: '에듀윌',
      price: 20000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com', coupang: 'https://www.coupang.com' },
      commissionRate: 0.03,
      category: '금융/공무원 자격증',
      militaryReason: '공무원 시험 필수, 군 복무 중 취득 최적',
      passRate: '1급: 25%, 2급: 45%',
      prepPeriod: '1~2개월',
      militaryPassable: true,
      schedule: '연 6회',
      emoji: '🏯'
    },
    {
      id: 'c-fin-002',
      name: '펀드투자권유대행인',
      publisher: '한국FPSB',
      price: 18000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '금융/공무원 자격증',
      militaryReason: '금융권 취업 첫 관문, 비교적 쉬운 난이도',
      passRate: '약 60%',
      prepPeriod: '1개월',
      militaryPassable: true,
      schedule: '매주 시행',
      emoji: '📊'
    },
    {
      id: 'c-fin-003',
      name: '증권투자권유대행인',
      publisher: '금융투자협회',
      price: 18000,
      links: { aladin: 'https://www.aladin.co.kr', yes24: 'https://www.yes24.com' },
      commissionRate: 0.03,
      category: '금융/공무원 자격증',
      militaryReason: '증권사 취업 필수, 펀드투자권유대행인과 병행',
      passRate: '약 55%',
      prepPeriod: '1~2개월',
      militaryPassable: true,
      schedule: '매주 시행',
      emoji: '💹'
    }
  ]
};

// 자격증 합격 루틴
export const certRoutines = [
  {
    id: 'cr-001',
    certName: '정보처리기사',
    totalDays: 90,
    dailyHours: 2,
    phases: [
      { period: '1~30일', phase: '필기 이론', detail: '5과목 이론 학습, 교재 1회독', percentage: 33 },
      { period: '31~50일', phase: '필기 기출', detail: '최근 5개년 기출문제 3회 반복', percentage: 55 },
      { period: '51~60일', phase: '필기 시험', detail: '모의고사 + 오답 정리 → 필기 응시', percentage: 66 },
      { period: '61~90일', phase: '실기 준비', detail: '실기 이론 + 코딩 실습 + 기출', percentage: 100 }
    ],
    relatedProducts: ['c-it-001'],
    emoji: '💻'
  },
  {
    id: 'cr-002',
    certName: 'TOEIC 750점',
    totalDays: 60,
    dailyHours: 1,
    phases: [
      { period: '1~20일', phase: 'LC 집중', detail: 'Part 1~4 유형별 집중 학습', percentage: 33 },
      { period: '21~40일', phase: 'RC 집중', detail: 'Part 5~7 문법/독해 집중 학습', percentage: 66 },
      { period: '41~60일', phase: '실전 모의고사', detail: '주 2회 실전 모의고사 + 오답 정리', percentage: 100 }
    ],
    relatedProducts: ['c-lang-001'],
    emoji: '🇺🇸'
  },
  {
    id: 'cr-003',
    certName: '한국사 1급',
    totalDays: 30,
    dailyHours: 1,
    phases: [
      { period: '1~15일', phase: '시대별 개념', detail: '선사~현대 시대순 개념 학습', percentage: 50 },
      { period: '16~25일', phase: '기출 문제', detail: '최근 10회 기출 반복 풀이', percentage: 83 },
      { period: '26~30일', phase: '파이널 정리', detail: '오답 노트 + 핵심 키워드 암기', percentage: 100 }
    ],
    relatedProducts: ['c-fin-001'],
    emoji: '🏯'
  }
];

// ============================================
// 피부 카테고리 - 추천 상품
// ============================================
export const skinProducts = {
  cleansing: [
    {
      id: 's-cl-001',
      name: '세타필 젠틀 스킨 클렌저',
      brand: '세타필',
      category: '클렌징',
      price: 18900,
      pxAvailable: false,
      links: { coupang: 'https://www.coupang.com', oliveyoung: 'https://www.oliveyoung.co.kr' },
      commissionRate: 0.04,
      tags: ['민감성', '저자극', '군생활필수'],
      reviewCount: 3456,
      rating: 4.7,
      description: '피부과 추천 저자극 클렌저, 건조한 영내 환경에 최적',
      skinTypes: ['건성', '민감성', '정상']
    },
    {
      id: 's-cl-002',
      name: '라운드랩 자작나무 수분 폼클렌저',
      brand: '라운드랩',
      category: '클렌징',
      price: 9900,
      pxAvailable: false,
      links: { coupang: 'https://www.coupang.com', oliveyoung: 'https://www.oliveyoung.co.kr' },
      commissionRate: 0.04,
      tags: ['수분', '가성비', '순한세안'],
      reviewCount: 2345,
      rating: 4.5,
      description: '수분감 있는 폼클렌저, 세안 후 당김 없음',
      skinTypes: ['건성', '복합성', '정상']
    },
    {
      id: 's-cl-003',
      name: '클리어쿨 건성용 클렌저',
      brand: '클리어쿨',
      category: '클렌징',
      price: 5900,
      pxAvailable: true,
      links: { coupang: 'https://www.coupang.com', oliveyoung: null },
      commissionRate: 0.04,
      tags: ['PX구매', '가성비', '기본세안'],
      reviewCount: 890,
      rating: 4.0,
      description: 'PX에서 바로 구매 가능한 기본 클렌저',
      skinTypes: ['건성', '정상']
    }
  ],
  moisturizing: [
    {
      id: 's-mo-001',
      name: '세타필 모이스처라이징 크림',
      brand: '세타필',
      category: '보습',
      price: 21900,
      pxAvailable: false,
      links: { coupang: 'https://www.coupang.com', oliveyoung: 'https://www.oliveyoung.co.kr' },
      commissionRate: 0.04,
      tags: ['고보습', '저자극', '건조한영내'],
      reviewCount: 4567,
      rating: 4.8,
      description: '건조한 영내 환경에서 피부 보호의 정석',
      skinTypes: ['건성', '민감성', '정상']
    },
    {
      id: 's-mo-002',
      name: '라운드랩 독도 토너',
      brand: '라운드랩',
      category: '보습',
      price: 15900,
      pxAvailable: false,
      links: { coupang: 'https://www.coupang.com', oliveyoung: 'https://www.oliveyoung.co.kr' },
      commissionRate: 0.04,
      tags: ['수분충전', '진정', '기본토너'],
      reviewCount: 5678,
      rating: 4.7,
      description: '대용량 수분 토너, 가성비 최고',
      skinTypes: ['건성', '복합성', '지성', '정상']
    },
    {
      id: 's-mo-003',
      name: '닥터자르트 시카페어 크림',
      brand: '닥터자르트',
      category: '보습',
      price: 29000,
      pxAvailable: false,
      links: { coupang: 'https://www.coupang.com', oliveyoung: 'https://www.oliveyoung.co.kr' },
      commissionRate: 0.04,
      tags: ['외부활동후진정', '시카', '재생'],
      reviewCount: 3210,
      rating: 4.6,
      description: '야외 훈련 후 자극받은 피부 진정에 탁월',
      skinTypes: ['민감성', '복합성']
    }
  ],
  sunscreen: [
    {
      id: 's-sun-001',
      name: '라운드랩 자외선차단제 SPF50+',
      brand: '라운드랩',
      category: '자외선차단',
      price: 12900,
      pxAvailable: false,
      links: { coupang: 'https://www.coupang.com', oliveyoung: 'https://www.oliveyoung.co.kr' },
      commissionRate: 0.04,
      tags: ['외부훈련필수', '야외작업', 'SPF50+'],
      reviewCount: 4321,
      rating: 4.6,
      description: '야외 훈련 필수템, 백탁 없는 산뜻한 마무리',
      skinTypes: ['건성', '복합성', '지성', '정상']
    },
    {
      id: 's-sun-002',
      name: '비오레 UV 수분에센스 SPF50+',
      brand: '비오레',
      category: '자외선차단',
      price: 15900,
      pxAvailable: false,
      links: { coupang: null, oliveyoung: 'https://www.oliveyoung.co.kr' },
      commissionRate: 0.04,
      tags: ['수분감', '가벼운사용감', 'SPF50+'],
      reviewCount: 2890,
      rating: 4.5,
      description: '에센스 타입으로 가볍게 바르는 자외선차단',
      skinTypes: ['지성', '복합성', '정상']
    }
  ],
  specialCare: [
    {
      id: 's-sp-001',
      name: '메디힐 마스크팩 10매',
      brand: '메디힐',
      category: '특수케어',
      price: 9900,
      pxAvailable: false,
      links: { coupang: 'https://www.coupang.com', oliveyoung: 'https://www.oliveyoung.co.kr' },
      commissionRate: 0.04,
      tags: ['외박필수템', '수분폭탄', '스페셜케어'],
      reviewCount: 6789,
      rating: 4.6,
      description: '외박 전날 필수! 집중 수분 공급',
      skinTypes: ['건성', '복합성', '정상', '민감성', '지성']
    },
    {
      id: 's-sp-002',
      name: '리더스 마스크팩',
      brand: '리더스',
      category: '특수케어',
      price: 8900,
      pxAvailable: false,
      links: { coupang: 'https://www.coupang.com', oliveyoung: null },
      commissionRate: 0.04,
      tags: ['가성비', '수분', '대용량'],
      reviewCount: 3456,
      rating: 4.3,
      description: '가성비 좋은 데일리 마스크팩',
      skinTypes: ['건성', '복합성', '정상']
    },
    {
      id: 's-sp-003',
      name: '에스트라 아토베리어 크림',
      brand: '에스트라',
      category: '특수케어',
      price: 22000,
      pxAvailable: false,
      links: { coupang: 'https://www.coupang.com', oliveyoung: 'https://www.oliveyoung.co.kr' },
      commissionRate: 0.04,
      tags: ['여드름', '민감성', '피부장벽강화'],
      reviewCount: 4567,
      rating: 4.7,
      description: '여드름/민감성 피부 장벽 강화에 특화',
      skinTypes: ['민감성', '건성']
    }
  ]
};

// 피부 루틴 데이터
export const skinRoutines = {
  dry: {
    morning: [
      { step: 1, name: '저자극 폼클렌저', duration: '2분', method: '미지근한 물로 거품 내어 부드럽게 세안', productId: 's-cl-001', pxAlt: 's-cl-003' },
      { step: 2, name: '토너', duration: '1분', method: '화장솜에 충분히 적셔 얼굴 전체 패팅', productId: 's-mo-002', pxAlt: null },
      { step: 3, name: '수분 에센스', duration: '1분', method: '2~3방울 손바닥에 덜어 얼굴에 흡수', productId: null, pxAlt: null },
      { step: 4, name: '보습 크림', duration: '1분', method: '적당량을 얼굴 전체에 고르게 도포', productId: 's-mo-001', pxAlt: null },
      { step: 5, name: '자외선차단제', duration: '1분', method: '외출 30분 전 충분한 양 도포', productId: 's-sun-001', pxAlt: null }
    ],
    evening: [
      { step: 1, name: '폼클렌저', duration: '2분', method: '하루 먼지와 피지를 깨끗하게 제거', productId: 's-cl-001', pxAlt: 's-cl-003' },
      { step: 2, name: '토너', duration: '1분', method: '화장솜 패팅으로 잔여물 제거 + 수분 공급', productId: 's-mo-002', pxAlt: null },
      { step: 3, name: '수분 에센스', duration: '1분', method: '건조한 부위 집중 도포', productId: null, pxAlt: null },
      { step: 4, name: '보습 크림 (두겁게)', duration: '1분', method: '아침보다 두껍게 도포, 수분 증발 방지', productId: 's-mo-001', pxAlt: null }
    ]
  },
  oily: {
    morning: [
      { step: 1, name: '살리실산 폼클렌저', duration: '2분', method: 'T존 위주로 꼼꼼히 세안', productId: 's-cl-002', pxAlt: 's-cl-003' },
      { step: 2, name: '토너', duration: '1분', method: '모공 수렴 효과 토너 사용', productId: 's-mo-002', pxAlt: null },
      { step: 3, name: '오일프리 수분 에센스', duration: '1분', method: '가벼운 텍스처로 수분만 보충', productId: null, pxAlt: null },
      { step: 4, name: '가벼운 로션', duration: '1분', method: '유분기 적은 로션 얇게 도포', productId: null, pxAlt: null },
      { step: 5, name: '자외선차단제', duration: '1분', method: '논코메도제닉 제품 사용', productId: 's-sun-002', pxAlt: null }
    ],
    evening: [
      { step: 1, name: '폼클렌저', duration: '2분', method: '피지 제거에 집중, 너무 강하게 문지르지 않기', productId: 's-cl-002', pxAlt: 's-cl-003' },
      { step: 2, name: '토너', duration: '1분', method: '피부 pH 밸런스 맞추기', productId: 's-mo-002', pxAlt: null },
      { step: 3, name: '수분 젤', duration: '1분', method: '가벼운 수분 젤로 마무리', productId: null, pxAlt: null }
    ]
  },
  acne: {
    morning: [
      { step: 1, name: '저자극 클렌저', duration: '2분', method: '자극 최소화, 미지근한 물 사용', productId: 's-cl-001', pxAlt: 's-cl-003' },
      { step: 2, name: '진정 토너', duration: '1분', method: '시카 성분 토너로 진정', productId: 's-mo-002', pxAlt: null },
      { step: 3, name: '시카 크림', duration: '1분', method: '트러블 부위 집중 도포', productId: 's-mo-003', pxAlt: null },
      { step: 4, name: '자외선차단제', duration: '1분', method: '논코메도제닉 제품 필수', productId: 's-sun-001', pxAlt: null }
    ],
    evening: [
      { step: 1, name: '저자극 클렌저', duration: '2분', method: '트러블 부위 자극 최소화', productId: 's-cl-001', pxAlt: 's-cl-003' },
      { step: 2, name: '진정 토너', duration: '1분', method: '충분한 양으로 진정', productId: 's-mo-002', pxAlt: null },
      { step: 3, name: '아토베리어 크림', duration: '1분', method: '피부 장벽 강화에 집중', productId: 's-sp-003', pxAlt: null }
    ]
  },
  specialLeave: {
    name: '외박 전날 집중 루틴',
    steps: [
      { step: 1, name: '딥클렌징', duration: '3분', method: '일반 세안보다 꼼꼼하게' },
      { step: 2, name: '토너 패팅', duration: '2분', method: '5겹 패팅으로 수분 충전' },
      { step: 3, name: '마스크팩', duration: '15분', method: '수분 마스크팩 집중 케어', productId: 's-sp-001' },
      { step: 4, name: '에센스', duration: '1분', method: '마스크팩 후 에센스로 마무리' },
      { step: 5, name: '보습 크림', duration: '1분', method: '수분 가두기', productId: 's-mo-001' }
    ]
  }
};

// 피부 타입 & 고민 옵션
export const skinTypes = ['건성', '지성', '복합성', '민감성', '정상'];
export const skinConcerns = [
  { id: 'acne', label: '여드름', emoji: '🔴' },
  { id: 'trouble', label: '트러블', emoji: '😣' },
  { id: 'dryness', label: '건조함', emoji: '🏜️' },
  { id: 'dullness', label: '칙칙함', emoji: '😶' },
  { id: 'pores', label: '모공', emoji: '🔍' },
  { id: 'wrinkles', label: '주름', emoji: '〰️' }
];

// ============================================
// 커뮤니티 후기 데이터
// ============================================
export const communityReviews = {
  health: [
    {
      id: 'rev-h-001',
      author: '공군_2412_창공이글55',
      title: '크레아틴 + 저항밴드 루틴 11개월 후기',
      content: '입대 전 62kg에서 복무 11개월 만에 72kg 증량 성공! 크레아틴은 매일 5g씩 꾸준히 섭취하고, 저항밴드로 생활관에서 매일 30분 루틴 병행했습니다. 체력검정도 2급에서 특급으로 올랐어요. 핵심은 꾸준함입니다.',
      rating: 5,
      likes: 234,
      helpful: 189,
      date: '2025-03-15',
      relatedProducts: ['h-sup-001', 'h-eq-002'],
      tags: ['벌크업', '체력검정', '크레아틴']
    },
    {
      id: 'rev-h-002',
      author: '육군_2503_맹호전사88',
      title: '영내 맨몸운동만으로 체력검정 특급 달성',
      content: '입대 전 팔굽혀펴기 20개 하던 사람이 6개월 만에 80개까지 올렸습니다. 밀월렛 맨몸운동 루틴 따라하면서 마그네슘 챙겨먹고 악력기로 전완근도 키웠어요. 장비 없이도 충분합니다!',
      rating: 5,
      likes: 178,
      helpful: 156,
      date: '2025-02-28',
      relatedProducts: ['h-sup-004', 'h-eq-003'],
      tags: ['맨몸운동', '체력검정특급', '초보추천']
    },
    {
      id: 'rev-h-003',
      author: '해군_2501_파도타기77',
      title: 'BCAA + 폼롤러로 훈련 피로 회복 꿀조합',
      content: '함정 근무하면서 체력 소모가 심했는데, BCAA 운동 전후 섭취 + 폼롤러 스트레칭 10분이면 다음날 근육통이 확 줄어요. 야간 당직 전에 특히 효과적!',
      rating: 4,
      likes: 145,
      helpful: 123,
      date: '2025-01-20',
      relatedProducts: ['h-sup-003', 'h-eq-001'],
      tags: ['피로회복', '근육통', '야간근무']
    }
  ],
  cert: [
    {
      id: 'rev-c-001',
      author: '육군_2503_맹호전사31',
      title: '정보처리기사 3개월 독학 필기 합격!',
      content: '이기적 교재 하나로 3개월 독학했습니다. 매일 취침 전 2시간씩 공부하고, 주말에 기출 3회분씩 풀었어요. 1회독 후 기출 반복이 핵심이에요. 영내에서 충분히 합격 가능합니다!',
      rating: 5,
      likes: 312,
      helpful: 289,
      date: '2025-03-01',
      relatedProducts: ['c-it-001'],
      tags: ['정보처리기사', '독학', '합격후기']
    },
    {
      id: 'rev-c-002',
      author: '공군_2501_별빛조종사77',
      title: 'TOEIC 630→815 복무 중 8개월 학습법',
      content: '입대 전 630점에서 8개월 만에 815점 달성! 매일 아침 단어 50개, 점심 LC 1파트, 저녁 RC 1파트씩 나눠서 공부했어요. 해커스 종합서가 체계적이라 독학에 딱이었습니다.',
      rating: 5,
      likes: 267,
      helpful: 234,
      date: '2025-02-15',
      relatedProducts: ['c-lang-001'],
      tags: ['TOEIC', '점수향상', '학습법공유']
    },
    {
      id: 'rev-c-003',
      author: '해병_2502_독수리45',
      title: '한국사 1급 30일 벼락치기 합격',
      content: '에듀윌 교재로 딱 30일 공부해서 1급 합격했습니다. 시대별로 2일씩 개념 잡고, 나머지 기간은 기출만 반복! 군 생활 중 가장 빨리 딸 수 있는 자격증이에요.',
      rating: 5,
      likes: 198,
      helpful: 176,
      date: '2025-01-10',
      relatedProducts: ['c-fin-001'],
      tags: ['한국사', '1급', '단기합격']
    }
  ],
  skin: [
    {
      id: 'rev-s-001',
      author: '공군_2412_하늘빛99',
      title: '건조한 영내에서 세타필로 피부 지킨 후기',
      content: '겨울 영내가 너무 건조해서 얼굴이 갈라졌었는데, 세타필 클렌저 + 모이스처라이징 크림 조합으로 2주 만에 정상화됐어요. 토너 패딩도 빼먹지 마세요!',
      rating: 5,
      likes: 189,
      helpful: 167,
      date: '2025-02-20',
      relatedProducts: ['s-cl-001', 's-mo-001'],
      tags: ['건성피부', '영내건조', '세타필']
    },
    {
      id: 'rev-s-002',
      author: '육군_2503_철갑전사22',
      title: '야외훈련 후 시카크림 진정 효과 대박',
      content: '행군 후 얼굴이 붉게 달아올랐는데 닥터자르트 시카페어 크림 바르고 자니까 다음날 거의 원래대로 돌아왔어요. 야외훈련 많은 분들 필수템입니다.',
      rating: 5,
      likes: 156,
      helpful: 134,
      date: '2025-03-05',
      relatedProducts: ['s-mo-003'],
      tags: ['야외훈련', '시카크림', '진정케어']
    },
    {
      id: 'rev-s-003',
      author: '해군_2501_바다사나이66',
      title: '외박 전날 마스크팩 루틴 공유',
      content: '외박 전날 세안 후 메디힐 마스크팩 15분 + 보습크림 두껍게 바르고 자면 다음날 피부가 완전 달라져요. 여자친구한테 칭찬받았습니다 ㅎㅎ',
      rating: 5,
      likes: 234,
      helpful: 201,
      date: '2025-01-25',
      relatedProducts: ['s-sp-001', 's-mo-001'],
      tags: ['외박', '마스크팩', '데이트준비']
    }
  ],
  books: [
    {
      id: 'rev-b-001',
      author: '공군_2412_독서왕33',
      title: '아주 작은 습관의 힘으로 군생활 바꿈',
      content: '이 책 읽고 매일 취침 전 30분 독서, 기상 후 팔굽혀펴기 20개 습관 만들었어요. 3개월 뒤 체력검정 1급 + 독서 12권 달성. 작은 습관이 진짜 큰 변화를 만듭니다.',
      rating: 5,
      likes: 156,
      helpful: 134,
      date: '2025-02-10',
      relatedProducts: ['b-sd-001'],
      tags: ['습관', '자기계발', '루틴']
    },
    {
      id: 'rev-b-002',
      author: '육군_2503_재테크병장11',
      title: '돈의 심리학 읽고 장병적금 풀 납입 결심',
      content: '복무 중 돈 쓸 일이 많지 않으니까 장병적금 최대로 넣고, 만기 후 투자 계획 세웠어요. 이 책이 돈에 대한 생각을 완전히 바꿔놓았습니다.',
      rating: 5,
      likes: 198,
      helpful: 178,
      date: '2025-03-01',
      relatedProducts: ['b-fn-003'],
      tags: ['재테크', '장병적금', '마인드셋']
    },
    {
      id: 'rev-b-003',
      author: '해병_2502_독서특전44',
      title: '월 4권 독서 챌린지 6개월째 성공 중',
      content: '밀월렛 독서 챌린지 따라하면서 6개월째 월 4권 이상 읽고 있어요. 점호 후 30분 + 주말 1시간이면 충분합니다. 한줄평 남기는 것도 습관이 됐어요!',
      rating: 5,
      likes: 123,
      helpful: 108,
      date: '2025-01-15',
      relatedProducts: ['b-sd-003'],
      tags: ['독서챌린지', '월4권', '독서습관']
    }
  ]
};

// ============================================
// 수익 모델 구조 데이터
// ============================================
export const revenueModel = {
  commissionRates: {
    healthEquipment: { rate: 0.04, label: '운동용품' },
    supplements: { rate: 0.03, label: '영양제' },
    books: { rate: 0.03, label: '도서' },
    onlineCourses: { rate: 0.05, label: '온라인강의' },
    skincare: { rate: 0.04, label: '피부/화장품' }
  },
  monthlyConversionRates: {
    supplements: { rate: 0.12, label: '영양제' },
    textbooks: { rate: 0.08, label: '교재' },
    skincare: { rate: 0.15, label: '화장품' },
    onlineCourses: { rate: 0.06, label: '온라인강의' }
  },
  averageOrderValues: {
    supplements: { value: 22000, label: '영양제' },
    textbooks: { value: 25000, label: '교재' },
    skincare: { value: 18000, label: '화장품' },
    onlineCourses: { value: 89000, label: '온라인강의' }
  }
};

// MAU 기준 월 예상 수익 계산 함수
export function calculateMonthlyRevenue(mau = 10000) {
  const { monthlyConversionRates, averageOrderValues, commissionRates } = revenueModel;

  const categories = [
    {
      name: '영양제',
      conversion: monthlyConversionRates.supplements.rate,
      aov: averageOrderValues.supplements.value,
      commission: commissionRates.supplements.rate
    },
    {
      name: '교재',
      conversion: monthlyConversionRates.textbooks.rate,
      aov: averageOrderValues.textbooks.value,
      commission: commissionRates.books.rate
    },
    {
      name: '화장품',
      conversion: monthlyConversionRates.skincare.rate,
      aov: averageOrderValues.skincare.value,
      commission: commissionRates.skincare.rate
    },
    {
      name: '온라인강의',
      conversion: monthlyConversionRates.onlineCourses.rate,
      aov: averageOrderValues.onlineCourses.value,
      commission: commissionRates.onlineCourses.rate
    }
  ];

  let totalRevenue = 0;
  const breakdown = categories.map(cat => {
    const purchasers = mau * cat.conversion;
    const revenue = purchasers * cat.aov * cat.commission;
    totalRevenue += revenue;
    return {
      category: cat.name,
      purchasers: Math.round(purchasers),
      revenue: Math.round(revenue)
    };
  });

  return {
    mau,
    totalMonthlyRevenue: Math.round(totalRevenue),
    breakdown,
    annualEstimate: Math.round(totalRevenue * 12)
  };
}

// 모든 상품을 ID로 빠르게 찾는 헬퍼
export function getProductById(id) {
  const allProducts = [
    ...healthProducts.supplements,
    ...healthProducts.equipment,
    ...wellnessProducts.essentials,
    ...wellnessProducts.functional,
    ...Object.values(bookProducts).flat(),
    ...Object.values(militaryExamProducts).flat(),
    ...Object.values(certProducts).flat(),
    ...Object.values(skinProducts).flat()
  ];
  return allProducts.find(p => p.id === id) || null;
}
