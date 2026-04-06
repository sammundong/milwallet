import React, { useState, useEffect } from 'react';
import { COLORS, styles } from '../styles/theme';
import { formatPrice, defaultUserData } from '../utils/helpers';
import { cardData, benefitCategories, quickLinks, cardCombos, categoryBestCard } from '../data/cardData';
import { benefitDetails } from '../data/benefitDetailData';

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
  { id: 'health', label: '체력/헬스', emoji: '💪', desc: '운동루틴·체력검정·BMI', color: '#E8F5E9' },
  { id: 'wellness', label: '건강/영양제', emoji: '💊', desc: '영양제·식단·건강관리', color: '#E3F2FD' },
  { id: 'books', label: '독서', emoji: '📚', desc: '독서챌린지·기록', color: '#FFF3E0' },
  { id: 'exam', label: '수능/편입', emoji: '📝', desc: '수능·편입·공무원', color: '#F3E5F5' },
  { id: 'cert', label: '자격증', emoji: '🏆', desc: '합격루틴·교재', color: '#FFFDE7' },
  { id: 'skin', label: '피부관리', emoji: '✨', desc: '스킨케어·루틴', color: '#FCE4EC' },
];

const BOTTOM_TABS = [
  { id: 'benefits', label: '혜택', emoji: '🎁' },
  { id: 'card', label: '카드', emoji: '💳' },
  { id: 'selfdev', label: '자기계발', emoji: '📖' },
  { id: 'community', label: '커뮤니티', emoji: '💬' },
  { id: 'mypage', label: '내정보', emoji: '👤' },
];

const SelfDev = () => {
  const [page, setPage] = useState('benefits');
  const [activeCategory, setActiveCategory] = useState(null);
  const [bottomTab, setBottomTab] = useState('benefits');

  const [userData, setUserData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('milwallet_data')) || defaultUserData;
    } catch { return defaultUserData; }
  });

  useEffect(() => {
    localStorage.setItem('milwallet_data', JSON.stringify(userData));
  }, [userData]);

  const updateUserData = (updates) => setUserData(prev => ({ ...prev, ...updates }));

  const [showRoutineModal, setShowRoutineModal] = useState(null);
  const [routineStep, setRoutineStep] = useState(0);
  const [showCertModal, setShowCertModal] = useState(false);
  const [showSavingsModal, setShowSavingsModal] = useState(false);

  // Benefits tab state
  const [selectedBenefitCat, setSelectedBenefitCat] = useState(0);
  const [benefitDetailId, setBenefitDetailId] = useState(null);
  const [pxAmount, setPxAmount] = useState(''); // PX 금액 계산기

  // Card tab state
  const [cardSearch, setCardSearch] = useState('');
  const [myCards, setMyCards] = useState({ ibk: true, hana: true, shinhan: false, kb: false });

  // Community state
  const [communityTab, setCommunityTab] = useState('hot');
  const [communityBranch, setCommunityBranch] = useState('all');

  // My info state
  const [checklist, setChecklist] = useState({
    nasaka: false, savings: false, mutual: false, isa: false, insurance: false, plan: false,
  });

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

  const goBack = () => {
    setPage(bottomTab);
    setActiveCategory(null);
  };

  const handleBottomTab = (tabId) => {
    setPage(tabId);
    setActiveCategory(null);
    setBottomTab(tabId);
  };

  // ============================================
  // Tab 1: 혜택 (Benefits)
  // ============================================
  const renderBenefits = () => {
    const activeCat = benefitCategories[selectedBenefitCat];
    const vacationDday = 127;

    return (
      <div>
        <div style={styles.header}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={styles.headerTitle}>🎖️ 밀월렛</div>
              <div style={styles.headerSub}>혜택을 한눈에</div>
            </div>
            <button style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', padding: '6px 10px', borderRadius: 8, fontSize: 14, cursor: 'pointer' }}>🔔</button>
          </div>
        </div>

        {/* AI 추천 */}
        <div style={{ margin: '12px 16px' }}>
          <div style={styles.aiRecommend}>
            <span style={{ fontSize: 18 }}>🤖</span>
            <span>이번 달 PX는 IBK로! 한도 여유 3만원</span>
          </div>
        </div>

        {/* 많이 쓰는 혜택 추천 */}
        <div style={{ padding: '0 16px' }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>⭐ 장병들이 많이 쓰는 혜택</div>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 10, scrollbarWidth: 'none' }}>
            {[
              { emoji: '🏪', label: 'PX 할인', sub: '최대 50%', color: '#E8F5E9' },
              { emoji: '🟣', label: 'CU', sub: '최대 28%', color: '#F3E5F5' },
              { emoji: '☕', label: '메가커피', sub: '주말 30%', color: '#FFF3E0' },
              { emoji: '🛵', label: '배달', sub: '최대 20%', color: '#E3F2FD' },
              { emoji: '🎬', label: '영화', sub: 'CGV 6천원', color: '#FCE4EC' },
              { emoji: '📺', label: 'OTT', sub: '10~20%', color: '#FFFDE7' },
              { emoji: '🎢', label: '놀이공원', sub: '50% 할인', color: '#E0F7FA' },
              { emoji: '💚', label: '네이버페이', sub: '10% 적립', color: '#E8F5E9' },
            ].map((item, i) => (
              <div key={i} onClick={() => setSelectedBenefitCat(0)} style={{
                minWidth: 90, padding: '12px 8px', borderRadius: 14, backgroundColor: item.color,
                textAlign: 'center', flexShrink: 0, cursor: 'pointer',
              }}>
                <div style={{ fontSize: 24 }}>{item.emoji}</div>
                <div style={{ fontSize: 11, fontWeight: 700, marginTop: 4 }}>{item.label}</div>
                <div style={{ fontSize: 9, color: COLORS.primary, fontWeight: 600, marginTop: 2 }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PX 카드 슬라이더 */}
        <div style={{ padding: '0 16px' }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>PX 할인 잔여 한도</div>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 8, scrollbarWidth: 'none' }}>
            {Object.values(cardData).filter(c => !c.isLegacy).map(card => {
              const used = Math.floor(Math.random() * 70 + 10);
              const total = 100;
              return (
                <div key={card.id} style={{
                  minWidth: 150, padding: 14, borderRadius: 14, flexShrink: 0,
                  background: `linear-gradient(135deg, ${card.color}22, ${card.color}08)`,
                  border: `1px solid ${card.color}30`,
                }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: card.color, marginBottom: 6 }}>
                    {card.emoji} {card.name.split(' ')[0]}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.text }}>
                    {(total - used).toLocaleString()}%
                    <span style={{ fontSize: 11, fontWeight: 400, color: COLORS.textSecondary }}> 남음</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, backgroundColor: '#E0E0E0', marginTop: 6 }}>
                    <div style={{ width: `${100 - used}%`, height: '100%', borderRadius: 3, backgroundColor: card.color, transition: 'width 0.3s' }} />
                  </div>
                  <div style={{ fontSize: 10, color: COLORS.textSecondary, marginTop: 4 }}>{card.benefits.px.limit}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 무신사 스타일 카테고리 브라우저 */}
        <div style={{ margin: '16px 16px 0' }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>혜택 카테고리</div>
          <div style={{ display: 'flex', borderRadius: 12, overflow: 'hidden', border: `1px solid ${COLORS.border}`, minHeight: 280 }}>
            {/* 좌측 사이드바 */}
            <div style={{ width: 90, backgroundColor: '#F8F8F8', borderRight: `1px solid ${COLORS.border}`, flexShrink: 0 }}>
              {benefitCategories.map((cat, i) => (
                <button key={cat.id} onClick={() => setSelectedBenefitCat(i)} style={{
                  display: 'block', width: '100%', padding: '12px 8px', border: 'none', cursor: 'pointer',
                  backgroundColor: selectedBenefitCat === i ? '#fff' : 'transparent',
                  borderLeft: selectedBenefitCat === i ? `3px solid ${COLORS.primary}` : '3px solid transparent',
                  fontSize: 12, fontWeight: selectedBenefitCat === i ? 700 : 400,
                  color: selectedBenefitCat === i ? COLORS.primary : COLORS.text,
                  textAlign: 'left',
                }}>
                  {cat.emoji} {cat.label}
                </button>
              ))}
            </div>
            {/* 우측 서브카테고리 */}
            <div style={{ flex: 1, padding: 12, backgroundColor: '#fff' }}>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10, color: COLORS.primaryDark }}>
                {activeCat.emoji} {activeCat.label}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                {activeCat.subs.map(sub => (
                  <div key={sub.id} onClick={() => { setBenefitDetailId(sub.id); setPage('benefitDetail'); }} style={{
                    textAlign: 'center', padding: '12px 4px', borderRadius: 10,
                    backgroundColor: '#F9F9F9', cursor: 'pointer',
                  }}>
                    <div style={{ fontSize: 22 }}>{sub.emoji}</div>
                    <div style={{ fontSize: 10, fontWeight: 600, marginTop: 4, color: COLORS.text, lineHeight: 1.3 }}>{sub.label}</div>
                    {sub.detail && <div style={{ fontSize: 8, color: COLORS.primary, marginTop: 2 }}>{sub.detail}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 빠른 바로가기 */}
        <div style={{ padding: '16px 16px 0' }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>빠른 바로가기</div>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 8, scrollbarWidth: 'none' }}>
            {quickLinks.map(link => (
              <div key={link.id} style={{
                minWidth: 100, padding: '14px 10px', borderRadius: 14, flexShrink: 0,
                backgroundColor: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                textAlign: 'center', cursor: 'pointer',
              }}>
                <div style={{ fontSize: 24 }}>{link.emoji}</div>
                <div style={{ fontSize: 11, fontWeight: 600, marginTop: 6, lineHeight: 1.3 }}>{link.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 휴가 D-day + 할인 큐레이션 */}
        <div style={{ margin: '16px 16px 90px' }}>
          <div style={{
            padding: 16, borderRadius: 16,
            background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <div>
                <div style={{ fontSize: 11, color: COLORS.textSecondary }}>다음 정기휴가까지</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: '#1565C0' }}>D-{vacationDday}</div>
              </div>
              <div style={{ fontSize: 36 }}>🏖️</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>외출 준비 할인 큐레이션</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { label: 'CGV 6천원', emoji: '🎬' },
                { label: '에버랜드 50%', emoji: '🎢' },
                { label: 'KTX 5%', emoji: '🚄' },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '6px 10px', borderRadius: 8, backgroundColor: 'rgba(255,255,255,0.7)',
                  fontSize: 11, fontWeight: 600,
                }}>
                  {item.emoji} {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ============================================
  // Tab 2: 카드 (Card)
  // ============================================
  const renderCard = () => {
    const enabledCards = Object.entries(myCards).filter(([, v]) => v).map(([k]) => k);
    const catBestEntries = Object.entries(categoryBestCard);

    return (
      <div>
        <div style={{ ...styles.header, padding: '16px' }}>
          <div style={styles.headerTitle}>💳 카드</div>
          <div style={styles.headerSub}>나라사랑카드 비교 & 관리</div>
        </div>

        {/* 검색 */}
        <div style={{ padding: '12px 16px' }}>
          <input
            type="text"
            placeholder="가맹점/브랜드 검색"
            value={cardSearch}
            onChange={e => setCardSearch(e.target.value)}
            style={{ ...styles.input, marginBottom: 0, borderRadius: 12, backgroundColor: '#fff' }}
          />
        </div>

        {/* 내 카드 */}
        <div style={{ padding: '0 16px' }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>내 카드</div>
          {Object.values(cardData).map(card => (
            <div key={card.id} style={{
              ...styles.card, padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              opacity: card.isLegacy ? 0.6 : 1,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, backgroundColor: card.color + '20',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                }}>{card.emoji}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{card.name}</div>
                  <div style={{ fontSize: 10, color: COLORS.textSecondary }}>{card.brand}{card.isLegacy ? ' (단종)' : ''}</div>
                </div>
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={myCards[card.id] || false}
                  onChange={() => setMyCards(prev => ({ ...prev, [card.id]: !prev[card.id] }))}
                  style={styles.checkbox}
                />
                <span style={{ fontSize: 11, color: COLORS.textSecondary }}>등록</span>
              </label>
            </div>
          ))}
        </div>

        {/* 카드 비교 */}
        {enabledCards.length > 0 && (
          <div style={{ padding: '0 16px', marginTop: 8 }}>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>카드 비교</div>
            {enabledCards.map(cid => {
              const card = cardData[cid];
              if (!card) return null;
              const topBenefits = Object.values(card.benefits).slice(0, 4);
              return (
                <div key={cid} style={{ ...styles.card, padding: 14, borderLeft: `4px solid ${card.color}` }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: card.color, marginBottom: 8 }}>
                    {card.emoji} {card.name}
                  </div>
                  {topBenefits.map((b, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0', borderBottom: i < topBenefits.length - 1 ? `1px solid ${COLORS.border}` : 'none' }}>
                      <span style={{ fontSize: 12 }}>{b.desc}</span>
                      <span style={{ fontSize: 10, color: COLORS.primary, fontWeight: 600 }}>{b.limit}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 8 }}>
                    {(card.bestFor || []).slice(0, 3).map((tag, i) => (
                      <span key={i} style={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* PX 사용 트래커 */}
        <div style={{ padding: '0 16px', marginTop: 8 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>PX 할인 사용 현황</div>
          {enabledCards.map(cid => {
            const card = cardData[cid];
            if (!card || !card.benefits.px) return null;
            const usedPct = Math.floor(Math.random() * 60 + 10);
            return (
              <div key={cid} style={{ ...styles.card, padding: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: card.color }}>{card.emoji} {card.name.split(' ')[0]}</span>
                  <span style={{ fontSize: 11, color: COLORS.textSecondary }}>{card.benefits.px.limit}</span>
                </div>
                <div style={styles.progressBar()}>
                  <div style={styles.progressFill(usedPct, card.color)} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                  <span style={{ fontSize: 10, color: COLORS.textSecondary }}>사용 {usedPct}%</span>
                  <span style={{ fontSize: 10, color: COLORS.primary, fontWeight: 600 }}>잔여 {100 - usedPct}%</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 추천 조합 */}
        <div style={{ padding: '0 16px', marginTop: 8 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>추천 카드 조합</div>
          {cardCombos.map((combo, i) => (
            <div key={i} style={{ ...styles.card, padding: 14 }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>{combo.emoji} {combo.name}</div>
              {combo.cards.map((c, j) => {
                const cd = cardData[c.card];
                return (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: j < combo.cards.length - 1 ? `1px solid ${COLORS.border}` : 'none' }}>
                    <span style={{ fontSize: 10, padding: '2px 6px', borderRadius: 4, backgroundColor: cd?.color + '20', color: cd?.color, fontWeight: 700 }}>{c.role}</span>
                    <span style={{ fontSize: 12, fontWeight: 600 }}>{cd?.name}</span>
                    <span style={{ fontSize: 10, color: COLORS.textSecondary, marginLeft: 'auto' }}>{c.usage}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* 카테고리 최적 카드 */}
        <div style={{ padding: '0 16px', marginTop: 8, marginBottom: 90 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>카테고리별 BEST 카드</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {catBestEntries.slice(0, 8).map(([key, val]) => {
              const cd = cardData[val.card];
              return (
                <div key={key} style={{
                  ...styles.card, padding: 10, marginBottom: 0,
                }}>
                  <div style={{ fontSize: 10, color: COLORS.textSecondary, marginBottom: 2 }}>{key}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: cd?.color }}>{cd?.emoji} {cd?.name.split(' ')[0]}</div>
                  <div style={{ fontSize: 10, color: COLORS.primary, marginTop: 2 }}>{val.reason}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // ============================================
  // Tab 3: 자기계발 (Self-Dev)
  // ============================================
  const renderSelfDev = () => (
    <div>
      <div style={{ ...styles.header, padding: '16px' }}>
        <div style={styles.headerTitle}>📖 자기계발</div>
        <div style={styles.headerSub}>나만의 성장 로드맵을 만들어보세요</div>
      </div>

      {/* 공지 피드 */}
      <div style={{ padding: '12px 16px' }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>📢 공지 피드</div>
        {[
          { title: '정보처리기사 필기 접수 시작 (4/14~4/20)', tag: '자격증', time: '2시간 전', dday: 'D-14' },
          { title: '제7회 군 창업 아이디어 공모전 (~5/31)', tag: '공모전', time: '1일 전', dday: 'D-55' },
          { title: '2026 상반기 TOEIC 특별 시험일정 안내', tag: '어학', time: '2일 전', dday: 'D-32' },
          { title: 'SQLD 자격시험 접수 (~4/25)', tag: '자격증', time: '3일 전', dday: 'D-19' },
          { title: '군러닝 AI 활용 과정 신규 오픈', tag: '온라인학습', time: '5일 전', dday: '' },
        ].map((notice, i) => (
          <div key={i} style={{ ...styles.card, padding: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 10, backgroundColor: COLORS.primary + '15', color: COLORS.primary, fontWeight: 600, flexShrink: 0 }}>{notice.tag}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{notice.title}</div>
            </div>
            {notice.dday && <span style={{ fontSize: 10, color: COLORS.accent, fontWeight: 700, whiteSpace: 'nowrap' }}>{notice.dday}</span>}
          </div>
        ))}
      </div>

      {/* 목표 progress cards */}
      <div style={{ padding: '0 16px' }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>🎯 나의 목표</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { label: '체력검정 특급', progress: Math.min((userData.exerciseCount / 30) * 100, 100), emoji: '💪', color: '#4CAF50' },
            { label: `월 4권 독서`, progress: (userData.booksRead / 4) * 100, emoji: '📚', color: '#FF9800' },
            { label: '자격증 취득', progress: userData.certList.length > 0 ? 40 : 0, emoji: '🏆', color: '#2196F3' },
            { label: '피부 관리 루틴', progress: userData.skinType ? 60 : 0, emoji: '✨', color: '#E91E63' },
          ].map((goal, i) => (
            <div key={i} style={{ ...styles.card, padding: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 20 }}>{goal.emoji}</span>
                <span style={{ fontSize: 12, fontWeight: 600 }}>{goal.label}</span>
              </div>
              <div style={{ height: 6, borderRadius: 3, backgroundColor: '#E0E0E0' }}>
                <div style={{ width: `${Math.min(goal.progress, 100)}%`, height: '100%', borderRadius: 3, backgroundColor: goal.color, transition: 'width 0.3s' }} />
              </div>
              <div style={{ fontSize: 10, color: COLORS.textSecondary, textAlign: 'right', marginTop: 4 }}>{Math.round(goal.progress)}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* 카테고리 바로가기 */}
      <div style={{ padding: '0 16px', marginTop: 12 }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>📂 카테고리</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {CATEGORIES.map(cat => (
            <button key={cat.id} onClick={() => openCategory(cat.id)} style={{
              padding: '18px 8px 14px', borderRadius: 16, border: 'none', backgroundColor: cat.color,
              cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)', transition: 'transform 0.15s',
            }}>
              <span style={{ fontSize: 28 }}>{cat.emoji}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.text }}>{cat.label}</span>
              <span style={{ fontSize: 9, color: COLORS.textSecondary }}>{cat.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 추가 카테고리 (어학, 재테크, 온라인학습, 기타) */}
      <div style={{ padding: '0 16px', marginTop: 12 }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>📌 더 많은 카테고리</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[
            { emoji: '🌐', label: '어학', desc: 'TOEIC·JLPT·HSK·OPIc', color: '#E3F2FD' },
            { emoji: '💰', label: '재테크/투자', desc: '장병적금·ISA·주식', color: '#FFFDE7' },
            { emoji: '🎓', label: '온라인 학습', desc: '군러닝·인트라넷 인강', color: '#F3E5F5' },
            { emoji: '🎯', label: '기타·자유설정', desc: '나만의 목표 추가', color: '#FFF3E0' },
          ].map((cat, i) => (
            <div key={i} style={{
              ...styles.card, padding: 12, marginBottom: 0, backgroundColor: cat.color,
              display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
            }}>
              <span style={{ fontSize: 24 }}>{cat.emoji}</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700 }}>{cat.label}</div>
                <div style={{ fontSize: 9, color: COLORS.textSecondary }}>{cat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 오늘의 추천 루틴 */}
      <div style={{ padding: '0 16px', marginTop: 16 }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>⏰ 오늘의 추천 루틴</div>
        {[
          { time: '06:00', title: '기상 후 맨몸운동 30분', cat: 'health', emoji: '💪' },
          { time: '07:00', title: '아침 스킨케어 루틴', cat: 'skin', emoji: '✨' },
          { time: '12:30', title: '점심 후 영어 단어 50개', cat: 'exam', emoji: '📝' },
          { time: '18:00', title: '저녁 영양제 복용', cat: 'wellness', emoji: '💊' },
          { time: '21:30', title: '취침 전 30분 독서', cat: 'books', emoji: '📚' },
          { time: '22:00', title: '저녁 스킨케어 루틴', cat: 'skin', emoji: '🌙' },
        ].map((item, i) => (
          <div key={i} onClick={() => openCategory(item.cat)} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', cursor: 'pointer',
            borderBottom: i < 5 ? `1px solid ${COLORS.border}` : 'none',
          }}>
            <span style={{ fontSize: 11, color: COLORS.primary, fontWeight: 700, width: 40 }}>{item.time}</span>
            <span style={{ fontSize: 16 }}>{item.emoji}</span>
            <span style={{ fontSize: 13, color: COLORS.text }}>{item.title}</span>
          </div>
        ))}
      </div>

      <div style={{ height: 90 }} />
    </div>
  );

  // ============================================
  // Tab 4: 커뮤니티 (Community)
  // ============================================
  const communityPosts = {
    hot: [
      { id: 1, author: '공군_2501_하늘매72', rank: '상병', title: '크레아틴 + 저항밴드 11개월 벌크업 후기', content: '입대 전 62kg → 현재 72kg. 매일 5g 꾸준히 먹고 생활관에서 밴드 운동 30분씩 했습니다.', likes: 234, comments: 45, tag: '헬스', time: '3시간 전', branch: '공군' },
      { id: 2, author: '육군_2412_맹호전사31', rank: '병장', title: '정보처리기사 3개월 독학 필기 합격!', content: '취침 전 2시간씩 공부하고 주말에 기출 3회분씩 풀었어요. 1회독 후 기출 반복이 핵심입니다.', likes: 312, comments: 67, tag: '자격증', time: '5시간 전', branch: '육군' },
      { id: 3, author: '공군_2503_별빛조종77', rank: '일병', title: 'TOEIC 630->815 8개월 학습법 공유', content: '매일 아침 단어 50개, 점심 LC, 저녁 RC 나눠서 공부했어요.', likes: 267, comments: 53, tag: '군수', time: '8시간 전', branch: '공군' },
      { id: 4, author: '해군_2502_바다사나66', rank: '상병', title: '외박 전날 마스크팩 루틴 완전 정리', content: '세안 후 메디힐 15분 + 보습크림 두껍게. 다음날 피부 완전 달라져요.', likes: 189, comments: 38, tag: '피부', time: '12시간 전', branch: '해군' },
      { id: 5, author: '해병_2501_독수리45', rank: '상병', title: '한국사 1급 30일 벼락치기로 합격한 방법', content: '시대별 2일씩 개념 잡고 나머지는 기출만 반복!', likes: 198, comments: 41, tag: '자격증', time: '1일 전', branch: '해병대' },
    ],
    qna: [
      { id: 11, author: '육군_2601_신병전사01', rank: '이병', title: '체력검정 3급인데 특급 가능할까요?', content: '입대한 지 2개월됐는데 팔굽혀펴기 30개밖에 못해요...', likes: 45, comments: 23, tag: '질문', time: '2시간 전', branch: '육군' },
      { id: 12, author: '공군_2507_고민하늘이', rank: '일병', title: '전역 후 뭐 할지 모르겠어요', content: '아직 1년 남았는데 자격증이나 공부 뭘 해야 할지...', likes: 67, comments: 34, tag: '질문', time: '4시간 전', branch: '공군' },
      { id: 13, author: '육군_2506_영양초보병', rank: '일병', title: '종합비타민 vs 개별 비타민 뭐가 나아요?', content: 'PX에서 센트룸 살지 따로따로 살지 고민됩니다', likes: 34, comments: 19, tag: '질문', time: '6시간 전', branch: '육군' },
    ],
    tips: [
      { id: 21, author: '육군_2403_재테크병장', rank: '병장', title: '장병적금 만기 후 투자 계획 세우는 법', content: '복무 중 월급 대부분 적금에 넣고 만기 후 투자 계획 세웠어요.', likes: 178, comments: 29, tag: '재테크', time: '1일 전', branch: '육군' },
      { id: 22, author: '공군_2502_독서왕33', rank: '상병', title: '군 도서관에서 빌려 읽기 좋은 책 리스트', content: '사피엔스, 총균쇠, 코스모스 같은 교양서적은 대부분 비치되어 있어요.', likes: 123, comments: 18, tag: '도서', time: '2일 전', branch: '공군' },
      { id: 23, author: '육군_2404_스킨케어병장', rank: '병장', title: '영내 건조함에서 피부 지키는 꿀팁 5가지', content: '1.가습기 신청 2.세타필 필수 3.선크림 필수 4.물 많이 5.마스크팩 주1회', likes: 156, comments: 22, tag: '피부', time: '2일 전', branch: '육군' },
    ],
    free: [
      { id: 31, author: '공군_2504_자유인77', rank: '상병', title: '오늘 PX 신상 떴다!', content: '프로틴바 신상 나왔는데 맛이 괜찮음. 초코맛 추천', likes: 89, comments: 15, tag: '잡담', time: '1시간 전', branch: '공군' },
      { id: 32, author: '해군_2505_파도타기22', rank: '일병', title: '외박 나가서 뭐 먹을지 추천 좀', content: '서울역 근처 맛집 아시는 분?', likes: 56, comments: 28, tag: '잡담', time: '3시간 전', branch: '해군' },
    ],
  };

  const renderCommunity = () => {
    const branches = [
      { id: 'all', label: '전체' },
      { id: '육군', label: '육군' },
      { id: '해군', label: '해군' },
      { id: '공군', label: '공군' },
      { id: '해병대', label: '해병대' },
    ];

    const stageTabs = [
      { id: 'hot', label: '🔥 인기' },
      { id: 'qna', label: '❓ Q&A' },
      { id: 'tips', label: '💡 꿀팁' },
      { id: 'free', label: '💭 자유' },
    ];

    const posts = (communityPosts[communityTab] || []).filter(
      p => communityBranch === 'all' || p.branch === communityBranch
    );

    return (
      <div>
        <div style={{ ...styles.header, padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={styles.headerTitle}>💬 커뮤니티</div>
              <div style={styles.headerSub}>장병들의 이야기</div>
            </div>
            <button style={{ ...styles.buyButton('#fff'), color: COLORS.primary, fontSize: 12, padding: '6px 12px', marginTop: 0 }}>✏️ 글쓰기</button>
          </div>
        </div>

        {/* 군종 필터 */}
        <div style={{ display: 'flex', gap: 6, padding: '10px 16px', overflowX: 'auto', scrollbarWidth: 'none', backgroundColor: '#fff' }}>
          {branches.map(b => (
            <button key={b.id} onClick={() => setCommunityBranch(b.id)} style={{
              padding: '6px 14px', borderRadius: 20, border: 'none', cursor: 'pointer', flexShrink: 0,
              backgroundColor: communityBranch === b.id ? COLORS.primary : '#F0F0F0',
              color: communityBranch === b.id ? '#fff' : COLORS.text,
              fontSize: 12, fontWeight: communityBranch === b.id ? 700 : 400,
            }}>{b.label}</button>
          ))}
        </div>

        {/* 스테이지 탭 */}
        <div style={{ display: 'flex', gap: 0, borderBottom: `1px solid ${COLORS.border}`, backgroundColor: '#fff' }}>
          {stageTabs.map(tab => (
            <button key={tab.id} onClick={() => setCommunityTab(tab.id)} style={{
              flex: 1, padding: '12px 0', border: 'none', backgroundColor: 'transparent', cursor: 'pointer',
              fontSize: 12, fontWeight: communityTab === tab.id ? 700 : 400,
              color: communityTab === tab.id ? COLORS.primary : COLORS.textSecondary,
              borderBottom: communityTab === tab.id ? `2px solid ${COLORS.primary}` : '2px solid transparent',
            }}>{tab.label}</button>
          ))}
        </div>

        {/* 게시물 */}
        <div style={{ padding: '12px 16px' }}>
          {posts.map(post => (
            <div key={post.id} style={{ ...styles.card, padding: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%', backgroundColor: COLORS.primary + '20',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14,
                  }}>👤</div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>{post.author}</div>
                    <div style={{ fontSize: 10, color: COLORS.textSecondary }}>{post.rank} · {post.time}</div>
                  </div>
                </div>
                <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 10, backgroundColor: COLORS.primary + '12', color: COLORS.primary, fontWeight: 600, height: 'fit-content' }}>{post.tag}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{post.title}</div>
              <div style={{ fontSize: 12, color: COLORS.textSecondary, lineHeight: 1.5, marginBottom: 8 }}>{post.content.slice(0, 80)}...</div>
              <div style={{ display: 'flex', gap: 16, fontSize: 12, color: COLORS.textSecondary }}>
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
                <span style={{ marginLeft: 'auto' }}>공유</span>
              </div>
            </div>
          ))}
        </div>

        {/* 친구 초대 배너 */}
        <div style={{ margin: '0 16px 90px' }}>
          <div style={{
            padding: 16, borderRadius: 14, textAlign: 'center',
            background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
          }}>
            <div style={{ fontSize: 22 }}>🤝</div>
            <div style={{ fontSize: 14, fontWeight: 700, marginTop: 6 }}>전우 초대하기</div>
            <div style={{ fontSize: 12, color: COLORS.textSecondary, marginTop: 4 }}>함께 성장하는 군생활! 초대하고 뱃지 받기</div>
            <button style={{ ...styles.buyButton(COLORS.primary), marginTop: 10 }}>초대 링크 복사</button>
          </div>
        </div>
      </div>
    );
  };

  // ============================================
  // Tab 5: 내정보 (My Info)
  // ============================================
  const [showMilitarySetup, setShowMilitarySetup] = useState(false);
  const [showVacationModal, setShowVacationModal] = useState(false);
  const [newVacation, setNewVacation] = useState({ type: '포상', days: 1, date: '', memo: '' });

  // 군종별 복무기간 (개월)
  const SERVICE_MONTHS = { '육군': 18, '해군': 20, '공군': 21, '해병대': 18 };
  // 군종별 기본 연가
  const ANNUAL_LEAVE = { '육군': 24, '해군': 24, '공군': 24, '해병대': 24 };

  const calcDischargeDate = (branch, enlist) => {
    if (!branch || !enlist) return null;
    const d = new Date(enlist);
    d.setMonth(d.getMonth() + (SERVICE_MONTHS[branch] || 18));
    d.setDate(d.getDate() - 1);
    return d;
  };

  const renderMyPage = () => {
    const branch = userData.militaryBranch || '';
    const enlistStr = userData.enlistDate || '';
    const enlistDate = enlistStr ? new Date(enlistStr) : null;
    const dischargeDate = calcDischargeDate(branch, enlistStr);
    const now = new Date();

    const totalDays = enlistDate && dischargeDate ? Math.floor((dischargeDate - enlistDate) / (1000*60*60*24)) : 0;
    const servedDays = enlistDate ? Math.max(0, Math.floor((now - enlistDate) / (1000*60*60*24))) : 0;
    const remainDays = dischargeDate ? Math.max(0, Math.ceil((dischargeDate - now) / (1000*60*60*24))) : 0;
    const progressPct = totalDays > 0 ? Math.min(Math.round((servedDays / totalDays) * 100), 100) : 0;

    // 휴가 계산
    const totalAnnual = ANNUAL_LEAVE[branch] || 24;
    const usedAnnual = userData.vacationUsed?.annual || 0;
    const usedReward = userData.vacationUsed?.reward || 0;
    const usedConsolation = userData.vacationUsed?.consolation || 0;
    const usedSpecial = userData.vacationUsed?.special || 0;
    const earnedExtra = (userData.vacationEarned || []).reduce((s, v) => s + (v.days || 0), 0);
    const totalEarned = totalAnnual + earnedExtra;
    const totalUsed = usedAnnual + usedReward + usedConsolation + usedSpecial;
    const remainVacation = totalEarned - totalUsed;

    const checklistItems = [
      { key: 'nasaka', label: '나사카 발급' },
      { key: 'savings', label: '장병적금 가입' },
      { key: 'mutual', label: '군인공제회 가입' },
      { key: 'isa', label: 'ISA 계좌 개설' },
      { key: 'insurance', label: '실비보험 가입' },
      { key: 'plan', label: '전역 후 자금계획' },
    ];

    const fundGoals = [
      { label: '자동차', amount: 15000000, emoji: '🚗' },
      { label: '자취 보증금', amount: 10000000, emoji: '🏠' },
      { label: '여행', amount: 3000000, emoji: '✈️' },
      { label: '노트북/전자기기', amount: 2000000, emoji: '💻' },
      { label: '자기계발/교육', amount: 1000000, emoji: '📚' },
    ];

    const spendingCategories = [
      { label: 'PX', amount: 85000, emoji: '🏪', color: '#4CAF50' },
      { label: '편의점', amount: 42000, emoji: '🏬', color: '#2196F3' },
      { label: '외출외박', amount: 120000, emoji: '🚶', color: '#FF9800' },
      { label: '식비', amount: 35000, emoji: '🍜', color: '#E91E63' },
      { label: '쇼핑', amount: 68000, emoji: '🛒', color: '#9C27B0' },
    ];
    const totalSpending = spendingCategories.reduce((s, c) => s + c.amount, 0);

    const postDischargeTimeline = [
      { period: '전역 직후', items: ['국민연금 크레딧 신청 (최대 12개월 인정)', '건강보험 직장/지역 전환', '장병적금 만기 수령 (정부지원금 포함)', '군인공제회 해약 환급금 수령'], emoji: '🎯' },
      { period: '1년 이내', items: ['취업지원금 신청', '국비교육 신청 (내일배움카드)', '전세자금대출 군인 우대', 'ISA 만기 전환 검토'], emoji: '📋' },
      { period: '2년 이내', items: ['재향군인회 취업지원', '대학 편입 군복무 우대 활용', '주택청약 군복무 가점 확인'], emoji: '🏠' },
      { period: '3년 이내', items: ['주택 청약 군복무 가점 적용', '국민연금 가입이력 확인', '예비역 혜택 총정리'], emoji: '🎖️' },
    ];

    const branchEmoji = { '육군': '⚔️', '해군': '⚓', '공군': '✈️', '해병대': '🦅' };

    return (
      <div>
        {/* 프로필 헤더 */}
        <div style={{ ...styles.header, padding: '20px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: 60, height: 60, borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                border: '2px solid rgba(255,255,255,0.4)',
              }}>{branch ? branchEmoji[branch] || '🎖️' : '🎖️'}</div>
              <svg width="68" height="68" style={{ position: 'absolute', top: -4, left: -4 }}>
                <circle cx="34" cy="34" r="30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
                <circle cx="34" cy="34" r="30" fill="none" stroke="#fff" strokeWidth="3"
                  strokeDasharray={`${(progressPct / 100) * 188.5} 188.5`}
                  strokeLinecap="round" transform="rotate(-90 34 34)" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>{branch || '군종 미설정'}</div>
              {enlistDate ? (
                <>
                  <div style={{ fontSize: 12, opacity: 0.8 }}>복무 {servedDays}일차 | 진행률 {progressPct}%</div>
                  <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>
                    전역일: {dischargeDate?.toLocaleDateString('ko-KR')} (D-{remainDays})
                  </div>
                </>
              ) : (
                <div style={{ fontSize: 12, opacity: 0.8 }}>입대일을 설정해주세요</div>
              )}
            </div>
            <button onClick={() => setShowMilitarySetup(true)} style={{
              background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff',
              padding: '6px 10px', borderRadius: 8, fontSize: 12, cursor: 'pointer',
            }}>⚙️</button>
          </div>
        </div>

        {/* 군복무 설정 모달 */}
        {/* 미설정 시 입력 유도 */}
        {(!branch || !enlistStr) && (
          <div style={{ margin: '12px 16px' }}>
            <div style={{ ...styles.card, padding: 20, textAlign: 'center', background: 'linear-gradient(135deg, #FFF3E0, #FFE0B2)', borderRadius: 16 }}>
              <div style={{ fontSize: 32 }}>🎖️</div>
              <div style={{ fontSize: 15, fontWeight: 700, marginTop: 8 }}>군복무 정보를 입력해주세요</div>
              <div style={{ fontSize: 12, color: COLORS.textSecondary, marginTop: 4, lineHeight: 1.5 }}>
                군종과 입대일을 입력하면 전역일, 복무 진행률,{'\n'}남은 복무일, 휴가 계산이 자동으로 제공됩니다.
              </div>
              <button onClick={() => setShowMilitarySetup(true)} style={{ ...styles.buyButton(COLORS.primary), marginTop: 12, padding: '10px 24px', fontSize: 14 }}>
                지금 설정하기 →
              </button>
            </div>
          </div>
        )}

        {/* 군복무 요약 카드 (설정 완료 시) */}
        {branch && enlistStr && (
          <div style={{ padding: '12px 16px' }}>
            <div style={{ ...styles.card, padding: 16, background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.primaryDark, marginBottom: 12 }}>📋 복무 현황</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 12 }}>
                <div style={{ textAlign: 'center', padding: 8, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 10 }}>
                  <div style={{ fontSize: 10, color: COLORS.textSecondary }}>입대일</div>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>{enlistDate?.toLocaleDateString('ko-KR', { year: '2-digit', month: 'short', day: 'numeric' })}</div>
                </div>
                <div style={{ textAlign: 'center', padding: 8, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 10 }}>
                  <div style={{ fontSize: 10, color: COLORS.textSecondary }}>전역일</div>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>{dischargeDate?.toLocaleDateString('ko-KR', { year: '2-digit', month: 'short', day: 'numeric' })}</div>
                </div>
                <div style={{ textAlign: 'center', padding: 8, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 10 }}>
                  <div style={{ fontSize: 10, color: COLORS.textSecondary }}>전역까지</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: '#E65100' }}>D-{remainDays}</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 6 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.primaryDark }}>{servedDays}일</div>
                  <div style={{ fontSize: 9, color: COLORS.textSecondary }}>복무일</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.primaryDark }}>{remainDays}일</div>
                  <div style={{ fontSize: 9, color: COLORS.textSecondary }}>잔여일</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.primaryDark }}>{Math.max(0, remainDays - remainVacation)}일</div>
                  <div style={{ fontSize: 9, color: COLORS.textSecondary }}>실복무일</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#1565C0' }}>{remainVacation}일</div>
                  <div style={{ fontSize: 9, color: COLORS.textSecondary }}>잔여휴가</div>
                </div>
              </div>
              {/* 휴가 미니 요약 */}
              <div style={{ display: 'flex', gap: 6, marginTop: 10, justifyContent: 'center' }}>
                {[
                  { label: '연가', val: `${usedAnnual}/${totalAnnual}`, color: '#1565C0' },
                  { label: '포상', val: `${usedReward}`, color: '#4CAF50' },
                  { label: '위로', val: `${usedConsolation}`, color: '#FF9800' },
                  { label: '특별', val: `${usedSpecial}`, color: '#2196F3' },
                ].map((v, i) => (
                  <div key={i} style={{ padding: '4px 8px', borderRadius: 6, backgroundColor: v.color + '15', fontSize: 10 }}>
                    <span style={{ color: v.color, fontWeight: 700 }}>{v.label}</span> {v.val}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {showMilitarySetup && (
          <div style={styles.modal} onClick={() => setShowMilitarySetup(false)}>
            <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>🎖️ 군복무 정보 설정</div>
              <div style={{ fontSize: 13, marginBottom: 6 }}>군종 선택</div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                {['육군', '해군', '공군', '해병대'].map(b => (
                  <button key={b} onClick={() => updateUserData({ militaryBranch: b })} style={{
                    flex: 1, padding: '10px 4px', borderRadius: 10, border: 'none', cursor: 'pointer',
                    backgroundColor: userData.militaryBranch === b ? COLORS.primary : '#F0F0F0',
                    color: userData.militaryBranch === b ? '#fff' : COLORS.text,
                    fontSize: 12, fontWeight: userData.militaryBranch === b ? 700 : 400,
                  }}>
                    {branchEmoji[b]} {b}
                  </button>
                ))}
              </div>
              <div style={{ fontSize: 13, marginBottom: 6 }}>입대일</div>
              <input type="date" value={userData.enlistDate || ''} style={styles.input}
                onChange={e => updateUserData({ enlistDate: e.target.value })} />
              {userData.militaryBranch && userData.enlistDate && (
                <div style={{ padding: 12, backgroundColor: '#E8F5E9', borderRadius: 10, marginTop: 8 }}>
                  <div style={{ fontSize: 12, color: COLORS.textSecondary }}>복무기간: {SERVICE_MONTHS[userData.militaryBranch]}개월</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.primary, marginTop: 4 }}>
                    전역 예정일: {calcDischargeDate(userData.militaryBranch, userData.enlistDate)?.toLocaleDateString('ko-KR')}
                  </div>
                </div>
              )}
              <button onClick={() => setShowMilitarySetup(false)} style={{
                ...styles.buyButton(COLORS.primary), width: '100%', textAlign: 'center', padding: 12, marginTop: 12,
              }}>저장</button>
            </div>
          </div>
        )}

        {/* 휴가 계산기 */}
        <div style={{ padding: '12px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 15, fontWeight: 700 }}>🏖️ 휴가 계산기</span>
            <button onClick={() => setShowVacationModal(true)} style={{ ...styles.buyButton(COLORS.primary), marginTop: 0, padding: '4px 10px', fontSize: 11 }}>+ 휴가 추가</button>
          </div>

          {/* 휴가 요약 카드 */}
          <div style={{ ...styles.card, background: 'linear-gradient(135deg, #E3F2FD, #BBDEFB)', padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#1565C0' }}>{totalEarned}</div>
                <div style={{ fontSize: 10, color: COLORS.textSecondary }}>총 휴가</div>
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, color: COLORS.accent }}>{totalUsed}</div>
                <div style={{ fontSize: 10, color: COLORS.textSecondary }}>사용</div>
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 700, color: COLORS.primary }}>{remainVacation}</div>
                <div style={{ fontSize: 10, color: COLORS.textSecondary }}>잔여</div>
              </div>
            </div>
            <div style={styles.progressBar()}>
              <div style={styles.progressFill(totalEarned > 0 ? (totalUsed / totalEarned) * 100 : 0, '#1565C0')} />
            </div>
          </div>

          {/* 달력 뷰 */}
          {(() => {
            const calMonth = new Date();
            const y = calMonth.getFullYear();
            const m = calMonth.getMonth();
            const firstDay = new Date(y, m, 1).getDay();
            const daysInMonth = new Date(y, m + 1, 0).getDate();
            const today = new Date().getDate();
            const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

            // 휴가 날짜 맵 만들기
            const vacDates = {};
            const typeColors = { '포상': '#4CAF50', '위로': '#FF9800', '특별': '#2196F3', '기타': '#9C27B0', '연가': '#1565C0' };
            (userData.vacationEarned || []).forEach(v => {
              if (v.date) {
                const vd = new Date(v.date);
                if (vd.getMonth() === m && vd.getFullYear() === y) {
                  for (let d = 0; d < v.days; d++) {
                    const dd = new Date(v.date);
                    dd.setDate(dd.getDate() + d);
                    if (dd.getMonth() === m) vacDates[dd.getDate()] = { type: v.type, memo: v.memo };
                  }
                }
              }
            });

            // 입대일/전역일 표시
            const enlistDay = enlistDate && enlistDate.getMonth() === m && enlistDate.getFullYear() === y ? enlistDate.getDate() : null;
            const dischargeDay = dischargeDate && dischargeDate.getMonth() === m && dischargeDate.getFullYear() === y ? dischargeDate.getDate() : null;

            const cells = [];
            for (let i = 0; i < firstDay; i++) cells.push(null);
            for (let d = 1; d <= daysInMonth; d++) cells.push(d);

            return (
              <div style={{ ...styles.card, padding: 14 }}>
                <div style={{ fontSize: 14, fontWeight: 700, textAlign: 'center', marginBottom: 10 }}>
                  📅 {y}년 {m + 1}월
                </div>
                {/* 요일 헤더 */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginBottom: 4 }}>
                  {dayNames.map((dn, i) => (
                    <div key={dn} style={{ textAlign: 'center', fontSize: 10, fontWeight: 700, color: i === 0 ? '#E53935' : i === 6 ? '#1565C0' : COLORS.textSecondary, padding: '4px 0' }}>{dn}</div>
                  ))}
                </div>
                {/* 날짜 그리드 */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
                  {cells.map((day, i) => {
                    if (!day) return <div key={`e${i}`} />;
                    const isToday = day === today;
                    const vac = vacDates[day];
                    const isEnlist = day === enlistDay;
                    const isDischarge = day === dischargeDay;
                    const dow = (firstDay + day - 1) % 7;

                    return (
                      <div key={day} style={{
                        textAlign: 'center', padding: '6px 2px', borderRadius: 8, position: 'relative',
                        backgroundColor: vac ? typeColors[vac.type] + '20' : isToday ? COLORS.primary + '15' : 'transparent',
                        border: isToday ? `2px solid ${COLORS.primary}` : isEnlist ? '2px solid #4CAF50' : isDischarge ? '2px solid #E53935' : '2px solid transparent',
                      }}>
                        <div style={{
                          fontSize: 12, fontWeight: isToday ? 700 : 400,
                          color: dow === 0 ? '#E53935' : dow === 6 ? '#1565C0' : COLORS.text,
                        }}>{day}</div>
                        {vac && <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: typeColors[vac.type], margin: '2px auto 0' }} />}
                        {isEnlist && <div style={{ fontSize: 7, color: '#4CAF50', fontWeight: 700 }}>입대</div>}
                        {isDischarge && <div style={{ fontSize: 7, color: '#E53935', fontWeight: 700 }}>전역</div>}
                      </div>
                    );
                  })}
                </div>
                {/* 범례 */}
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 10, justifyContent: 'center' }}>
                  {Object.entries(typeColors).map(([type, color]) => (
                    <div key={type} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: color }} />
                      <span style={{ fontSize: 9, color: COLORS.textSecondary }}>{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* 휴가 유형별 상세 */}
          <div style={{ ...styles.card, padding: 14 }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10 }}>유형별 현황</div>
            {[
              { key: 'annual', label: '연가', total: totalAnnual, emoji: '📅' },
              { key: 'reward', label: '포상휴가', total: (userData.vacationEarned || []).filter(v => v.type === '포상').reduce((s, v) => s + v.days, 0), emoji: '🏅' },
              { key: 'consolation', label: '위로휴가', total: (userData.vacationEarned || []).filter(v => v.type === '위로').reduce((s, v) => s + v.days, 0), emoji: '💐' },
              { key: 'special', label: '특별휴가', total: (userData.vacationEarned || []).filter(v => v.type === '특별').reduce((s, v) => s + v.days, 0), emoji: '⭐' },
            ].map((vac, i) => {
              const used = userData.vacationUsed?.[vac.key] || 0;
              return (
                <div key={vac.key} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: i < 3 ? `1px solid ${COLORS.border}` : 'none' }}>
                  <span style={{ fontSize: 16 }}>{vac.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                      <span style={{ fontSize: 12, fontWeight: 600 }}>{vac.label}</span>
                      <span style={{ fontSize: 11, color: COLORS.textSecondary }}>{used}/{vac.total}일</span>
                    </div>
                    <div style={styles.progressBar()}>
                      <div style={styles.progressFill(vac.total > 0 ? (used / vac.total) * 100 : 0)} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <button onClick={() => updateUserData({ vacationUsed: { ...userData.vacationUsed, [vac.key]: Math.max(0, used - 1) } })}
                      style={{ width: 24, height: 24, borderRadius: 6, border: `1px solid ${COLORS.border}`, background: '#fff', cursor: 'pointer', fontSize: 12 }}>-</button>
                    <button onClick={() => updateUserData({ vacationUsed: { ...userData.vacationUsed, [vac.key]: used + 1 } })}
                      style={{ width: 24, height: 24, borderRadius: 6, border: `1px solid ${COLORS.border}`, background: '#fff', cursor: 'pointer', fontSize: 12 }}>+</button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 획득한 휴가 목록 */}
          {(userData.vacationEarned || []).length > 0 && (
            <div style={{ ...styles.card, padding: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>획득한 휴가</div>
              {(userData.vacationEarned || []).map((v, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: i < (userData.vacationEarned || []).length - 1 ? `1px solid ${COLORS.border}` : 'none' }}>
                  <div>
                    <span style={{ fontSize: 10, padding: '2px 6px', borderRadius: 4, backgroundColor: COLORS.primary + '15', color: COLORS.primary, fontWeight: 600 }}>{v.type}</span>
                    <span style={{ fontSize: 12, marginLeft: 6 }}>{v.date ? `${v.date} ` : ''}{v.memo || '-'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.primary }}>{v.days}일</span>
                    <button onClick={() => {
                      const next = [...(userData.vacationEarned || [])];
                      next.splice(i, 1);
                      updateUserData({ vacationEarned: next });
                    }} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: COLORS.textSecondary }}>✕</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 휴가 추가 모달 */}
        {showVacationModal && (
          <div style={styles.modal} onClick={() => setShowVacationModal(false)}>
            <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>🏖️ 휴가 추가</div>
              <div style={{ fontSize: 13, marginBottom: 6 }}>휴가 유형</div>
              <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
                {['포상', '위로', '특별', '기타'].map(t => (
                  <button key={t} onClick={() => setNewVacation(prev => ({ ...prev, type: t }))} style={{
                    flex: 1, padding: '8px 4px', borderRadius: 8, border: 'none', cursor: 'pointer',
                    backgroundColor: newVacation.type === t ? COLORS.primary : '#F0F0F0',
                    color: newVacation.type === t ? '#fff' : COLORS.text, fontSize: 12,
                  }}>{t}</button>
                ))}
              </div>
              <div style={{ fontSize: 13, marginBottom: 6 }}>일수</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <button onClick={() => setNewVacation(prev => ({ ...prev, days: Math.max(1, prev.days - 1) }))}
                  style={{ width: 36, height: 36, borderRadius: 8, border: `1px solid ${COLORS.border}`, background: '#fff', cursor: 'pointer', fontSize: 16 }}>-</button>
                <span style={{ fontSize: 24, fontWeight: 700, minWidth: 40, textAlign: 'center' }}>{newVacation.days}</span>
                <button onClick={() => setNewVacation(prev => ({ ...prev, days: prev.days + 1 }))}
                  style={{ width: 36, height: 36, borderRadius: 8, border: `1px solid ${COLORS.border}`, background: '#fff', cursor: 'pointer', fontSize: 16 }}>+</button>
                <span style={{ fontSize: 12, color: COLORS.textSecondary }}>일</span>
              </div>
              <div style={{ fontSize: 13, marginBottom: 6 }}>메모 (선택)</div>
              <input placeholder="예: 사격 우수, 부대 행사 등" value={newVacation.memo}
                onChange={e => setNewVacation(prev => ({ ...prev, memo: e.target.value }))} style={styles.input} />
              <div style={{ fontSize: 13, marginBottom: 6 }}>날짜 (선택)</div>
              <input type="date" value={newVacation.date}
                onChange={e => setNewVacation(prev => ({ ...prev, date: e.target.value }))} style={styles.input} />
              <button onClick={() => {
                updateUserData({ vacationEarned: [...(userData.vacationEarned || []), { ...newVacation }] });
                setNewVacation({ type: '포상', days: 1, date: '', memo: '' });
                setShowVacationModal(false);
              }} style={{ ...styles.buyButton(COLORS.primary), width: '100%', textAlign: 'center', padding: 12 }}>추가하기</button>
            </div>
          </div>
        )}

        {/* 군생활 체크리스트 */}
        <div style={{ padding: '0 16px' }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>✅ 군생활 체크리스트</div>
          <div style={styles.card}>
            {checklistItems.map((item, i) => (
              <label key={item.key} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', cursor: 'pointer',
                borderBottom: i < checklistItems.length - 1 ? `1px solid ${COLORS.border}` : 'none',
              }}>
                <input
                  type="checkbox"
                  checked={checklist[item.key] || false}
                  onChange={() => setChecklist(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                  style={styles.checkbox}
                />
                <span style={{
                  fontSize: 13,
                  textDecoration: checklist[item.key] ? 'line-through' : 'none',
                  color: checklist[item.key] ? COLORS.textSecondary : COLORS.text,
                }}>{item.label}</span>
              </label>
            ))}
            <div style={{ textAlign: 'center', marginTop: 8 }}>
              <span style={{ fontSize: 11, color: COLORS.primary, fontWeight: 600 }}>
                {Object.values(checklist).filter(Boolean).length}/{checklistItems.length} 완료
              </span>
            </div>
          </div>
        </div>

        {/* 전역 후 자금 계획 */}
        <div style={{ padding: '0 16px' }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>💰 전역 후 자금 계획</div>
          <div style={styles.card}>
            {fundGoals.map((goal, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '10px 0',
                borderBottom: i < fundGoals.length - 1 ? `1px solid ${COLORS.border}` : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 20 }}>{goal.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{goal.label}</span>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.primaryDark }}>{formatPrice(goal.amount)}</span>
              </div>
            ))}
            <div style={{ textAlign: 'right', marginTop: 8, paddingTop: 8, borderTop: `1px solid ${COLORS.border}` }}>
              <span style={{ fontSize: 12, color: COLORS.textSecondary }}>합계 </span>
              <span style={{ fontSize: 15, fontWeight: 700, color: COLORS.accent }}>{formatPrice(fundGoals.reduce((s, g) => s + g.amount, 0))}</span>
            </div>
          </div>
        </div>

        {/* 가계부 요약 */}
        <div style={{ padding: '0 16px', marginTop: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>📊 이번 달 지출</div>
          <div style={styles.card}>
            <div style={{ textAlign: 'center', marginBottom: 12 }}>
              <span style={{ fontSize: 11, color: COLORS.textSecondary }}>총 지출 </span>
              <span style={{ fontSize: 18, fontWeight: 700, color: COLORS.text }}>{formatPrice(totalSpending)}</span>
            </div>
            {spendingCategories.map((cat, i) => {
              const pct = Math.round((cat.amount / totalSpending) * 100);
              return (
                <div key={i} style={{ marginBottom: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ fontSize: 12 }}>{cat.emoji} {cat.label}</span>
                    <span style={{ fontSize: 12, fontWeight: 600 }}>{formatPrice(cat.amount)} ({pct}%)</span>
                  </div>
                  <div style={styles.progressBar()}>
                    <div style={styles.progressFill(pct, cat.color)} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 전역 후 혜택 타임라인 */}
        <div style={{ padding: '0 16px', marginTop: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>📅 전역 후 혜택 타임라인</div>
          {postDischargeTimeline.map((stage, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 0 }}>
              {/* 타임라인 바 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 20 }}>
                <div style={{
                  width: 20, height: 20, borderRadius: '50%', backgroundColor: COLORS.primary,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#fff', flexShrink: 0,
                }}>{stage.emoji}</div>
                {i < postDischargeTimeline.length - 1 && (
                  <div style={{ width: 2, flex: 1, backgroundColor: COLORS.primary + '30' }} />
                )}
              </div>
              <div style={{ ...styles.card, flex: 1, padding: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{stage.period}</div>
                {stage.items.map((item, j) => (
                  <div key={j} style={{ fontSize: 12, color: COLORS.textSecondary, padding: '2px 0' }}>- {item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 절약 현황 */}
        <div style={{ padding: '0 16px', marginTop: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>💎 절약 현황</div>
          <div style={{ ...styles.card, textAlign: 'center', padding: 16, background: 'linear-gradient(135deg, #FFF3E0, #FFE0B2)' }}>
            <div style={{ fontSize: 12, color: COLORS.textSecondary }}>밀월렛으로 절약한 총 금액</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: COLORS.primaryDark, marginTop: 4 }}>{formatPrice(userData.savings)}</div>
            <button onClick={() => setShowSavingsModal(true)} style={{ ...styles.buyButton(COLORS.primary), marginTop: 8 }}>상세 보기</button>
          </div>
        </div>

        {/* 등록 카드 현황 */}
        <div style={{ padding: '0 16px', marginTop: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>💳 등록 카드 현황</div>
          {Object.values(cardData).filter(c => !c.isLegacy).map(card => (
            <div key={card.id} style={{
              ...styles.card, padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8, backgroundColor: card.color + '20',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16,
                }}>{card.emoji}</div>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{card.name}</span>
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={myCards[card.id] || false}
                  onChange={() => setMyCards(prev => ({ ...prev, [card.id]: !prev[card.id] }))}
                  style={styles.checkbox}
                />
              </label>
            </div>
          ))}
        </div>

        {/* 설정 메뉴 */}
        <div style={{ padding: '0 16px', marginTop: 12, marginBottom: 90 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>⚙️ 설정</div>
          {[
            { label: '프로필 수정', emoji: '👤' },
            { label: '알림 설정', emoji: '🔔' },
            { label: '관심 카테고리 설정', emoji: '📂' },
            { label: '데이터 초기화', emoji: '🗑️' },
            { label: '도움말 / FAQ', emoji: '❓' },
            { label: '버전 정보', emoji: 'ℹ️', sub: 'v2.0.0' },
          ].map((menu, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 0', borderBottom: `1px solid ${COLORS.border}`, cursor: 'pointer',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 16 }}>{menu.emoji}</span>
                <span style={{ fontSize: 13 }}>{menu.label}</span>
              </div>
              <span style={{ fontSize: 12, color: COLORS.textSecondary }}>{menu.sub || '→'}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ============================================
  // 혜택 상세 페이지
  // ============================================
  const renderBenefitDetail = () => {
    const detail = benefitDetails[benefitDetailId];
    const goBackBenefit = () => { setPage('benefits'); setBenefitDetailId(null); setPxAmount(''); };

    if (!detail) return (
      <div>
        <div style={{ ...styles.header, padding: '12px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={goBackBenefit} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer', padding: 0 }}>←</button>
            <div style={{ fontSize: 17, fontWeight: 700 }}>혜택 상세</div>
          </div>
        </div>
        <div style={{ padding: 40, textAlign: 'center', color: COLORS.textSecondary }}>상세 정보를 준비 중입니다.</div>
      </div>
    );

    // PX 계산기 로직
    const amt = parseInt(pxAmount) || 0;
    const calcResults = detail.calculator ? detail.calculator.map(card => {
      let bestTier = null;
      let discount = 0;
      card.tiers.forEach(tier => {
        if (amt >= tier.min && amt <= tier.max) {
          const d = tier.fixedAmount ? tier.fixedAmount : Math.round(amt * tier.rate);
          if (d > discount) { discount = d; bestTier = tier; }
        }
      });
      return { ...card, discount, bestTier };
    }).sort((a, b) => b.discount - a.discount) : [];

    return (
      <div>
        <div style={{ ...styles.header, padding: '12px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={goBackBenefit} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer', padding: 0 }}>←</button>
            <div style={{ fontSize: 17, fontWeight: 700 }}>{detail.emoji} {detail.title}</div>
          </div>
        </div>

        <div style={{ padding: '12px 16px', paddingBottom: 90 }}>
          {/* 설명 */}
          <div style={{ ...styles.card, padding: 14 }}>
            <div style={{ fontSize: 13, color: COLORS.text, lineHeight: 1.6 }}>{detail.description}</div>
          </div>

          {/* PX 금액 계산기 */}
          {detail.calculator && (
            <div style={{ marginTop: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>🧮 PX 할인 계산기</div>
              <div style={{ ...styles.card, padding: 14 }}>
                <div style={{ fontSize: 13, marginBottom: 8 }}>결제 예정 금액을 입력하세요</div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
                  <input type="number" placeholder="예: 50000" value={pxAmount}
                    onChange={e => setPxAmount(e.target.value)}
                    style={{ ...styles.input, flex: 1, marginBottom: 0, fontSize: 18, fontWeight: 700, textAlign: 'center' }} />
                  <span style={{ fontSize: 14, fontWeight: 600 }}>원</span>
                </div>
                {/* 빠른 금액 버튼 */}
                <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
                  {[10000, 30000, 50000, 100000].map(v => (
                    <button key={v} onClick={() => setPxAmount(String(v))} style={{
                      flex: 1, padding: '6px 0', borderRadius: 8, border: `1px solid ${COLORS.border}`,
                      backgroundColor: pxAmount === String(v) ? COLORS.primary + '10' : '#fff',
                      fontSize: 11, cursor: 'pointer', color: COLORS.text,
                    }}>{(v/10000)}만원</button>
                  ))}
                </div>
                {/* 계산 결과 */}
                {amt > 0 && (
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, color: COLORS.primary }}>
                      {formatPrice(amt)} 결제 시 최적 카드
                    </div>
                    {calcResults.map((card, i) => (
                      <div key={card.id} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '10px 12px', borderRadius: 10, marginBottom: 6,
                        backgroundColor: i === 0 ? card.color + '12' : '#F9F9F9',
                        border: i === 0 ? `2px solid ${card.color}` : '1px solid #E0E0E0',
                      }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            {i === 0 && <span style={{ fontSize: 10, padding: '1px 6px', borderRadius: 4, backgroundColor: card.color, color: '#fff', fontWeight: 700 }}>BEST</span>}
                            <span style={{ fontSize: 13, fontWeight: 700, color: card.color }}>{card.name}</span>
                          </div>
                          {card.bestTier && <div style={{ fontSize: 10, color: COLORS.textSecondary, marginTop: 2 }}>{card.bestTier.label} | {card.bestTier.condition} | {card.bestTier.limit}</div>}
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: 16, fontWeight: 700, color: i === 0 ? COLORS.accent : COLORS.text }}>-{formatPrice(card.discount)}</div>
                          <div style={{ fontSize: 10, color: COLORS.textSecondary }}>실결제 {formatPrice(amt - card.discount)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 카드별 비교 */}
          {detail.cards && detail.cards.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>💳 카드별 비교</div>
              {detail.cards.map((c, i) => (
                <div key={i} style={{ ...styles.card, padding: 14, borderLeft: `4px solid ${c.color}`, opacity: c.isLegacy ? 0.7 : 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: c.color }}>{c.card}</span>
                    <span style={{ fontSize: 16, fontWeight: 700, color: COLORS.accent }}>{c.highlight}</span>
                  </div>
                  <div style={{ fontSize: 12, color: COLORS.text, lineHeight: 1.5, marginBottom: 6 }}>{c.desc}</div>
                  <div style={{ display: 'flex', gap: 12, fontSize: 11 }}>
                    <span style={{ color: COLORS.textSecondary }}>조건: <span style={{ fontWeight: 600, color: COLORS.primary }}>{c.condition}</span></span>
                    {c.limit && <span style={{ color: COLORS.textSecondary }}>한도: <span style={{ fontWeight: 600 }}>{c.limit}</span></span>}
                  </div>
                  {c.isLegacy && <div style={{ fontSize: 10, color: COLORS.warning, marginTop: 4 }}>⚠️ 레거시 카드 (신규 발급 불가)</div>}
                </div>
              ))}
            </div>
          )}

          {/* 안내 정보 */}
          {detail.info && detail.info.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>📋 상세 안내</div>
              <div style={styles.card}>
                {detail.info.map((item, i) => (
                  <div key={i} style={{ padding: '10px 0', borderBottom: i < detail.info.length - 1 ? `1px solid ${COLORS.border}` : 'none' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.primary, marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: COLORS.text, lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 이용 방법 가이드 */}
          {detail.howTo && detail.howTo.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>📝 이용 방법</div>
              <div style={styles.card}>
                {detail.howTo.map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, padding: '8px 0', borderBottom: i < detail.howTo.length - 1 ? `1px solid ${COLORS.border}` : 'none' }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', backgroundColor: COLORS.primary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                    <div style={{ fontSize: 12, color: COLORS.text, lineHeight: 1.5, paddingTop: 2 }}>{step.replace(/^\d+[\.\)]\s*/, '')}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 바로가기 링크 */}
          {detail.links && detail.links.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>🔗 바로가기</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {detail.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex', alignItems: 'center', gap: 6, padding: '10px 14px', borderRadius: 10,
                    backgroundColor: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', textDecoration: 'none',
                    color: COLORS.text, fontSize: 12, fontWeight: 600,
                  }}>
                    <span>{link.emoji || '🔗'}</span>
                    <span>{link.label}</span>
                    <span style={{ color: COLORS.textSecondary }}>→</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* 팁 */}
          {detail.tip && (
            <div style={{ marginTop: 12, padding: 14, borderRadius: 12, backgroundColor: '#E8F5E9' }}>
              <div style={{ fontSize: 12, color: COLORS.primaryDark, lineHeight: 1.6 }}>{detail.tip}</div>
            </div>
          )}

          {(!detail.cards || detail.cards.length === 0) && (!detail.info || detail.info.length === 0) && !detail.calculator && (
            <div style={{ ...styles.card, padding: 20, textAlign: 'center', marginTop: 12 }}>
              <div style={{ fontSize: 14, color: COLORS.textSecondary }}>상세 정보를 준비 중입니다.</div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ============================================
  // 카테고리 상세
  // ============================================
  const renderCategory = () => {
    const cat = CATEGORIES.find(c => c.id === activeCategory);
    if (!cat) return null;
    const commonProps = { userData, updateUserData, handleBuy, setShowRoutineModal, setRoutineStep, setShowCertModal };

    return (
      <div>
        <div style={{ ...styles.header, padding: '12px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button onClick={goBack} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer', padding: 0 }}>←</button>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700 }}>{cat.emoji} {cat.label}</div>
              <div style={{ fontSize: 11, opacity: 0.8 }}>{cat.desc}</div>
            </div>
          </div>
        </div>
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
  // 메인
  // ============================================
  const renderPage = () => {
    if (page === 'category') return renderCategory();
    if (page === 'benefitDetail') return renderBenefitDetail();
    switch (bottomTab) {
      case 'benefits': return renderBenefits();
      case 'card': return renderCard();
      case 'selfdev': return renderSelfDev();
      case 'community': return renderCommunity();
      case 'mypage': return renderMyPage();
      default: return renderBenefits();
    }
  };

  return (
    <div style={styles.container}>
      {renderPage()}

      {/* 바텀 네비게이션 (5탭) */}
      <div style={{
        position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '100%', maxWidth: 480, backgroundColor: '#fff',
        borderTop: `1px solid ${COLORS.border}`, display: 'flex', justifyContent: 'space-around',
        padding: '5px 0 8px', zIndex: 200, boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
      }}>
        {BOTTOM_TABS.map(tab => {
          const isActive = page === 'category' ? tab.id === 'selfdev' : tab.id === bottomTab;
          return (
            <button key={tab.id} onClick={() => handleBottomTab(tab.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,
              color: isActive ? COLORS.primary : COLORS.textSecondary, transition: 'color 0.2s',
              padding: '3px 6px', minWidth: 0,
            }}>
              <span style={{ fontSize: 17 }}>{tab.emoji}</span>
              <span style={{ fontSize: 9, fontWeight: isActive ? 700 : 400 }}>{tab.label}</span>
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
