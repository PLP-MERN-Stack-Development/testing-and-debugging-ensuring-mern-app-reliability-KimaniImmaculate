import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BugList from '../../components/BugList';

const bugs = [
  { _id: '1', title: 'Bug 1', description: 'Desc 1', status: 'open' },
  { _id: '2', title: 'Bug 2', description: 'Desc 2', status: 'in-progress' },
];

describe('BugList Component', () => {
  it('renders list of bugs', () => {
    render(<BugList bugs={bugs} onDelete={() => {}} onStatusChange={() => {}} />);
    expect(screen.getByText(/bug 1/i)).toBeInTheDocument();
    expect(screen.getByText(/bug 2/i)).toBeInTheDocument();
  });

  it('shows message when no bugs', () => {
    render(<BugList bugs={[]} onDelete={() => {}} onStatusChange={() => {}} />);
    expect(screen.getByText(/no bugs reported yet/i)).toBeInTheDocument();
  });

  it('calls onDelete and onStatusChange from children', () => {
    const handleDelete = jest.fn();
    const handleStatusChange = jest.fn();

    render(<BugList bugs={bugs} onDelete={handleDelete} onStatusChange={handleStatusChange} />);
    
    fireEvent.click(screen.getAllByText(/delete/i)[0]);
    expect(handleDelete).toHaveBeenCalledWith('1');

    fireEvent.change(screen.getAllByRole('combobox')[0], { target: { value: 'resolved' } });
    expect(handleStatusChange).toHaveBeenCalledWith('1', 'resolved');
  });
});
