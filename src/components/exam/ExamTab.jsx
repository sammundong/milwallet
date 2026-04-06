import React, { useState } from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice } from '../../utils/helpers';
import { militaryExamProducts, examRoutines } from '../../data/examData';

const ExamTab = ({ handleBuy }) => {
  const [examGoalType, setExamGoalType] = useState('수능 재도전');

  return (
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
};

export default ExamTab;
