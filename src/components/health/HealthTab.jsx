import React, { useState } from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice, formatTime, getProductById } from '../../utils/helpers';
import { healthProducts, healthRoutines, fitnessStandards } from '../../data/healthData';
import { communityReviews } from '../../data/reviewData';
import ProductCard from '../common/ProductCard';
import ReviewCard from '../common/ReviewCard';
import CircularGauge from '../common/CircularGauge';

const HealthTab = ({ userData, updateUserData, handleBuy, setShowRoutineModal, setRoutineStep }) => {
  const [fitnessGoal, setFitnessGoal] = useState('벌크업');

  return (
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
};

export default HealthTab;
