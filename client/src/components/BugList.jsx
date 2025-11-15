import React from 'react';

const BugList = ({ bugs, handleStatusChange, handleDelete }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return '#ff6b6b'; // red
      case 'medium':
        return '#feca57'; // yellow
      case 'low':
        return '#1dd1a1'; // green
      default:
        return '#ccc';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open':
        return '#ff9ff3';
      case 'in-progress':
        return '#54a0ff';
      case 'resolved':
        return '#10ac84';
      default:
        return '#ccc';
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      {bugs.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}>
          No bugs reported yet.
        </p>
      ) : (
        bugs.map((bug) => (
          <div
            key={bug._id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '15px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
            }}
          >
            <h3 style={{ margin: '0 0 5px 0' }}>{bug.title}</h3>
            <p style={{ margin: '5px 0' }}>{bug.description}</p>

            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <span
                style={{
                  padding: '3px 8px',
                  borderRadius: '5px',
                  backgroundColor: getPriorityColor(bug.priority),
                  color: '#fff',
                  fontWeight: 'bold',
                }}
              >
                {bug.priority.toUpperCase()}
              </span>

              <span
                style={{
                  padding: '3px 8px',
                  borderRadius: '5px',
                  backgroundColor: getStatusColor(bug.status),
                  color: '#fff',
                  fontWeight: 'bold',
                }}
              >
                {bug.status.toUpperCase()}
              </span>
            </div>

            <div style={{ marginTop: '10px' }}>
              <button
                onClick={() => handleStatusChange(bug._id, 'in-progress')}
                style={{
                  marginRight: '8px',
                  padding: '5px 10px',
                  backgroundColor: '#54a0ff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                In-Progress
              </button>
              <button
                onClick={() => handleStatusChange(bug._id, 'resolved')}
                style={{
                  marginRight: '8px',
                  padding: '5px 10px',
                  backgroundColor: '#10ac84',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Resolved
              </button>
              <button
                onClick={() => handleDelete(bug._id)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#ee5253',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BugList;


