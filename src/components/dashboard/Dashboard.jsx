import React from 'react';
import { COLORS, styles } from '../../styles/theme';
import { formatPrice } from '../../utils/helpers';

const Dashboard = ({ userData }) => {
  return (
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>📊 월별 성장 대시보드</h3>
      <div style={styles.card}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { label: '학습 총 시간', value: `${userData.studyHours}h`, change: '+12%', emoji: '📖' },
            { label: '운동 총 횟수', value: `${userData.exerciseCount}회`, change: '+8%', emoji: '💪' },
            { label: '독서 총 권수', value: `${userData.booksRead}권`, change: '+25%', emoji: '📚' },
            { label: '절약 금액', value: formatPrice(userData.savings), change: '+15%', emoji: '💰' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center', padding: 12, backgroundColor: '#F5F5F5', borderRadius: 8 }}>
              <div style={{ fontSize: 20 }}>{item.emoji}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.primary }}>{item.value}</div>
              <div style={{ fontSize: 10, color: COLORS.textSecondary }}>{item.label}</div>
              <div style={{ fontSize: 10, color: COLORS.success }}>전월 대비 {item.change}</div>
            </div>
          ))}
        </div>
        {userData.exerciseCount > 0 && (
          <div style={{ marginTop: 12, textAlign: 'center', padding: 8, backgroundColor: '#FFF3E0', borderRadius: 8 }}>
            <span style={{ fontSize: 20 }}>🏅</span>
            <div style={{ fontSize: 12, fontWeight: 600 }}>이달의 MVP: 헬스 카테고리</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
