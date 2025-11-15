import React from 'react';
import StatusBadge from './StatusBadge';
import DeleteButton from './DeleteButton';

const BugItem = ({ bug, onDelete, onStatusChange }) => {
  return (
    <div className="bug-item border p-3 mb-2 rounded">
      <h3>{bug.title}</h3>
      <p>{bug.description}</p>
      <StatusBadge status={bug.status} />

      <div className="mt-2">
        <select
          value={bug.status}
          onChange={(e) => onStatusChange(bug._id, e.target.value)}
        >
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>

        <DeleteButton onClick={() => onDelete(bug._id)} />
      </div>
    </div>
  );
};

export default BugItem;
