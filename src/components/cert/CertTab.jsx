import React, { useState } from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice, getProductById } from '../../utils/helpers';
import { certProducts, certRoutines } from '../../data/certData';
import { communityReviews } from '../../data/reviewData';
import ProductCard from '../common/ProductCard';
import ReviewCard from '../common/ReviewCard';

const certSubTabs = [
  { id: 'it', label: 'IT' },
  { id: 'language', label: '어학' },
  { id: 'finance', label: '금융/공무원' },
];

const CertTab = ({ userData, handleBuy, setShowCertModal }) => {
  const [certSubTab, setCertSubTab] = useState('it');

  return (
    <div>
      {/* 나의 자격증 현황 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>🏆 나의 자격증 현황</h3>
        <div style={styles.card}>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>준비 중인 자격증</div>
          {userData.certList.length === 0 && (
            <div style={{ fontSize: 12, color: COLORS.textSecondary, textAlign: 'center', padding: 16 }}>
              아직 등록된 자격증이 없습니다
            </div>
          )}
          {userData.certList.map((cert, i) => {
            const dday = Math.ceil((new Date(cert.examDate) - new Date()) / (1000*60*60*24));
            return (
              <div key={i} style={{ padding: '8px 0', borderBottom: `1px solid ${COLORS.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{cert.name}</span>
                  <span style={{ fontSize: 12, color: dday > 0 ? COLORS.accent : COLORS.danger, fontWeight: 700 }}>
                    D{dday > 0 ? `-${dday}` : `+${Math.abs(dday)}`}
                  </span>
                </div>
                <div style={styles.progressBar()}>
                  <div style={styles.progressFill(cert.progress || 0)} />
                </div>
              </div>
            );
          })}
          <button
            style={{...styles.buyButton(), width: '100%', marginTop: 12, textAlign: 'center'}}
            onClick={() => setShowCertModal(true)}
          >+ 자격증 추가</button>
        </div>
      </div>

      {/* 합격 루틴 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📋 합격 루틴</h3>
        {certRoutines.map(routine => (
          <div key={routine.id} style={styles.card}>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
              {routine.emoji} {routine.certName} {routine.totalDays}일 합격 플랜
            </div>
            <div style={{ fontSize: 11, color: COLORS.textSecondary, marginBottom: 8 }}>
              일 {routine.dailyHours}시간 기준
            </div>
            {routine.phases.map((phase, i) => (
              <div key={i} style={{ padding: '6px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                  <span style={{ fontWeight: 600 }}>{phase.period}: {phase.phase}</span>
                  <span style={{ color: COLORS.primary }}>{phase.percentage}%</span>
                </div>
                <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{phase.detail}</div>
                <div style={{...styles.progressBar(), marginTop: 4}}>
                  <div style={styles.progressFill(phase.percentage)} />
                </div>
              </div>
            ))}
            {routine.relatedProducts.map(pid => {
              const p = getProductById(pid);
              if (!p) return null;
              return <ProductCard key={pid} product={p} onBuy={handleBuy} />;
            })}
          </div>
        ))}
      </div>

      {/* 추천 교재 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📚 추천 교재</h3>
        <div style={{ display: 'flex', gap: 6, marginBottom: 12, overflowX: 'auto' }}>
          {certSubTabs.map(t => (
            <button key={t.id} style={styles.subTab(certSubTab === t.id)} onClick={() => setCertSubTab(t.id)}>{t.label}</button>
          ))}
        </div>
        {(certProducts[certSubTab] || []).map(p => (
          <div key={p.id} style={styles.productCard}>
            <div style={styles.productName}>{p.emoji} {p.name}</div>
            <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{p.publisher}</div>
            <div style={styles.productPrice}>{formatPrice(p.price)}</div>
            <div style={styles.productDesc}>{p.militaryReason}</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 6, flexWrap: 'wrap' }}>
              {p.passRate && <span style={styles.tag}>합격률 {p.passRate}</span>}
              {p.prepPeriod && <span style={styles.tag}>준비기간 {p.prepPeriod}</span>}
              {p.militaryPassable && <span style={{...styles.tag, backgroundColor: '#E8F5E9', color: COLORS.success}}>복무중 합격 가능</span>}
            </div>
            <div style={{ display: 'flex', marginTop: 8 }}>
              {p.links?.aladin && <button style={styles.buyButton('#2196F3')} onClick={() => handleBuy(p, 'aladin')}>알라딘</button>}
              {p.links?.yes24 && <button style={styles.buyButton('#9C27B0')} onClick={() => handleBuy(p, 'yes24')}>예스24</button>}
              {p.links?.coupang && <button style={styles.buyButton('#FF5722')} onClick={() => handleBuy(p, 'coupang')}>쿠팡</button>}
            </div>
            <span style={styles.affiliateText}>제휴</span>
          </div>
        ))}
      </div>

      {/* 후기 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>💬 합격 후기</h3>
        {communityReviews.cert.map(r => <ReviewCard key={r.id} review={r} onBuyProduct={(p) => handleBuy(p, 'aladin')} />)}
      </div>
    </div>
  );
};

export default CertTab;
