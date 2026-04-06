import React from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice, getProductById } from '../../utils/helpers';

const RoutineModal = ({ routine, routineStep, setRoutineStep, onClose, userData, updateUserData, handleBuy }) => {
  if (!routine) return null;

  const step = routine.steps[routineStep];
  const isLastStep = routineStep === routine.steps.length - 1;
  const relatedProduct = step ? getProductById(
    routine.recommendedProducts?.[routineStep % routine.recommendedProducts.length]
  ) : null;

  return (
    <div style={styles.modal} onClick={onClose}>
      <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{ fontSize: 20, fontWeight: 700 }}>{routine.emoji} {routine.name}</div>
          <div style={{ fontSize: 12, color: COLORS.textSecondary }}>
            {routineStep + 1} / {routine.steps.length} 단계
          </div>
          <div style={{...styles.progressBar(), marginTop: 8}}>
            <div style={styles.progressFill(((routineStep + 1) / routine.steps.length) * 100)} />
          </div>
        </div>

        {step && (
          <div style={{ textAlign: 'center', padding: 16 }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>{step.name.includes('워밍업') ? '🔥' : step.name.includes('쿨다운') ? '❄️' : '💪'}</div>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{step.name}</div>
            <div style={{ fontSize: 14, color: COLORS.textSecondary }}>{step.detail}</div>
            {step.sets && <div style={{ fontSize: 13, color: COLORS.primary, marginTop: 4 }}>{step.sets}세트 x {step.reps}</div>}
            {step.duration && <div style={{ fontSize: 13, color: COLORS.primary, marginTop: 4 }}>{step.duration}분</div>}
          </div>
        )}

        {relatedProduct && (
          <div style={{ marginTop: 12, padding: 12, backgroundColor: '#F5F5F5', borderRadius: 8 }}>
            <div style={{ fontSize: 11, color: COLORS.textSecondary, marginBottom: 4 }}>💡 추천 보조제</div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>{relatedProduct.name}</div>
            <div style={{ fontSize: 14, color: COLORS.accent, fontWeight: 700 }}>{formatPrice(relatedProduct.price)}</div>
            <button style={styles.buyButton('#FF5722')} onClick={() => handleBuy(relatedProduct, 'coupang')}>쿠팡 구매</button>
            <span style={{ fontSize: 9, color: COLORS.affiliate, marginLeft: 8 }}>제휴</span>
          </div>
        )}

        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          {routineStep > 0 && (
            <button style={{...styles.buyButton('#9E9E9E'), flex: 1, textAlign: 'center'}}
              onClick={() => setRoutineStep(routineStep - 1)}>이전</button>
          )}
          <button style={{...styles.buyButton(), flex: 1, textAlign: 'center'}}
            onClick={() => {
              if (isLastStep) {
                updateUserData({ exerciseCount: userData.exerciseCount + 1, streak: userData.streak + 1 });
                onClose();
                alert('🎉 루틴 완료! 오늘도 수고했습니다!');
              } else {
                setRoutineStep(routineStep + 1);
              }
            }}>
            {isLastStep ? '🎉 완료!' : '다음 단계 →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoutineModal;
