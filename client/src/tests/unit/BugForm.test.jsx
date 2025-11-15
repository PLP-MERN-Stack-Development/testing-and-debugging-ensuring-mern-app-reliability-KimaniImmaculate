import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from './BugForm';

test('renders form and submits bug', async () => {
  const mockOnBugCreated = jest.fn();
  render(<BugForm onBugCreated={mockOnBugCreated} />);

  fireEvent.change(screen.getByPlaceholderText(/Title/i), { target: { value: 'Test Bug' } });
  fireEvent.change(screen.getByPlaceholderText(/Description/i), { target: { value: 'Test description' } });

  fireEvent.click(screen.getByText(/Add Bug/i));

  // We can check if onBugCreated is called (mock function)
  expect(mockOnBugCreated).toHaveBeenCalledTimes(1);
});
