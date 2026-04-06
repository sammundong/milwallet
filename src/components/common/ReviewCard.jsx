import React, { useState } from 'react';
import { COLORS, styles } from '../../styles/theme';
import { getProductById } from '../../utils/helpers';

const ReviewCard = ({ review, onBuyProduct }) => {
  const [liked, setLiked] = useState(false);
  const [helpfulClicked, setHelpfulClicked] = useState(false);
  return (
    <div style={styles.reviewCard}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.primary }}>{review.author}</span>
        <span style={{ fontSize: 10, color: COLORS.textSecondary }}>{review.date}</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{review.title}</div>
      <div style={{ fontSize: 12, color: COLORS.textSecondary, lineHeight: 1.6, marginBottom: 8 }}>{review.content}</div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
        {review.tags?.map((tag, i) => <span key={i} style={styles.tag}>#{tag}</span>)}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => setLiked(!liked)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 13 }}>
          {liked ? '❤️' : '🤍'} {review.likes + (liked ? 1 : 0)}
        </button>
        <button onClick={() => setHelpfulClicked(!helpfulClicked)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: 13 }}>
          {helpfulClicked ? '✅' : '👍'} 도움됨 {review.helpful + (helpfulClicked ? 1 : 0)}
        </button>
      </div>
      {review.relatedProducts && review.relatedProducts.length > 0 && (
        <div style={{ marginTop: 8, paddingTop: 8, borderTop: `1px solid ${COLORS.border}` }}>
          <div style={{ fontSize: 11, color: COLORS.textSecondary, marginBottom: 4 }}>이 후기에서 언급된 상품</div>
          {review.relatedProducts.map(pid => {
            const p = getProductById(pid);
            if (!p) return null;
            return (
              <div key={pid} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0' }}>
                <span style={{ fontSize: 12 }}>{p.name}</span>
                <button style={styles.buyButton()} onClick={() => onBuyProduct(p)}>구매</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
