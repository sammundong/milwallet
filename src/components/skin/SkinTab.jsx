import React, { useState, useMemo } from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice } from '../../utils/helpers';
import { skinProducts, skinRoutines, skinTypes, skinConcerns } from '../../data/skinData';
import { communityReviews } from '../../data/reviewData';
import ReviewCard from '../common/ReviewCard';

const SkinTab = ({ userData, updateUserData, handleBuy }) => {
  const [selectedSkinType, setSelectedSkinType] = useState(userData.skinType || null);
  const [selectedSkinConcerns, setSelectedSkinConcerns] = useState(userData.skinConcerns || []);
  const [skinRoutineTab, setSkinRoutineTab] = useState('morning');
  const [moisture, setMoisture] = useState(5);
  const [oil, setOil] = useState(5);
  const [troubleAreas, setTroubleAreas] = useState([]);

  const toggleSkinConcern = (id) => {
    const next = selectedSkinConcerns.includes(id)
      ? selectedSkinConcerns.filter(c => c !== id)
      : [...selectedSkinConcerns, id];
    setSelectedSkinConcerns(next);
    updateUserData({ skinConcerns: next });
  };

  const toggleTroubleArea = (area) => {
    setTroubleAreas(prev => prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]);
  };

  const getCurrentSkinRoutine = () => {
    if (selectedSkinConcerns.includes('acne')) return skinRoutines.acne;
    if (selectedSkinType === '지성') return skinRoutines.oily;
    return skinRoutines.dry;
  };

  const filteredSkinProducts = useMemo(() => {
    const all = [
      ...skinProducts.cleansing,
      ...skinProducts.moisturizing,
      ...skinProducts.sunscreen,
      ...skinProducts.specialCare,
    ];
    if (!selectedSkinType && selectedSkinConcerns.length === 0) return all.slice(0, 5);
    return all.filter(p => {
      const matchType = !selectedSkinType || p.skinTypes?.includes(selectedSkinType);
      const matchConcern = selectedSkinConcerns.length === 0 || selectedSkinConcerns.some(c => {
        const concernMap = {
          acne: ['여드름', '민감성'],
          trouble: ['트러블', '진정', '시카'],
          dryness: ['고보습', '수분', '보습'],
          dullness: ['미백', '칙칙함'],
          pores: ['모공', '지성'],
          wrinkles: ['주름', '재생'],
        };
        return p.tags?.some(t => concernMap[c]?.some(k => t.includes(k)));
      });
      return matchType && matchConcern;
    }).slice(0, 5);
  }, [selectedSkinType, selectedSkinConcerns]);

  const routine = getCurrentSkinRoutine();
  const currentSteps = skinRoutineTab === 'morning' ? routine.morning : routine.evening;

  return (
    <div>
      {/* Section 1: 피부 타입 진단 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>🧴 피부 타입 진단</h3>
        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 12, color: COLORS.textSecondary, marginBottom: 6 }}>피부 타입</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {skinTypes.map(type => (
              <button key={type} style={styles.filterChip(selectedSkinType === type)}
                onClick={() => { setSelectedSkinType(type); updateUserData({ skinType: type }); }}>
                {type}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, color: COLORS.textSecondary, marginBottom: 6 }}>피부 고민</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {skinConcerns.map(c => (
              <button key={c.id} style={styles.filterChip(selectedSkinConcerns.includes(c.id))}
                onClick={() => toggleSkinConcern(c.id)}>
                {c.emoji} {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: 맞춤 스킨케어 루틴 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>🌿 맞춤 스킨케어 루틴</h3>
        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
          <button style={styles.filterChip(skinRoutineTab === 'morning')} onClick={() => setSkinRoutineTab('morning')}>🌅 아침</button>
          <button style={styles.filterChip(skinRoutineTab === 'evening')} onClick={() => setSkinRoutineTab('evening')}>🌙 저녁</button>
        </div>
        <div style={styles.card}>
          {currentSteps?.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: i < currentSteps.length - 1 ? `1px solid ${COLORS.border}` : 'none', alignItems: 'center' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: COLORS.primary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{step.step}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>
                  {step.name} <span style={{ fontSize: 11, color: COLORS.textSecondary }}>({step.duration})</span>
                </div>
                <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{step.method}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: 오늘의 피부 로그 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>📝 오늘의 피부 로그</h3>
        <div style={styles.card}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, marginBottom: 4 }}>수분도 <span style={{ color: COLORS.primary, fontWeight: 600 }}>{moisture}</span></div>
              <input type="range" min="1" max="10" value={moisture} onChange={e => setMoisture(Number(e.target.value))} style={{ width: '100%', accentColor: COLORS.primary }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, marginBottom: 4 }}>유분도 <span style={{ color: COLORS.primary, fontWeight: 600 }}>{oil}</span></div>
              <input type="range" min="1" max="10" value={oil} onChange={e => setOil(Number(e.target.value))} style={{ width: '100%', accentColor: COLORS.primary }} />
            </div>
          </div>
          <div style={{ fontSize: 12, marginBottom: 4 }}>트러블 위치</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['이마', '코', '양볼', '턱', '없음'].map(area => (
              <button key={area} style={styles.filterChip(troubleAreas.includes(area))} onClick={() => toggleTroubleArea(area)}>{area}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Section 4: 은근슬쩍 추천 */}
      <div style={styles.section}>
        <div style={{ fontSize: 13, color: COLORS.textSecondary, marginBottom: 8 }}>
          💡 피부 관리에 이런 건 어때요?
        </div>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 8 }}>
          {filteredSkinProducts.map(p => (
            <div key={p.id} style={{
              minWidth: 130, padding: 10, backgroundColor: '#fff', borderRadius: 12,
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)', flexShrink: 0, position: 'relative',
            }}>
              <div style={{ fontSize: 24, textAlign: 'center' }}>{p.emoji || '🧴'}</div>
              <div style={{ fontSize: 11, fontWeight: 600, marginTop: 4, lineHeight: 1.3 }}>{p.name.slice(0, 15)}{p.name.length > 15 ? '...' : ''}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.accent, marginTop: 2 }}>{formatPrice(p.price)}</div>
              {p.pxAvailable === true && <span style={{ fontSize: 9, color: COLORS.pxBadge }}>PX가능</span>}
              <button style={{ ...styles.buyButton(COLORS.primary), width: '100%', textAlign: 'center', marginTop: 4, padding: '4px 0', fontSize: 10 }}
                onClick={() => handleBuy(p, p.links?.coupang ? 'coupang' : 'oliveyoung')}>구매하기</button>
              <span style={{ position: 'absolute', top: 4, right: 6, fontSize: 8, color: '#ccc' }}>제휴</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: 후기 */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>💬 후기</h3>
        {communityReviews.skin.slice(0, 2).map(r => <ReviewCard key={r.id} review={r} onBuyProduct={(p) => handleBuy(p, 'coupang')} />)}
      </div>
    </div>
  );
};

export default SkinTab;
