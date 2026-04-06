import React, { useState, useMemo } from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice } from '../../utils/helpers';
import { wellnessProducts, healthGoals, dietGuides } from '../../data/wellnessData';

const WellnessTab = ({ handleBuy }) => {
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [sleepHours, setSleepHours] = useState('');
  const [waterCups, setWaterCups] = useState('');
  const [supplementDone, setSupplementDone] = useState(false);

  const toggleGoal = (goalId) => {
    setSelectedGoals(prev => prev.includes(goalId) ? prev.filter(g => g !== goalId) : [...prev, goalId]);
  };

  const filteredProducts = useMemo(() => {
    const all = [...wellnessProducts.essentials, ...wellnessProducts.functional];
    if (selectedGoals.length === 0) return all.slice(0, 5);
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
    }).slice(0, 5);
  }, [selectedGoals]);

  return (
    <div>
      {/* Section 1: 나의 건강 목표 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>🎯 나의 건강 목표</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {healthGoals.map(g => (
            <button key={g.id} style={styles.filterChip(selectedGoals.includes(g.id))} onClick={() => toggleGoal(g.id)}>
              {g.emoji} {g.label}
            </button>
          ))}
        </div>
        {selectedGoals.length > 0 && (
          <div style={{ fontSize: 12, color: COLORS.primary, marginTop: 8 }}>
            {selectedGoals.length}개 목표 선택됨 - 아래 추천 아이템이 맞춤 필터링됩니다
          </div>
        )}
      </div>

      {/* Section 2: 오늘 건강 체크 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>✅ 오늘 건강 체크</h3>
        <div style={styles.card}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10, gap: 8 }}>
            <span style={{ fontSize: 13, width: 80 }}>수면 시간</span>
            <input
              type="number"
              placeholder="시간"
              value={sleepHours}
              onChange={e => setSleepHours(e.target.value)}
              style={{...styles.input, flex: 1, marginBottom: 0}}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10, gap: 8 }}>
            <span style={{ fontSize: 13, width: 80 }}>물 섭취량</span>
            <input
              type="number"
              placeholder="잔 (200ml)"
              value={waterCups}
              onChange={e => setWaterCups(e.target.value)}
              style={{...styles.input, flex: 1, marginBottom: 0}}
            />
          </div>
          <label style={{ display: 'flex', alignItems: 'center', fontSize: 13, cursor: 'pointer' }}>
            <input type="checkbox" style={styles.checkbox} checked={supplementDone} onChange={e => setSupplementDone(e.target.checked)} />
            오늘 영양제 복용 완료
          </label>
        </div>
      </div>

      {/* Section 3: 급식 활용 가이드 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>🍽️ 급식 활용 가이드</h3>
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

      {/* Section 4: 은근슬쩍 추천 */}
      <div style={styles.section}>
        <div style={{ fontSize: 13, color: COLORS.textSecondary, marginBottom: 8 }}>
          💡 건강 관리에 도움되는 아이템
        </div>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 8 }}>
          {filteredProducts.map(p => (
            <div key={p.id} style={{
              minWidth: 130, padding: 10, backgroundColor: '#fff', borderRadius: 12,
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)', flexShrink: 0, position: 'relative',
            }}>
              <div style={{ fontSize: 24, textAlign: 'center' }}>{p.emoji || '💊'}</div>
              <div style={{ fontSize: 11, fontWeight: 600, marginTop: 4, lineHeight: 1.3 }}>{p.name.slice(0, 15)}{p.name.length > 15 ? '...' : ''}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.accent, marginTop: 2 }}>{formatPrice(p.price)}</div>
              {p.pxAvailable === true && <span style={{ fontSize: 9, color: COLORS.pxBadge }}>PX가능</span>}
              <button style={{ ...styles.buyButton(COLORS.primary), width: '100%', textAlign: 'center', marginTop: 4, padding: '4px 0', fontSize: 10 }}
                onClick={() => handleBuy(p, p.links?.coupang ? 'coupang' : 'oliveyoung')}>구매하기</button>
              <span style={{ position: 'absolute', top: 4, right: 6, fontSize: 8, color: '#ccc' }}>제휴</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WellnessTab;
