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
  const [page, setPage] = useState('home');
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

  const goHome = () => { setPage('home'); setActiveCategory(null); setBottomTab('home'); };

  const handleBottomTab = (tabId) => {
    if (tabId === 'home') goHome();
    else { setPage(tabId); setActiveCategory(null); setBottomTab(tabId); }
  };

  // ============================================
  // 홈 화면
  // ============================================
  const renderHome = () => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? '좋은 아침이에요' : hour < 18 ? '오늘도 화이팅' : '오늘 하루 수고했어요';
    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][new Date().getDay()];
    const dateStr = `${new Date().getMonth() + 1}월 ${new Date().getDate()}일 (${dayOfWeek})`;

    return (
      <div>
        {/* 헤더 */}
        <div style={styles.header}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={styles.headerTitle}>🎖️ 밀월렛</div>
              <div style={styles.headerSub}>{greeting} | {dateStr}</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', padding: '6px 10px', borderRadius: 8, fontSize: 14, cursor: 'pointer' }}>🔔</button>
            </div>
          </div>
        </div>

        {/* 배너 */}
        <div style={{ margin: '12px 16px', padding: '16px 20px', borderRadius: 16, background: 'linear-gradient(135deg, #1B5E20 0%, #388E3C 100%)', color: '#fff' }}>
          <div style={{ fontSize: 11, opacity: 0.8, marginBottom: 4 }}>이번 주 미션</div>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>체력검정 1급 도전하기</div>
          <div style={{ fontSize: 12, opacity: 0.9 }}>매일 30분 운동 루틴을 완료하면 뱃지를 받을 수 있어요</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
            <div style={{ flex: 1, height: 6, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.3)' }}>
              <div style={{ width: `${Math.min((userData.exerciseCount / 7) * 100, 100)}%`, height: '100%', borderRadius: 3, backgroundColor: '#fff', transition: 'width 0.3s' }} />
            </div>
            <span style={{ fontSize: 11 }}>{Math.min(userData.exerciseCount, 7)}/7</span>
          </div>
        </div>

        {/* 나의 성장 요약 */}
        <div style={{ ...styles.summaryCard, padding: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 14, fontWeight: 700 }}>📊 이번 달 나의 성장</span>
            <button onClick={() => handleBottomTab('mypage')} style={{ background: 'none', border: 'none', fontSize: 12, color: COLORS.primary, cursor: 'pointer' }}>더보기 →</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {[
              { val: `${userData.exerciseCount}`, unit: '회', label: '운동', emoji: '💪' },
              { val: `${userData.studyHours}`, unit: 'h', label: '학습', emoji: '📖' },
              { val: `${userData.booksRead}`, unit: '권', label: '독서', emoji: '📚' },
              { val: `${userData.streak}`, unit: '일', label: '연속', emoji: '🔥' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 16 }}>{item.emoji}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.primaryDark }}>{item.val}<span style={{ fontSize: 11, fontWeight: 400 }}>{item.unit}</span></div>
                <div style={{ fontSize: 10, color: COLORS.textSecondary }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 카테고리 */}
        <div style={{ padding: '0 16px', marginTop: 4 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>카테고리</div>
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

        {/* 오늘의 할 일 */}
        <div style={{ padding: '0 16px', marginTop: 20 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>📋 오늘의 할 일</div>
          {[
            { text: '아침 운동 루틴 완료하기', done: userData.exerciseCount > 0, cat: 'health' },
            { text: '영양제 복용 체크', done: false, cat: 'wellness' },
            { text: '취침 전 30분 독서', done: userData.booksRead > 0, cat: 'books' },
            { text: '영어 단어 50개 암기', done: false, cat: 'exam' },
          ].map((todo, i) => (
            <div key={i} onClick={() => openCategory(todo.cat)} style={{
              ...styles.card, padding: 12, display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
              opacity: todo.done ? 0.6 : 1,
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: todo.done ? COLORS.success : '#E0E0E0', color: '#fff', fontSize: 12,
              }}>{todo.done ? '✓' : ''}</div>
              <span style={{ fontSize: 13, textDecoration: todo.done ? 'line-through' : 'none', color: todo.done ? COLORS.textSecondary : COLORS.text }}>{todo.text}</span>
            </div>
          ))}
        </div>

        {/* 인기 콘텐츠 */}
        <div style={{ padding: '0 16px', marginTop: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 15, fontWeight: 700 }}>🔥 인기 콘텐츠</span>
            <button onClick={() => handleBottomTab('community')} style={{ background: 'none', border: 'none', fontSize: 12, color: COLORS.primary, cursor: 'pointer' }}>전체보기 →</button>
          </div>
          {[
            { title: '크레아틴 11개월 후기 62kg→72kg', author: '공군_창공이글55', likes: 234, tag: '헬스' },
            { title: '정보처리기사 3개월 독학 합격', author: '육군_맹호전사31', likes: 312, tag: '자격증' },
            { title: '복무 중 TOEIC 630→815 달성', author: '공군_별빛조종사77', likes: 267, tag: '어학' },
          ].map((r, i) => (
            <div key={i} style={{ ...styles.card, padding: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: 10, padding: '2px 6px', borderRadius: 4, backgroundColor: COLORS.primary + '15', color: COLORS.primary, fontWeight: 600 }}>{r.tag}</span>
                  <div style={{ fontSize: 13, fontWeight: 600, marginTop: 4 }}>{r.title}</div>
                  <div style={{ fontSize: 11, color: COLORS.textSecondary, marginTop: 2 }}>{r.author}</div>
                </div>
                <span style={{ fontSize: 11, color: COLORS.textSecondary, whiteSpace: 'nowrap' }}>❤️ {r.likes}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 꿀팁 */}
        <div style={{ padding: '0 16px', marginTop: 20, marginBottom: 90 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>💡 군생활 꿀팁</div>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 8 }}>
            {[
              { title: 'PX 건강 간식 TOP5', emoji: '🏪', color: '#E8F5E9' },
              { title: '점호 후 30분 활용법', emoji: '⏰', color: '#E3F2FD' },
              { title: '군 도서관 200% 활용', emoji: '📚', color: '#FFF3E0' },
              { title: '외박 전날 피부관리', emoji: '✨', color: '#FCE4EC' },
              { title: '장병적금 굴리기', emoji: '💰', color: '#FFFDE7' },
            ].map((tip, i) => (
              <div key={i} style={{
                minWidth: 120, padding: '16px 12px', borderRadius: 14, backgroundColor: tip.color,
                textAlign: 'center', flexShrink: 0, cursor: 'pointer',
              }}>
                <div style={{ fontSize: 28 }}>{tip.emoji}</div>
                <div style={{ fontSize: 11, fontWeight: 600, marginTop: 6, lineHeight: 1.3 }}>{tip.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // ============================================
  // 자기계발 페이지
  // ============================================
  const renderSelfDev = () => (
    <div>
      <div style={{ ...styles.header, padding: '16px' }}>
        <div style={styles.headerTitle}>📖 자기계발</div>
        <div style={styles.headerSub}>나만의 성장 로드맵을 만들어보세요</div>
      </div>

      {/* 나의 목표 */}
      <div style={{ padding: '12px 16px' }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>🎯 나의 목표</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { label: '체력검정 특급', progress: Math.min((userData.exerciseCount / 30) * 100, 100), emoji: '💪', color: '#4CAF50' },
            { label: `월 ${4}권 독서`, progress: (userData.booksRead / 4) * 100, emoji: '📚', color: '#FF9800' },
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
      <div style={{ padding: '0 16px', marginTop: 8 }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>📂 카테고리</div>
        {CATEGORIES.map(cat => (
          <div key={cat.id} onClick={() => openCategory(cat.id)} style={{
            ...styles.card, padding: 14, display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
          }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: cat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>
              {cat.emoji}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{cat.label}</div>
              <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{cat.desc}</div>
            </div>
            <span style={{ fontSize: 16, color: COLORS.textSecondary }}>→</span>
          </div>
        ))}
      </div>

      {/* 추천 루틴 */}
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

      {/* 성장 통계 */}
      <div style={{ padding: '0 16px', marginTop: 20, marginBottom: 90 }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>📈 주간 성장 그래프</div>
        <div style={styles.card}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: 100, padding: '0 8px' }}>
            {['월', '화', '수', '목', '금', '토', '일'].map((day, i) => {
              const h = [40, 60, 35, 70, 55, 80, 45][i];
              const isToday = i === (new Date().getDay() + 6) % 7;
              return (
                <div key={day} style={{ textAlign: 'center', flex: 1 }}>
                  <div style={{
                    height: h, borderRadius: 4, margin: '0 2px',
                    backgroundColor: isToday ? COLORS.primary : COLORS.primaryLight + '50',
                    transition: 'height 0.3s',
                  }} />
                  <div style={{ fontSize: 10, marginTop: 4, color: isToday ? COLORS.primary : COLORS.textSecondary, fontWeight: isToday ? 700 : 400 }}>{day}</div>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: 8, fontSize: 11, color: COLORS.textSecondary }}>이번 주 활동량 (시간 기준)</div>
        </div>
      </div>
    </div>
  );

  // ============================================
  // 커뮤니티 페이지
  // ============================================
  const [communityTab, setCommunityTab] = useState('hot');

  const communityPosts = {
    hot: [
      { id: 1, author: '공군_창공이글55', rank: '상병', title: '크레아틴 + 저항밴드 11개월 벌크업 후기', content: '입대 전 62kg → 현재 72kg. 매일 5g 꾸준히 먹고 생활관에서 밴드 운동 30분씩 했습니다. 체력검정도 2급에서 특급으로!', likes: 234, comments: 45, tag: '헬스', time: '3시간 전' },
      { id: 2, author: '육군_맹호전사31', rank: '병장', title: '정보처리기사 3개월 독학 필기 합격!', content: '취침 전 2시간씩 공부하고 주말에 기출 3회분씩 풀었어요. 1회독 후 기출 반복이 핵심입니다.', likes: 312, comments: 67, tag: '자격증', time: '5시간 전' },
      { id: 3, author: '공군_별빛조종사77', rank: '일병', title: 'TOEIC 630→815 8개월 학습법 공유', content: '매일 아침 단어 50개, 점심 LC, 저녁 RC 나눠서 공부했어요. 파트별로 집중하는 게 핵심!', likes: 267, comments: 53, tag: '군수', time: '8시간 전' },
      { id: 4, author: '해군_바다사나이66', rank: '상병', title: '외박 전날 마스크팩 루틴 완전 정리', content: '세안 후 메디힐 15분 + 보습크림 두껍게. 다음날 피부 완전 달라져요. 여자친구한테 칭찬받음 ㅎㅎ', likes: 189, comments: 38, tag: '피부', time: '12시간 전' },
      { id: 5, author: '해병_독수리45', rank: '상병', title: '한국사 1급 30일 벼락치기로 합격한 방법', content: '시대별 2일씩 개념 잡고 나머지는 기출만 반복! 가장 빨리 딸 수 있는 자격증이에요.', likes: 198, comments: 41, tag: '자격증', time: '1일 전' },
    ],
    qna: [
      { id: 11, author: '익명_신병01', rank: '이병', title: '체력검정 3급인데 특급 가능할까요?', content: '입대한 지 2개월됐는데 팔굽혀펴기 30개밖에 못해요... 특급 가능한 루틴 있을까요?', likes: 45, comments: 23, tag: '질문', time: '2시간 전' },
      { id: 12, author: '익명_고민병사', rank: '일병', title: '전역 후 뭐 할지 모르겠어요', content: '아직 1년 남았는데 자격증이나 공부 뭘 해야 할지... 선배님들 조언 부탁드려요', likes: 67, comments: 34, tag: '질문', time: '4시간 전' },
      { id: 13, author: '익명_영양제초보', rank: '일병', title: '종합비타민 vs 개별 비타민 뭐가 나아요?', content: 'PX에서 센트룸 살지 따로따로 살지 고민됩니다', likes: 34, comments: 19, tag: '질문', time: '6시간 전' },
    ],
    tips: [
      { id: 21, author: '육군_재테크병장11', rank: '병장', title: '장병적금 만기 후 투자 계획 세우는 법', content: '복무 중 월급 대부분 적금에 넣고 만기 후 투자 계획 세웠어요. 돈의 심리학 읽어보세요.', likes: 178, comments: 29, tag: '재테크', time: '1일 전' },
      { id: 22, author: '공군_독서왕33', rank: '상병', title: '군 도서관에서 빌려 읽기 좋은 책 리스트', content: '사피엔스, 총균쇠, 코스모스 같은 교양서적은 대부분 비치되어 있어요. 먼저 확인하세요!', likes: 123, comments: 18, tag: '도서', time: '2일 전' },
      { id: 23, author: '육군_스킨케어병장', rank: '병장', title: '영내 건조함에서 피부 지키는 꿀팁 5가지', content: '1.가습기 신청 2.세타필 필수 3.선크림 필수 4.물 많이 마시기 5.마스크팩 주1회', likes: 156, comments: 22, tag: '피부', time: '2일 전' },
    ],
  };

  const renderCommunity = () => (
    <div>
      <div style={{ ...styles.header, padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={styles.headerTitle}>💬 커뮤니티</div>
            <div style={styles.headerSub}>장병들의 자기계발 이야기</div>
          </div>
          <button style={{ ...styles.buyButton('#fff'), color: COLORS.primary, fontSize: 12, padding: '6px 12px' }}>✏️ 글쓰기</button>
        </div>
      </div>

      {/* 커뮤니티 탭 */}
      <div style={{ display: 'flex', gap: 0, borderBottom: `1px solid ${COLORS.border}`, backgroundColor: '#fff' }}>
        {[
          { id: 'hot', label: '🔥 인기' },
          { id: 'qna', label: '❓ Q&A' },
          { id: 'tips', label: '💡 꿀팁' },
        ].map(tab => (
          <button key={tab.id} onClick={() => setCommunityTab(tab.id)} style={{
            flex: 1, padding: '12px 0', border: 'none', backgroundColor: 'transparent', cursor: 'pointer',
            fontSize: 13, fontWeight: communityTab === tab.id ? 700 : 400,
            color: communityTab === tab.id ? COLORS.primary : COLORS.textSecondary,
            borderBottom: communityTab === tab.id ? `2px solid ${COLORS.primary}` : '2px solid transparent',
          }}>{tab.label}</button>
        ))}
      </div>

      {/* 게시물 목록 */}
      <div style={{ padding: '12px 16px', paddingBottom: 90 }}>
        {(communityPosts[communityTab] || []).map(post => (
          <div key={post.id} style={{ ...styles.card, padding: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: COLORS.primary + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>👤</div>
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
    </div>
  );

  // ============================================
  // 마이페이지
  // ============================================
  const renderMyPage = () => {
    const totalDays = Math.floor((new Date() - new Date('2025-03-01')) / (1000 * 60 * 60 * 24));
    const badges = [
      { emoji: '🌱', label: '입문자', earned: true },
      { emoji: '💪', label: '운동 10회', earned: userData.exerciseCount >= 10 },
      { emoji: '📚', label: '독서 5권', earned: userData.booksRead >= 5 },
      { emoji: '🔥', label: '7일 연속', earned: userData.streak >= 7 },
      { emoji: '🏆', label: '자격증 취득', earned: userData.certList.length > 0 },
      { emoji: '💰', label: '절약왕', earned: userData.savings >= 10000 },
    ];

    return (
      <div>
        <div style={{ ...styles.header, padding: '20px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>🎖️</div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700 }}>밀월렛 유저</div>
              <div style={{ fontSize: 12, opacity: 0.8 }}>복무 {totalDays}일차 | 공군</div>
            </div>
          </div>
        </div>

        {/* 성장 요약 카드 */}
        <div style={{ padding: '12px 16px' }}>
          <div style={{ ...styles.card, background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)', padding: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.primaryDark, marginBottom: 12 }}>📊 나의 성장 리포트</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              {[
                { emoji: '💪', val: `${userData.exerciseCount}회`, label: '총 운동' },
                { emoji: '📖', val: `${userData.studyHours}시간`, label: '총 학습' },
                { emoji: '📚', val: `${userData.booksRead}권`, label: '총 독서' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 18 }}>{s.emoji}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.primaryDark }}>{s.val}</div>
                  <div style={{ fontSize: 10, color: COLORS.textSecondary }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 뱃지 */}
        <div style={{ padding: '0 16px' }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>🏅 획득한 뱃지</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {badges.map((badge, i) => (
              <div key={i} style={{
                width: 64, textAlign: 'center', padding: '10px 4px', borderRadius: 12,
                backgroundColor: badge.earned ? '#fff' : '#F5F5F5',
                boxShadow: badge.earned ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                opacity: badge.earned ? 1 : 0.4,
              }}>
                <div style={{ fontSize: 24 }}>{badge.emoji}</div>
                <div style={{ fontSize: 9, marginTop: 2, color: badge.earned ? COLORS.text : COLORS.textSecondary }}>{badge.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 자격증 현황 */}
        <div style={{ padding: '0 16px', marginTop: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 15, fontWeight: 700 }}>🏆 자격증 현황</span>
            <button onClick={() => setShowCertModal(true)} style={{ ...styles.buyButton(COLORS.primary), marginTop: 0, padding: '4px 10px', fontSize: 11 }}>+ 추가</button>
          </div>
          {userData.certList.length === 0 ? (
            <div style={{ ...styles.card, textAlign: 'center', padding: 20 }}>
              <div style={{ fontSize: 14, color: COLORS.textSecondary }}>아직 등록된 자격증이 없어요</div>
              <div style={{ fontSize: 12, color: COLORS.textSecondary, marginTop: 4 }}>준비 중인 자격증을 추가해보세요!</div>
            </div>
          ) : (
            userData.certList.map((cert, i) => {
              const dday = Math.ceil((new Date(cert.examDate) - new Date()) / (1000*60*60*24));
              return (
                <div key={i} style={{ ...styles.card, padding: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>{cert.name}</div>
                      <div style={{ fontSize: 11, color: COLORS.textSecondary }}>목표: {cert.targetScore || '-'}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 20, fontWeight: 700, color: dday > 0 ? COLORS.accent : COLORS.danger }}>D{dday > 0 ? `-${dday}` : `+${Math.abs(dday)}`}</div>
                    </div>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, backgroundColor: '#E0E0E0', marginTop: 8 }}>
                    <div style={{ width: `${cert.progress || 0}%`, height: '100%', borderRadius: 3, backgroundColor: COLORS.primaryLight }} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* 절약 현황 */}
        <div style={{ padding: '0 16px', marginTop: 16 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>💰 절약 현황</div>
          <div style={{ ...styles.card, textAlign: 'center', padding: 16, background: 'linear-gradient(135deg, #FFF3E0, #FFE0B2)' }}>
            <div style={{ fontSize: 12, color: COLORS.textSecondary }}>밀월렛으로 절약한 총 금액</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: COLORS.primaryDark, marginTop: 4 }}>{formatPrice(userData.savings)}</div>
            <button onClick={() => setShowSavingsModal(true)} style={{ ...styles.buyButton(COLORS.primary), marginTop: 8 }}>상세 보기</button>
          </div>
        </div>

        {/* 메뉴 */}
        <div style={{ padding: '0 16px', marginTop: 16, marginBottom: 90 }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>⚙️ 설정</div>
          {[
            { label: '프로필 수정', emoji: '👤' },
            { label: '알림 설정', emoji: '🔔' },
            { label: '관심 카테고리 설정', emoji: '📂' },
            { label: '도움말 / FAQ', emoji: '❓' },
            { label: '버전 정보', emoji: 'ℹ️', sub: 'v1.0.0 (프로토타입)' },
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
            <button onClick={goHome} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer', padding: 0 }}>←</button>
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
      case 'selfdev': return renderSelfDev();
      case 'community': return renderCommunity();
      case 'mypage': return renderMyPage();
      default: return renderHome();
    }
  };

  return (
    <div style={styles.container}>
      {renderPage()}

      {/* 바텀 네비게이션 */}
      <div style={{
        position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '100%', maxWidth: 480, backgroundColor: '#fff',
        borderTop: `1px solid ${COLORS.border}`, display: 'flex', justifyContent: 'space-around',
        padding: '6px 0 10px', zIndex: 200, boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
      }}>
        {BOTTOM_TABS.map(tab => {
          const isActive = page === 'category' ? tab.id === 'selfdev' : tab.id === bottomTab;
          return (
            <button key={tab.id} onClick={() => handleBottomTab(tab.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,
              color: isActive ? COLORS.primary : COLORS.textSecondary, transition: 'color 0.2s',
              padding: '4px 12px',
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
