// 밀월렛 자기계발 비즈니스 모델 데이터
// CPA 기반 제휴 수수료 구조 + 네이티브 광고 방식

// ============================================
// 헬스 카테고리
// ============================================

export const healthProducts = {
  supplements: [
    {
      id: 'creatine_on',
      name: 'ON 크레아틴 모노하이드레이트 300g',
      brand: 'Optimum Nutrition',
      category: '운동 보조제',
      price: 18900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: null,
      commissionRate: 3,
      tags: ['벌크업', '근력향상', '특급전사도전'],
      reviewCount: 2847,
      rating: 4.8,
      image: '💊',
      description: '순수 크레아틴 모노하이드레이트로 근력 향상과 벌크업에 최적',
      dosage: '하루 5g, 운동 전후 섭취'
    },
    {
      id: 'protein_musclePharm',
      name: '머슬팜 컴뱃 초콜릿 1816g',
      brand: 'MusclePharm',
      category: '운동 보조제',
      price: 54900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: null,
      commissionRate: 3,
      tags: ['단백질보충', '벌크업', '체력검정'],
      reviewCount: 1924,
      rating: 4.7,
      image: '🥤',
      description: '5가지 단백질 블렌드로 장시간 흡수, 복무 중 근육 유지에 필수',
      dosage: '1회 1스쿱(33g), 하루 1-2회'
    },
    {
      id: 'bcaa_now',
      name: '나우푸드 스포츠 BCAA 파우더 340g',
      brand: 'NOW Foods',
      category: '운동 보조제',
      price: 23900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: null,
      commissionRate: 3,
      tags: ['근육회복', '피로회복', '운동중섭취'],
      reviewCount: 1456,
      rating: 4.6,
      image: '⚡',
      description: '운동 중 근육 분해 방지, 빠른 회복 지원',
      dosage: '운동 전중후 6g'
    },
    {
      id: 'magnesium_now',
      name: '나우푸드 마그네슘 시트레이트',
      brand: 'NOW Foods',
      category: '운동 보조제',
      price: 12900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: null,
      commissionRate: 3,
      tags: ['수면개선', '근육피로', '회복'],
      reviewCount: 3241,
      rating: 4.9,
      image: '😴',
      description: '수면 질 개선과 근육 피로 회복, 군 생활 스트레스 완화',
      dosage: '취침 30분 전 2정'
    },
    {
      id: 'zinc_solgar',
      name: '솔가 아연 100정',
      brand: 'Solgar',
      category: '운동 보조제',
      price: 15900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: null,
      commissionRate: 3,
      tags: ['면역력', '테스토스테론', '회복'],
      reviewCount: 2156,
      rating: 4.7,
      image: '🛡️',
      description: '면역력 강화 및 남성 호르몬 균형 유지',
      dosage: '하루 1정, 식후 섭취'
    }
  ],
  equipment: [
    {
      id: 'foam_roller',
      name: '점탄성 폼롤러',
      brand: 'Generic',
      category: '운동 용품',
      price: 19900,
      pxAvailable: '부대별 상이',
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: null,
      commissionRate: 4,
      tags: ['근막이완', '회복', '유연성'],
      reviewCount: 5632,
      rating: 4.8,
      image: '🔵',
      description: '운동 후 근막 이완 및 유연성 향상'
    },
    {
      id: 'resistance_band',
      name: '저항밴드 세트',
      brand: 'Generic',
      category: '운동 용품',
      price: 12900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: null,
      commissionRate: 4,
      tags: ['영내운동', '맨몸운동', '휴대용'],
      reviewCount: 4521,
      rating: 4.7,
      image: '🎯',
      description: '영내에서 공간 제약 없이 근력 운동 가능'
    },
    {
      id: 'grip_strengthener',
      name: '악력기',
      brand: 'Generic',
      category: '운동 용품',
      price: 7900,
      pxAvailable: true,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: null,
      commissionRate: 4,
      tags: ['악력', '전완근', '휴대용'],
      reviewCount: 3214,
      rating: 4.5,
      image: '✊',
      description: '언제 어디서나 악력 및 전완근 강화'
    },
    {
      id: 'massage_ball',
      name: '도수치료용 마사지볼',
      brand: 'Generic',
      category: '운동 용품',
      price: 6900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: null,
      commissionRate: 4,
      tags: ['근육이완', '통증완화', '휴대용'],
      reviewCount: 2847,
      rating: 4.6,
      image: '⚪',
      description: '특정 부위 집중 이완 및 통증 완화'
    },
    {
      id: 'jump_rope',
      name: '줄넘기 무게추가형',
      brand: 'Generic',
      category: '운동 용품',
      price: 9900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: null,
      commissionRate: 4,
      tags: ['유산소', '체력검정', '휴대용'],
      reviewCount: 1926,
      rating: 4.4,
      image: '🪢',
      description: '무게 조절 가능한 고강도 유산소 운동'
    }
  ]
};

export const healthRoutines = [
  {
    id: 'basic_bodyweight',
    name: '영내 맨몸운동 루틴',
    difficulty: '초급',
    goal: '체력검정 합격',
    duration: 30,
    equipment: '없음',
    steps: [
      { order: 1, name: '워밍업', duration: 5, description: '가벼운 조깅 및 스트레칭' },
      { order: 2, name: '팔굽혀펴기', sets: 4, reps: '최대', rest: 60, description: '표준 자세 유지' },
      { order: 3, name: '윗몸일으키기', sets: 4, reps: '최대', rest: 60, description: '복부에 집중' },
      { order: 4, name: '스쿼트', sets: 4, reps: 20, rest: 60, description: '무릎이 발끝을 넘지 않도록' },
      { order: 5, name: '쿨다운', duration: 5, description: '스트레칭 및 정리' }
    ],
    recommendedProducts: ['magnesium_now', 'grip_strengthener'],
    image: '🏃'
  },
  {
    id: 'bulking_routine',
    name: '벌크업 집중 루틴',
    difficulty: '중급',
    goal: '근육량 증가',
    duration: 45,
    equipment: '저항밴드',
    steps: [
      { order: 1, name: '워밍업', duration: 5, description: '동적 스트레칭' },
      { order: 2, name: '풀업 변형', sets: 4, reps: 8, rest: 90, description: '저항밴드 활용' },
      { order: 3, name: '딥스', sets: 4, reps: 12, rest: 90, description: '침대 프레임 활용' },
      { order: 4, name: '파이크 푸시업', sets: 4, reps: 10, rest: 90, description: '어깨 집중' },
      { order: 5, name: '코어 운동', sets: 3, reps: 15, rest: 60, description: '플랭크 변형' },
      { order: 6, name: '쿨다운', duration: 5, description: '스트레칭' }
    ],
    recommendedProducts: ['creatine_on', 'protein_musclePharm', 'resistance_band'],
    image: '💪'
  },
  {
    id: 'elite_warrior',
    name: '특급전사 도전 루틴',
    difficulty: '상급',
    goal: '체력검정 특급',
    duration: 60,
    equipment: '저항밴드, 폼롤러',
    steps: [
      { order: 1, name: '워밍업', duration: 10, description: '동적 스트레칭 + 가벼운 유산소' },
      { order: 2, name: '고강도 인터벌', duration: 20, description: '버피 + 마운틴클라이머 반복' },
      { order: 3, name: '근력 서킷', duration: 20, description: '팔굽+스쿼트+플랭크 3세트' },
      { order: 4, name: '유산소 마무리', duration: 5, description: '전력 달리기' },
      { order: 5, name: '쿨다운', duration: 5, description: '폼롤러 근막이완' }
    ],
    recommendedProducts: ['bcaa_now', 'foam_roller', 'protein_musclePharm'],
    image: '🔥'
  }
];

// ============================================
// 건강 카테고리 (영양제)
// ============================================

export const nutritionProducts = {
  basic: [
    {
      id: 'multivitamin_centrum',
      name: '센트룸 어드밴스 남성 60정',
      brand: 'Centrum',
      category: '기초 영양제',
      price: 19900,
      pxAvailable: true,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      tags: ['기초필수', '면역력', '남성건강'],
      reviewCount: 8456,
      rating: 4.8,
      image: '💊',
      mainIngredients: '종합비타민, 미네랄',
      dosage: '하루 1정, 아침 식후',
      caution: '과다 복용 시 속쓰림 가능'
    },
    {
      id: 'omega3_nordic',
      name: '노르딕내추럴스 얼티메이트 오메가 180캡슐',
      brand: 'Nordic Naturals',
      category: '기초 영양제',
      price: 42900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      tags: ['심혈관', '집중력', '뇌건강'],
      reviewCount: 5632,
      rating: 4.9,
      image: '🐟',
      mainIngredients: 'EPA 650mg, DHA 450mg',
      dosage: '하루 2캡슐, 식후',
      caution: '혈액순환제 복용 시 의사 상담'
    },
    {
      id: 'vitamin_d3_k2',
      name: '닥터베스트 D3 5000IU + K2',
      brand: "Doctor's Best",
      category: '기초 영양제',
      price: 16900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      tags: ['뼈건강', '면역력', '수면'],
      reviewCount: 4521,
      rating: 4.7,
      image: '☀️',
      mainIngredients: '비타민D3 5000IU, 비타민K2 100mcg',
      dosage: '하루 1정, 아침',
      caution: '실내 근무자 필수'
    },
    {
      id: 'vitamin_c_now',
      name: 'NOW Foods 비타민C 1000mg',
      brand: 'NOW Foods',
      category: '기초 영양제',
      price: 12900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      tags: ['면역력', '항산화', '피로회복'],
      reviewCount: 6784,
      rating: 4.6,
      image: '🍊',
      mainIngredients: '비타민C 1000mg',
      dosage: '하루 1정, 식후',
      caution: '속쓰림 시 식후 복용 권장'
    },
    {
      id: 'probiotics_lactofit',
      name: '종근당 락토핏 골드 50포',
      brand: '종근당',
      category: '기초 영양제',
      price: 22900,
      pxAvailable: true,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      tags: ['장건강', '면역력', '소화'],
      reviewCount: 9214,
      rating: 4.8,
      image: '🦠',
      mainIngredients: '17종 유산균 1억 CFU',
      dosage: '하루 1포, 아무 때나',
      caution: '급식 적응 기간 필수'
    }
  ],
  functional: [
    {
      id: 'redginseng_kgc',
      name: '정관장 홍삼정 에브리타임 10포',
      brand: 'KGC',
      category: '기능별 영양제',
      price: 14900,
      pxAvailable: true,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      tags: ['피로회복', '면역력', '활력'],
      reviewCount: 7856,
      rating: 4.7,
      image: '🌿',
      mainIngredients: '홍삼농축액',
      dosage: '하루 1포',
      caution: '고혈압 주의'
    },
    {
      id: 'magnesium_glycinate',
      name: '닥터베스트 마그네슘 글리시네이트',
      brand: "Doctor's Best",
      category: '기능별 영양제',
      price: 19900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      tags: ['수면질개선', '군생활스트레스', '이완'],
      reviewCount: 3456,
      rating: 4.9,
      image: '😴',
      mainIngredients: '마그네슘 글리시네이트 200mg',
      dosage: '취침 1시간 전 2정',
      caution: '흡수율이 높은 킬레이트 형태'
    },
    {
      id: 'l_theanine_now',
      name: '나우푸드 L-테아닌 200mg',
      brand: 'NOW Foods',
      category: '기능별 영양제',
      price: 18900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      tags: ['집중력', '스트레스', '이완'],
      reviewCount: 2341,
      rating: 4.6,
      image: '🧠',
      mainIngredients: 'L-테아닌 200mg',
      dosage: '하루 1-2캡슐',
      caution: '각성 없는 집중력 향상'
    },
    {
      id: 'lutein_iclear',
      name: '아이클리어 루테인',
      brand: 'iClear',
      category: '기능별 영양제',
      price: 14900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      tags: ['야간근무', '모니터작업', '눈건강'],
      reviewCount: 4123,
      rating: 4.5,
      image: '👁️',
      mainIngredients: '루테인 20mg, 지아잔틴',
      dosage: '하루 1정, 식후',
      caution: '야간 근무자 필수'
    }
  ]
};

export const nutritionGuides = [
  {
    id: 'meal_protein',
    title: '급식으로 단백질 목표 채우는 법',
    content: [
      '아침: 계란 2개 + 우유 200ml = 단백질 20g',
      '점심: 닭가슴살/생선 우선 선택 + 두부 반찬 = 단백질 30g',
      '저녁: 육류 반찬 2인분 + 콩나물 = 단백질 25g',
      '부족분: 유청단백질 1스쿱으로 보충 = 단백질 25g',
      '총 일일 단백질: 100g (체중 70kg 기준 적정)'
    ],
    recommendedProducts: ['protein_musclePharm'],
    image: '🍗'
  },
  {
    id: 'weight_management',
    title: '체중 관리 식단 전략',
    content: [
      '벌크업: 급식 2인분 + 간식 추가 + 단백질 보충',
      '칼로리 목표: 기초대사량 + 500kcal',
      '커팅: 급식 1인분 + 채소 위주 + 유산소',
      '칼로리 목표: 기초대사량 - 300kcal',
      '영양소 비율 유지: 탄수화물 40% 단백질 30% 지방 30%'
    ],
    recommendedProducts: ['multivitamin_centrum', 'omega3_nordic'],
    image: '⚖️'
  },
  {
    id: 'px_healthy_snacks',
    title: 'PX 활용 건강 간식 가이드',
    content: [
      '견과류 믹스 30g: 칼로리 180kcal, 단백질 6g, 오메가3 풍부',
      '그릭 요거트: 칼로리 100kcal, 단백질 10g, 프로바이오틱스',
      '단백질바: 칼로리 200kcal, 단백질 20g, 간편 섭취',
      '고구마 스낵: 칼로리 150kcal, 식이섬유 풍부, 천천히 소화',
      '바나나: 칼로리 100kcal, 운동 전후 에너지 보충'
    ],
    recommendedProducts: [],
    image: '🥜'
  }
];

// ============================================
// 도서 카테고리
// ============================================

export const bookProducts = {
  selfDevelopment: [
    {
      id: 'atomic_habits',
      title: '아주 작은 습관의 힘',
      author: '제임스 클리어',
      publisher: '비즈니스북스',
      price: 17800,
      aladinLink: 'https://www.aladin.co.kr',
      yes24Link: 'https://www.yes24.com',
      commissionRate: 3,
      category: '자기계발',
      militaryReason: '군 복무 중 매일 반복 가능한 작은 루틴 설계에 최적',
      keyMessage: '1% 개선의 복리 효과로 18개월 후 다른 사람이 된다',
      image: '📘',
      reviewCount: 12456,
      rating: 4.9
    },
    {
      id: 'the_one_thing',
      title: '원씽',
      author: '게리 켈러',
      publisher: '비즈니스북스',
      price: 16800,
      aladinLink: 'https://www.aladin.co.kr',
      yes24Link: 'https://www.yes24.com',
      commissionRate: 3,
      category: '자기계발',
      militaryReason: '복무 중 자기계발 목표 하나에 집중하는 전략',
      keyMessage: '가장 중요한 한 가지에 집중하라',
      image: '📕',
      reviewCount: 8764,
      rating: 4.7
    },
    {
      id: 'miracle_morning',
      title: '미라클 모닝',
      author: '할 엘로드',
      publisher: '한빛비즈',
      price: 15800,
      aladinLink: 'https://www.aladin.co.kr',
      yes24Link: 'https://www.yes24.com',
      commissionRate: 3,
      category: '자기계발',
      militaryReason: '기상나팔 후 개인정비 시간 30분 활용 루틴',
      keyMessage: '아침 1시간이 인생을 바꾼다',
      image: '📙',
      reviewCount: 9234,
      rating: 4.6
    },
    {
      id: 'stolen_focus',
      title: '도둑맞은 집중력',
      author: '요한 하리',
      publisher: '어크로스',
      price: 18000,
      aladinLink: 'https://www.aladin.co.kr',
      yes24Link: 'https://www.yes24.com',
      commissionRate: 3,
      category: '자기계발',
      militaryReason: '스마트폰 제한 환경에서 집중력 극대화',
      keyMessage: '집중력은 개인의 문제가 아니라 시스템의 문제',
      image: '📗',
      reviewCount: 5621,
      rating: 4.8
    }
  ],
  finance: [
    {
      id: 'millionaire_fastlane',
      title: '부의 추월차선',
      author: 'MJ 드마코',
      publisher: '토트',
      price: 18000,
      aladinLink: 'https://www.aladin.co.kr',
      yes24Link: 'https://www.yes24.com',
      commissionRate: 3,
      category: '재테크',
      militaryReason: '전역 후 창업 마인드셋 형성',
      keyMessage: '부자가 되는 길은 느린 길과 빠른 길이 있다',
      image: '💰',
      reviewCount: 7856,
      rating: 4.8
    },
    {
      id: 'stock_basic',
      title: '주식투자 무작정 따라하기',
      author: '윤재수',
      publisher: '길벗',
      price: 18000,
      aladinLink: 'https://www.aladin.co.kr',
      yes24Link: 'https://www.yes24.com',
      commissionRate: 3,
      category: '재테크',
      militaryReason: '장병적금 만기 후 투자 입문',
      keyMessage: '주식 투자의 기초부터 실전까지',
      image: '📈',
      reviewCount: 6234,
      rating: 4.5
    },
    {
      id: 'psychology_of_money',
      title: '돈의 심리학',
      author: '모건 하우절',
      publisher: '인플루엔셜',
      price: 17800,
      aladinLink: 'https://www.aladin.co.kr',
      yes24Link: 'https://www.yes24.com',
      commissionRate: 3,
      category: '재테크',
      militaryReason: '복무 중 자산 형성 마인드셋',
      keyMessage: '부자가 되는 것은 돈이 아니라 행동의 문제',
      image: '🧠',
      reviewCount: 11234,
      rating: 4.9
    }
  ],
  language: [
    {
      id: 'toeic_hackers',
      title: '해커스 TOEIC RC+LC 통합',
      author: '해커스어학연구소',
      publisher: '해커스',
      price: 38000,
      aladinLink: 'https://www.aladin.co.kr',
      yes24Link: 'https://www.yes24.com',
      commissionRate: 3,
      category: '어학·시험',
      militaryReason: '군 도서관 비치 확인 후 개인 구매 권장',
      keyMessage: 'TOEIC 600-900점 목표 학습자용',
      image: '📚',
      reviewCount: 15678,
      rating: 4.7
    },
    {
      id: 'engineer_info_process',
      title: '이기적 정보처리기사 필기',
      author: '영진닷컴',
      publisher: '영진닷컴',
      price: 32000,
      aladinLink: 'https://www.aladin.co.kr',
      yes24Link: 'https://www.yes24.com',
      commissionRate: 3,
      category: '어학·시험',
      militaryReason: 'IT 분야 취업 준비 필수 자격증',
      keyMessage: '최신 기출문제 + 핵심요약',
      image: '💻',
      reviewCount: 8945,
      rating: 4.8
    },
    {
      id: 'sqld_sinagong',
      title: 'SQLD 자격증 한번에 합격하기',
      author: '시나공',
      publisher: '길벗',
      price: 28000,
      aladinLink: 'https://www.aladin.co.kr',
      yes24Link: 'https://www.yes24.com',
      commissionRate: 3,
      category: '어학·시험',
      militaryReason: '데이터 분야 입문 자격증',
      keyMessage: 'SQL 기초부터 실전까지',
      image: '🗄️',
      reviewCount: 4532,
      rating: 4.6
    }
  ],
  humanities: [
    {
      id: 'sapiens',
      title: '사피엔스',
      author: '유발 하라리',
      publisher: '김영사',
      price: 22000,
      aladinLink: 'https://www.aladin.co.kr',
      yes24Link: 'https://www.yes24.com',
      commissionRate: 3,
      category: '인문·교양',
      militaryReason: '인류 역사에 대한 통찰, 긴 복무 기간 독서용',
      keyMessage: '호모 사피엔스는 어떻게 지구를 정복했는가',
      image: '🌍',
      reviewCount: 23456,
      rating: 4.9
    },
    {
      id: 'guns_germs_steel',
      title: '총, 균, 쇠',
      author: '재레드 다이아몬드',
      publisher: '문학사상',
      price: 25000,
      aladinLink: 'https://www.aladin.co.kr',
      yes24Link: 'https://www.yes24.com',
      commissionRate: 3,
      category: '인문·교양',
      militaryReason: '문명의 발전 과정 이해',
      keyMessage: '왜 어떤 민족은 다른 민족을 정복했는가',
      image: '🗡️',
      reviewCount: 12345,
      rating: 4.8
    },
    {
      id: 'cosmos',
      title: '코스모스',
      author: '칼 세이건',
      publisher: '사이언스북스',
      price: 32000,
      aladinLink: 'https://www.aladin.co.kr',
      yes24Link: 'https://www.yes24.com',
      commissionRate: 3,
      category: '인문·교양',
      militaryReason: '우주와 과학에 대한 경외감',
      keyMessage: '우리는 별의 물질로 이루어져 있다',
      image: '🌌',
      reviewCount: 18234,
      rating: 4.9
    }
  ]
};

export const readingRoutines = [
  {
    id: 'military_reading_method',
    title: '군 생활 맞춤 독서법',
    content: [
      '점호 후 취침 전 30분: 가장 집중도가 높은 시간',
      '외출외박 시 카페 독서: 환경 변화로 집중력 향상',
      '전자책 앱 활용: 밀리의 서재, 리디북스 군인 할인',
      '독서 노트 작성: 핸드폰 메모장에 즉시 기록',
      '월 2권 목표: 18개월 복무 시 총 36권 독파 가능'
    ],
    image: '📖'
  },
  {
    id: 'monthly_reading_challenge',
    title: '월별 독서 챌린지',
    months: [
      { month: 1, theme: '자기계발', goal: '습관 형성의 기초 다지기' },
      { month: 2, theme: '재테크', goal: '돈에 대한 마인드셋 구축' },
      { month: 3, theme: '어학', goal: 'TOEIC 기초 다지기' },
      { month: 4, theme: '인문', goal: '교양 쌓기' },
      { month: 5, theme: '자기계발', goal: '실천력 강화' },
      { month: 6, theme: '재테크', goal: '투자 기초 학습' }
    ],
    image: '🎯'
  },
  {
    id: 'reading_record_template',
    title: '독서 기록 방법',
    template: {
      oneLiner: '이 책을 한 문장으로 요약하면?',
      keyQuotes: ['핵심 문장 1', '핵심 문장 2', '핵심 문장 3'],
      action: '내일부터 실천할 한 가지 행동'
    },
    example: {
      book: '아주 작은 습관의 힘',
      oneLiner: '매일 1%씩 개선하면 1년 후 37배 성장한다',
      keyQuotes: [
        '습관은 정체성의 증거다',
        '환경을 바꾸면 행동이 바뀐다',
        '좋은 습관을 쉽게, 나쁜 습관을 어렵게'
      ],
      action: '매일 아침 5분 스트레칭 루틴 시작'
    },
    image: '✍️'
  }
];

// ============================================
// 군수(군대수능) 카테고리
// ============================================

export const militaryExamProducts = {
  suneung: [
    {
      id: 'suneung_complete_kor',
      title: '수능완성 국어',
      publisher: 'EBS',
      price: 9000,
      subject: '국어',
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      militaryReason: '복무 중 독학 최적 교재',
      coverage: '수능 전 범위',
      difficulty: '중상',
      image: '📕',
      reviewCount: 5432,
      rating: 4.7
    },
    {
      id: 'suneung_complete_math',
      title: '수능완성 수학',
      publisher: 'EBS',
      price: 10000,
      subject: '수학',
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      militaryReason: '복무 중 독학 최적 교재',
      coverage: '수능 전 범위',
      difficulty: '중상',
      image: '📘',
      reviewCount: 6234,
      rating: 4.6
    },
    {
      id: 'suneung_complete_eng',
      title: '수능완성 영어',
      publisher: 'EBS',
      price: 8000,
      subject: '영어',
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      militaryReason: '복무 중 독학 최적 교재',
      coverage: '수능 전 범위',
      difficulty: '중',
      image: '📗',
      reviewCount: 7123,
      rating: 4.8
    },
    {
      id: 'matheung_kor',
      title: '마더텅 수능기출 국어',
      publisher: '마더텅',
      price: 20000,
      subject: '국어',
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      militaryReason: '기출 반복 학습에 최적',
      coverage: '최근 10개년 기출',
      difficulty: '중상',
      image: '📙',
      reviewCount: 8945,
      rating: 4.9
    },
    {
      id: 'matheung_math',
      title: '마더텅 수능기출 수학',
      publisher: '마더텅',
      price: 22000,
      subject: '수학',
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      militaryReason: '기출 반복 학습에 최적',
      coverage: '최근 10개년 기출',
      difficulty: '상',
      image: '📔',
      reviewCount: 9876,
      rating: 4.8
    }
  ],
  transfer: [
    {
      id: 'transfer_eng',
      title: '편입 영어 종합편',
      publisher: '넥서스',
      price: 25000,
      subject: '편입 영어',
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      militaryReason: '전역 후 편입 목표 장병 필수',
      coverage: '문법, 독해, 어휘 통합',
      difficulty: '상',
      image: '📚',
      reviewCount: 3456,
      rating: 4.7
    },
    {
      id: 'transfer_math',
      title: '편입 수학 기본서',
      publisher: '씨마스',
      price: 28000,
      subject: '편입 수학',
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      militaryReason: '이공계 편입 필수',
      coverage: '미적분, 선형대수',
      difficulty: '상',
      image: '📐',
      reviewCount: 2345,
      rating: 4.6
    }
  ],
  onlineLectures: [
    {
      id: 'megastudy_military',
      name: '메가스터디 군인 할인 연간 이용권',
      price: 480000,
      discountedPrice: 380000,
      commissionRate: 5,
      militaryBenefit: '20% 할인',
      link: 'https://www.megastudy.net',
      image: '🎓',
      description: '전 과목 무제한 수강'
    },
    {
      id: 'etoos_military',
      name: '이투스 군인 패스',
      price: 450000,
      discountedPrice: 360000,
      commissionRate: 5,
      militaryBenefit: '20% 할인',
      link: 'https://www.etoos.com',
      image: '📺',
      description: '전 과목 무제한 수강'
    },
    {
      id: 'ebsi_free',
      name: 'EBSi 무료 강의',
      price: 0,
      commissionRate: 0,
      militaryBenefit: '완전 무료',
      link: 'https://www.ebsi.co.kr',
      image: '📡',
      description: '수능 기본 강의 무료'
    }
  ]
};

export const militaryExamRoutines = [
  {
    id: 'suneung_12month_roadmap',
    title: '복무 중 수능 준비 12개월 로드맵',
    phases: [
      { months: '1-3', focus: '기초 개념 정리', goal: '수능완성 1회독', dailyHours: 2 },
      { months: '4-6', focus: '기출 집중', goal: '마더텅 기출 2회독', dailyHours: 3 },
      { months: '7-9', focus: '실전 모의고사', goal: '주 1회 모의고사', dailyHours: 3 },
      { months: '10-12', focus: '파이널 정리', goal: '약점 보완 + N제', dailyHours: 4 }
    ],
    image: '🗓️'
  },
  {
    id: 'daily_study_plan',
    title: '일일 학습 플랜',
    schedule: [
      { time: '기상 후 개인정비 30분', subject: '영어', activity: '단어 50개 암기' },
      { time: '점심 후 휴식시간 30분', subject: '수학', activity: '문제 5개 풀이' },
      { time: '취침 전 30분', subject: '국어', activity: '독서 지문 2개 정독' }
    ],
    totalDaily: '90분',
    monthlyTotal: '45시간',
    image: '⏰'
  },
  {
    id: 'subject_study_methods',
    title: '과목별 효율적 학습법',
    methods: [
      {
        subject: '국어',
        method: '기출 지문 반복 읽기',
        detail: '같은 지문을 3번 읽으면 독해 속도 2배 향상',
        tip: '선지 분석이 핵심'
      },
      {
        subject: '수학',
        method: '오답노트 작성',
        detail: '틀린 문제는 3일 후 재풀이 필수',
        tip: '풀이 과정을 말로 설명할 수 있어야 함'
      },
      {
        subject: '영어',
        method: '단어 500개 암기 우선',
        detail: '고빈도 단어 500개만 알아도 80% 이해',
        tip: '듣기는 매일 30분씩 꾸준히'
      }
    ],
    image: '📝'
  }
];

// ============================================
// 자격증 카테고리
// ============================================

export const certificationProducts = {
  it: [
    {
      id: 'engineer_info_set',
      title: '이기적 정보처리기사 필기+실기 세트',
      publisher: '영진닷컴',
      price: 54000,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      category: 'IT 자격증',
      militaryReason: '전역 후 IT 취업 필수 자격증, 군 복무 중 독학 합격 사례 다수',
      passRate: '45%',
      prepPeriod: '3개월',
      militaryFeasible: true,
      image: '💻',
      reviewCount: 12456,
      rating: 4.8
    },
    {
      id: 'sqld_sinagong',
      title: '시나공 SQLD',
      publisher: '시나공',
      price: 28000,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      category: 'IT 자격증',
      militaryReason: '데이터 분야 입문 자격증, 난이도 중간',
      passRate: '55%',
      prepPeriod: '2개월',
      militaryFeasible: true,
      image: '🗄️',
      reviewCount: 6789,
      rating: 4.7
    },
    {
      id: 'computer_level1',
      title: '컴퓨터활용능력 1급 기본서',
      publisher: '이기적',
      price: 25000,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      category: 'IT 자격증',
      militaryReason: '사무직 취업 가산점',
      passRate: '40%',
      prepPeriod: '2개월',
      militaryFeasible: true,
      image: '⌨️',
      reviewCount: 8945,
      rating: 4.6
    },
    {
      id: 'aws_cert',
      title: 'AWS 자격증 준비',
      publisher: 'Wiley',
      price: 45000,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      category: 'IT 자격증',
      militaryReason: '클라우드 시대 필수 자격증',
      passRate: '60%',
      prepPeriod: '3개월',
      militaryFeasible: false,
      image: '☁️',
      reviewCount: 3456,
      rating: 4.8
    }
  ],
  language: [
    {
      id: 'toeic_total',
      title: 'TOEIC 종합서',
      publisher: '해커스',
      price: 38000,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      category: '어학 자격증',
      militaryReason: '취업 필수 스펙',
      targetScore: '750+',
      prepPeriod: '2개월',
      militaryFeasible: true,
      image: '🎯',
      reviewCount: 15678,
      rating: 4.8
    },
    {
      id: 'jlpt_n3',
      title: 'JLPT N3 대비',
      publisher: '시사일본어사',
      price: 18000,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      category: '어학 자격증',
      militaryReason: '일본어 중급 증명',
      targetScore: 'N3 합격',
      prepPeriod: '3개월',
      militaryFeasible: true,
      image: '🇯🇵',
      reviewCount: 4532,
      rating: 4.6
    },
    {
      id: 'jlpt_n2',
      title: 'JLPT N2 대비',
      publisher: '시사일본어사',
      price: 18000,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      category: '어학 자격증',
      militaryReason: '일본어 고급 증명',
      targetScore: 'N2 합격',
      prepPeriod: '4개월',
      militaryFeasible: true,
      image: '🗾',
      reviewCount: 3421,
      rating: 4.7
    },
    {
      id: 'hsk_4',
      title: 'HSK 4급 대비',
      publisher: '동양북스',
      price: 22000,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      category: '어학 자격증',
      militaryReason: '중국어 중급 증명',
      targetScore: 'HSK 4급',
      prepPeriod: '3개월',
      militaryFeasible: true,
      image: '🇨🇳',
      reviewCount: 5234,
      rating: 4.5
    },
    {
      id: 'opic_im',
      title: 'OPIc IM 공략',
      publisher: '해커스',
      price: 19800,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      category: '어학 자격증',
      militaryReason: '회화 능력 증명',
      targetScore: 'IM 등급',
      prepPeriod: '2개월',
      militaryFeasible: false,
      image: '🗣️',
      reviewCount: 6789,
      rating: 4.7
    }
  ],
  finance: [
    {
      id: 'korean_history',
      title: '한국사능력검정시험 심화',
      publisher: '에듀윌',
      price: 20000,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      category: '금융 자격증',
      militaryReason: '공무원 시험 필수, 군 복무 중 취득 최적',
      passRate: '65%',
      prepPeriod: '1개월',
      militaryFeasible: true,
      image: '📜',
      reviewCount: 11234,
      rating: 4.9
    },
    {
      id: 'fund_license',
      title: '펀드투자권유대행인',
      publisher: '한국FPSB',
      price: 18000,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      category: '금융 자격증',
      militaryReason: '금융권 입문 자격증',
      passRate: '70%',
      prepPeriod: '1개월',
      militaryFeasible: true,
      image: '💼',
      reviewCount: 3456,
      rating: 4.6
    },
    {
      id: 'stock_license',
      title: '증권투자권유대행인',
      publisher: '한국FPSB',
      price: 18000,
      coupangLink: 'https://www.coupang.com',
      commissionRate: 3,
      category: '금융 자격증',
      militaryReason: '증권사 입문 자격증',
      passRate: '65%',
      prepPeriod: '1개월',
      militaryFeasible: true,
      image: '📊',
      reviewCount: 2987,
      rating: 4.7
    }
  ]
};

export const certificationRoutines = [
  {
    id: 'engineer_info_90days',
    title: '정보처리기사 90일 합격 플랜',
    certification: '정보처리기사',
    totalDays: 90,
    dailyHours: 2,
    phases: [
      { days: '1-30', focus: '필기 이론', detail: '소프트웨어 설계, 데이터베이스, 네트워크 개념' },
      { days: '31-50', focus: '필기 기출', detail: '최근 5개년 기출 3회독' },
      { days: '51-60', focus: '필기 시험', detail: '모의고사 + 실제 시험' },
      { days: '61-90', focus: '실기 준비', detail: 'SQL 작성, ERD 설계, 알고리즘' }
    ],
    recommendedProducts: ['engineer_info_set'],
    image: '💻'
  },
  {
    id: 'toeic_750_60days',
    title: 'TOEIC 750점 60일 플랜',
    certification: 'TOEIC',
    totalDays: 60,
    dailyHours: 1,
    phases: [
      { days: '1-20', focus: 'LC 집중', detail: 'Part 1-4 유형 학습 + 매일 30분 듣기' },
      { days: '21-40', focus: 'RC 집중', detail: 'Part 5-6 문법 + Part 7 독해 속도' },
      { days: '41-60', focus: '실전 모의고사', detail: '주 3회 실전 모의고사 + 오답 분석' }
    ],
    recommendedProducts: ['toeic_total', 'toeic_hackers'],
    image: '🎯'
  },
  {
    id: 'korean_history_30days',
    title: '한국사 1급 30일 플랜',
    certification: '한국사능력검정시험',
    totalDays: 30,
    dailyHours: 1,
    phases: [
      { days: '1-15', focus: '시대별 개념', detail: '고대-조선-근대-현대 흐름 정리' },
      { days: '16-25', focus: '기출 문제', detail: '최근 10회 기출 2회독' },
      { days: '26-30', focus: '파이널 정리', detail: '약점 보완 + 모의고사' }
    ],
    recommendedProducts: ['korean_history'],
    image: '📜'
  }
];

// ============================================
// 피부 카테고리
// ============================================

export const skinProducts = {
  cleansing: [
    {
      id: 'cetaphil_cleanser',
      name: '세타필 클렌저',
      brand: 'Cetaphil',
      category: '클렌징',
      price: 18900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: 'https://www.oliveyoung.co.kr',
      commissionRate: 4,
      tags: ['민감성', '저자극', '군생활필수'],
      reviewCount: 12456,
      rating: 4.9,
      image: '🧴',
      description: '피부과 의사 추천 1위, 저자극 클렌저',
      usage: '아침저녁 2회, 거품 내어 부드럽게'
    },
    {
      id: 'roundlab_birch_cleanser',
      name: '라운드랩 자작나무 수분 폼클렌저',
      brand: 'Round Lab',
      category: '클렌징',
      price: 9900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: 'https://www.oliveyoung.co.kr',
      commissionRate: 4,
      tags: ['수분', '저자극', '가성비'],
      reviewCount: 8945,
      rating: 4.7,
      image: '🌲',
      description: '자작나무 수액으로 촉촉한 세안',
      usage: '아침저녁 2회'
    },
    {
      id: 'clearcool_dry',
      name: '클리어쿨 건성용 클렌저',
      brand: 'ClearCool',
      category: '클렌징',
      price: 8900,
      pxAvailable: true,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: null,
      commissionRate: 4,
      tags: ['건성', 'PX구매가능', '가성비'],
      reviewCount: 3456,
      rating: 4.5,
      image: '❄️',
      description: 'PX에서 구매 가능한 건성용',
      usage: '아침저녁 2회'
    }
  ],
  moisturizing: [
    {
      id: 'cetaphil_cream',
      name: '세타필 모이스처라이징 크림',
      brand: 'Cetaphil',
      category: '보습',
      price: 21900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: 'https://www.oliveyoung.co.kr',
      commissionRate: 4,
      tags: ['보습', '민감성', '저자극'],
      reviewCount: 9876,
      rating: 4.8,
      image: '💧',
      description: '24시간 지속 보습, 민감 피부 안심',
      usage: '세안 후 즉시 도포'
    },
    {
      id: 'roundlab_dokdo_toner',
      name: '라운드랩 독도 토너',
      brand: 'Round Lab',
      category: '보습',
      price: 15900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: 'https://www.oliveyoung.co.kr',
      commissionRate: 4,
      tags: ['진정', '수분', '베스트셀러'],
      reviewCount: 23456,
      rating: 4.9,
      image: '🌊',
      description: '독도 해양심층수로 수분 충전',
      usage: '세안 후 첫 단계'
    },
    {
      id: 'drjart_cicapair',
      name: '닥터자르트 시카페어 크림',
      brand: 'Dr.Jart+',
      category: '보습',
      price: 29000,
      pxAvailable: false,
      coupangLink: null,
      oliveYoungLink: 'https://www.oliveyoung.co.kr',
      commissionRate: 4,
      tags: ['외부활동후진정', '시카', '트러블'],
      reviewCount: 15678,
      rating: 4.8,
      image: '🌿',
      description: '외부 훈련 후 피부 진정',
      usage: '크림 단계에서 도포'
    }
  ],
  sunscreen: [
    {
      id: 'roundlab_sunscreen',
      name: '라운드랩 자외선차단제 SPF50+',
      brand: 'Round Lab',
      category: '자외선차단',
      price: 12900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: 'https://www.oliveyoung.co.kr',
      commissionRate: 4,
      tags: ['외부훈련필수', '야외작업', '백탁없음'],
      reviewCount: 11234,
      rating: 4.7,
      image: '☀️',
      description: '백탁 없는 무기자차, 땀에 강함',
      usage: '외출 30분 전, 2시간마다 재도포'
    },
    {
      id: 'biore_uv',
      name: '비오레UV 수분에센스 SPF50+',
      brand: 'Biore',
      category: '자외선차단',
      price: 15900,
      pxAvailable: false,
      coupangLink: null,
      oliveYoungLink: 'https://www.oliveyoung.co.kr',
      commissionRate: 4,
      tags: ['가볍다', '수분', '일본1위'],
      reviewCount: 8945,
      rating: 4.6,
      image: '🌞',
      description: '물처럼 가벼운 수분 에센스',
      usage: '외출 30분 전'
    }
  ],
  specialCare: [
    {
      id: 'mediheal_mask',
      name: '메디힐 마스크팩 10매',
      brand: 'Mediheal',
      category: '특수케어',
      price: 9900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: 'https://www.oliveyoung.co.kr',
      commissionRate: 4,
      tags: ['외박필수템', '수분', '진정'],
      reviewCount: 16789,
      rating: 4.8,
      image: '😷',
      description: '외박 전날 집중 케어',
      usage: '주 2-3회, 15분 부착'
    },
    {
      id: 'leaders_mask',
      name: '리더스 마스크팩',
      brand: 'Leaders',
      category: '특수케어',
      price: 8900,
      pxAvailable: false,
      coupangLink: 'https://www.coupang.com',
      oliveYoungLink: 'https://www.oliveyoung.co.kr',
      commissionRate: 4,
      tags: ['가성비', '수분', '밀착'],
      reviewCount: 12345,
      rating: 4.7,
      image: '🎭',
      description: '가성비 좋은 마스크팩',
      usage: '주 2-3회'
    },
    {
      id: 'aestura_cream',
      name: '에스트라 아토베리어 크림',
      brand: 'Aestura',
      category: '특수케어',
      price: 22000,
      pxAvailable: false,
      coupangLink: null,
      oliveYoungLink: 'https://www.oliveyoung.co.kr',
      commissionRate: 4,
      tags: ['여드름', '민감성', '피부장벽'],
      reviewCount: 9876,
      rating: 4.9,
      image: '🛡️',
      description: '피부장벽 강화, 여드름 피부',
      usage: '크림 단계에서 충분히'
    }
  ]
};

export const skinRoutines = [
  {
    id: 'dry_skin_morning',
    skinType: '건성',
    timeOfDay: '아침',
    steps: [
      {
        order: 1,
        name: '저자극 폼클렌저',
        method: '미온수로 거품 내어 부드럽게',
        duration: '1분',
        products: ['cetaphil_cleanser']
      },
      {
        order: 2,
        name: '토너',
        method: '손바닥에 덜어 두드려 흡수',
        duration: '30초',
        products: ['roundlab_dokdo_toner']
      },
      {
        order: 3,
        name: '수분 에센스',
        method: '얼굴 전체에 골고루',
        duration: '30초',
        products: []
      },
      {
        order: 4,
        name: '보습 크림',
        method: '충분한 양으로 밀봉',
        duration: '1분',
        products: ['cetaphil_cream']
      },
      {
        order: 5,
        name: '자외선차단제',
        method: '외출 30분 전 도포',
        duration: '30초',
        products: ['roundlab_sunscreen']
      }
    ],
    pxAlternatives: '클리어쿨 건성 라인 세트 활용',
    image: '🌅'
  },
  {
    id: 'dry_skin_evening',
    skinType: '건성',
    timeOfDay: '저녁',
    steps: [
      {
        order: 1,
        name: '클렌징',
        method: '이중 세안 (선크림 완전 제거)',
        duration: '2분',
        products: ['cetaphil_cleanser']
      },
      {
        order: 2,
        name: '토너',
        method: '3회 레이어링',
        duration: '1분',
        products: ['roundlab_dokdo_toner']
      },
      {
        order: 3,
        name: '에센스',
        method: '수분 에센스 충분히',
        duration: '1분',
        products: []
      },
      {
        order: 4,
        name: '크림',
        method: '두껍게 도포 (슬리핑팩처럼)',
        duration: '1분',
        products: ['cetaphil_cream']
      }
    ],
    pxAlternatives: '클리어쿨 나이트 크림',
    image: '🌙'
  },
  {
    id: 'oily_skin_morning',
    skinType: '지성',
    timeOfDay: '아침',
    steps: [
      {
        order: 1,
        name: '살리실산 폼클렌저',
        method: 'T존 집중 세안',
        duration: '1분',
        products: ['roundlab_birch_cleanser']
      },
      {
        order: 2,
        name: '토너',
        method: '코튼에 적셔 닦아내듯',
        duration: '30초',
        products: ['roundlab_dokdo_toner']
      },
      {
        order: 3,
        name: '오일프리 에센스',
        method: '가볍게 도포',
        duration: '30초',
        products: []
      },
      {
        order: 4,
        name: '가벼운 로션',
        method: '유분기 적은 제품',
        duration: '30초',
        products: []
      },
      {
        order: 5,
        name: '자외선차단제',
        method: '논코메도제닉 제품',
        duration: '30초',
        products: ['roundlab_sunscreen']
      }
    ],
    pxAlternatives: 'PX 지성용 라인',
    image: '🌅'
  },
  {
    id: 'acne_skin_routine',
    skinType: '여드름성',
    timeOfDay: '저녁',
    steps: [
      {
        order: 1,
        name: '저자극 클렌징',
        method: '자극 최소화',
        duration: '1분',
        products: ['cetaphil_cleanser']
      },
      {
        order: 2,
        name: '진정 토너',
        method: '염증 부위 집중',
        duration: '1분',
        products: ['roundlab_dokdo_toner']
      },
      {
        order: 3,
        name: '시카 에센스',
        method: '트러블 부위에 점 도포',
        duration: '1분',
        products: ['drjart_cicapair']
      },
      {
        order: 4,
        name: '장벽 강화 크림',
        method: '피부 장벽 회복',
        duration: '1분',
        products: ['aestura_cream']
      }
    ],
    pxAlternatives: '의무대 연고 병행',
    image: '🩹'
  },
  {
    id: 'leave_special_routine',
    skinType: '전체',
    timeOfDay: '외박 전날',
    steps: [
      {
        order: 1,
        name: '딥클렌징',
        method: '평소보다 꼼꼼히',
        duration: '2분',
        products: ['cetaphil_cleanser']
      },
      {
        order: 2,
        name: '각질제거',
        method: '부드러운 스크럽',
        duration: '2분',
        products: []
      },
      {
        order: 3,
        name: '토너',
        method: '5회 레이어링',
        duration: '2분',
        products: ['roundlab_dokdo_toner']
      },
      {
        order: 4,
        name: '마스크팩',
        method: '15분 부착 후 에센스 흡수',
        duration: '15분',
        products: ['mediheal_mask']
      },
      {
        order: 5,
        name: '크림',
        method: '슬리핑팩처럼 두껍게',
        duration: '2분',
        products: ['cetaphil_cream']
      }
    ],
    pxAlternatives: 'PX 마스크팩 활용',
    image: '✨'
  }
];

// ============================================
// 커뮤니티 후기 데이터
// ============================================

export const communityReviews = {
  health: [
    {
      id: 'review_health_1',
      userId: '공군_2412_창공이글55',
      category: '헬스',
      productId: 'creatine_on',
      title: '입대 전 62kg → 복무 11개월 72kg 증량 성공',
      content: '크레아틴 매일 5g + 저항밴드 루틴 병행했습니다. 급식 2인분 + 유청단백질 하루 2스쿱으로 10kg 벌크업 성공했어요. 체력검정도 3급에서 특급으로 올랐습니다.',
      likes: 847,
      helpful: 623,
      createdAt: '2025-02-14',
      relatedProducts: ['creatine_on', 'protein_musclePharm', 'resistance_band'],
      image: '💪'
    },
    {
      id: 'review_health_2',
      userId: '육군_2501_맹호전사88',
      category: '헬스',
      productId: 'resistance_band',
      title: '영내에서 저항밴드만으로 근력 유지',
      content: '헬스장 못 가는 환경에서 저항밴드가 생명입니다. 생활관 침대 프레임에 걸고 풀업, 로우, 프레스 다 할 수 있어요. 3개월 사용 중인데 밴드 내구성도 좋습니다.',
      likes: 542,
      helpful: 389,
      createdAt: '2025-03-02',
      relatedProducts: ['resistance_band'],
      image: '🎯'
    },
    {
      id: 'review_health_3',
      userId: '해병_2411_불사조99',
      category: '헬스',
      productId: 'bcaa_now',
      title: 'BCAA로 훈련 후 회복 속도 2배',
      content: '행군이나 강도 높은 훈련 후 BCAA 섭취하면 다음날 근육통이 확실히 덜합니다. 특히 유격 훈련 기간에 필수템이었어요.',
      likes: 423,
      helpful: 312,
      createdAt: '2025-02-28',
      relatedProducts: ['bcaa_now'],
      image: '⚡'
    }
  ],
  certification: [
    {
      id: 'review_cert_1',
      userId: '육군_2503_맹호전사31',
      category: '자격증',
      productId: 'engineer_info_set',
      title: '3개월 독학으로 정보처리기사 필기 합격',
      content: '이기적 교재 하루 2시간씩 3개월 독학했습니다. 점심시간 30분, 취침 전 1시간 30분 투자해서 필기 합격했어요. 실기는 전역 후 볼 예정입니다.',
      likes: 1247,
      helpful: 892,
      createdAt: '2025-03-15',
      relatedProducts: ['engineer_info_set'],
      image: '💻'
    },
    {
      id: 'review_cert_2',
      userId: '공군_2501_별빛조종사77',
      category: '자격증',
      productId: 'toeic_total',
      title: '복무 중 8개월 만에 630→815점',
      content: '해커스 토익 교재로 매일 1시간씩 학습했습니다. LC는 EBSi 무료 강의 활용, RC는 문법 정리 + 독해 속도 훈련에 집중했어요. 전역 전 목표 달성!',
      likes: 923,
      helpful: 671,
      createdAt: '2025-02-20',
      relatedProducts: ['toeic_total'],
      image: '🎯'
    },
    {
      id: 'review_cert_3',
      userId: '해군_2412_푸른물결44',
      category: '자격증',
      productId: 'korean_history',
      title: '한국사 1급 한 달 만에 합격',
      content: '에듀윌 교재 1회독 + 기출 2회독으로 1급 땄습니다. 공무원 준비하시는 분들한테 강추. 군대에서 딸 수 있는 가장 가성비 좋은 자격증.',
      likes: 687,
      helpful: 534,
      createdAt: '2025-03-01',
      relatedProducts: ['korean_history'],
      image: '📜'
    }
  ],
  book: [
    {
      id: 'review_book_1',
      userId: '공군_2502_하늘독수리22',
      category: '도서',
      productId: 'atomic_habits',
      title: '군생활 루틴 설계의 바이블',
      content: '이 책 읽고 매일 아침 5분 스트레칭, 점심 후 10분 명상, 취침 전 30분 독서 루틴을 만들었어요. 6개월 지속 중이고 전역할 때까지 유지할 겁니다.',
      likes: 1124,
      helpful: 823,
      createdAt: '2025-02-18',
      relatedProducts: ['atomic_habits'],
      image: '📘'
    },
    {
      id: 'review_book_2',
      userId: '육군_2411_철벽방어55',
      category: '도서',
      productId: 'millionaire_fastlane',
      title: '전역 후 인생 설계 완전히 바뀜',
      content: '부의 추월차선 읽고 전역 후 창업 준비 중입니다. 군대에서 사업 아이템 구상하고 시장 조사하는 시간으로 활용했어요.',
      likes: 892,
      helpful: 634,
      createdAt: '2025-03-05',
      relatedProducts: ['millionaire_fastlane'],
      image: '💰'
    },
    {
      id: 'review_book_3',
      userId: '해병_2501_불굴의의지88',
      category: '도서',
      productId: 'sapiens',
      title: '18개월 복무 중 교양 쌓기 최고',
      content: '사피엔스, 총균쇠, 코스모스 이 3권은 꼭 읽어보세요. 인생관이 달라집니다. 군대에서 시간 많을 때 두껍고 어려운 책 읽기 딱 좋아요.',
      likes: 756,
      helpful: 512,
      createdAt: '2025-02-25',
      relatedProducts: ['sapiens', 'guns_germs_steel', 'cosmos'],
      image: '🌍'
    }
  ],
  skin: [
    {
      id: 'review_skin_1',
      userId: '공군_2503_푸른하늘33',
      category: '피부',
      productId: 'cetaphil_cleanser',
      title: '민감성 피부 구원템',
      content: '입대 후 트러블 생겨서 고생했는데 세타필 쓰고 나서 완전히 정상화됐어요. 자극 없고 촉촉해서 군생활 필수템입니다.',
      likes: 634,
      helpful: 478,
      createdAt: '2025-03-08',
      relatedProducts: ['cetaphil_cleanser', 'cetaphil_cream'],
      image: '🧴'
    },
    {
      id: 'review_skin_2',
      userId: '육군_2412_호국용사66',
      category: '피부',
      productId: 'roundlab_sunscreen',
      title: '외부 훈련 시 필수템',
      content: '행군, 사격 훈련 시 이거 안 바르면 얼굴 타서 고생합니다. 백탁 없고 땀에도 잘 안 밀려서 완전 추천.',
      likes: 523,
      helpful: 401,
      createdAt: '2025-02-22',
      relatedProducts: ['roundlab_sunscreen'],
      image: '☀️'
    },
    {
      id: 'review_skin_3',
      userId: '해군_2501_파도전사11',
      category: '피부',
      productId: 'mediheal_mask',
      title: '외박 전날 이거 하나면 끝',
      content: '외박 나가기 전날 밤 메디힐 마스크팩 하고 자면 다음날 피부 완전 좋아져요. 여자친구가 피부 좋아졌다고 칭찬했습니다.',
      likes: 812,
      helpful: 623,
      createdAt: '2025-03-12',
      relatedProducts: ['mediheal_mask'],
      image: '😷'
    }
  ]
};

// ============================================
// 수익 모델 구조
// ============================================

export const revenueModel = {
  commissionRates: {
    healthEquipment: 4,
    supplements: 3,
    books: 3,
    onlineLectures: 5,
    skincare: 4
  },
  conversionRates: {
    supplements: 12,
    books: 8,
    skincare: 15,
    onlineLectures: 6,
    equipment: 10,
    certifications: 9
  },
  averageOrderValue: {
    supplements: 22000,
    books: 25000,
    skincare: 18000,
    onlineLectures: 89000,
    equipment: 15000,
    certifications: 30000
  }
};

// MAU 1만명 기준 월 예상 수익 계산 함수
export function calculateMonthlyRevenue(mau = 10000) {
  const { conversionRates, averageOrderValue, commissionRates } = revenueModel;

  const categories = [
    { name: '영양제', conversion: conversionRates.supplements, aov: averageOrderValue.supplements, commission: commissionRates.supplements },
    { name: '도서', conversion: conversionRates.books, aov: averageOrderValue.books, commission: commissionRates.books },
    { name: '화장품', conversion: conversionRates.skincare, aov: averageOrderValue.skincare, commission: commissionRates.skincare },
    { name: '온라인강의', conversion: conversionRates.onlineLectures, aov: averageOrderValue.onlineLectures, commission: commissionRates.onlineLectures },
    { name: '운동용품', conversion: conversionRates.equipment, aov: averageOrderValue.equipment, commission: commissionRates.healthEquipment },
    { name: '자격증교재', conversion: conversionRates.certifications, aov: averageOrderValue.certifications, commission: commissionRates.books }
  ];

  let totalRevenue = 0;
  const breakdown = categories.map(cat => {
    const purchases = mau * (cat.conversion / 100);
    const gmv = purchases * cat.aov;
    const revenue = gmv * (cat.commission / 100);
    totalRevenue += revenue;

    return {
      category: cat.name,
      purchases: Math.round(purchases),
      gmv: Math.round(gmv),
      revenue: Math.round(revenue),
      conversionRate: cat.conversion,
      commissionRate: cat.commission
    };
  });

  return {
    mau,
    totalRevenue: Math.round(totalRevenue),
    breakdown,
    summary: `MAU ${mau.toLocaleString()}명 기준 월 예상 수익: ${Math.round(totalRevenue).toLocaleString()}원`
  };
}

// 기본 export
export default {
  healthProducts,
  healthRoutines,
  nutritionProducts,
  nutritionGuides,
  bookProducts,
  readingRoutines,
  militaryExamProducts,
  militaryExamRoutines,
  certificationProducts,
  certificationRoutines,
  skinProducts,
  skinRoutines,
  communityReviews,
  revenueModel,
  calculateMonthlyRevenue
};
