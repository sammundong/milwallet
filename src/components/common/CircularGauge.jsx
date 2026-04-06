import React from 'react';
import { COLORS } from '../../styles/theme';

const CircularGauge = ({ percentage, size = 70, label }) => {
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const color = percentage >= 100 ? COLORS.success : percentage >= 60 ? COLORS.primaryLight : COLORS.warning;

  return (
    <div style={{ textAlign: 'center' }}>
      <svg width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="#E8F5E9" strokeWidth={stroke} />
        <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke={color} strokeWidth={stroke}
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{ transition: 'stroke-dashoffset 0.5s ease' }} />
        <text x={size/2} y={size/2} textAnchor="middle" dominantBaseline="central"
          fontSize={14} fontWeight={700} fill={color}>{Math.round(percentage)}%</text>
      </svg>
      {label && <div style={{ fontSize: 10, color: COLORS.textSecondary, marginTop: 2 }}>{label}</div>}
    </div>
  );
};

export default CircularGauge;
