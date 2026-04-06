import React, { useState, useEffect } from 'react';
import { COLORS, styles } from '../styles/theme';
import { formatPrice, defaultUserData } from '../utils/helpers';

// 탭 컴포넌트
import HealthTab from '../components/health/HealthTab';
import WellnessTab from '../components/wellness/WellnessTab';
import BooksTab from '../components/books/BooksTab';
import ExamTab from '../components/exam/ExamTab';
import CertTab from '../components/cert/CertTab';
import SkinTab from '../components/skin/SkinTab';

// 모달 컴포넌트
import RoutineModal from '../components/modals/RoutineModal';
import CertModal from '../components/modals/CertModal';
import SavingsModal from '../components/modals/SavingsModal';

// 대시보드
import Dashboard from '../components/dashboard/Dashboard';

const TABS = [
  { id: 'health', label: '헬스', emoji: '💪' },
  { id: 'wellness', label: '건강', emoji: '💊' },
  { id: 'books', label: '도서', emoji: '📚' },
  { id: 'exam', label: '군수', emoji: '📝' },
  { id: 'cert', label: '자격증', emoji: '🏆' },
  { id: 'skin', label: '피부', emoji: '✨' },
];

const AI_RECOMMENDATIONS = [
  '오늘은 맨몸운동 루틴 + 크레아틴 섭취 추천!',
  '체력검정 D-30, 인터벌 트레이닝을 시작해보세요',
  '이번 주 독서 목표 달성까지 1권 남았어요!',
  '피부 건조 시즌, 보습 루틴을 확인하세요',
  '정보처리기사 시험 D-60, 기출 반복 시작할 때!',
];

const SelfDev = () => {
  const [activeTab, setActiveTab] = useState('health');

  // 사용자 데이터 (localStorage)
  const [userData, setUserData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('milwallet_data')) || defaultUserData;
    } catch {
      return defaultUserData;
    }
  });

  useEffect(() => {
    localStorage.setItem('milwallet_data', JSON.stringify(userData));
  }, [userData]);

  const updateUserData = (updates) => setUserData(prev => ({ ...prev, ...updates }));

  // 모달 상태
  const [showRoutineModal, setShowRoutineModal] = useState(null);
  const [routineStep, setRoutineStep] = useState(0);
  const [showCertModal, setShowCertModal] = useState(false);
  const [showSavingsModal, setShowSavingsModal] = useState(false);

  // 구매 핸들러
  const handleBuy = (product, store) => {
    const url = product.links?.[store] || product.links?.coupang || product.links?.direct || '#';
    const commission = Math.round(product.price * (product.commissionRate || 0.03));
    updateUserData({
      savings: userData.savings + commission,
      purchaseHistory: [...userData.purchaseHistory, {
        productId: product.id,
        productName: product.name,
        price: product.price,
        commission,
        store,
        date: new Date().toISOString().slice(0, 10),
      }]
    });
    window.open(url, '_blank');
  };

  const todayRecommend = AI_RECOMMENDATIONS[new Date().getDay() % AI_RECOMMENDATIONS.length];

  // 탭 컨텐츠 렌더링
  const renderTabContent = () => {
    switch (activeTab) {
      case 'health':
        return <HealthTab userData={userData} updateUserData={updateUserData} handleBuy={handleBuy}
          setShowRoutineModal={setShowRoutineModal} setRoutineStep={setRoutineStep} />;
      case 'wellness':
        return <WellnessTab handleBuy={handleBuy} />;
      case 'books':
        return <BooksTab userData={userData} updateUserData={updateUserData} handleBuy={handleBuy} />;
      case 'exam':
        return <ExamTab handleBuy={handleBuy} />;
      case 'cert':
        return <CertTab userData={userData} handleBuy={handleBuy} setShowCertModal={setShowCertModal} />;
      case 'skin':
        return <SkinTab userData={userData} updateUserData={updateUserData} handleBuy={handleBuy} />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      {/* 헤더 */}
      <div style={styles.header}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={styles.headerTitle}>🎖️ 밀월렛 자기계발</div>
            <div style={styles.headerSub}>군인을 위한 스마트 자기계발 플랫폼</div>
          </div>
          <button onClick={() => setShowSavingsModal(true)}
            style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', padding: '6px 12px', borderRadius: 8, fontSize: 11, cursor: 'pointer' }}>
            💰 내 절약 현황
          </button>
        </div>
      </div>

      {/* 이번 달 요약 */}
      <div style={styles.summaryCard}>
        <div style={styles.summaryGrid}>
          <div style={styles.summaryItem}>
            <div style={styles.summaryNumber}>{userData.studyHours}</div>
            <div style={styles.summaryLabel}>학습 시간</div>
          </div>
          <div style={styles.summaryItem}>
            <div style={styles.summaryNumber}>{userData.exerciseCount}</div>
            <div style={styles.summaryLabel}>운동 횟수</div>
          </div>
          <div style={styles.summaryItem}>
            <div style={styles.summaryNumber}>{userData.booksRead}</div>
            <div style={styles.summaryLabel}>독서 권수</div>
          </div>
          <div style={styles.summaryItem}>
            <div style={{...styles.summaryNumber, fontSize: 16}}>{formatPrice(userData.savings)}</div>
            <div style={styles.summaryLabel}>절약 금액</div>
          </div>
        </div>
        <div style={styles.aiRecommend}>
          <span>🤖</span>
          <span>{todayRecommend}</span>
        </div>
      </div>

      {/* 탭 */}
      <div style={styles.tabContainer}>
        {TABS.map(tab => (
          <button key={tab.id} style={styles.tab(activeTab === tab.id)} onClick={() => setActiveTab(tab.id)}>
            {tab.emoji} {tab.label}
          </button>
        ))}
      </div>

      {/* 탭 컨텐츠 */}
      {renderTabContent()}

      {/* 대시보드 */}
      <Dashboard userData={userData} />

      {/* 연속 달성 */}
      {userData.streak > 0 && (
        <div style={styles.section}>
          <div style={{ ...styles.card, textAlign: 'center', background: 'linear-gradient(135deg, #FFF3E0, #FFECB3)' }}>
            <span style={{ fontSize: 30 }}>🔥</span>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{userData.streak}일 연속 달성!</div>
            <div style={{ fontSize: 11, color: COLORS.textSecondary }}>꾸준함이 최고의 무기입니다</div>
          </div>
        </div>
      )}

      {/* 모달 */}
      <RoutineModal
        routine={showRoutineModal}
        routineStep={routineStep}
        setRoutineStep={setRoutineStep}
        onClose={() => setShowRoutineModal(null)}
        userData={userData}
        updateUserData={updateUserData}
        handleBuy={handleBuy}
      />
      <CertModal
        show={showCertModal}
        onClose={() => setShowCertModal(false)}
        userData={userData}
        updateUserData={updateUserData}
      />
      <SavingsModal
        show={showSavingsModal}
        onClose={() => setShowSavingsModal(false)}
        userData={userData}
      />
    </div>
  );
};

export default SelfDev;
