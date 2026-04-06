import React, { useState } from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice } from '../../utils/helpers';
import { bookProducts, readingRoutines } from '../../data/bookData';
import { communityReviews } from '../../data/reviewData';
import ReviewCard from '../common/ReviewCard';
import CircularGauge from '../common/CircularGauge';

const BooksTab = ({ userData, updateUserData, handleBuy }) => {
  const [bookSubTab, setBookSubTab] = useState('selfDev');
  const bookSubTabs = [
    { id: 'selfDev', label: '자기계발' },
    { id: 'finance', label: '재테크' },
    { id: 'language', label: '어학·시험' },
    { id: 'humanities', label: '인문·교양' },
  ];

  return (
    <div>
      {/* 독서 챌린지 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📖 이달의 독서 챌린지</h3>
        <div style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>
                {readingRoutines.monthlyChallenge[new Date().getMonth()]?.emoji}{' '}
                {readingRoutines.monthlyChallenge[new Date().getMonth()]?.theme} 독서 월
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

      {/* 카테고리별 추천 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📚 추천 도서</h3>
        <div style={{ display: 'flex', gap: 6, marginBottom: 12, overflowX: 'auto' }}>
          {bookSubTabs.map(t => (
            <button key={t.id} style={styles.subTab(bookSubTab === t.id)} onClick={() => setBookSubTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
        {(bookProducts[bookSubTab] || []).map(book => (
          <div key={book.id} style={styles.productCard}>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ fontSize: 40, lineHeight: 1 }}>{book.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={styles.productName}>{book.name}</div>
                <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{book.author} | {book.publisher}</div>
                <div style={styles.productPrice}>{formatPrice(book.price)}</div>
                <div style={{ fontSize: 12, color: COLORS.primary, marginTop: 4 }}>🎖️ {book.militaryReason}</div>
                <div style={{ fontSize: 11, color: COLORS.textSecondary, marginTop: 2 }}>💡 {book.keyMessage}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 8, gap: 6 }}>
              <button style={styles.buyButton('#2196F3')} onClick={() => handleBuy(book, 'aladin')}>알라딘</button>
              <button style={styles.buyButton('#9C27B0')} onClick={() => handleBuy(book, 'yes24')}>예스24</button>
              <span style={{ fontSize: 10, color: COLORS.textSecondary, marginLeft: 'auto' }}>📍 군 도서관 확인 권장</span>
            </div>
            <span style={styles.affiliateText}>제휴</span>
          </div>
        ))}
      </div>

      {/* 독서 기록 */}
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

      {/* 후기 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>💬 장병 독서 후기</h3>
        {communityReviews.books.map(r => <ReviewCard key={r.id} review={r} onBuyProduct={(p) => handleBuy(p, 'aladin')} />)}
      </div>
    </div>
  );
};

export default BooksTab;
