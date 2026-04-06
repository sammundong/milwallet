import React, { useState, useEffect, useMemo } from 'react';
import {
  healthProducts, healthRoutines, fitnessStandards,
  wellnessProducts, healthGoals, dietGuides,
  bookProducts, readingRoutines,
  militaryExamProducts, examRoutines,
  certProducts, certRoutines,
  skinProducts, skinRoutines, skinTypes, skinConcerns,
  communityReviews, revenueModel, calculateMonthlyRevenue, getProductById
} from '../data/selfDevBusinessData';

// ============================================
// 스타일 상수
// ============================================
const COLORS = {
  primary: '#1B5E20',
  primaryLight: '#4CAF50',
  primaryDark: '#0D3B0F',
  accent: '#FF6F00',
  bg: '#F5F5F5',
  card: '#FFFFFF',
  text: '#212121',
  textSecondary: '#757575',
  border: '#E0E0E0',
  success: '#4CAF50',
  warning: '#FF9800',
  danger: '#F44336',
  pxBadge: '#2E7D32',
  affiliate: '#BDBDBD',
};

const styles = {
  container: {
    maxWidth: 480,
    margin: '0 auto',
    backgroundColor: COLORS.bg,
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    paddingBottom: 20,
  },
  header: {
    background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryLight} 100%)`,
    color: '#fff',
    padding: '20px 16px 16px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 4,
  },
  headerSub: {
    fontSize: 12,
    opacity: 0.85,
  },
  summaryCard: {
    margin: '12px 16px',
    padding: 16,
    backgroundColor: COLORS.card,
    borderRadius: 12,
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: 8,
    marginBottom: 12,
  },
  summaryItem: {
    textAlign: 'center',
  },
  summaryNumber: {
    fontSize: 22,
    fontWeight: 700,
    color: COLORS.primary,
  },
  summaryLabel: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  aiRecommend: {
    background: `linear-gradient(90deg, ${COLORS.primary}11, ${COLORS.primaryLight}11)`,
    borderRadius: 8,
    padding: '8px 12px',
    fontSize: 13,
    color: COLORS.primary,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  tabContainer: {
    display: 'flex',
    overflowX: 'auto',
    padding: '0 16px',
    gap: 8,
    marginBottom: 12,
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none',
  },
  tab: (active) => ({
    padding: '8px 16px',
    borderRadius: 20,
    border: 'none',
    backgroundColor: active ? COLORS.primary : '#fff',
    color: active ? '#fff' : COLORS.text,
    fontSize: 13,
    fontWeight: active ? 600 : 400,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    boxShadow: active ? '0 2px 8px rgba(27,94,32,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'all 0.2s',
    flexShrink: 0,
  }),
  section: {
    margin: '0 16px 16px',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 12,
    color: COLORS.text,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
  },
  productCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    position: 'relative',
  },
  productName: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 700,
    color: COLORS.accent,
  },
  productDesc: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 4,
    lineHeight: 1.4,
  },
  pxBadge: {
    display: 'inline-block',
    backgroundColor: COLORS.pxBadge,
    color: '#fff',
    fontSize: 10,
    padding: '2px 6px',
    borderRadius: 4,
    fontWeight: 600,
    marginLeft: 6,
  },
  affiliateText: {
    position: 'absolute',
    bottom: 8,
    right: 10,
    fontSize: 9,
    color: COLORS.affiliate,
  },
  buyButton: (color = COLORS.primary) => ({
    padding: '8px 14px',
    borderRadius: 8,
    border: 'none',
    backgroundColor: color,
    color: '#fff',
    fontSize: 12,
    fontWeight: 600,
    cursor: 'pointer',
    marginRight: 6,
    marginTop: 8,
  }),
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 6,
  },
  tag: {
    fontSize: 10,
    padding: '2px 8px',
    borderRadius: 10,
    backgroundColor: `${COLORS.primary}15`,
    color: COLORS.primary,
  },
  progressBar: (pct, color = COLORS.primaryLight) => ({
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E8F5E9',
    overflow: 'hidden',
    position: 'relative',
  }),
  progressFill: (pct, color = COLORS.primaryLight) => ({
    height: '100%',
    width: `${Math.min(pct, 100)}%`,
    backgroundColor: color,
    borderRadius: 4,
    transition: 'width 0.5s ease',
  }),
  input: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: 8,
    border: `1px solid ${COLORS.border}`,
    fontSize: 14,
    boxSizing: 'border-box',
    marginBottom: 8,
  },
  checkbox: {
    marginRight: 6,
    accentColor: COLORS.primary,
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    maxWidth: 400,
    width: '100%',
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  gauge: (size = 80) => ({
    width: size,
    height: size,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 700,
  }),
  reviewCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    borderLeft: `3px solid ${COLORS.primary}`,
  },
  subTab: (active) => ({
    padding: '6px 12px',
    borderRadius: 16,
    border: `1px solid ${active ? COLORS.primary : COLORS.border}`,
    backgroundColor: active ? `${COLORS.primary}10` : '#fff',
    color: active ? COLORS.primary : COLORS.textSecondary,
    fontSize: 12,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  }),
  filterChip: (active) => ({
    padding: '6px 12px',
    borderRadius: 16,
    border: 'none',
    backgroundColor: active ? COLORS.primary : '#E8E8E8',
    color: active ? '#fff' : COLORS.text,
    fontSize: 12,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  }),
};

// ============================================
// 유틸리티 함수
// ============================================
const formatPrice = (price) => price?.toLocaleString('ko-KR') + '원';
const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}분 ${s < 10 ? '0' : ''}${s}초`;
};

// CircularGauge 컴포넌트
const CircularGauge = ({ percentage, size = 70, label }) => {
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const color = percentage >= 100 ? COLORS.success : percentage >= 60 ? COLORS.primaryLight : COLORS.warning;

  return (
    <div style={{ textAlign: 'center' }}>
      <svg width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="#E8F5E9" strokeWidth={stroke} />
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke={color} strokeWidth={stroke}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{ transition: 'stroke-dashoffset 0.5s ease' }} />
        <text x={size/2} y={size/2} textAnchor="middle" dominantBaseline="central"
          fontSize={14} fontWeight={700} fill={color}>{Math.round(percentage)}%</text>
      </svg>
      {label && <div style={{ fontSize: 10, color: COLORS.textSecondary, marginTop: 2 }}>{label}</div>}
    </div>
  );
};

// 상품 카드 컴포넌트
const ProductCard = ({ product, onBuy }) => (
  <div style={styles.productCard}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <div style={styles.productName}>
          {product.emoji || '📦'} {product.name}
          {product.pxAvailable === true && <span style={styles.pxBadge}>PX</span>}
          {product.pxAvailable === 'partial' && <span style={{...styles.pxBadge, backgroundColor: '#FF9800'}}>PX(부대별)</span>}
        </div>
        {product.brand && <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{product.brand}</div>}
        <div style={styles.productPrice}>{formatPrice(product.price)}</div>
        <div style={styles.productDesc}>{product.description || product.militaryReason || ''}</div>
        {product.tags && (
          <div style={styles.tagContainer}>
            {product.tags.slice(0, 3).map((tag, i) => <span key={i} style={styles.tag}>#{tag}</span>)}
          </div>
        )}
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
      {product.links?.coupang && (
        <button style={styles.buyButton('#FF5722')} onClick={() => onBuy(product, 'coupang')}>쿠팡</button>
      )}
      {product.links?.oliveyoung && (
        <button style={styles.buyButton('#8BC34A')} onClick={() => onBuy(product, 'oliveyoung')}>올리브영</button>
      )}
      {product.links?.aladin && (
        <button style={styles.buyButton('#2196F3')} onClick={() => onBuy(product, 'aladin')}>알라딘</button>
      )}
      {product.links?.yes24 && (
        <button style={styles.buyButton('#9C27B0')} onClick={() => onBuy(product, 'yes24')}>예스24</button>
      )}
      {product.links?.direct && (
        <button style={styles.buyButton(COLORS.primary)} onClick={() => onBuy(product, 'direct')}>바로가기</button>
      )}
      {product.rating && (
        <span style={{ fontSize: 12, color: COLORS.textSecondary, marginLeft: 'auto' }}>
          ⭐ {product.rating} ({product.reviewCount})
        </span>
      )}
    </div>
    <span style={styles.affiliateText}>제휴</span>
  </div>
);

// 후기 카드 컴포넌트
const ReviewCard = ({ review, onBuyProduct }) => {
  const [liked, setLiked] = useState(false);
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  return (
    <div style={styles.reviewCard}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.primary }}>{review.author}</span>
        <span style={{ fontSize: 10, color: COLORS.textSecondary }}>{review.date}</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{review.title}</div>
      <div style={{ fontSize: 12, color: COLORS.textSecondary, lineHeight: 1.6, marginBottom: 8 }}>{review.content}</div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
        {review.tags?.map((tag, i) => <span key={i} style={styles.tag}>#{tag}</span>)}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => setLiked(!liked)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 13 }}>
          {liked ? '❤️' : '🤍'} {review.likes + (liked ? 1 : 0)}
        </button>
        <button onClick={() => setHelpfulClicked(!helpfulClicked)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 13 }}>
          {helpfulClicked ? '✅' : '👍'} 도움됨 {review.helpful + (helpfulClicked ? 1 : 0)}
        </button>
      </div>
      {review.relatedProducts && review.relatedProducts.length > 0 && (
        <div style={{ marginTop: 8, paddingTop: 8, borderTop: `1px solid ${COLORS.border}` }}>
          <div style={{ fontSize: 11, color: COLORS.textSecondary, marginBottom: 4 }}>이 후기에서 언급된 상품</div>
          {review.relatedProducts.map(pid => {
            const p = getProductById(pid);
            if (!p) return null;
            return (
              <div key={pid} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0' }}>
                <span style={{ fontSize: 12 }}>{p.name}</span>
                <button style={styles.buyButton()} onClick={() => onBuyProduct(p)}>구매</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// ============================================
// 메인 컴포넌트
// ============================================
const SelfDev = () => {
  // 탭 상태
  const [activeTab, setActiveTab] = useState('health');
  const tabs = [
    { id: 'health', label: '헬스', emoji: '💪' },
    { id: 'wellness', label: '건강', emoji: '💊' },
    { id: 'books', label: '도서', emoji: '📚' },
    { id: 'exam', label: '군수', emoji: '📝' },
    { id: 'cert', label: '자격증', emoji: '🏆' },
    { id: 'skin', label: '피부', emoji: '✨' },
  ];

  // 공통 상태 (localStorage)
  const [userData, setUserData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('milwallet_data')) || {
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
    } catch { return {
      studyHours: 0, exerciseCount: 0, booksRead: 0, savings: 0, purchaseHistory: [],
      streak: 0, fitnessRecords: { pushups: 0, situps: 0, running3km: 0 },
      skinType: null, skinConcerns: [], certList: [], readingList: [],
      healthLog: [], skinLog: [], examGoal: null,
    }; }
  });

  useEffect(() => {
    localStorage.setItem('milwallet_data', JSON.stringify(userData));
  }, [userData]);

  const updateUserData = (updates) => setUserData(prev => ({ ...prev, ...updates }));

  // 모달 상태
  const [showSavingsModal, setShowSavingsModal] = useState(false);
  const [showRoutineModal, setShowRoutineModal] = useState(null); // routine object
  const [routineStep, setRoutineStep] = useState(0);
  const [showCertModal, setShowCertModal] = useState(false);
  const [showBookRecordModal, setShowBookRecordModal] = useState(null);

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

  // AI 추천 메시지
  const aiRecommendations = [
    '오늘은 맨몸운동 루틴 + 크레아틴 섭취 추천!',
    '체력검정 D-30, 인터벌 트레이닝을 시작해보세요',
    '이번 주 독서 목표 달성까지 1권 남았어요!',
    '피부 건조 시즌, 보습 루틴을 확인하세요',
    '정보처리기사 시험 D-60, 기출 반복 시작할 때!',
  ];
  const todayRecommend = aiRecommendations[new Date().getDay() % aiRecommendations.length];

  // ============================================
  // 헬스 탭
  // ============================================
  const [healthSubTab, setHealthSubTab] = useState('routine');
  const [fitnessGoal, setFitnessGoal] = useState('벌크업');

  const renderHealth = () => (
    <div>
      {/* 오늘의 루틴 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>🏋️ 오늘의 루틴</h3>
        {healthRoutines.map(routine => (
          <div key={routine.id} style={styles.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{routine.emoji} {routine.name}</div>
                <div style={{ fontSize: 12, color: COLORS.textSecondary, marginTop: 4 }}>
                  난이도: {routine.difficulty} | {routine.duration}분 | 장비: {routine.equipment}
                </div>
                <div style={{ fontSize: 12, color: COLORS.primary, marginTop: 2 }}>목표: {routine.goal}</div>
              </div>
              <button
                style={{...styles.buyButton(COLORS.primary), padding: '12px 20px', fontSize: 14}}
                onClick={() => { setShowRoutineModal(routine); setRoutineStep(0); }}
              >시작</button>
            </div>
          </div>
        ))}
      </div>

      {/* 체력검정 트래커 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📊 체력검정 트래커</h3>
        <div style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 16 }}>
            {[
              { key: 'pushups', label: '팔굽혀펴기', standard: fitnessStandards.pushups, unit: '회' },
              { key: 'situps', label: '윗몸일으키기', standard: fitnessStandards.situps, unit: '회' },
              { key: 'running3km', label: '3km 달리기', standard: fitnessStandards.running3km, unit: '초' },
            ].map(item => {
              const val = userData.fitnessRecords[item.key] || 0;
              let grade = '미달';
              const s = item.standard;
              if (item.key === 'running3km') {
                if (val > 0 && val <= s.special) grade = '특급';
                else if (val <= s.grade1) grade = '1급';
                else if (val <= s.grade2) grade = '2급';
                else if (val <= s.grade3) grade = '3급';
              } else {
                if (val >= s.special) grade = '특급';
                else if (val >= s.grade1) grade = '1급';
                else if (val >= s.grade2) grade = '2급';
                else if (val >= s.grade3) grade = '3급';
              }
              const pct = item.key === 'running3km'
                ? (val > 0 ? Math.min(100, (s.special / val) * 100) : 0)
                : Math.min(100, (val / s.special) * 100);
              return (
                <div key={item.key} style={{ textAlign: 'center' }}>
                  <CircularGauge percentage={pct} size={70} />
                  <div style={{ fontSize: 11, fontWeight: 600, marginTop: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: COLORS.primary, fontWeight: 700 }}>{grade}</div>
                  <input
                    type="number"
                    placeholder={item.unit}
                    style={{...styles.input, width: 70, textAlign: 'center', marginTop: 4, padding: '4px 6px', fontSize: 12}}
                    value={val || ''}
                    onChange={e => updateUserData({
                      fitnessRecords: { ...userData.fitnessRecords, [item.key]: Number(e.target.value) || 0 }
                    })}
                  />
                </div>
              );
            })}
          </div>
          <div style={{ fontSize: 11, color: COLORS.textSecondary, textAlign: 'center' }}>
            ※ 공군 20~21세 남자 기준 | 특급: 팔굽혀펴기 {fitnessStandards.pushups.special}회, 윗몸 {fitnessStandards.situps.special}회, 3km {formatTime(fitnessStandards.running3km.special)}
          </div>
        </div>
      </div>

      {/* 추천 운동 보조제 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>💊 목표별 추천 보조제</h3>
        <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
          {['벌크업', '다이어트', '체력향상', '회복'].map(goal => (
            <button key={goal} style={styles.filterChip(fitnessGoal === goal)} onClick={() => setFitnessGoal(goal)}>
              {goal}
            </button>
          ))}
        </div>
        {[...healthProducts.supplements, ...healthProducts.equipment]
          .filter(p => {
            const goalMap = {
              '벌크업': ['벌크업', '단백질보충', '근력향상'],
              '다이어트': ['칼로리소모', '유산소', '체력검정'],
              '체력향상': ['체력검정', '특급전사도전', '지구력'],
              '회복': ['수면개선', '근육피로', '회복', '근막이완'],
            };
            return p.tags?.some(t => goalMap[fitnessGoal]?.some(g => t.includes(g)));
          })
          .map(p => <ProductCard key={p.id} product={p} onBuy={handleBuy} />)
        }
      </div>

      {/* 후기 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>💬 장병 실사용 후기</h3>
        {communityReviews.health.map(r => <ReviewCard key={r.id} review={r} onBuyProduct={(p) => handleBuy(p, 'coupang')} />)}
      </div>
    </div>
  );

  // ============================================
  // 건강 탭
  // ============================================
  const [selectedGoals, setSelectedGoals] = useState([]);

  const toggleGoal = (goalId) => {
    setSelectedGoals(prev => prev.includes(goalId) ? prev.filter(g => g !== goalId) : [...prev, goalId]);
  };

  const filteredWellnessProducts = useMemo(() => {
    const all = [...wellnessProducts.essentials, ...wellnessProducts.functional];
    if (selectedGoals.length === 0) return all;
    return all.filter(p => {
      const matchTags = [...(p.tags || []), ...(p.goalTags || [])];
      return selectedGoals.some(g => {
        const goalMap = {
          fatigue: ['피로회복', '활력', '피로', '체력증진'],
          immune: ['면역력'],
          sleep: ['수면', '수면질개선', '수면개선'],
          muscle: ['근육', '체력', '근육이완', '단백질보충'],
          focus: ['집중력', '학습효율', '뇌건강'],
          skin: ['피부건강', '피부', '항산화'],
          gut: ['장건강', '소화', '유산균'],
          eye: ['눈건강', '야간근무', '모니터작업'],
        };
        return matchTags.some(t => goalMap[g]?.some(k => t.includes(k)));
      });
    });
  }, [selectedGoals]);

  const renderWellness = () => (
    <div>
      {/* 건강 목표 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>🎯 나의 건강 목표</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
          {healthGoals.map(g => (
            <button key={g.id} style={styles.filterChip(selectedGoals.includes(g.id))} onClick={() => toggleGoal(g.id)}>
              {g.emoji} {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* 추천 영양제 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>💊 추천 영양제</h3>
        {filteredWellnessProducts.map(p => (
          <div key={p.id} style={styles.productCard}>
            <div style={styles.productName}>{p.name}
              {p.pxAvailable && <span style={styles.pxBadge}>PX</span>}
            </div>
            <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{p.brand}</div>
            <div style={styles.productPrice}>{formatPrice(p.price)}</div>
            <div style={styles.productDesc}>{p.description}</div>
            {p.dosage && <div style={{ fontSize: 11, color: COLORS.primary, marginTop: 4 }}>💁 복용법: {p.dosage}</div>}
            {p.caution && <div style={{ fontSize: 11, color: COLORS.danger, marginTop: 2 }}>⚠️ {p.caution}</div>}
            <div style={{ display: 'flex', marginTop: 8 }}>
              {p.links?.coupang && <button style={styles.buyButton('#FF5722')} onClick={() => handleBuy(p, 'coupang')}>쿠팡</button>}
              {p.links?.oliveyoung && <button style={styles.buyButton('#8BC34A')} onClick={() => handleBuy(p, 'oliveyoung')}>올리브영</button>}
            </div>
            <span style={styles.affiliateText}>제휴</span>
          </div>
        ))}
      </div>

      {/* 급식 가이드 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>🍽️ 군 급식 최적 활용 가이드</h3>
        {dietGuides.map(g => (
          <div key={g.id} style={styles.card}>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{g.emoji} {g.title}</div>
            {g.content.map((c, i) => (
              <div key={i} style={{ fontSize: 12, color: COLORS.textSecondary, padding: '3px 0', lineHeight: 1.5 }}>• {c}</div>
            ))}
            {g.tip && <div style={{ fontSize: 12, color: COLORS.primary, marginTop: 8, fontWeight: 600 }}>💡 {g.tip}</div>}
          </div>
        ))}
      </div>

      {/* 오늘 건강 체크 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>✅ 오늘 건강 체크</h3>
        <div style={styles.card}>
          {[
            { label: '수면 시간', key: 'sleep', unit: '시간', type: 'number' },
            { label: '물 섭취량', key: 'water', unit: '잔 (200ml)', type: 'number' },
          ].map(item => (
            <div key={item.key} style={{ display: 'flex', alignItems: 'center', marginBottom: 8, gap: 8 }}>
              <span style={{ fontSize: 13, width: 80 }}>{item.label}</span>
              <input
                type={item.type}
                placeholder={item.unit}
                style={{...styles.input, flex: 1, marginBottom: 0}}
              />
            </div>
          ))}
          <label style={{ display: 'flex', alignItems: 'center', fontSize: 13, cursor: 'pointer' }}>
            <input type="checkbox" style={styles.checkbox} />
            오늘 영양제 복용 완료
          </label>
        </div>
      </div>
    </div>
  );

  // ============================================
  // 도서 탭
  // ============================================
  const [bookSubTab, setBookSubTab] = useState('selfDev');
  const bookSubTabs = [
    { id: 'selfDev', label: '자기계발' },
    { id: 'finance', label: '재테크' },
    { id: 'language', label: '어학·시험' },
    { id: 'humanities', label: '인문·교양' },
  ];

  const renderBooks = () => (
    <div>
      {/* 독서 챌린지 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📖 이달의 독서 챌린지</h3>
        <div style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>
                {readingRoutines.monthlyChallenge[new Date().getMonth()]?.emoji}{' '}
                {readingRoutines.monthlyChallenge[new Date().getMonth()]?.theme} 독서 월
              </div>
              <div style={{ fontSize: 12, color: COLORS.textSecondary, marginTop: 2 }}>
                목표: 4권 | 달성: {userData.booksRead}권
              </div>
            </div>
            <CircularGauge percentage={(userData.booksRead / 4) * 100} size={60} />
          </div>
          <div style={styles.progressBar()}>
            <div style={styles.progressFill((userData.booksRead / 4) * 100)} />
          </div>
        </div>
      </div>

      {/* 카테고리별 추천 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📚 추천 도서</h3>
        <div style={{ display: 'flex', gap: 6, marginBottom: 12, overflowX: 'auto' }}>
          {bookSubTabs.map(t => (
            <button key={t.id} style={styles.subTab(bookSubTab === t.id)} onClick={() => setBookSubTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
        {(bookProducts[bookSubTab] || []).map(book => (
          <div key={book.id} style={styles.productCard}>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ fontSize: 40, lineHeight: 1 }}>{book.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={styles.productName}>{book.name}</div>
                <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{book.author} | {book.publisher}</div>
                <div style={styles.productPrice}>{formatPrice(book.price)}</div>
                <div style={{ fontSize: 12, color: COLORS.primary, marginTop: 4 }}>🎖️ {book.militaryReason}</div>
                <div style={{ fontSize: 11, color: COLORS.textSecondary, marginTop: 2 }}>💡 {book.keyMessage}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 8, gap: 6 }}>
              <button style={styles.buyButton('#2196F3')} onClick={() => handleBuy(book, 'aladin')}>알라딘</button>
              <button style={styles.buyButton('#9C27B0')} onClick={() => handleBuy(book, 'yes24')}>예스24</button>
              <span style={{ fontSize: 10, color: COLORS.textSecondary, marginLeft: 'auto' }}>📍 군 도서관 확인 권장</span>
            </div>
            <span style={styles.affiliateText}>제휴</span>
          </div>
        ))}
      </div>

      {/* 독서 기록 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📝 독서 기록</h3>
        <div style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>완독 {userData.booksRead}권</span>
            <button style={styles.buyButton()} onClick={() => updateUserData({ booksRead: userData.booksRead + 1 })}>
              + 완독 기록
            </button>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(m => (
              <div key={m} style={{
                flex: 1, height: Math.max(8, (m <= new Date().getMonth() + 1 ? Math.random() * 40 + 10 : 4)),
                backgroundColor: m <= new Date().getMonth() + 1 ? COLORS.primaryLight : '#E0E0E0',
                borderRadius: 2,
              }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span style={{ fontSize: 9, color: COLORS.textSecondary }}>1월</span>
            <span style={{ fontSize: 9, color: COLORS.textSecondary }}>12월</span>
          </div>
        </div>
      </div>

      {/* 후기 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>💬 장병 독서 후기</h3>
        {communityReviews.books.map(r => <ReviewCard key={r.id} review={r} onBuyProduct={(p) => handleBuy(p, 'aladin')} />)}
      </div>
    </div>
  );

  // ============================================
  // 군수(군대수능) 탭
  // ============================================
  const [examGoalType, setExamGoalType] = useState('수능 재도전');

  const renderExam = () => (
    <div>
      {/* 목표 선택 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>🎯 목표 선택</h3>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
          {['수능 재도전', '편입 준비', '공무원 시험', '어학 시험'].map(g => (
            <button key={g} style={styles.filterChip(examGoalType === g)} onClick={() => setExamGoalType(g)}>{g}</button>
          ))}
        </div>
      </div>

      {examGoalType === '수능 재도전' && (
        <>
          {/* 12개월 로드맵 */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>🗓️ {examRoutines.yearPlan.title}</h3>
            <div style={styles.card}>
              {examRoutines.yearPlan.phases.map((phase, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i < 3 ? `1px solid ${COLORS.border}` : 'none' }}>
                  <div style={{ fontSize: 24 }}>{phase.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{phase.months}: {phase.phase}</div>
                    <div style={{ fontSize: 11, color: COLORS.textSecondary, marginTop: 2 }}>{phase.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 일일 학습 */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>⏰ {examRoutines.dailyPlan.title}</h3>
            <div style={styles.card}>
              {examRoutines.dailyPlan.schedule.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: i < 2 ? `1px solid ${COLORS.border}` : 'none' }}>
                  <div style={{ fontSize: 20 }}>{s.emoji}</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>{s.time}</div>
                    <div style={{ fontSize: 13, color: COLORS.primary, fontWeight: 600 }}>{s.subject}</div>
                    <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 추천 교재 */}
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>📖 추천 교재</h3>
            {militaryExamProducts.suneung.map(p => (
              <div key={p.id} style={styles.productCard}>
                <div style={styles.productName}>{p.emoji} {p.name}</div>
                <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{p.publisher} | {p.priceRange || formatPrice(p.price)}</div>
                <div style={styles.productDesc}>{p.militaryReason}</div>
                <div style={{ display: 'flex', marginTop: 8 }}>
                  <button style={styles.buyButton('#2196F3')} onClick={() => handleBuy(p, 'aladin')}>알라딘</button>
                  <button style={styles.buyButton('#9C27B0')} onClick={() => handleBuy(p, 'yes24')}>예스24</button>
                </div>
                <span style={styles.affiliateText}>제휴</span>
              </div>
            ))}
          </div>
        </>
      )}

      {examGoalType === '편입 준비' && (
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>📖 편입 대비 교재</h3>
          {militaryExamProducts.transfer.map(p => (
            <div key={p.id} style={styles.productCard}>
              <div style={styles.productName}>{p.emoji} {p.name}</div>
              <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{p.publisher} | {formatPrice(p.price)}</div>
              <div style={styles.productDesc}>{p.militaryReason}</div>
              <div style={{ display: 'flex', marginTop: 8 }}>
                <button style={styles.buyButton('#2196F3')} onClick={() => handleBuy(p, 'aladin')}>알라딘</button>
                <button style={styles.buyButton('#9C27B0')} onClick={() => handleBuy(p, 'yes24')}>예스24</button>
              </div>
              <span style={styles.affiliateText}>제휴</span>
            </div>
          ))}
        </div>
      )}

      {/* 온라인 강의 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>🎓 온라인 강의</h3>
        {militaryExamProducts.onlineCourses.map(p => (
          <div key={p.id} style={styles.card}>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{p.emoji} {p.name}</div>
            <div style={{ fontSize: 12, color: COLORS.textSecondary, marginTop: 4 }}>{p.description}</div>
            {p.price > 0 && (
              <div style={{ marginTop: 6 }}>
                <span style={{ textDecoration: 'line-through', color: COLORS.textSecondary, fontSize: 12 }}>{formatPrice(p.price)}</span>
                <span style={{ ...styles.productPrice, marginLeft: 8 }}>{formatPrice(p.discountPrice)}</span>
              </div>
            )}
            <button style={styles.buyButton()} onClick={() => handleBuy(p, 'direct')}>{p.price === 0 ? '무료 바로가기' : '할인 신청'}</button>
            <span style={styles.affiliateText}>{p.commissionRate > 0 ? '제휴' : ''}</span>
          </div>
        ))}
      </div>

      {/* 과목별 팁 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📌 과목별 학습 팁</h3>
        <div style={styles.card}>
          {examRoutines.subjectTips.map((t, i) => (
            <div key={i} style={{ padding: '8px 0', borderBottom: i < 2 ? `1px solid ${COLORS.border}` : 'none' }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>{t.emoji} {t.subject}</span>
              <div style={{ fontSize: 12, color: COLORS.textSecondary, marginTop: 2 }}>{t.tip}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ============================================
  // 자격증 탭
  // ============================================
  const [certSubTab, setCertSubTab] = useState('it');
  const certSubTabs = [
    { id: 'it', label: 'IT' },
    { id: 'language', label: '어학' },
    { id: 'finance', label: '금융/공무원' },
  ];

  const renderCert = () => (
    <div>
      {/* 나의 자격증 현황 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>🏆 나의 자격증 현황</h3>
        <div style={styles.card}>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>준비 중인 자격증</div>
          {userData.certList.length === 0 && (
            <div style={{ fontSize: 12, color: COLORS.textSecondary, textAlign: 'center', padding: 16 }}>
              아직 등록된 자격증이 없습니다
            </div>
          )}
          {userData.certList.map((cert, i) => {
            const dday = Math.ceil((new Date(cert.examDate) - new Date()) / (1000*60*60*24));
            return (
              <div key={i} style={{ padding: '8px 0', borderBottom: `1px solid ${COLORS.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{cert.name}</span>
                  <span style={{ fontSize: 12, color: dday > 0 ? COLORS.accent : COLORS.danger, fontWeight: 700 }}>
                    D{dday > 0 ? `-${dday}` : `+${Math.abs(dday)}`}
                  </span>
                </div>
                <div style={styles.progressBar()}>
                  <div style={styles.progressFill(cert.progress || 0)} />
                </div>
              </div>
            );
          })}
          <button
            style={{...styles.buyButton(), width: '100%', marginTop: 12, textAlign: 'center'}}
            onClick={() => setShowCertModal(true)}
          >+ 자격증 추가</button>
        </div>
      </div>

      {/* 합격 루틴 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📋 합격 루틴</h3>
        {certRoutines.map(routine => (
          <div key={routine.id} style={styles.card}>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
              {routine.emoji} {routine.certName} {routine.totalDays}일 합격 플랜
            </div>
            <div style={{ fontSize: 11, color: COLORS.textSecondary, marginBottom: 8 }}>
              일 {routine.dailyHours}시간 기준
            </div>
            {routine.phases.map((phase, i) => (
              <div key={i} style={{ padding: '6px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                  <span style={{ fontWeight: 600 }}>{phase.period}: {phase.phase}</span>
                  <span style={{ color: COLORS.primary }}>{phase.percentage}%</span>
                </div>
                <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{phase.detail}</div>
                <div style={{...styles.progressBar(), marginTop: 4}}>
                  <div style={styles.progressFill(phase.percentage)} />
                </div>
              </div>
            ))}
            {routine.relatedProducts.map(pid => {
              const p = getProductById(pid);
              if (!p) return null;
              return <ProductCard key={pid} product={p} onBuy={handleBuy} />;
            })}
          </div>
        ))}
      </div>

      {/* 추천 교재 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📚 추천 교재</h3>
        <div style={{ display: 'flex', gap: 6, marginBottom: 12, overflowX: 'auto' }}>
          {certSubTabs.map(t => (
            <button key={t.id} style={styles.subTab(certSubTab === t.id)} onClick={() => setCertSubTab(t.id)}>{t.label}</button>
          ))}
        </div>
        {(certProducts[certSubTab] || []).map(p => (
          <div key={p.id} style={styles.productCard}>
            <div style={styles.productName}>{p.emoji} {p.name}</div>
            <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{p.publisher}</div>
            <div style={styles.productPrice}>{formatPrice(p.price)}</div>
            <div style={styles.productDesc}>{p.militaryReason}</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 6, flexWrap: 'wrap' }}>
              {p.passRate && <span style={styles.tag}>합격률 {p.passRate}</span>}
              {p.prepPeriod && <span style={styles.tag}>준비기간 {p.prepPeriod}</span>}
              {p.militaryPassable && <span style={{...styles.tag, backgroundColor: '#E8F5E9', color: COLORS.success}}>복무중 합격 가능</span>}
            </div>
            <div style={{ display: 'flex', marginTop: 8 }}>
              {p.links?.aladin && <button style={styles.buyButton('#2196F3')} onClick={() => handleBuy(p, 'aladin')}>알라딘</button>}
              {p.links?.yes24 && <button style={styles.buyButton('#9C27B0')} onClick={() => handleBuy(p, 'yes24')}>예스24</button>}
              {p.links?.coupang && <button style={styles.buyButton('#FF5722')} onClick={() => handleBuy(p, 'coupang')}>쿠팡</button>}
            </div>
            <span style={styles.affiliateText}>제휴</span>
          </div>
        ))}
      </div>

      {/* 후기 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>💬 합격 후기</h3>
        {communityReviews.cert.map(r => <ReviewCard key={r.id} review={r} onBuyProduct={(p) => handleBuy(p, 'aladin')} />)}
      </div>
    </div>
  );

  // ============================================
  // 피부 탭
  // ============================================
  const [selectedSkinType, setSelectedSkinType] = useState(userData.skinType || null);
  const [selectedSkinConcerns, setSelectedSkinConcerns] = useState(userData.skinConcerns || []);
  const [skinRoutineTab, setSkinRoutineTab] = useState('morning');

  const toggleSkinConcern = (id) => {
    const next = selectedSkinConcerns.includes(id)
      ? selectedSkinConcerns.filter(c => c !== id)
      : [...selectedSkinConcerns, id];
    setSelectedSkinConcerns(next);
    updateUserData({ skinConcerns: next });
  };

  const getCurrentSkinRoutine = () => {
    if (selectedSkinConcerns.includes('acne')) return skinRoutines.acne;
    if (selectedSkinType === '지성') return skinRoutines.oily;
    return skinRoutines.dry;
  };

  const filteredSkinProducts = useMemo(() => {
    const all = [
      ...skinProducts.cleansing,
      ...skinProducts.moisturizing,
      ...skinProducts.sunscreen,
      ...skinProducts.specialCare,
    ];
    if (!selectedSkinType && selectedSkinConcerns.length === 0) return all;
    return all.filter(p => {
      const matchType = !selectedSkinType || p.skinTypes?.includes(selectedSkinType);
      const matchConcern = selectedSkinConcerns.length === 0 || selectedSkinConcerns.some(c => {
        const concernMap = {
          acne: ['여드름', '민감성'],
          trouble: ['트러블', '진정', '시카'],
          dryness: ['고보습', '수분', '보습'],
          dullness: ['미백', '칙칙함'],
          pores: ['모공', '지성'],
          wrinkles: ['주름', '재생'],
        };
        return p.tags?.some(t => concernMap[c]?.some(k => t.includes(k)));
      });
      return matchType && matchConcern;
    });
  }, [selectedSkinType, selectedSkinConcerns]);

  const renderSkin = () => {
    const routine = getCurrentSkinRoutine();
    const currentSteps = skinRoutineTab === 'morning' ? routine.morning : routine.evening;

    return (
      <div>
        {/* 피부 타입 */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>🧴 피부 타입 진단</h3>
          <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap' }}>
            {skinTypes.map(type => (
              <button key={type} style={styles.filterChip(selectedSkinType === type)}
                onClick={() => { setSelectedSkinType(type); updateUserData({ skinType: type }); }}>
                {type}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {skinConcerns.map(c => (
              <button key={c.id} style={styles.filterChip(selectedSkinConcerns.includes(c.id))}
                onClick={() => toggleSkinConcern(c.id)}>
                {c.emoji} {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* 루틴 */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>🌿 맞춤 스킨케어 루틴</h3>
          <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
            <button style={styles.subTab(skinRoutineTab === 'morning')} onClick={() => setSkinRoutineTab('morning')}>🌅 아침 루틴</button>
            <button style={styles.subTab(skinRoutineTab === 'evening')} onClick={() => setSkinRoutineTab('evening')}>🌙 저녁 루틴</button>
            <button style={styles.subTab(skinRoutineTab === 'special')} onClick={() => setSkinRoutineTab('special')}>⭐ 외박 전날</button>
          </div>

          {skinRoutineTab === 'special' ? (
            <div style={styles.card}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>⭐ {skinRoutines.specialLeave.name}</div>
              {skinRoutines.specialLeave.steps.map((step, i) => {
                const product = step.productId ? getProductById(step.productId) : null;
                return (
                  <div key={i} style={{ padding: '8px 0', borderBottom: i < skinRoutines.specialLeave.steps.length - 1 ? `1px solid ${COLORS.border}` : 'none' }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: COLORS.primary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{step.step}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 600 }}>{step.name} <span style={{ fontSize: 11, color: COLORS.textSecondary }}>({step.duration})</span></div>
                        <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{step.method}</div>
                      </div>
                    </div>
                    {product && (
                      <div style={{ marginLeft: 36, marginTop: 6 }}>
                        <ProductCard product={product} onBuy={handleBuy} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            currentSteps?.map((step, i) => {
              const product = step.productId ? getProductById(step.productId) : null;
              const pxAlt = step.pxAlt ? getProductById(step.pxAlt) : null;
              return (
                <div key={i} style={styles.card}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: COLORS.primary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{step.step}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>{step.name} <span style={{ fontSize: 11, color: COLORS.textSecondary }}>({step.duration})</span></div>
                      <div style={{ fontSize: 12, color: COLORS.textSecondary }}>{step.method}</div>
                    </div>
                  </div>
                  {product && (
                    <div style={{ marginTop: 8, marginLeft: 42 }}>
                      <ProductCard product={product} onBuy={handleBuy} />
                    </div>
                  )}
                  {pxAlt && (
                    <div style={{ marginLeft: 42, fontSize: 11, color: COLORS.pxBadge }}>
                      🏪 PX 대안: {pxAlt.name} ({formatPrice(pxAlt.price)})
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* 추천 상품 */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>✨ 맞춤 추천 상품</h3>
          {filteredSkinProducts.slice(0, 6).map(p => <ProductCard key={p.id} product={p} onBuy={handleBuy} />)}
        </div>

        {/* 오늘의 피부 로그 */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>📝 오늘의 피부 로그</h3>
          <div style={styles.card}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, marginBottom: 4 }}>수분도</div>
                <input type="range" min="1" max="10" style={{ width: '100%', accentColor: COLORS.primary }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, marginBottom: 4 }}>유분도</div>
                <input type="range" min="1" max="10" style={{ width: '100%', accentColor: COLORS.primary }} />
              </div>
            </div>
            <div style={{ fontSize: 12, marginBottom: 4 }}>트러블 위치</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['이마', '코', '양볼', '턱', '없음'].map(area => (
                <button key={area} style={styles.filterChip(false)}>{area}</button>
              ))}
            </div>
          </div>
        </div>

        {/* 후기 */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>💬 장병 피부 관리 후기</h3>
          {communityReviews.skin.map(r => <ReviewCard key={r.id} review={r} onBuyProduct={(p) => handleBuy(p, 'coupang')} />)}
        </div>
      </div>
    );
  };

  // ============================================
  // 루틴 실행 모달
  // ============================================
  const renderRoutineModal = () => {
    if (!showRoutineModal) return null;
    const routine = showRoutineModal;
    const step = routine.steps[routineStep];
    const isLastStep = routineStep === routine.steps.length - 1;
    const relatedProduct = step ? getProductById(
      routine.recommendedProducts?.[routineStep % routine.recommendedProducts.length]
    ) : null;

    return (
      <div style={styles.modal} onClick={() => setShowRoutineModal(null)}>
        <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <div style={{ fontSize: 20, fontWeight: 700 }}>{routine.emoji} {routine.name}</div>
            <div style={{ fontSize: 12, color: COLORS.textSecondary }}>
              {routineStep + 1} / {routine.steps.length} 단계
            </div>
            <div style={{...styles.progressBar(), marginTop: 8}}>
              <div style={styles.progressFill(((routineStep + 1) / routine.steps.length) * 100)} />
            </div>
          </div>

          {step && (
            <div style={{ textAlign: 'center', padding: 16 }}>
              <div style={{ fontSize: 40, marginBottom: 8 }}>{step.name.includes('워밍업') ? '🔥' : step.name.includes('쿨다운') ? '❄️' : '💪'}</div>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{step.name}</div>
              <div style={{ fontSize: 14, color: COLORS.textSecondary }}>{step.detail}</div>
              {step.sets && <div style={{ fontSize: 13, color: COLORS.primary, marginTop: 4 }}>{step.sets}세트 x {step.reps}</div>}
              {step.duration && <div style={{ fontSize: 13, color: COLORS.primary, marginTop: 4 }}>{step.duration}분</div>}
            </div>
          )}

          {relatedProduct && (
            <div style={{ marginTop: 12, padding: 12, backgroundColor: '#F5F5F5', borderRadius: 8 }}>
              <div style={{ fontSize: 11, color: COLORS.textSecondary, marginBottom: 4 }}>💡 추천 보조제</div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{relatedProduct.name}</div>
              <div style={{ fontSize: 14, color: COLORS.accent, fontWeight: 700 }}>{formatPrice(relatedProduct.price)}</div>
              <button style={styles.buyButton('#FF5722')} onClick={() => handleBuy(relatedProduct, 'coupang')}>쿠팡 구매</button>
              <span style={{ fontSize: 9, color: COLORS.affiliate, marginLeft: 8 }}>제휴</span>
            </div>
          )}

          <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
            {routineStep > 0 && (
              <button style={{...styles.buyButton('#9E9E9E'), flex: 1, textAlign: 'center'}}
                onClick={() => setRoutineStep(routineStep - 1)}>이전</button>
            )}
            <button style={{...styles.buyButton(), flex: 1, textAlign: 'center'}}
              onClick={() => {
                if (isLastStep) {
                  updateUserData({ exerciseCount: userData.exerciseCount + 1, streak: userData.streak + 1 });
                  setShowRoutineModal(null);
                  alert('🎉 루틴 완료! 오늘도 수고했습니다!');
                } else {
                  setRoutineStep(routineStep + 1);
                }
              }}>
              {isLastStep ? '🎉 완료!' : '다음 단계 →'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ============================================
  // 자격증 추가 모달
  // ============================================
  const [newCert, setNewCert] = useState({ name: '', examDate: '', targetScore: '' });

  const renderCertModal = () => {
    if (!showCertModal) return null;
    return (
      <div style={styles.modal} onClick={() => setShowCertModal(false)}>
        <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>🏆 자격증 추가</div>
          <input style={styles.input} placeholder="자격증명 (예: 정보처리기사)"
            value={newCert.name} onChange={e => setNewCert({...newCert, name: e.target.value})} />
          <input style={styles.input} type="date" placeholder="시험일"
            value={newCert.examDate} onChange={e => setNewCert({...newCert, examDate: e.target.value})} />
          <input style={styles.input} placeholder="목표 점수/등급"
            value={newCert.targetScore} onChange={e => setNewCert({...newCert, targetScore: e.target.value})} />
          <button style={{...styles.buyButton(), width: '100%', textAlign: 'center', padding: 12}}
            onClick={() => {
              if (newCert.name && newCert.examDate) {
                updateUserData({ certList: [...userData.certList, { ...newCert, progress: 0 }] });
                setNewCert({ name: '', examDate: '', targetScore: '' });
                setShowCertModal(false);
              }
            }}>추가하기</button>
        </div>
      </div>
    );
  };

  // ============================================
  // 절약 현황 모달
  // ============================================
  const renderSavingsModal = () => {
    if (!showSavingsModal) return null;
    const revenue = calculateMonthlyRevenue(10000);
    return (
      <div style={styles.modal} onClick={() => setShowSavingsModal(false)}>
        <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>💰 내 절약 현황</div>
          <div style={{ textAlign: 'center', padding: 16, backgroundColor: '#E8F5E9', borderRadius: 12, marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: COLORS.textSecondary }}>밀월렛으로 절약한 총 금액</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: COLORS.primary }}>{formatPrice(userData.savings)}</div>
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>구매 이력</div>
          {userData.purchaseHistory.length === 0 ? (
            <div style={{ fontSize: 12, color: COLORS.textSecondary, textAlign: 'center', padding: 16 }}>아직 구매 이력이 없습니다</div>
          ) : (
            userData.purchaseHistory.slice(-10).reverse().map((p, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: `1px solid ${COLORS.border}`, fontSize: 12 }}>
                <span>{p.productName}</span>
                <span style={{ color: COLORS.success }}>-{formatPrice(p.commission)}</span>
              </div>
            ))
          )}
          <div style={{ marginTop: 16, padding: 12, backgroundColor: '#FFF3E0', borderRadius: 8, fontSize: 11 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>📊 밀월렛 수익 모델 (MAU 1만명 기준)</div>
            <div>월 예상 수익: {formatPrice(revenue.totalMonthlyRevenue)}</div>
            <div>연 예상 수익: {formatPrice(revenue.annualEstimate)}</div>
            {revenue.breakdown.map((b, i) => (
              <div key={i} style={{ color: COLORS.textSecondary }}>  {b.category}: {formatPrice(b.revenue)} ({b.purchasers}명 전환)</div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // ============================================
  // 월별 성장 대시보드
  // ============================================
  const renderDashboard = () => (
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>📊 월별 성장 대시보드</h3>
      <div style={styles.card}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { label: '학습 총 시간', value: `${userData.studyHours}h`, change: '+12%', emoji: '📖' },
            { label: '운동 총 횟수', value: `${userData.exerciseCount}회`, change: '+8%', emoji: '💪' },
            { label: '독서 총 권수', value: `${userData.booksRead}권`, change: '+25%', emoji: '📚' },
            { label: '절약 금액', value: formatPrice(userData.savings), change: '+15%', emoji: '💰' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center', padding: 12, backgroundColor: '#F5F5F5', borderRadius: 8 }}>
              <div style={{ fontSize: 20 }}>{item.emoji}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.primary }}>{item.value}</div>
              <div style={{ fontSize: 10, color: COLORS.textSecondary }}>{item.label}</div>
              <div style={{ fontSize: 10, color: COLORS.success }}>전월 대비 {item.change}</div>
            </div>
          ))}
        </div>
        {userData.exerciseCount > 0 && (
          <div style={{ marginTop: 12, textAlign: 'center', padding: 8, backgroundColor: '#FFF3E0', borderRadius: 8 }}>
            <span style={{ fontSize: 20 }}>🏅</span>
            <div style={{ fontSize: 12, fontWeight: 600 }}>이달의 MVP: 헬스 카테고리</div>
          </div>
        )}
      </div>
    </div>
  );

  // ============================================
  // 렌더링
  // ============================================
  const renderTabContent = () => {
    switch (activeTab) {
      case 'health': return renderHealth();
      case 'wellness': return renderWellness();
      case 'books': return renderBooks();
      case 'exam': return renderExam();
      case 'cert': return renderCert();
      case 'skin': return renderSkin();
      default: return renderHealth();
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
        {tabs.map(tab => (
          <button key={tab.id} style={styles.tab(activeTab === tab.id)} onClick={() => setActiveTab(tab.id)}>
            {tab.emoji} {tab.label}
          </button>
        ))}
      </div>

      {/* 탭 컨텐츠 */}
      {renderTabContent()}

      {/* 월별 대시보드 */}
      {renderDashboard()}

      {/* 연속 달성 */}
      {userData.streak > 0 && (
        <div style={{ ...styles.section }}>
          <div style={{ ...styles.card, textAlign: 'center', background: 'linear-gradient(135deg, #FFF3E0, #FFECB3)' }}>
            <span style={{ fontSize: 30 }}>🔥</span>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{userData.streak}일 연속 달성!</div>
            <div style={{ fontSize: 11, color: COLORS.textSecondary }}>꾸준함이 최고의 무기입니다</div>
          </div>
        </div>
      )}

      {/* 모달들 */}
      {renderRoutineModal()}
      {renderCertModal()}
      {renderSavingsModal()}
    </div>
  );
};

export default SelfDev;
