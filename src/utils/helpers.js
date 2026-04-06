import { healthProducts } from '../data/healthData';
import { wellnessProducts } from '../data/wellnessData';
import { bookProducts } from '../data/bookData';
import { militaryExamProducts } from '../data/examData';
import { certProducts } from '../data/certData';
import { skinProducts } from '../data/skinData';

export const formatPrice = (price) => price?.toLocaleString('ko-KR') + '원';

export const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}분 ${s < 10 ? '0' : ''}${s}초`;
};

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

export const defaultUserData = {
  studyHours: 0,
  exerciseCount: 0,
  booksRead: 0,
  savings: 0,
  purchaseHistory: [],
  streak: 0,
  fitnessRecords: { pushups: 0, situps: 0, running3km: 0 },
  skinType: null,
  skinConcerns: [],
  certList: [],
  readingList: [],
  healthLog: [],
  skinLog: [],
  examGoal: null,
};
