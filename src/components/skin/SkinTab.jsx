import React, { useState, useMemo } from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice, getProductById } from '../../utils/helpers';
import { skinProducts, skinRoutines, skinTypes, skinConcerns } from '../../data/skinData';
import { communityReviews } from '../../data/reviewData';
import ProductCard from '../common/ProductCard';
import ReviewCard from '../common/ReviewCard';

const SkinTab = ({ userData, updateUserData, handleBuy }) => {
  const [subCategory, setSubCategory] = useState('diagnosis');
  const [selectedSkinType, setSelectedSkinType] = useState(userData.skinType || null);
  const [selectedSkinConcerns, setSelectedSkinConcerns] = useState(userData.skinConcerns || []);
  const [skinRoutineTab, setSkinRoutineTab] = useState('morning');

  const subCategories = [
    { id: 'diagnosis', label: '피부진단' },
    { id: 'routine', label: '스킨케어루틴' },
    { id: 'products', label: '추천제품' },
    { id: 'log', label: '피부로그' },
  ];

  const toggleSkinConcern = (id) => {
    const next = selectedSkinConcerns.includes(id)
      ? selectedSkinConcerns.filter(c => c !== id)
      : [...selectedSkinConcerns, id];
    setSelectedSkinConcerns(next);
    updateUserData({ skinConcerns: next });
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
    if (!selectedSkinType && selectedSkinConcerns.length === 0) return all;
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
    });
  }, [selectedSkinType, selectedSkinConcerns]);

  const routine = getCurrentSkinRoutine();
  const currentSteps = skinRoutineTab === 'morning' ? routine.morning : routine.evening;

  return (
    <div>
      {/* Subcategory Pills */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 16, padding: '0 16px', overflowX: 'auto', flexWrap: 'wrap' }}>
        {subCategories.map(sc => (
          <button key={sc.id} style={styles.subTab(subCategory === sc.id)}
            onClick={() => setSubCategory(sc.id)}>{sc.label}</button>
        ))}
      </div>

      {/* 피부진단 */}
      {subCategory === 'diagnosis' && (
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>🧴 피부 타입 진단</h3>
          <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap' }}>
            {skinTypes.map(type => (
              <button key={type} style={styles.filterChip(selectedSkinType === type)}
                onClick={() => { setSelectedSkinType(type); updateUserData({ skinType: type }); }}>
                {type}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
            {skinConcerns.map(c => (
              <button key={c.id} style={styles.filterChip(selectedSkinConcerns.includes(c.id))}
                onClick={() => toggleSkinConcern(c.id)}>
                {c.emoji} {c.label}
              </button>
            ))}
          </div>

          {/* Brief routine summary text */}
          {(selectedSkinType || selectedSkinConcerns.length > 0) && (
            <div style={styles.card}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>🌿 맞춤 루틴 요약</div>
              <div style={{ fontSize: 12, color: COLORS.textSecondary, lineHeight: 1.8 }}>
                {routine.morning && (
                  <div style={{ marginBottom: 6 }}>
                    <span style={{ fontWeight: 600, color: COLORS.text }}>아침:</span>{' '}
                    {routine.morning.map(s => s.name).join(' → ')}
                  </div>
                )}
                {routine.evening && (
                  <div>
                    <span style={{ fontWeight: 600, color: COLORS.text }}>저녁:</span>{' '}
                    {routine.evening.map(s => s.name).join(' → ')}
                  </div>
                )}
              </div>
              <button
                style={{...styles.buyButton(), marginTop: 12, fontSize: 12}}
                onClick={() => setSubCategory('routine')}
              >루틴 상세 보기 →</button>
            </div>
          )}
        </div>
      )}

      {/* 스킨케어루틴 */}
      {subCategory === 'routine' && (
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>🌿 맞춤 스킨케어 루틴</h3>
          <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
            <button style={styles.subTab(skinRoutineTab === 'morning')} onClick={() => setSkinRoutineTab('morning')}>🌅 아침 루틴</button>
            <button style={styles.subTab(skinRoutineTab === 'evening')} onClick={() => setSkinRoutineTab('evening')}>🌙 저녁 루틴</button>
            <button style={styles.subTab(skinRoutineTab === 'special')} onClick={() => setSkinRoutineTab('special')}>⭐ 외박 전날</button>
          </div>

          {skinRoutineTab === 'special' ? (
            <div style={styles.card}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>⭐ {skinRoutines.specialLeave.name}</div>
              {skinRoutines.specialLeave.steps.map((step, i) => {
                const product = step.productId ? getProductById(step.productId) : null;
                return (
                  <div key={i} style={{ padding: '8px 0', borderBottom: i < skinRoutines.specialLeave.steps.length - 1 ? `1px solid ${COLORS.border}` : 'none' }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: COLORS.primary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{step.step}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 600 }}>
                          {step.name} <span style={{ fontSize: 11, color: COLORS.textSecondary }}>({step.duration})</span>
                        </div>
                        <div style={{ fontSize: 11, color: COLORS.textSecondary }}>{step.method}</div>
                        {product && (
                          <button
                            style={{ fontSize: 10, color: COLORS.primary, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', padding: '2px 0', marginTop: 2 }}
                            onClick={() => setSubCategory('products')}
                          >제품보기 →</button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            currentSteps?.map((step, i) => {
              const product = step.productId ? getProductById(step.productId) : null;
              return (
                <div key={i} style={styles.card}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: COLORS.primary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{step.step}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>
                        {step.name} <span style={{ fontSize: 11, color: COLORS.textSecondary }}>({step.duration})</span>
                      </div>
                      <div style={{ fontSize: 12, color: COLORS.textSecondary }}>{step.method}</div>
                      {product && (
                        <button
                          style={{ fontSize: 11, color: COLORS.primary, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', padding: '2px 0', marginTop: 4 }}
                          onClick={() => setSubCategory('products')}
                        >제품보기 →</button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* 추천제품 */}
      {subCategory === 'products' && (
        <>
          <div style={styles.section}>
            <h3 style={styles.sectionTitle}>✨ 맞춤 추천 상품</h3>
            <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap' }}>
              {skinTypes.map(type => (
                <button key={type} style={styles.filterChip(selectedSkinType === type)}
                  onClick={() => { setSelectedSkinType(type); updateUserData({ skinType: type }); }}>
                  {type}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
              {skinConcerns.map(c => (
                <button key={c.id} style={styles.filterChip(selectedSkinConcerns.includes(c.id))}
                  onClick={() => toggleSkinConcern(c.id)}>
                  {c.emoji} {c.label}
                </button>
              ))}
            </div>
            {filteredSkinProducts.map(p => <ProductCard key={p.id} product={p} onBuy={handleBuy} />)}
          </div>
        </>
      )}

      {/* 피부로그 */}
      {subCategory === 'log' && (
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>📝 오늘의 피부 로그</h3>
          <div style={styles.card}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, marginBottom: 4 }}>수분도</div>
                <input type="range" min="1" max="10" style={{ width: '100%', accentColor: COLORS.primary }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, marginBottom: 4 }}>유분도</div>
                <input type="range" min="1" max="10" style={{ width: '100%', accentColor: COLORS.primary }} />
              </div>
            </div>
            <div style={{ fontSize: 12, marginBottom: 4 }}>트러블 위치</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['이마', '코', '양볼', '턱', '없음'].map(area => (
                <button key={area} style={styles.filterChip(false)}>{area}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkinTab;
