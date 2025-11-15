import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatusBadge from '../../components/StatusBadge';

describe('StatusBadge Component', () => {
  it('renders status text', () => {
    render(<StatusBadge status="open" />);
    expect(screen.getByText(/open/i)).toBeInTheDocument();
  });

  it('applies correct class for each status', () => {
    const { rerender } = render(<StatusBadge status="open" />);
    expect(screen.getByText(/open/i)).toHaveClass('bg-red-500');

    rerender(<StatusBadge status="in-progress" />);
    expect(screen.getByText(/in-progress/i)).toHaveClass('bg-yellow-500');

    rerender(<StatusBadge status="resolved" />);
    expect(screen.getByText(/resolved/i)).toHaveClass('bg-green-500');
  });
});
