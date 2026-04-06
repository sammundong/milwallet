import React, { useState } from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice } from '../../utils/helpers';
import { bookProducts, readingRoutines } from '../../data/bookData';
import { communityReviews } from '../../data/reviewData';
import ReviewCard from '../common/ReviewCard';
import CircularGauge from '../common/CircularGauge';

const BooksTab = ({ userData, updateUserData, handleBuy }) => {
  const monthIndex = new Date().getMonth();
  const challenge = readingRoutines.monthlyChallenge[monthIndex];

  // Gather all books for recommendation
  const allBooks = [
    ...bookProducts.selfDev,
    ...bookProducts.finance,
    ...bookProducts.language,
    ...bookProducts.humanities,
  ];

  return (
    <div>
      {/* Section 1: 이달의 독서 챌린지 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📖 이달의 독서 챌린지</h3>
        <div style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>
                {challenge?.emoji} {challenge?.theme} 독서 월
              </div>
              <div style={{ fontSize: 12, color: COLORS.textSecondary, marginTop: 2 }}>
                목표: 4권 | 달성: {userData.booksRead}권
              </div>
            </div>
            <CircularGauge percentage={(userData.booksRead / 4) * 100} size={60} />
          </div>
          <div style={styles.progressBar()}>
            <div style={styles.progressFill((userData.booksRead / 4) * 100)} />
          </div>
        </div>
      </div>

      {/* Section 2: 독서 기록 + 차트 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📝 독서 기록</h3>
        <div style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>완독 {userData.booksRead}권</span>
            <button style={styles.buyButton()} onClick={() => updateUserData({ booksRead: userData.booksRead + 1 })}>
              + 완독 기록
            </button>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(m => (
              <div key={m} style={{
                flex: 1, height: Math.max(8, (m <= new Date().getMonth() + 1 ? Math.random() * 40 + 10 : 4)),
                backgroundColor: m <= new Date().getMonth() + 1 ? COLORS.primaryLight : '#E0E0E0',
                borderRadius: 2,
              }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span style={{ fontSize: 9, color: COLORS.textSecondary }}>1월</span>
            <span style={{ fontSize: 9, color: COLORS.textSecondary }}>12월</span>
          </div>
        </div>
      </div>

      {/* Section 3: 은근슬쩍 추천 도서 */}
      <div style={styles.section}>
        <div style={{ fontSize: 13, color: COLORS.textSecondary, marginBottom: 8 }}>
          💡 이번 달 추천 도서
        </div>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 8 }}>
          {allBooks.slice(0, 5).map(p => (
            <div key={p.id} style={{
              minWidth: 130, padding: 10, backgroundColor: '#fff', borderRadius: 12,
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)', flexShrink: 0, position: 'relative',
            }}>
              <div style={{ fontSize: 24, textAlign: 'center' }}>{p.emoji || '📚'}</div>
              <div style={{ fontSize: 11, fontWeight: 600, marginTop: 4, lineHeight: 1.3 }}>{p.name.slice(0, 15)}{p.name.length > 15 ? '...' : ''}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.accent, marginTop: 2 }}>{formatPrice(p.price)}</div>
              <button style={{ ...styles.buyButton(COLORS.primary), width: '100%', textAlign: 'center', marginTop: 4, padding: '4px 0', fontSize: 10 }}
                onClick={() => handleBuy(p, p.links?.aladin ? 'aladin' : 'yes24')}>구매하기</button>
              <span style={{ position: 'absolute', top: 4, right: 6, fontSize: 8, color: '#ccc' }}>제휴</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: 독서 후기 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>💬 독서 후기</h3>
        {communityReviews.books.slice(0, 2).map(r => <ReviewCard key={r.id} review={r} onBuyProduct={(p) => handleBuy(p, 'aladin')} />)}
      </div>
    </div>
  );
};

export default BooksTab;
