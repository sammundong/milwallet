import React from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice } from '../../utils/helpers';

const ProductCard = ({ product, onBuy }) => (
  <div style={styles.productCard}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <div style={styles.productName}>
          {product.emoji || '📦'} {product.name}
          {product.pxAvailable === true && <span style={styles.pxBadge}>PX</span>}
          {product.pxAvailable === 'partial' && <span style={{...styles.pxBadge, backgroundColor: '#FF9800'}}>PX(부대별)</span>}
        </div>
        {product.brand && <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{product.brand}</div>}
        <div style={styles.productPrice}>{formatPrice(product.price)}</div>
        <div style={styles.productDesc}>{product.description || product.militaryReason || ''}</div>
        {product.tags && (
          <div style={styles.tagContainer}>
            {product.tags.slice(0, 3).map((tag, i) => <span key={i} style={styles.tag}>#{tag}</span>)}
          </div>
        )}
      </div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
      {product.links?.coupang && <button style={styles.buyButton('#FF5722')} onClick={() => onBuy(product, 'coupang')}>쿠팡</button>}
      {product.links?.oliveyoung && <button style={styles.buyButton('#8BC34A')} onClick={() => onBuy(product, 'oliveyoung')}>올리브영</button>}
      {product.links?.aladin && <button style={styles.buyButton('#2196F3')} onClick={() => onBuy(product, 'aladin')}>알라딘</button>}
      {product.links?.yes24 && <button style={styles.buyButton('#9C27B0')} onClick={() => onBuy(product, 'yes24')}>예스24</button>}
      {product.links?.direct && <button style={styles.buyButton(COLORS.primary)} onClick={() => onBuy(product, 'direct')}>바로가기</button>}
      {product.rating && (
        <span style={{ fontSize: 12, color: COLORS.textSecondary, marginLeft: 'auto' }}>
          ⭐ {product.rating} ({product.reviewCount})
        </span>
      )}
    </div>
    <span style={styles.affiliateText}>제휴</span>
  </div>
);

export default ProductCard;
