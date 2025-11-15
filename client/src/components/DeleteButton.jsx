import React from 'react';

const DeleteButton = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="btn btn-danger"
  >
    Delete
  </button>
);

export default DeleteButton;
