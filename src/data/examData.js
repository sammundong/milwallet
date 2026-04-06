// 밀월렛 군수(군대수능) 카테고리 데이터

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
