import React, { useState, useEffect } from 'react';
import { COLORS, styles } from '../styles/theme';
import { formatPrice, defaultUserData } from '../utils/helpers';
import { cardData, benefitCategories, quickLinks, cardCombos, categoryBestCard } from '../data/cardData';

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
                  <div key={sub.id} style={{
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
          { title: '정보처리기사 필기 접수 시작 (4/14~4/20)', tag: '자격증', time: '2시간 전' },
          { title: '제7회 군 창업 아이디어 공모전 (~5/31)', tag: '공모전', time: '1일 전' },
          { title: '2026 상반기 TOEIC 특별 시험일정 안내', tag: '시험일정', time: '2일 전' },
        ].map((notice, i) => (
          <div key={i} style={{ ...styles.card, padding: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 10, backgroundColor: COLORS.primary + '15', color: COLORS.primary, fontWeight: 600, flexShrink: 0 }}>{notice.tag}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{notice.title}</div>
            </div>
            <span style={{ fontSize: 10, color: COLORS.textSecondary, whiteSpace: 'nowrap' }}>{notice.time}</span>
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
  const renderMyPage = () => {
    const enlistDate = new Date('2025-03-01');
    const dischargeDate = new Date('2026-12-01');
    const now = new Date();
    const totalDays = Math.floor((dischargeDate - enlistDate) / (1000 * 60 * 60 * 24));
    const servedDays = Math.floor((now - enlistDate) / (1000 * 60 * 60 * 24));
    const progressPct = Math.min(Math.round((servedDays / totalDays) * 100), 100);

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
      { period: '전역 직후', items: ['국민연금 크레딧 신청', '건강보험 전환', '장병적금 만기 수령'], emoji: '🎯' },
      { period: '1년 후', items: ['취업 지원금 신청', 'ISA 만기 전환'], emoji: '📋' },
      { period: '2년 후', items: ['주택청약 가점 확인', '전역군인 대출 우대'], emoji: '🏠' },
      { period: '3년 후', items: ['국가유공자 혜택 확인', '재향군인회 가입'], emoji: '🎖️' },
    ];

    return (
      <div>
        {/* 프로필 헤더 */}
        <div style={{ ...styles.header, padding: '20px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {/* 부대마크 영역 */}
            <div style={{ position: 'relative' }}>
              <div style={{
                width: 60, height: 60, borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                border: '2px solid rgba(255,255,255,0.4)',
              }}>🎖️</div>
              {/* 복무 진행률 게이지 */}
              <svg width="68" height="68" style={{ position: 'absolute', top: -4, left: -4 }}>
                <circle cx="34" cy="34" r="30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
                <circle cx="34" cy="34" r="30" fill="none" stroke="#fff" strokeWidth="3"
                  strokeDasharray={`${(progressPct / 100) * 188.5} 188.5`}
                  strokeLinecap="round" transform="rotate(-90 34 34)" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700 }}>밀월렛 유저</div>
              <div style={{ fontSize: 12, opacity: 0.8 }}>복무 {servedDays}일차 | 공군</div>
              <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2 }}>진행률 {progressPct}%</div>
            </div>
          </div>
        </div>

        {/* 군생활 체크리스트 */}
        <div style={{ padding: '12px 16px' }}>
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
