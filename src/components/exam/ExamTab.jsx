import React, { useState } from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice } from '../../utils/helpers';
import { militaryExamProducts, examRoutines } from '../../data/examData';

const ExamTab = ({ handleBuy }) => {
  const [examGoalType, setExamGoalType] = useState('수능 재도전');

  const goalTextbooks = {
    '수능 재도전': militaryExamProducts.suneung,
    '편입 준비': militaryExamProducts.transfer,
    '공무원 시험': militaryExamProducts.suneung.slice(0, 2),
    '어학 시험': militaryExamProducts.transfer.slice(0, 2),
  };

  const currentTextbooks = goalTextbooks[examGoalType] || militaryExamProducts.suneung;

  return (
    <div>
      {/* Section 1: 목표 선택 + 12개월 로드맵 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>🎯 목표 선택</h3>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
          {['수능 재도전', '편입 준비', '공무원 시험', '어학 시험'].map(g => (
            <button key={g} style={styles.filterChip(examGoalType === g)} onClick={() => setExamGoalType(g)}>{g}</button>
          ))}
        </div>
      </div>

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

      {/* Section 2: 일일 학습 플랜 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>⏰ {examRoutines.dailyPlan.title}</h3>
        <div style={styles.card}>
          {examRoutines.dailyPlan.schedule.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: i < examRoutines.dailyPlan.schedule.length - 1 ? `1px solid ${COLORS.border}` : 'none' }}>
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

      {/* Section 3: 과목별 학습 팁 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📌 과목별 학습 팁</h3>
        <div style={styles.card}>
          {examRoutines.subjectTips.map((t, i) => (
            <div key={i} style={{ padding: '8px 0', borderBottom: i < examRoutines.subjectTips.length - 1 ? `1px solid ${COLORS.border}` : 'none' }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>{t.emoji} {t.subject}</span>
              <div style={{ fontSize: 12, color: COLORS.textSecondary, marginTop: 2 }}>{t.tip}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: 은근슬쩍 추천 교재 */}
      <div style={styles.section}>
        <div style={{ fontSize: 13, color: COLORS.textSecondary, marginBottom: 8 }}>
          💡 다른 장병들이 많이 찾는 교재
        </div>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 8 }}>
          {currentTextbooks.slice(0, 5).map(p => (
            <div key={p.id} style={{
              minWidth: 130, padding: 10, backgroundColor: '#fff', borderRadius: 12,
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)', flexShrink: 0, position: 'relative',
            }}>
              <div style={{ fontSize: 24, textAlign: 'center' }}>{p.emoji || '📖'}</div>
              <div style={{ fontSize: 11, fontWeight: 600, marginTop: 4, lineHeight: 1.3 }}>{p.name.slice(0, 15)}{p.name.length > 15 ? '...' : ''}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.accent, marginTop: 2 }}>{p.priceRange || formatPrice(p.price)}</div>
              <button style={{ ...styles.buyButton(COLORS.primary), width: '100%', textAlign: 'center', marginTop: 4, padding: '4px 0', fontSize: 10 }}
                onClick={() => handleBuy(p, p.links?.aladin ? 'aladin' : 'yes24')}>구매하기</button>
              <span style={{ position: 'absolute', top: 4, right: 6, fontSize: 8, color: '#ccc' }}>제휴</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: 온라인 강의 안내 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>🎓 온라인 강의 안내</h3>
        <div style={styles.card}>
          {militaryExamProducts.onlineCourses.map((c, i) => (
            <div key={c.id} style={{ padding: '8px 0', borderBottom: i < militaryExamProducts.onlineCourses.length - 1 ? `1px solid ${COLORS.border}` : 'none' }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{c.emoji} {c.name}</div>
              <div style={{ fontSize: 11, color: COLORS.textSecondary, marginTop: 2 }}>{c.description}</div>
              {c.price > 0 && (
                <div style={{ fontSize: 11, marginTop: 2 }}>
                  <span style={{ textDecoration: 'line-through', color: COLORS.textSecondary }}>{formatPrice(c.price)}</span>
                  <span style={{ color: COLORS.accent, fontWeight: 700, marginLeft: 6 }}>{formatPrice(c.discountPrice)}</span>
                </div>
              )}
              {c.price === 0 && <div style={{ fontSize: 11, color: COLORS.success, fontWeight: 600, marginTop: 2 }}>무료</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamTab;
