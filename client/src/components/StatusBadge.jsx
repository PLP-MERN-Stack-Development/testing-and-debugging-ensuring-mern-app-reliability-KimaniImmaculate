import React from 'react';

const StatusBadge = ({ status }) => {
  const colors = {
    'open': 'bg-red-500',
    'in-progress': 'bg-yellow-500',
    'resolved': 'bg-green-500'
  };

  return (
    <span className={`status-badge ${colors[status]} text-white px-2 py-1 rounded`}>
      {status.toUpperCase()}
    </span>
  );
};

export default StatusBadge;
