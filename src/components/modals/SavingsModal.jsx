import React from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice } from '../../utils/helpers';
import { calculateMonthlyRevenue } from '../../data/selfDevBusinessData';

const SavingsModal = ({ show, onClose, userData }) => {
  if (!show) return null;

  const revenue = calculateMonthlyRevenue(10000);

  return (
    <div style={styles.modal} onClick={onClose}>
      <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>💰 내 절약 현황</div>
        <div style={{ textAlign: 'center', padding: 16, backgroundColor: '#E8F5E9', borderRadius: 12, marginBottom: 16 }}>
          <div style={{ fontSize: 12, color: COLORS.textSecondary }}>밀월렛으로 절약한 총 금액</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: COLORS.primary }}>{formatPrice(userData.savings)}</div>
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>구매 이력</div>
        {userData.purchaseHistory.length === 0 ? (
          <div style={{ fontSize: 12, color: COLORS.textSecondary, textAlign: 'center', padding: 16 }}>아직 구매 이력이 없습니다</div>
        ) : (
          userData.purchaseHistory.slice(-10).reverse().map((p, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: `1px solid ${COLORS.border}`, fontSize: 12 }}>
              <span>{p.productName}</span>
              <span style={{ color: COLORS.success }}>-{formatPrice(p.commission)}</span>
            </div>
          ))
        )}
        <div style={{ marginTop: 16, padding: 12, backgroundColor: '#FFF3E0', borderRadius: 8, fontSize: 11 }}>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>📊 밀월렛 수익 모델 (MAU 1만명 기준)</div>
          <div>월 예상 수익: {formatPrice(revenue.totalMonthlyRevenue)}</div>
          <div>연 예상 수익: {formatPrice(revenue.annualEstimate)}</div>
          {revenue.breakdown.map((b, i) => (
            <div key={i} style={{ color: COLORS.textSecondary }}>  {b.category}: {formatPrice(b.revenue)} ({b.purchasers}명 전환)</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavingsModal;
