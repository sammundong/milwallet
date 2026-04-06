import React from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice, getProductById } from '../../utils/helpers';
import { certProducts, certRoutines } from '../../data/certData';
import { communityReviews } from '../../data/reviewData';
import ReviewCard from '../common/ReviewCard';

const CertTab = ({ userData, handleBuy, setShowCertModal }) => {
  // Gather all cert textbooks for recommendation
  const allCertBooks = [
    ...certProducts.it,
    ...certProducts.language,
    ...certProducts.finance,
  ];

  return (
    <div>
      {/* Section 1: 나의 자격증 현황 */}
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

      {/* Section 2: 합격 루틴 */}
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
            {routine.relatedProducts && routine.relatedProducts.length > 0 && (
              <div style={{ marginTop: 10, padding: '8px 10px', backgroundColor: `${COLORS.primary}08`, borderRadius: 8 }}>
                <div style={{ fontSize: 11, color: COLORS.textSecondary, marginBottom: 4 }}>📚 추천 교재</div>
                {routine.relatedProducts.map(pid => {
                  const p = getProductById(pid);
                  if (!p) return null;
                  return (
                    <div key={pid} style={{ fontSize: 12, color: COLORS.text, padding: '2px 0' }}>
                      • {p.name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Section 3: 은근슬쩍 추천 교재 */}
      <div style={styles.section}>
        <div style={{ fontSize: 13, color: COLORS.textSecondary, marginBottom: 8 }}>
          💡 합격을 위한 추천 교재
        </div>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 8 }}>
          {allCertBooks.slice(0, 5).map(p => (
            <div key={p.id} style={{
              minWidth: 130, padding: 10, backgroundColor: '#fff', borderRadius: 12,
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)', flexShrink: 0, position: 'relative',
            }}>
              <div style={{ fontSize: 24, textAlign: 'center' }}>{p.emoji || '📚'}</div>
              <div style={{ fontSize: 11, fontWeight: 600, marginTop: 4, lineHeight: 1.3 }}>{p.name.slice(0, 15)}{p.name.length > 15 ? '...' : ''}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.accent, marginTop: 2 }}>{formatPrice(p.price)}</div>
              {p.militaryPassable && <span style={{ fontSize: 9, color: COLORS.success }}>복무중 합격가능</span>}
              <button style={{ ...styles.buyButton(COLORS.primary), width: '100%', textAlign: 'center', marginTop: 4, padding: '4px 0', fontSize: 10 }}
                onClick={() => handleBuy(p, p.links?.aladin ? 'aladin' : 'yes24')}>구매하기</button>
              <span style={{ position: 'absolute', top: 4, right: 6, fontSize: 8, color: '#ccc' }}>제휴</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: 합격 후기 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>💬 합격 후기</h3>
        {communityReviews.cert.slice(0, 2).map(r => <ReviewCard key={r.id} review={r} onBuyProduct={(p) => handleBuy(p, 'aladin')} />)}
      </div>
    </div>
  );
};

export default CertTab;
