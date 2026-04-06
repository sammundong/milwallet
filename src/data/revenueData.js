// 밀월렛 수익 모델 구조 데이터

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
