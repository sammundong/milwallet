import React, { useState } from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice, formatTime } from '../../utils/helpers';
import { healthProducts, healthRoutines, fitnessStandards } from '../../data/healthData';
import { communityReviews } from '../../data/reviewData';
import ReviewCard from '../common/ReviewCard';
import CircularGauge from '../common/CircularGauge';

const HealthTab = ({ userData, updateUserData, handleBuy, setShowRoutineModal, setRoutineStep }) => {
  const allProducts = [...healthProducts.supplements, ...healthProducts.equipment];

  return (
    <div>
      {/* Section 1: 오늘의 루틴 */}
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

      {/* Section 2: 체력검정 트래커 */}
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

      {/* Section 3: 은근슬쩍 추천 */}
      <div style={styles.section}>
        <div style={{ fontSize: 13, color: COLORS.textSecondary, marginBottom: 8 }}>
          💡 운동할 때 이런 건 어때요?
        </div>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 8 }}>
          {allProducts.slice(0, 5).map(p => (
            <div key={p.id} style={{
              minWidth: 130, padding: 10, backgroundColor: '#fff', borderRadius: 12,
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)', flexShrink: 0, position: 'relative',
            }}>
              <div style={{ fontSize: 24, textAlign: 'center' }}>{p.emoji || '📦'}</div>
              <div style={{ fontSize: 11, fontWeight: 600, marginTop: 4, lineHeight: 1.3 }}>{p.name.slice(0, 15)}{p.name.length > 15 ? '...' : ''}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.accent, marginTop: 2 }}>{formatPrice(p.price)}</div>
              {p.pxAvailable === true && <span style={{ fontSize: 9, color: COLORS.pxBadge }}>PX가능</span>}
              <button style={{ ...styles.buyButton(COLORS.primary), width: '100%', textAlign: 'center', marginTop: 4, padding: '4px 0', fontSize: 10 }}
                onClick={() => handleBuy(p, p.links?.coupang ? 'coupang' : 'aladin')}>구매하기</button>
              <span style={{ position: 'absolute', top: 4, right: 6, fontSize: 8, color: '#ccc' }}>제휴</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: 장병 후기 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>💬 장병 후기</h3>
        {communityReviews.health.slice(0, 2).map(r => <ReviewCard key={r.id} review={r} onBuyProduct={(p) => handleBuy(p, 'coupang')} />)}
      </div>
    </div>
  );
};

export default HealthTab;
