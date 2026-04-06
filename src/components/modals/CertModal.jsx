import React, { useState } from 'react';
import { styles } from '../../styles/theme';

const CertModal = ({ show, onClose, userData, updateUserData }) => {
  const [newCert, setNewCert] = useState({ name: '', examDate: '', targetScore: '' });

  if (!show) return null;

  return (
    <div style={styles.modal} onClick={onClose}>
      <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>🏆 자격증 추가</div>
        <input style={styles.input} placeholder="자격증명 (예: 정보처리기사)"
          value={newCert.name} onChange={e => setNewCert({...newCert, name: e.target.value})} />
        <input style={styles.input} type="date" placeholder="시험일"
          value={newCert.examDate} onChange={e => setNewCert({...newCert, examDate: e.target.value})} />
        <input style={styles.input} placeholder="목표 점수/등급"
          value={newCert.targetScore} onChange={e => setNewCert({...newCert, targetScore: e.target.value})} />
        <button style={{...styles.buyButton(), width: '100%', textAlign: 'center', padding: 12}}
          onClick={() => {
            if (newCert.name && newCert.examDate) {
              updateUserData({ certList: [...userData.certList, { ...newCert, progress: 0 }] });
              setNewCert({ name: '', examDate: '', targetScore: '' });
              onClose();
            }
          }}>추가하기</button>
      </div>
    </div>
  );
};

export default CertModal;
