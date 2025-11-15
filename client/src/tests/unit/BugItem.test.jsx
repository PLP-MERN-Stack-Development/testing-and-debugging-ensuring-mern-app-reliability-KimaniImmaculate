import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BugItem from '../../components/BugItem';

const mockBug = {
  _id: '1',
  title: 'Bug 1',
  description: 'Description 1',
  status: 'open',
};

describe('BugItem Component', () => {
  it('renders bug info', () => {
    render(<BugItem bug={mockBug} onDelete={() => {}} onStatusChange={() => {}} />);

    expect(screen.getByText(/bug 1/i)).toBeInTheDocument();
    expect(screen.getByText(/description 1/i)).toBeInTheDocument();
    expect(screen.getByText(/open/i)).toBeInTheDocument();
  });

  it('calls onDelete when Delete button is clicked', () => {
    const handleDelete = jest.fn();
    render(<BugItem bug={mockBug} onDelete={handleDelete} onStatusChange={() => {}} />);

    fireEvent.click(screen.getByText(/delete/i));
    expect(handleDelete).toHaveBeenCalledWith('1');
  });

  it('calls onStatusChange when status changes', () => {
    const handleStatusChange = jest.fn();
    render(<BugItem bug={mockBug} onDelete={() => {}} onStatusChange={handleStatusChange} />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'resolved' } });
    expect(handleStatusChange).toHaveBeenCalledWith('1', 'resolved');
  });
});
