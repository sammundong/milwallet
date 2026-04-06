import React, { useState, useMemo } from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice } from '../../utils/helpers';
import { wellnessProducts, healthGoals, dietGuides } from '../../data/wellnessData';

const WellnessTab = ({ handleBuy }) => {
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

  return (
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
};

export default WellnessTab;
