import React, { useState, useEffect } from 'react';
import {
  healthProducts,
  healthRoutines,
  nutritionProducts,
  nutritionGuides,
  bookProducts,
  readingRoutines,
  militaryExamProducts,
  militaryExamRoutines,
  certificationProducts,
  certificationRoutines,
  skinProducts,
  skinRoutines,
  communityReviews,
  calculateMonthlyRevenue
} from '../data/selfDevBusinessData';

const SelfDev = () => {
  // 전역 상태
  const [selectedCategory, setSelectedCategory] = useState('헬스');
  const [selectedBranch, setSelectedBranch] = useState('공군'); // 군종
  const [monthlyStats, setMonthlyStats] = useState({
    studyHours: 42,
    workoutCount: 18,
    booksRead: 2,
    savingsAmount: 87400
  });
  const [todayRoutine, setTodayRoutine] = useState('영내 맨몸운동 루틴 30분 완료하기');

  // 카테고리별 상태
  const [healthGoal, setHealthGoal] = useState('벌크업');
  const [healthTargets, setHealthTargets] = useState(['피로', '근육', '면역력']);
  const [skinType, setSkinType] = useState('건성');
  const [skinConcerns, setSkinConcerns] = useState(['건조함']);
  const [examGoal, setExamGoal] = useState('수능 재도전');

  // 루틴 실행 상태
  const [activeRoutine, setActiveRoutine] = useState(null);
  const [routineStep, setRoutineStep] = useState(0);
  const [showProductModal, setShowProductModal] = useState(false);
  const [modalProducts, setModalProducts] = useState([]);

  // 구매 이력 (localStorage)
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    // localStorage에서 구매 이력 불러오기
    const saved = localStorage.getItem('milwallet_purchases');
    if (saved) {
      setPurchaseHistory(JSON.parse(saved));
    }
  }, []);

  const savePurchase = (product) => {
    const newPurchase = {
      id: product.id,
      name: product.name || product.title,
      price: product.price,
      commission: product.price * (product.commissionRate / 100),
      date: new Date().toISOString()
    };
    const updated = [...purchaseHistory, newPurchase];
    setPurchaseHistory(updated);
    localStorage.setItem('milwallet_purchases', JSON.stringify(updated));
  };

  const handlePurchaseClick = (product, platform) => {
    savePurchase(product);
    const link = platform === 'coupang' ? product.coupangLink :
                 platform === 'oliveyoung' ? product.oliveYoungLink :
                 platform === 'aladin' ? product.aladinLink :
                 product.yes24Link;
    if (link) {
      window.open(link, '_blank');
    }
  };

  const startRoutine = (routine) => {
    setActiveRoutine(routine);
    setRoutineStep(0);
  };

  const completeRoutineStep = () => {
    if (activeRoutine && routineStep < activeRoutine.steps.length - 1) {
      // 특정 단계에서 상품 추천
      const currentStep = activeRoutine.steps[routineStep];
      if (routineStep === 1 && activeRoutine.recommendedProducts) {
        // 2번째 단계 완료 시 추천 상품 표시
        const products = activeRoutine.recommendedProducts
          .map(id => Object.values(healthProducts).flat().find(p => p.id === id))
          .filter(Boolean);
        setModalProducts(products);
        setShowProductModal(true);
      }
      setRoutineStep(routineStep + 1);
    } else {
      // 루틴 완료
      completeRoutine();
    }
  };

  const completeRoutine = () => {
    // 루틴 완료 처리
    setMonthlyStats(prev => ({
      ...prev,
      workoutCount: prev.workoutCount + 1
    }));

    // 완료 후 추천 상품 세트 표시
    if (activeRoutine?.recommendedProducts) {
      const products = activeRoutine.recommendedProducts
        .map(id => Object.values(healthProducts).flat().find(p => p.id === id))
        .filter(Boolean);
      setModalProducts(products);
      setShowProductModal(true);
    }

    setActiveRoutine(null);
    setRoutineStep(0);
  };

  const getBranchColor = () => {
    const colors = {
      '육군': '#2d5016',
      '해군': '#003f7f',
      '공군': '#003f7f',
      '해병': '#8b0000'
    };
    return colors[selectedBranch] || '#003f7f';
  };

  const totalSavings = purchaseHistory.reduce((sum, p) => sum + (p.commission || 0), 0);

  return (
    <div style={styles.container}>
      {/* 상단 요약 카드 */}
      <div style={styles.summaryCard}>
        <h2 style={styles.summaryTitle}>이번 달 자기계발 현황</h2>
        <div style={styles.statsGrid}>
          <div style={styles.statItem}>
            <div style={styles.statValue}>{monthlyStats.studyHours}h</div>
            <div style={styles.statLabel}>학습 시간</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statValue}>{monthlyStats.workoutCount}회</div>
            <div style={styles.statLabel}>운동 횟수</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statValue}>{monthlyStats.booksRead}권</div>
            <div style={styles.statLabel}>독서 권수</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statValue}>{monthlyStats.savingsAmount.toLocaleString()}원</div>
            <div style={styles.statLabel}>절약 금액</div>
          </div>
        </div>
        <div style={styles.todayRoutineBox}>
          <span style={styles.aiTag}>🤖 AI 추천</span>
          <span style={styles.todayRoutineText}>{todayRoutine}</span>
        </div>
      </div>

      {/* 카테고리 탭 */}
      <div style={styles.categoryTabs}>
        {['헬스', '건강', '도서', '군수', '자격증', '피부'].map(cat => (
          <button
            key={cat}
            style={{
              ...styles.categoryTab,
              ...(selectedCategory === cat ? { ...styles.categoryTabActive, backgroundColor: getBranchColor() } : {})
            }}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 카테고리별 컨텐츠 */}
      <div style={styles.content}>
        {selectedCategory === '헬스' && <HealthCategory
          goal={healthGoal}
          setGoal={setHealthGoal}
          startRoutine={startRoutine}
          handlePurchaseClick={handlePurchaseClick}
          branchColor={getBranchColor()}
        />}
        {selectedCategory === '건강' && <NutritionCategory
          targets={healthTargets}
          setTargets={setHealthTargets}
          handlePurchaseClick={handlePurchaseClick}
        />}
        {selectedCategory === '도서' && <BookCategory
          handlePurchaseClick={handlePurchaseClick}
          setMonthlyStats={setMonthlyStats}
        />}
        {selectedCategory === '군수' && <MilitaryExamCategory
          goal={examGoal}
          setGoal={setExamGoal}
          handlePurchaseClick={handlePurchaseClick}
        />}
        {selectedCategory === '자격증' && <CertificationCategory
          handlePurchaseClick={handlePurchaseClick}
        />}
        {selectedCategory === '피부' && <SkinCategory
          skinType={skinType}
          setSkinType={setSkinType}
          concerns={skinConcerns}
          setConcerns={setSkinConcerns}
          handlePurchaseClick={handlePurchaseClick}
        />}
      </div>

      {/* 루틴 실행 모달 */}
      {activeRoutine && (
        <RoutineModal
          routine={activeRoutine}
          step={routineStep}
          onComplete={completeRoutineStep}
          onClose={() => setActiveRoutine(null)}
        />
      )}

      {/* 상품 추천 모달 */}
      {showProductModal && (
        <ProductModal
          products={modalProducts}
          onClose={() => setShowProductModal(false)}
          onPurchase={handlePurchaseClick}
        />
      )}

      {/* 절약 현황 버튼 */}
      <button style={styles.savingsButton} onClick={() => alert(`총 절약 금액: ${totalSavings.toLocaleString()}원\n밀월렛 수수료 수익: ${Math.round(totalSavings * 0.8).toLocaleString()}원`)}>
        💰 내 절약 현황 보기
      </button>

      {/* 월별 성장 대시보드 */}
      <div style={styles.growthDashboard}>
        <h3>이번 달 성장 요약</h3>
        <div style={styles.growthGrid}>
          <div>학습 {monthlyStats.studyHours}시간 (전월 대비 +12%)</div>
          <div>운동 {monthlyStats.workoutCount}회 (전월 대비 +8%)</div>
          <div>독서 {monthlyStats.booksRead}권 (전월 대비 +1권)</div>
          <div>절약 {monthlyStats.savingsAmount.toLocaleString()}원 (전월 대비 +24%)</div>
        </div>
        <div style={styles.mvpBadge}>🏆 이달의 MVP: 헬스</div>
      </div>
    </div>
  );
};

// ============================================
// 헬스 카테고리 컴포넌트
// ============================================
const HealthCategory = ({ goal, setGoal, startRoutine, handlePurchaseClick, branchColor }) => {
  const routine = healthRoutines[0]; // 기본 루틴
  const supplements = healthProducts.supplements;
  const equipment = healthProducts.equipment;

  const [fitnessRecords, setFitnessRecords] = useState({
    pushups: 45,
    situps: 52,
    run3km: '13:45'
  });

  const fitnessStandards = {
    special: { pushups: 72, situps: 86, run3km: '11:30' },
    level1: { pushups: 56, situps: 72, run3km: '12:30' },
    level2: { pushups: 40, situps: 58, run3km: '13:30' },
    level3: { pushups: 24, situps: 44, run3km: '14:30' }
  };

  const getCurrentLevel = () => {
    if (fitnessRecords.pushups >= fitnessStandards.special.pushups) return '특급';
    if (fitnessRecords.pushups >= fitnessStandards.level1.pushups) return '1급';
    if (fitnessRecords.pushups >= fitnessStandards.level2.pushups) return '2급';
    return '3급';
  };

  const filteredProducts = goal === '벌크업'
    ? supplements.filter(s => s.tags.includes('벌크업'))
    : goal === '체력향상'
    ? [...supplements.filter(s => s.tags.includes('체력검정')), ...equipment]
    : supplements;

  return (
    <div>
      {/* 오늘의 루틴 */}
      <div style={styles.routineCard}>
        <h3>{routine.name} {routine.image}</h3>
        <div style={styles.routineInfo}>
          <span>난이도: {routine.difficulty}</span>
          <span>소요시간: {routine.duration}분</span>
          <span>필요장비: {routine.equipment}</span>
        </div>
        <button
          style={{ ...styles.startButton, backgroundColor: branchColor }}
          onClick={() => startRoutine(routine)}
        >
          루틴 시작
        </button>
      </div>

      {/* 체력검정 트래커 */}
      <div style={styles.fitnessTracker}>
        <h3>체력검정 트래커</h3>
        <div style={styles.currentLevel}>현재 등급: <strong>{getCurrentLevel()}</strong></div>
        <div style={styles.fitnessGrid}>
          <div>
            <label>팔굽혀펴기</label>
            <input
              type="number"
              value={fitnessRecords.pushups}
              onChange={(e) => setFitnessRecords({...fitnessRecords, pushups: parseInt(e.target.value)})}
              style={styles.input}
            />
            <div style={styles.progressCircle}>
              <svg width="80" height="80">
                <circle cx="40" cy="40" r="35" fill="none" stroke="#eee" strokeWidth="8"/>
                <circle
                  cx="40" cy="40" r="35" fill="none"
                  stroke={branchColor}
                  strokeWidth="8"
                  strokeDasharray={`${(fitnessRecords.pushups / fitnessStandards.special.pushups) * 220} 220`}
                  transform="rotate(-90 40 40)"
                />
              </svg>
              <div style={styles.circleText}>{Math.round((fitnessRecords.pushups / fitnessStandards.special.pushups) * 100)}%</div>
            </div>
          </div>
          <div>
            <label>윗몸일으키기</label>
            <input
              type="number"
              value={fitnessRecords.situps}
              onChange={(e) => setFitnessRecords({...fitnessRecords, situps: parseInt(e.target.value)})}
              style={styles.input}
            />
          </div>
          <div>
            <label>3km 달리기</label>
            <input
              type="text"
              value={fitnessRecords.run3km}
              onChange={(e) => setFitnessRecords({...fitnessRecords, run3km: e.target.value})}
              style={styles.input}
              placeholder="mm:ss"
            />
          </div>
        </div>
      </div>

      {/* 목표 선택 */}
      <div style={styles.goalSelector}>
        <h3>운동 목표</h3>
        <div style={styles.goalButtons}>
          {['벌크업', '다이어트', '체력향상', '회복'].map(g => (
            <button
              key={g}
              style={{
                ...styles.goalButton,
                ...(goal === g ? { backgroundColor: branchColor, color: 'white' } : {})
              }}
              onClick={() => setGoal(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* 추천 운동 보조제 */}
      <div style={styles.productsSection}>
        <h3>추천 운동 보조제 & 용품</h3>
        <div style={styles.productGrid}>
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onPurchase={handlePurchaseClick}
            />
          ))}
        </div>
      </div>

      {/* 커뮤니티 후기 */}
      <ReviewSection category="health" />
    </div>
  );
};

// ============================================
// 건강(영양제) 카테고리 컴포넌트
// ============================================
const NutritionCategory = ({ targets, setTargets, handlePurchaseClick }) => {
  const allTargets = ['피로', '활력', '미백', '근육', '면역력', '수면', '주름', '기초'];
  const allProducts = [...nutritionProducts.basic, ...nutritionProducts.functional];

  const filteredProducts = allProducts.filter(p =>
    targets.some(t => p.tags.includes(t) || p.tags.includes('기초필수'))
  );

  const toggleTarget = (target) => {
    if (targets.includes(target)) {
      setTargets(targets.filter(t => t !== target));
    } else {
      setTargets([...targets, target]);
    }
  };

  return (
    <div>
      {/* 건강 목표 선택 */}
      <div style={styles.targetSelector}>
        <h3>나의 건강 목표 (복수 선택 가능)</h3>
        <div style={styles.targetGrid}>
          {allTargets.map(target => (
            <label key={target} style={styles.checkbox}>
              <input
                type="checkbox"
                checked={targets.includes(target)}
                onChange={() => toggleTarget(target)}
              />
              <span>{target}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 추천 영양제 */}
      <div style={styles.productsSection}>
        <h3>맞춤 추천 영양제</h3>
        <div style={styles.productGrid}>
          {filteredProducts.map(product => (
            <div key={product.id} style={styles.nutritionCard}>
              <div style={styles.productImage}>{product.image}</div>
              <h4>{product.name}</h4>
              <div style={styles.productBrand}>{product.brand}</div>
              <div style={styles.ingredients}>{product.mainIngredients}</div>
              <div style={styles.dosage}>💊 {product.dosage}</div>
              <div style={styles.caution}>⚠️ {product.caution}</div>
              <div style={styles.priceRow}>
                <span style={styles.price}>{product.price.toLocaleString()}원</span>
                {product.pxAvailable && <span style={styles.pxBadge}>PX 구매가능</span>}
              </div>
              <div style={styles.tags}>
                {product.tags.map(tag => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>
              <button
                style={styles.buyButton}
                onClick={() => handlePurchaseClick(product, 'coupang')}
              >
                쿠팡에서 구매
              </button>
              <div style={styles.affiliate}>제휴</div>
            </div>
          ))}
        </div>
      </div>

      {/* 급식 활용 가이드 */}
      <div style={styles.guidesSection}>
        <h3>군 급식 최적 활용 가이드</h3>
        {nutritionGuides.map(guide => (
          <div key={guide.id} style={styles.guideCard}>
            <div style={styles.guideIcon}>{guide.image}</div>
            <h4>{guide.title}</h4>
            <ul style={styles.guideList}>
              {guide.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            {guide.recommendedProducts.length > 0 && (
              <div style={styles.guideProducts}>
                <strong>관련 추천 상품:</strong> {guide.recommendedProducts.join(', ')}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 일일 건강 체크 */}
      <div style={styles.dailyCheck}>
        <h3>오늘의 건강 체크</h3>
        <div style={styles.checkGrid}>
          <label>
            수면 시간
            <input type="number" placeholder="7" style={styles.input} />
            시간
          </label>
          <label>
            물 섭취량
            <input type="number" placeholder="2000" style={styles.input} />
            ml
          </label>
          <label>
            <input type="checkbox" />
            영양제 복용 완료
          </label>
        </div>
      </div>
    </div>
  );
};

// ============================================
// 도서 카테고리 컴포넌트
// ============================================
const BookCategory = ({ handlePurchaseClick, setMonthlyStats }) => {
  const [selectedBookCategory, setSelectedBookCategory] = useState('자기계발');
  const [readingList, setReadingList] = useState([
    { id: 'atomic_habits', status: 'reading', progress: 45, review: '' }
  ]);

  const categories = {
    '자기계발': bookProducts.selfDevelopment,
    '재테크': bookProducts.finance,
    '어학·시험': bookProducts.language,
    '인문·교양': bookProducts.humanities
  };

  const currentBooks = categories[selectedBookCategory] || [];

  const addToReadingList = (bookId) => {
    if (!readingList.find(b => b.id === bookId)) {
      setReadingList([...readingList, { id: bookId, status: 'reading', progress: 0, review: '' }]);
    }
  };

  const completeBook = (bookId) => {
    setReadingList(readingList.map(b =>
      b.id === bookId ? { ...b, status: 'completed' } : b
    ));
    setMonthlyStats(prev => ({ ...prev, booksRead: prev.booksRead + 1 }));
  };

  return (
    <div>
      {/* 이달의 독서 챌린지 */}
      <div style={styles.challengeCard}>
        <h3>📚 이달의 독서 챌린지</h3>
        <div style={styles.challengeInfo}>
          <div>테마: 자기계발</div>
          <div>목표: 2권 / 달성: 1권</div>
          <div>현재 읽는 책: 아주 작은 습관의 힘</div>
        </div>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: '50%' }}></div>
        </div>
      </div>

      {/* 카테고리 탭 */}
      <div style={styles.subCategoryTabs}>
        {Object.keys(categories).map(cat => (
          <button
            key={cat}
            style={{
              ...styles.subTab,
              ...(selectedBookCategory === cat ? styles.subTabActive : {})
            }}
            onClick={() => setSelectedBookCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 추천 도서 목록 */}
      <div style={styles.productsSection}>
        <h3>추천 도서</h3>
        <div style={styles.bookGrid}>
          {currentBooks.map(book => (
            <div key={book.id} style={styles.bookCard}>
              <div style={styles.bookCover}>{book.image}</div>
              <h4 style={styles.bookTitle}>{book.title}</h4>
              <div style={styles.bookAuthor}>{book.author}</div>
              <div style={styles.bookPublisher}>{book.publisher}</div>
              <div style={styles.bookReason}>
                <strong>군생활 추천 이유:</strong><br/>
                {book.militaryReason}
              </div>
              <div style={styles.bookMessage}>
                💡 {book.keyMessage}
              </div>
              <div style={styles.priceRow}>
                <span style={styles.price}>{book.price.toLocaleString()}원</span>
              </div>
              <div style={styles.buttonGroup}>
                <button
                  style={styles.buyButtonSmall}
                  onClick={() => handlePurchaseClick(book, 'aladin')}
                >
                  알라딘
                </button>
                <button
                  style={styles.buyButtonSmall}
                  onClick={() => handlePurchaseClick(book, 'yes24')}
                >
                  YES24
                </button>
              </div>
              <div style={styles.libraryNotice}>📖 군 도서관 재고 확인 권장</div>
              <div style={styles.affiliate}>제휴</div>
            </div>
          ))}
        </div>
      </div>

      {/* 독서 기록 */}
      <div style={styles.readingRecord}>
        <h3>나의 독서 기록</h3>
        <div style={styles.recordGrid}>
          {readingList.map(item => {
            const book = Object.values(bookProducts).flat().find(b => b.id === item.id);
            return book ? (
              <div key={item.id} style={styles.recordCard}>
                <div>{book.image} {book.title}</div>
                <div>상태: {item.status === 'reading' ? '읽는 중' : '완독'}</div>
                {item.status === 'reading' && (
                  <button onClick={() => completeBook(item.id)} style={styles.completeButton}>
                    완독 처리
                  </button>
                )}
              </div>
            ) : null;
          })}
        </div>
      </div>

      {/* 독서 루틴 가이드 */}
      <div style={styles.routineGuide}>
        <h3>군 생활 맞춤 독서법</h3>
        {readingRoutines.slice(0, 1).map(routine => (
          <div key={routine.id} style={styles.guideCard}>
            <div style={styles.guideIcon}>{routine.image}</div>
            <h4>{routine.title}</h4>
            <ul style={styles.guideList}>
              {routine.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================
// 군수(군대수능) 카테고리 컴포넌트
// ============================================
const MilitaryExamCategory = ({ goal, setGoal, handlePurchaseClick }) => {
  const [targetUniversity, setTargetUniversity] = useState('');
  const [targetScore, setTargetScore] = useState({ kor: 0, math: 0, eng: 0 });
  const [studyTime, setStudyTime] = useState({ kor: 0, math: 0, eng: 0 });
  const [remainingMonths, setRemainingMonths] = useState(12);

  const goals = ['수능 재도전', '편입 준비', '공무원 시험', '어학 시험'];

  const currentProducts = goal === '수능 재도전'
    ? militaryExamProducts.suneung
    : goal === '편입 준비'
    ? militaryExamProducts.transfer
    : militaryExamProducts.suneung;

  return (
    <div>
      {/* 목표 선택 */}
      <div style={styles.goalSelector}>
        <h3>학습 목표 선택</h3>
        <div style={styles.goalButtons}>
          {goals.map(g => (
            <button
              key={g}
              style={{
                ...styles.goalButton,
                ...(goal === g ? styles.goalButtonActive : {})
              }}
              onClick={() => setGoal(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* 수능 목표 설정 */}
      {goal === '수능 재도전' && (
        <div style={styles.examGoalCard}>
          <h3>수능 목표 설정</h3>
          <input
            type="text"
            placeholder="목표 대학"
            value={targetUniversity}
            onChange={(e) => setTargetUniversity(e.target.value)}
            style={styles.input}
          />
          <div>복무 잔여 기간: {remainingMonths}개월</div>
          <div style={styles.subjectGrid}>
            <div>
              <label>국어 목표 점수</label>
              <input
                type="number"
                value={targetScore.kor}
                onChange={(e) => setTargetScore({...targetScore, kor: parseInt(e.target.value)})}
                style={styles.input}
              />
            </div>
            <div>
              <label>수학 목표 점수</label>
              <input
                type="number"
                value={targetScore.math}
                onChange={(e) => setTargetScore({...targetScore, math: parseInt(e.target.value)})}
                style={styles.input}
              />
            </div>
            <div>
              <label>영어 목표 등급</label>
              <input
                type="number"
                max="1"
                value={targetScore.eng}
                onChange={(e) => setTargetScore({...targetScore, eng: parseInt(e.target.value)})}
                style={styles.input}
              />
            </div>
          </div>
        </div>
      )}

      {/* 과목별 학습 트래커 */}
      <div style={styles.studyTracker}>
        <h3>과목별 학습 트래커</h3>
        <div style={styles.subjectGrid}>
          {['국어', '수학', '영어'].map(subject => (
            <div key={subject} style={styles.subjectCard}>
              <h4>{subject}</h4>
              <div>오늘 학습 시간</div>
              <input
                type="number"
                placeholder="0"
                style={styles.input}
              />
              <div>시간</div>
              <div>모의고사 점수</div>
              <input
                type="number"
                placeholder="0"
                style={styles.input}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 추천 교재 */}
      <div style={styles.productsSection}>
        <h3>추천 교재</h3>
        <div style={styles.productGrid}>
          {currentProducts.map(product => (
            <div key={product.id} style={styles.examBookCard}>
              <div style={styles.productImage}>{product.image}</div>
              <h4>{product.title}</h4>
              <div style={styles.publisher}>{product.publisher}</div>
              <div style={styles.subject}>과목: {product.subject}</div>
              <div style={styles.difficulty}>난이도: {product.difficulty}</div>
              <div style={styles.coverage}>범위: {product.coverage}</div>
              <div style={styles.reason}>{product.militaryReason}</div>
              <div style={styles.priceRow}>
                <span style={styles.price}>{product.price.toLocaleString()}원</span>
              </div>
              <button
                style={styles.buyButton}
                onClick={() => handlePurchaseClick(product, 'coupang')}
              >
                쿠팡에서 구매
              </button>
              <div style={styles.affiliate}>제휴</div>
            </div>
          ))}
        </div>
      </div>

      {/* 온라인 강의 */}
      <div style={styles.lectureSection}>
        <h3>온라인 강의 안내</h3>
        <div style={styles.lectureGrid}>
          {militaryExamProducts.onlineLectures.map(lecture => (
            <div key={lecture.id} style={styles.lectureCard}>
              <div style={styles.lectureIcon}>{lecture.image}</div>
              <h4>{lecture.name}</h4>
              <div style={styles.lectureBenefit}>🎖️ {lecture.militaryBenefit}</div>
              <div style={styles.priceRow}>
                <span style={styles.originalPrice}>{lecture.price.toLocaleString()}원</span>
                <span style={styles.discountPrice}>{lecture.discountedPrice?.toLocaleString()}원</span>
              </div>
              <div>{lecture.description}</div>
              {lecture.link && (
                <button
                  style={styles.buyButton}
                  onClick={() => window.open(lecture.link, '_blank')}
                >
                  자세히 보기
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 학습 루틴 가이드 */}
      <div style={styles.routineGuide}>
        <h3>효율적 학습 루틴</h3>
        {militaryExamRoutines.slice(1, 2).map(routine => (
          <div key={routine.id} style={styles.guideCard}>
            <div style={styles.guideIcon}>{routine.image}</div>
            <h4>{routine.title}</h4>
            <ul style={styles.guideList}>
              {routine.schedule.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.time}:</strong> {item.subject} - {item.activity}
                </li>
              ))}
            </ul>
            <div>총 일일 학습 시간: {routine.totalDaily}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================================
// 자격증 카테고리 컴포넌트
// ============================================
const CertificationCategory = ({ handlePurchaseClick }) => {
  const [selectedCertType, setSelectedCertType] = useState('IT 자격증');
  const [myCerts, setMyCerts] = useState([
    { id: 'engineer_info_set', status: 'preparing', dDay: 45, progress: 60 }
  ]);

  const categories = {
    'IT 자격증': certificationProducts.it,
    '어학 자격증': certificationProducts.language,
    '금융 자격증': certificationProducts.finance
  };

  const currentProducts = categories[selectedCertType] || [];

  return (
    <div>
      {/* 자격증 현황 */}
      <div style={styles.certStatus}>
        <h3>나의 자격증</h3>
        <div style={styles.certGrid}>
          <div style={styles.certBox}>
            <div style={styles.certLabel}>취득 완료</div>
            <div style={styles.certCount}>2개</div>
          </div>
          <div style={styles.certBox}>
            <div style={styles.certLabel}>준비 중</div>
            <div style={styles.certCount}>1개</div>
          </div>
        </div>
        {myCerts.filter(c => c.status === 'preparing').map(cert => {
          const product = Object.values(certificationProducts).flat().find(p => p.id === cert.id);
          return product ? (
            <div key={cert.id} style={styles.preparingCert}>
              <div>{product.image} {product.title}</div>
              <div>D-{cert.dDay}일</div>
              <div style={styles.progressBar}>
                <div style={{ ...styles.progressFill, width: `${cert.progress}%` }}></div>
              </div>
              <div>{cert.progress}% 완료</div>
            </div>
          ) : null;
        })}
        <button style={styles.addCertButton}>+ 자격증 추가</button>
      </div>

      {/* 카테고리 탭 */}
      <div style={styles.subCategoryTabs}>
        {Object.keys(categories).map(cat => (
          <button
            key={cat}
            style={{
              ...styles.subTab,
              ...(selectedCertType === cat ? styles.subTabActive : {})
            }}
            onClick={() => setSelectedCertType(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 추천 교재 */}
      <div style={styles.productsSection}>
        <h3>추천 교재</h3>
        <div style={styles.productGrid}>
          {currentProducts.map(product => (
            <div key={product.id} style={styles.certCard}>
              <div style={styles.productImage}>{product.image}</div>
              <h4>{product.title}</h4>
              <div style={styles.publisher}>{product.publisher}</div>
              <div style={styles.certInfo}>
                {product.passRate && <div>합격률: {product.passRate}</div>}
                {product.prepPeriod && <div>준비 기간: {product.prepPeriod}</div>}
                {product.militaryFeasible !== undefined && (
                  <div>복무 중 합격: {product.militaryFeasible ? '가능 ✅' : '어려움 ⚠️'}</div>
                )}
              </div>
              <div style={styles.reason}>{product.militaryReason}</div>
              <div style={styles.priceRow}>
                <span style={styles.price}>{product.price.toLocaleString()}원</span>
              </div>
              <button
                style={styles.buyButton}
                onClick={() => handlePurchaseClick(product, 'coupang')}
              >
                쿠팡에서 구매
              </button>
              <div style={styles.affiliate}>제휴</div>
            </div>
          ))}
        </div>
      </div>

      {/* 합격 루틴 */}
      <div style={styles.routineGuide}>
        <h3>합격 루틴</h3>
        {certificationRoutines.map(routine => (
          <div key={routine.id} style={styles.routineCard}>
            <div style={styles.routineIcon}>{routine.image}</div>
            <h4>{routine.title}</h4>
            <div>총 {routine.totalDays}일 / 일 {routine.dailyHours}시간</div>
            <ul style={styles.phaseList}>
              {routine.phases.map((phase, idx) => (
                <li key={idx}>
                  <strong>{phase.days}일차:</strong> {phase.focus} - {phase.detail}
                </li>
              ))}
            </ul>
            {routine.recommendedProducts && (
              <div style={styles.routineProducts}>
                추천 교재: {routine.recommendedProducts.join(', ')}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 합격 후기 */}
      <ReviewSection category="certification" />
    </div>
  );
};

// ============================================
// 피부 카테고리 컴포넌트
// ============================================
const SkinCategory = ({ skinType, setSkinType, concerns, setConcerns, handlePurchaseClick }) => {
  const [selectedRoutineTime, setSelectedRoutineTime] = useState('아침');
  const [activeRoutineMode, setActiveRoutineMode] = useState(false);
  const [routineStepIndex, setRoutineStepIndex] = useState(0);

  const skinTypes = ['건성', '지성', '복합성', '민감성', '정상'];
  const skinConcernOptions = ['여드름', '트러블', '건조함', '칙칙함', '모공', '주름'];

  const toggleConcern = (concern) => {
    if (concerns.includes(concern)) {
      setConcerns(concerns.filter(c => c !== concern));
    } else {
      setConcerns([...concerns, concern]);
    }
  };

  // 피부 타입에 맞는 루틴 찾기
  const currentRoutine = skinRoutines.find(r =>
    r.skinType === skinType && r.timeOfDay === selectedRoutineTime
  ) || skinRoutines[0];

  // 필터링된 상품
  const allProducts = [...skinProducts.cleansing, ...skinProducts.moisturizing, ...skinProducts.sunscreen, ...skinProducts.specialCare];

  return (
    <div>
      {/* 피부 타입 진단 */}
      <div style={styles.skinDiagnosis}>
        <h3>피부 타입 선택</h3>
        <div style={styles.skinTypeButtons}>
          {skinTypes.map(type => (
            <button
              key={type}
              style={{
                ...styles.skinTypeButton,
                ...(skinType === type ? styles.skinTypeButtonActive : {})
              }}
              onClick={() => setSkinType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* 피부 고민 선택 */}
      <div style={styles.concernSelector}>
        <h3>피부 고민 (복수 선택)</h3>
        <div style={styles.concernGrid}>
          {skinConcernOptions.map(concern => (
            <label key={concern} style={styles.checkbox}>
              <input
                type="checkbox"
                checked={concerns.includes(concern)}
                onChange={() => toggleConcern(concern)}
              />
              <span>{concern}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 루틴 시간 선택 */}
      <div style={styles.routineTimeSelector}>
        <button
          style={{
            ...styles.timeButton,
            ...(selectedRoutineTime === '아침' ? styles.timeButtonActive : {})
          }}
          onClick={() => setSelectedRoutineTime('아침')}
        >
          아침 루틴
        </button>
        <button
          style={{
            ...styles.timeButton,
            ...(selectedRoutineTime === '저녁' ? styles.timeButtonActive : {})
          }}
          onClick={() => setSelectedRoutineTime('저녁')}
        >
          저녁 루틴
        </button>
      </div>

      {/* 스킨케어 루틴 */}
      <div style={styles.skinRoutine}>
        <h3>{currentRoutine.skinType} - {currentRoutine.timeOfDay} 루틴 {currentRoutine.image}</h3>
        <div style={styles.routineSteps}>
          {currentRoutine.steps.map((step, idx) => (
            <div key={idx} style={styles.routineStepCard}>
              <div style={styles.stepNumber}>{step.order}</div>
              <div style={styles.stepContent}>
                <h4>{step.name}</h4>
                <div>{step.method}</div>
                <div style={styles.stepDuration}>⏱️ {step.duration}</div>
                {step.products && step.products.length > 0 && (
                  <div style={styles.stepProducts}>
                    <strong>추천 제품:</strong>
                    {step.products.map(productId => {
                      const product = allProducts.find(p => p.id === productId);
                      return product ? (
                        <div key={productId} style={styles.miniProductCard}>
                          <span>{product.image} {product.name}</span>
                          <button
                            style={styles.miniButton}
                            onClick={() => handlePurchaseClick(product, product.oliveYoungLink ? 'oliveyoung' : 'coupang')}
                          >
                            구매
                          </button>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div style={styles.pxAlternative}>
          💡 PX 대안: {currentRoutine.pxAlternatives}
        </div>
        <button
          style={styles.startRoutineButton}
          onClick={() => setActiveRoutineMode(true)}
        >
          루틴 시작 (단계별 체크리스트)
        </button>
      </div>

      {/* 추천 제품 전체 목록 */}
      <div style={styles.productsSection}>
        <h3>추천 스킨케어 제품</h3>
        <div style={styles.productGrid}>
          {allProducts.slice(0, 6).map(product => (
            <div key={product.id} style={styles.skinProductCard}>
              <div style={styles.productImage}>{product.image}</div>
              <h4>{product.name}</h4>
              <div style={styles.brand}>{product.brand}</div>
              <div style={styles.description}>{product.description}</div>
              <div style={styles.usage}>사용법: {product.usage}</div>
              <div style={styles.tags}>
                {product.tags.map(tag => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>
              <div style={styles.priceRow}>
                <span style={styles.price}>{product.price.toLocaleString()}원</span>
                {product.pxAvailable && <span style={styles.pxBadge}>PX</span>}
              </div>
              <div style={styles.buttonGroup}>
                {product.coupangLink && (
                  <button
                    style={styles.buyButtonSmall}
                    onClick={() => handlePurchaseClick(product, 'coupang')}
                  >
                    쿠팡
                  </button>
                )}
                {product.oliveYoungLink && (
                  <button
                    style={styles.buyButtonSmall}
                    onClick={() => handlePurchaseClick(product, 'oliveyoung')}
                  >
                    올리브영
                  </button>
                )}
              </div>
              <div style={styles.affiliate}>제휴</div>
            </div>
          ))}
        </div>
      </div>

      {/* 오늘의 피부 로그 */}
      <div style={styles.skinLog}>
        <h3>오늘의 피부 상태</h3>
        <div style={styles.logGrid}>
          <label>
            수분도
            <input type="range" min="0" max="100" style={styles.slider} />
          </label>
          <label>
            유분도
            <input type="range" min="0" max="100" style={styles.slider} />
          </label>
          <label>
            트러블 위치
            <input type="text" placeholder="이마, 턱..." style={styles.input} />
          </label>
        </div>
      </div>

      {/* 커뮤니티 후기 */}
      <ReviewSection category="skin" />
    </div>
  );
};

// ============================================
// 공통 컴포넌트들
// ============================================
const ProductCard = ({ product, onPurchase }) => {
  return (
    <div style={styles.productCard}>
      <div style={styles.productImage}>{product.image}</div>
      <h4>{product.name}</h4>
      <div style={styles.brand}>{product.brand}</div>
      <div style={styles.description}>{product.description}</div>
      <div style={styles.rating}>
        ⭐ {product.rating} ({product.reviewCount.toLocaleString()}개 리뷰)
      </div>
      <div style={styles.tags}>
        {product.tags.map(tag => (
          <span key={tag} style={styles.tag}>{tag}</span>
        ))}
      </div>
      <div style={styles.priceRow}>
        <span style={styles.price}>{product.price.toLocaleString()}원</span>
        {product.pxAvailable && <span style={styles.pxBadge}>PX</span>}
      </div>
      <button
        style={styles.buyButton}
        onClick={() => onPurchase(product, 'coupang')}
      >
        쿠팡에서 구매
      </button>
      <div style={styles.affiliate}>제휴</div>
    </div>
  );
};

const ReviewSection = ({ category }) => {
  const reviews = communityReviews[category] || [];

  return (
    <div style={styles.reviewSection}>
      <h3>🗣️ 장병 실사용 후기</h3>
      <div style={styles.reviewGrid}>
        {reviews.map(review => (
          <div key={review.id} style={styles.reviewCard}>
            <div style={styles.reviewHeader}>
              <span style={styles.reviewUser}>{review.userId}</span>
              <span style={styles.reviewDate}>{review.createdAt}</span>
            </div>
            <h4>{review.image} {review.title}</h4>
            <div style={styles.reviewContent}>{review.content}</div>
            <div style={styles.reviewFooter}>
              <span>👍 {review.likes}</span>
              <span>✅ 도움됨 {review.helpful}</span>
            </div>
            {review.relatedProducts && review.relatedProducts.length > 0 && (
              <div style={styles.reviewProducts}>
                <strong>관련 상품:</strong> {review.relatedProducts.join(', ')}
                <button style={styles.reviewBuyButton}>구매하기</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const RoutineModal = ({ routine, step, onComplete, onClose }) => {
  const currentStep = routine.steps[step];

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <h2>{routine.name}</h2>
        <div style={styles.modalProgress}>
          단계 {step + 1} / {routine.steps.length}
        </div>
        <div style={styles.modalStep}>
          <h3>{currentStep.name}</h3>
          <div>{currentStep.description}</div>
          {currentStep.sets && (
            <div>{currentStep.sets} 세트 × {currentStep.reps} 회</div>
          )}
          {currentStep.duration && (
            <div>⏱️ {currentStep.duration}분</div>
          )}
        </div>
        <div style={styles.modalButtons}>
          <button style={styles.modalCompleteButton} onClick={onComplete}>
            {step < routine.steps.length - 1 ? '다음 단계' : '루틴 완료'}
          </button>
          <button style={styles.modalCloseButton} onClick={onClose}>
            나가기
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductModal = ({ products, onClose, onPurchase }) => {
  const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
  const totalSavings = Math.round(totalPrice * 0.15); // 가정: 15% 할인

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <h2>🎉 루틴 완료! 추천 상품</h2>
        <div style={styles.productModalList}>
          {products.map(product => (
            <div key={product.id} style={styles.productModalItem}>
              <span>{product.image} {product.name}</span>
              <span>{product.price.toLocaleString()}원</span>
            </div>
          ))}
        </div>
        <div style={styles.savingsInfo}>
          <div>일반 구매 시: {totalPrice.toLocaleString()}원</div>
          <div style={styles.savingsHighlight}>
            밀월렛 제휴가: {(totalPrice - totalSavings).toLocaleString()}원
          </div>
          <div style={styles.savingsAmount}>
            예상 절약: {totalSavings.toLocaleString()}원 💰
          </div>
        </div>
        <div style={styles.modalButtons}>
          {products.map(product => (
            <button
              key={product.id}
              style={styles.modalBuyButton}
              onClick={() => {
                onPurchase(product, 'coupang');
                onClose();
              }}
            >
              {product.name} 구매
            </button>
          ))}
          <button style={styles.modalCloseButton} onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// 스타일
// ============================================
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
  },
  summaryCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  summaryTitle: {
    fontSize: '20px',
    marginBottom: '16px',
    fontWeight: 'bold',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    marginBottom: '16px',
  },
  statItem: {
    textAlign: 'center',
  },
  statValue: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#003f7f',
  },
  statLabel: {
    fontSize: '13px',
    color: '#666',
    marginTop: '4px',
  },
  todayRoutineBox: {
    backgroundColor: '#f0f8ff',
    padding: '12px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  aiTag: {
    backgroundColor: '#003f7f',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
  },
  todayRoutineText: {
    fontSize: '14px',
  },
  categoryTabs: {
    display: 'flex',
    gap: '8px',
    marginBottom: '20px',
    overflowX: 'auto',
    padding: '8px 0',
  },
  categoryTab: {
    padding: '12px 24px',
    border: 'none',
    backgroundColor: 'white',
    borderRadius: '20px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    fontSize: '14px',
    transition: 'all 0.3s',
  },
  categoryTabActive: {
    backgroundColor: '#003f7f',
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    minHeight: '500px',
  },
  routineCard: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '20px',
  },
  routineInfo: {
    display: 'flex',
    gap: '16px',
    margin: '12px 0',
    fontSize: '14px',
    color: '#666',
  },
  startButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#003f7f',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  fitnessTracker: {
    marginBottom: '24px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
  },
  currentLevel: {
    fontSize: '18px',
    marginBottom: '16px',
  },
  fitnessGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginTop: '4px',
  },
  progressCircle: {
    position: 'relative',
    width: '80px',
    height: '80px',
    margin: '12px auto',
  },
  circleText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  goalSelector: {
    marginBottom: '24px',
  },
  goalButtons: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  goalButton: {
    padding: '10px 20px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    borderRadius: '20px',
    cursor: 'pointer',
  },
  goalButtonActive: {
    backgroundColor: '#003f7f',
    color: 'white',
    border: 'none',
  },
  productsSection: {
    marginTop: '24px',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '16px',
    marginTop: '16px',
  },
  productCard: {
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderRadius: '12px',
    padding: '16px',
    position: 'relative',
  },
  productImage: {
    fontSize: '48px',
    textAlign: 'center',
    marginBottom: '12px',
  },
  brand: {
    fontSize: '12px',
    color: '#999',
    marginBottom: '4px',
  },
  description: {
    fontSize: '13px',
    color: '#666',
    marginTop: '8px',
    lineHeight: '1.4',
  },
  rating: {
    fontSize: '13px',
    color: '#ff9500',
    marginTop: '8px',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px',
    marginTop: '8px',
  },
  tag: {
    fontSize: '11px',
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
    padding: '4px 8px',
    borderRadius: '12px',
  },
  priceRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '12px',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#e53935',
  },
  pxBadge: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '11px',
  },
  buyButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#003f7f',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  affiliate: {
    position: 'absolute',
    bottom: '8px',
    right: '8px',
    fontSize: '10px',
    color: '#999',
  },
  targetSelector: {
    marginBottom: '24px',
  },
  targetGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '12px',
    marginTop: '12px',
  },
  checkbox: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
  },
  nutritionCard: {
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderRadius: '12px',
    padding: '16px',
    position: 'relative',
  },
  productBrand: {
    fontSize: '12px',
    color: '#999',
    marginBottom: '8px',
  },
  ingredients: {
    fontSize: '13px',
    color: '#1976d2',
    marginTop: '8px',
    fontWeight: 'bold',
  },
  dosage: {
    fontSize: '12px',
    color: '#666',
    marginTop: '8px',
  },
  caution: {
    fontSize: '12px',
    color: '#f57c00',
    marginTop: '4px',
  },
  guidesSection: {
    marginTop: '24px',
  },
  guideCard: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '16px',
  },
  guideIcon: {
    fontSize: '32px',
    marginBottom: '12px',
  },
  guideList: {
    marginTop: '12px',
    paddingLeft: '20px',
    lineHeight: '1.8',
  },
  guideProducts: {
    marginTop: '12px',
    padding: '12px',
    backgroundColor: '#e3f2fd',
    borderRadius: '8px',
    fontSize: '13px',
  },
  dailyCheck: {
    marginTop: '24px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
  },
  checkGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginTop: '12px',
  },
  challengeCard: {
    backgroundColor: '#f0f8ff',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '20px',
  },
  challengeInfo: {
    marginTop: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    fontSize: '14px',
  },
  progressBar: {
    width: '100%',
    height: '12px',
    backgroundColor: '#e0e0e0',
    borderRadius: '6px',
    overflow: 'hidden',
    marginTop: '12px',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4caf50',
    transition: 'width 0.3s',
  },
  subCategoryTabs: {
    display: 'flex',
    gap: '8px',
    marginBottom: '20px',
    borderBottom: '2px solid #eee',
  },
  subTab: {
    padding: '12px 20px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
  },
  subTabActive: {
    borderBottom: '2px solid #003f7f',
    color: '#003f7f',
    fontWeight: 'bold',
  },
  bookGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginTop: '16px',
  },
  bookCard: {
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderRadius: '12px',
    padding: '20px',
    position: 'relative',
  },
  bookCover: {
    fontSize: '64px',
    textAlign: 'center',
    marginBottom: '16px',
  },
  bookTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  bookAuthor: {
    fontSize: '13px',
    color: '#666',
    marginBottom: '4px',
  },
  bookPublisher: {
    fontSize: '12px',
    color: '#999',
    marginBottom: '12px',
  },
  bookReason: {
    fontSize: '13px',
    backgroundColor: '#fff3e0',
    padding: '12px',
    borderRadius: '8px',
    marginTop: '12px',
    lineHeight: '1.5',
  },
  bookMessage: {
    fontSize: '13px',
    color: '#1976d2',
    marginTop: '12px',
    fontStyle: 'italic',
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px',
    marginTop: '12px',
  },
  buyButtonSmall: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#003f7f',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '13px',
  },
  libraryNotice: {
    fontSize: '11px',
    color: '#666',
    textAlign: 'center',
    marginTop: '8px',
  },
  readingRecord: {
    marginTop: '24px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
  },
  recordGrid: {
    display: 'grid',
    gap: '12px',
    marginTop: '12px',
  },
  recordCard: {
    backgroundColor: 'white',
    padding: '12px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  completeButton: {
    padding: '8px 16px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  routineGuide: {
    marginTop: '24px',
  },
  examGoalCard: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '20px',
  },
  subjectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginTop: '16px',
  },
  studyTracker: {
    marginBottom: '24px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
  },
  subjectCard: {
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '8px',
  },
  examBookCard: {
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderRadius: '12px',
    padding: '16px',
    position: 'relative',
  },
  publisher: {
    fontSize: '12px',
    color: '#999',
    marginBottom: '8px',
  },
  subject: {
    fontSize: '13px',
    color: '#1976d2',
    marginTop: '8px',
  },
  difficulty: {
    fontSize: '13px',
    color: '#ff9800',
    marginTop: '4px',
  },
  coverage: {
    fontSize: '13px',
    color: '#666',
    marginTop: '4px',
  },
  reason: {
    fontSize: '13px',
    backgroundColor: '#e8f5e9',
    padding: '12px',
    borderRadius: '8px',
    marginTop: '12px',
  },
  lectureSection: {
    marginTop: '24px',
  },
  lectureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '16px',
    marginTop: '16px',
  },
  lectureCard: {
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderRadius: '12px',
    padding: '20px',
  },
  lectureIcon: {
    fontSize: '48px',
    textAlign: 'center',
    marginBottom: '12px',
  },
  lectureBenefit: {
    backgroundColor: '#e3f2fd',
    padding: '8px',
    borderRadius: '6px',
    marginTop: '8px',
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#1976d2',
  },
  originalPrice: {
    fontSize: '14px',
    color: '#999',
    textDecoration: 'line-through',
  },
  discountPrice: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#e53935',
    marginLeft: '8px',
  },
  phaseList: {
    marginTop: '12px',
    paddingLeft: '20px',
    lineHeight: '1.8',
  },
  routineProducts: {
    marginTop: '12px',
    fontSize: '13px',
    color: '#666',
  },
  certStatus: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '20px',
  },
  certGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    marginTop: '12px',
  },
  certBox: {
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  certLabel: {
    fontSize: '13px',
    color: '#666',
    marginBottom: '8px',
  },
  certCount: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#003f7f',
  },
  preparingCert: {
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '8px',
    marginTop: '12px',
  },
  addCertButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: 'white',
    border: '2px dashed #ddd',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#666',
  },
  certCard: {
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderRadius: '12px',
    padding: '16px',
    position: 'relative',
  },
  certInfo: {
    marginTop: '12px',
    fontSize: '13px',
    color: '#666',
    lineHeight: '1.6',
  },
  routineIcon: {
    fontSize: '32px',
    marginBottom: '12px',
  },
  skinDiagnosis: {
    marginBottom: '24px',
  },
  skinTypeButtons: {
    display: 'flex',
    gap: '8px',
    marginTop: '12px',
  },
  skinTypeButton: {
    padding: '10px 20px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    borderRadius: '20px',
    cursor: 'pointer',
  },
  skinTypeButtonActive: {
    backgroundColor: '#003f7f',
    color: 'white',
    border: 'none',
  },
  concernSelector: {
    marginBottom: '24px',
  },
  concernGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    marginTop: '12px',
  },
  routineTimeSelector: {
    display: 'flex',
    gap: '8px',
    marginBottom: '20px',
  },
  timeButton: {
    padding: '12px 24px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  timeButtonActive: {
    backgroundColor: '#003f7f',
    color: 'white',
    border: 'none',
  },
  skinRoutine: {
    marginBottom: '24px',
  },
  routineSteps: {
    marginTop: '16px',
  },
  routineStepCard: {
    backgroundColor: '#f9f9f9',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '12px',
    display: 'flex',
    gap: '16px',
  },
  stepNumber: {
    width: '40px',
    height: '40px',
    backgroundColor: '#003f7f',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    flexShrink: 0,
  },
  stepContent: {
    flex: 1,
  },
  stepDuration: {
    fontSize: '13px',
    color: '#666',
    marginTop: '4px',
  },
  stepProducts: {
    marginTop: '12px',
    padding: '12px',
    backgroundColor: 'white',
    borderRadius: '8px',
  },
  miniProductCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8px',
    fontSize: '13px',
  },
  miniButton: {
    padding: '6px 12px',
    backgroundColor: '#003f7f',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
  },
  pxAlternative: {
    backgroundColor: '#fff3e0',
    padding: '12px',
    borderRadius: '8px',
    marginTop: '12px',
    fontSize: '13px',
  },
  startRoutineButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 'bold',
  },
  skinProductCard: {
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderRadius: '12px',
    padding: '16px',
    position: 'relative',
  },
  usage: {
    fontSize: '12px',
    color: '#666',
    marginTop: '8px',
  },
  skinLog: {
    marginTop: '24px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
  },
  logGrid: {
    display: 'grid',
    gap: '16px',
    marginTop: '12px',
  },
  slider: {
    width: '100%',
    marginTop: '8px',
  },
  reviewSection: {
    marginTop: '32px',
  },
  reviewGrid: {
    display: 'grid',
    gap: '16px',
    marginTop: '16px',
  },
  reviewCard: {
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderRadius: '12px',
    padding: '20px',
  },
  reviewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
    fontSize: '13px',
  },
  reviewUser: {
    fontWeight: 'bold',
    color: '#003f7f',
  },
  reviewDate: {
    color: '#999',
  },
  reviewContent: {
    fontSize: '14px',
    lineHeight: '1.6',
    marginTop: '12px',
    color: '#333',
  },
  reviewFooter: {
    display: 'flex',
    gap: '16px',
    marginTop: '12px',
    fontSize: '13px',
    color: '#666',
  },
  reviewProducts: {
    marginTop: '12px',
    padding: '12px',
    backgroundColor: '#e8f5e9',
    borderRadius: '8px',
    fontSize: '13px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewBuyButton: {
    padding: '8px 16px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '13px',
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
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '32px',
    maxWidth: '500px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  modalProgress: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '16px',
  },
  modalStep: {
    marginBottom: '24px',
  },
  modalButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  modalCompleteButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  modalCloseButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#f5f5f5',
    color: '#666',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  productModalList: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  productModalItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    marginBottom: '8px',
  },
  savingsInfo: {
    backgroundColor: '#e8f5e9',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '16px',
  },
  savingsHighlight: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#2e7d32',
    marginTop: '8px',
  },
  savingsAmount: {
    fontSize: '16px',
    color: '#ff6f00',
    fontWeight: 'bold',
    marginTop: '8px',
  },
  modalBuyButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#003f7f',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  savingsButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '16px 24px',
    backgroundColor: '#ff6f00',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    zIndex: 999,
  },
  growthDashboard: {
    marginTop: '32px',
    padding: '24px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  growthGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    marginTop: '16px',
    fontSize: '14px',
  },
  mvpBadge: {
    marginTop: '16px',
    padding: '12px',
    backgroundColor: '#fff3e0',
    borderRadius: '8px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#f57c00',
  },
};

export default SelfDev;
