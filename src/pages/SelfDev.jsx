import React, { useState, useEffect } from 'react';
import { COLORS, styles } from '../styles/theme';
import { formatPrice, defaultUserData } from '../utils/helpers';

import HealthTab from '../components/health/HealthTab';
import WellnessTab from '../components/wellness/WellnessTab';
import BooksTab from '../components/books/BooksTab';
import ExamTab from '../components/exam/ExamTab';
import CertTab from '../components/cert/CertTab';
import SkinTab from '../components/skin/SkinTab';
import RoutineModal from '../components/modals/RoutineModal';
import CertModal from '../components/modals/CertModal';
import SavingsModal from '../components/modals/SavingsModal';

const CATEGORIES = [
  { id: 'health', label: '헬스', emoji: '💪', desc: '운동루틴·체력검정', color: '#E8F5E9' },
  { id: 'wellness', label: '건강', emoji: '💊', desc: '영양제·식단관리', color: '#E3F2FD' },
  { id: 'books', label: '도서', emoji: '📚', desc: '독서챌린지·추천', color: '#FFF3E0' },
  { id: 'exam', label: '군수', emoji: '📝', desc: '수능·편입 준비', color: '#F3E5F5' },
  { id: 'cert', label: '자격증', emoji: '🏆', desc: '합격루틴·교재', color: '#FFFDE7' },
  { id: 'skin', label: '피부', emoji: '✨', desc: '스킨케어·루틴', color: '#FCE4EC' },
];

const BOTTOM_TABS = [
  { id: 'home', label: '홈', emoji: '🏠' },
  { id: 'selfdev', label: '자기계발', emoji: '📖' },
  { id: 'community', label: '커뮤니티', emoji: '💬' },
  { id: 'mypage', label: '마이', emoji: '👤' },
];

const SelfDev = () => {
  const [page, setPage] = useState('home'); // home, category, community, mypage
  const [activeCategory, setActiveCategory] = useState(null);
  const [bottomTab, setBottomTab] = useState('home');

  const [userData, setUserData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('milwallet_data')) || defaultUserData;
    } catch { return defaultUserData; }
  });

  useEffect(() => {
    localStorage.setItem('milwallet_data', JSON.stringify(userData));
  }, [userData]);

  const updateUserData = (updates) => setUserData(prev => ({ ...prev, ...updates }));

  // 모달
  const [showRoutineModal, setShowRoutineModal] = useState(null);
  const [routineStep, setRoutineStep] = useState(0);
  const [showCertModal, setShowCertModal] = useState(false);
  const [showSavingsModal, setShowSavingsModal] = useState(false);

  const handleBuy = (product, store) => {
    const url = product.links?.[store] || product.links?.coupang || product.links?.direct || '#';
    const commission = Math.round(product.price * (product.commissionRate || 0.03));
    updateUserData({
      savings: userData.savings + commission,
      purchaseHistory: [...userData.purchaseHistory, {
        productId: product.id, productName: product.name, price: product.price,
        commission, store, date: new Date().toISOString().slice(0, 10),
      }]
    });
    window.open(url, '_blank');
  };

  const openCategory = (catId) => {
    setActiveCategory(catId);
    setPage('category');
    setBottomTab('selfdev');
  };

  const goHome = () => {
    setPage('home');
    setActiveCategory(null);
    setBottomTab('home');
  };

  // ============================================
  // 홈 화면
  // ============================================
  const renderHome = () => (
    <div>
      {/* 헤더 */}
      <div style={styles.header}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={styles.headerTitle}>🎖️ 밀월렛</div>
            <div style={styles.headerSub}>군인을 위한 스마트 자기계발</div>
          </div>
          <button onClick={() => setShowSavingsModal(true)}
            style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff',
              padding: '6px 12px', borderRadius: 8, fontSize: 11, cursor: 'pointer' }}>
            💰 {formatPrice(userData.savings)}
          </button>
        </div>
      </div>

      {/* 오늘의 요약 */}
      <div style={{ ...styles.summaryCard, background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.primary, marginBottom: 8 }}>
          📊 이번 달 나의 성장
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {[
            { val: `${userData.exerciseCount}회`, label: '운동' },
            { val: `${userData.studyHours}h`, label: '학습' },
            { val: `${userData.booksRead}권`, label: '독서' },
            { val: `${userData.streak}일`, label: '연속' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: COLORS.primaryDark }}>{item.val}</div>
              <div style={{ fontSize: 10, color: COLORS.textSecondary }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 카테고리 그리드 */}
      <div style={{ padding: '0 16px', marginTop: 4 }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: COLORS.text }}>
          카테고리
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => openCategory(cat.id)}
              style={{
                padding: '20px 8px 14px', borderRadius: 16, border: 'none',
                backgroundColor: cat.color, cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)', transition: 'transform 0.15s',
              }}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span style={{ fontSize: 32 }}>{cat.emoji}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.text }}>{cat.label}</span>
              <span style={{ fontSize: 10, color: COLORS.textSecondary }}>{cat.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 오늘의 추천 */}
      <div style={{ padding: '0 16px', marginTop: 20 }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>🤖 오늘의 추천</div>
        <div style={{ ...styles.card, background: 'linear-gradient(135deg, #FAFAFA, #F5F5F5)' }}>
          <div style={{ fontSize: 13, lineHeight: 1.8, color: COLORS.text }}>
            {userData.exerciseCount === 0
              ? '아직 운동 기록이 없어요! 오늘 영내 맨몸운동 루틴으로 시작해보는 건 어떨까요?'
              : userData.booksRead === 0
                ? '이번 달 독서 목표를 세워볼까요? 취침 전 30분 독서 습관이 큰 변화를 만듭니다.'
                : `${userData.streak}일 연속 달성 중! 오늘도 루틴을 이어가 보세요.`
            }
          </div>
          <button style={{ ...styles.buyButton(COLORS.primary), marginTop: 8 }}
            onClick={() => openCategory(userData.exerciseCount === 0 ? 'health' : 'books')}>
            바로가기 →
          </button>
        </div>
      </div>

      {/* 인기 후기 미리보기 */}
      <div style={{ padding: '0 16px', marginTop: 20, marginBottom: 80 }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>🔥 장병들이 많이 본 후기</div>
        {[
          { title: '크레아틴 11개월 후기 - 62kg→72kg', author: '공군_창공이글55', likes: 234 },
          { title: '정보처리기사 3개월 독학 합격!', author: '육군_맹호전사31', likes: 312 },
          { title: 'TOEIC 630→815 학습법 공유', author: '공군_별빛조종사77', likes: 267 },
        ].map((r, i) => (
          <div key={i} style={{ ...styles.card, padding: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{r.title}</div>
              <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{r.author}</div>
            </div>
            <span style={{ fontSize: 11, color: COLORS.textSecondary }}>❤️ {r.likes}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // ============================================
  // 카테고리 상세 화면
  // ============================================
  const renderCategory = () => {
    const cat = CATEGORIES.find(c => c.id === activeCategory);
    if (!cat) return null;

    const commonProps = { userData, updateUserData, handleBuy, setShowRoutineModal, setRoutineStep, setShowCertModal };

    return (
      <div>
        {/* 카테고리 헤더 */}
        <div style={{ ...styles.header, padding: '12px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={goHome}
              style={{ background: 'none', border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer', padding: 0 }}>
              ←
            </button>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700 }}>{cat.emoji} {cat.label}</div>
              <div style={{ fontSize: 11, opacity: 0.8 }}>{cat.desc}</div>
            </div>
          </div>
        </div>

        {/* 탭 컨텐츠 */}
        <div style={{ paddingBottom: 80 }}>
          {activeCategory === 'health' && <HealthTab {...commonProps} />}
          {activeCategory === 'wellness' && <WellnessTab {...commonProps} />}
          {activeCategory === 'books' && <BooksTab {...commonProps} />}
          {activeCategory === 'exam' && <ExamTab {...commonProps} />}
          {activeCategory === 'cert' && <CertTab {...commonProps} />}
          {activeCategory === 'skin' && <SkinTab {...commonProps} />}
        </div>
      </div>
    );
  };

  // ============================================
  // 커뮤니티 화면
  // ============================================
  const renderCommunity = () => (
    <div>
      <div style={{ ...styles.header, padding: '16px' }}>
        <div style={styles.headerTitle}>💬 커뮤니티</div>
        <div style={styles.headerSub}>장병들의 자기계발 이야기</div>
      </div>
      <div style={{ padding: 16, paddingBottom: 80 }}>
        <div style={{ fontSize: 14, color: COLORS.textSecondary, textAlign: 'center', padding: 40 }}>
          커뮤니티 기능이 곧 오픈됩니다!
        </div>
      </div>
    </div>
  );

  // ============================================
  // 마이페이지 화면
  // ============================================
  const renderMyPage = () => (
    <div>
      <div style={{ ...styles.header, padding: '16px' }}>
        <div style={styles.headerTitle}>👤 마이페이지</div>
      </div>
      <div style={{ padding: 16, paddingBottom: 80 }}>
        {/* 성장 요약 */}
        <div style={styles.card}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>📊 나의 성장 기록</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { emoji: '💪', label: '운동', value: `${userData.exerciseCount}회` },
              { emoji: '📖', label: '학습', value: `${userData.studyHours}시간` },
              { emoji: '📚', label: '독서', value: `${userData.booksRead}권` },
              { emoji: '💰', label: '절약', value: formatPrice(userData.savings) },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: 12, backgroundColor: '#F5F5F5', borderRadius: 8 }}>
                <div style={{ fontSize: 20 }}>{item.emoji}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.primary }}>{item.value}</div>
                <div style={{ fontSize: 10, color: COLORS.textSecondary }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 자격증 현황 */}
        <div style={{ ...styles.card, marginTop: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>🏆 자격증 현황</div>
          {userData.certList.length === 0
            ? <div style={{ fontSize: 12, color: COLORS.textSecondary }}>등록된 자격증이 없습니다</div>
            : userData.certList.map((cert, i) => {
                const dday = Math.ceil((new Date(cert.examDate) - new Date()) / (1000*60*60*24));
                return (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
                    <span style={{ fontSize: 13 }}>{cert.name}</span>
                    <span style={{ fontSize: 12, color: COLORS.accent, fontWeight: 700 }}>D-{dday}</span>
                  </div>
                );
              })
          }
        </div>

        {/* 절약 현황 버튼 */}
        <button onClick={() => setShowSavingsModal(true)}
          style={{ ...styles.buyButton(COLORS.primary), width: '100%', textAlign: 'center', padding: 14, marginTop: 12, borderRadius: 12 }}>
          💰 내 절약 현황 보기
        </button>
      </div>
    </div>
  );

  // ============================================
  // 메인 렌더
  // ============================================
  const renderPage = () => {
    if (page === 'category') return renderCategory();
    if (bottomTab === 'community') return renderCommunity();
    if (bottomTab === 'mypage') return renderMyPage();
    return renderHome();
  };

  return (
    <div style={styles.container}>
      {renderPage()}

      {/* 바텀 네비게이션 */}
      <div style={{
        position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '100%', maxWidth: 480,
        backgroundColor: '#fff', borderTop: `1px solid ${COLORS.border}`,
        display: 'flex', justifyContent: 'space-around', padding: '8px 0 12px',
        zIndex: 200, boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
      }}>
        {BOTTOM_TABS.map(tab => {
          const isActive = page === 'category'
            ? tab.id === 'selfdev'
            : tab.id === bottomTab;
          return (
            <button key={tab.id} onClick={() => {
              if (tab.id === 'home') goHome();
              else if (tab.id === 'selfdev') { setPage('home'); setBottomTab('home'); }
              else { setPage(tab.id); setBottomTab(tab.id); }
            }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
                color: isActive ? COLORS.primary : COLORS.textSecondary,
                transition: 'color 0.2s',
              }}>
              <span style={{ fontSize: 20 }}>{tab.emoji}</span>
              <span style={{ fontSize: 10, fontWeight: isActive ? 700 : 400 }}>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 모달 */}
      <RoutineModal routine={showRoutineModal} routineStep={routineStep}
        setRoutineStep={setRoutineStep} onClose={() => setShowRoutineModal(null)}
        userData={userData} updateUserData={updateUserData} handleBuy={handleBuy} />
      <CertModal show={showCertModal} onClose={() => setShowCertModal(false)}
        userData={userData} updateUserData={updateUserData} />
      <SavingsModal show={showSavingsModal} onClose={() => setShowSavingsModal(false)} userData={userData} />
    </div>
  );
};

export default SelfDev;
