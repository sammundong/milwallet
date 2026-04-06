// 밀월렛 피부 카테고리 데이터

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
