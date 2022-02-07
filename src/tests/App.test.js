import { render, screen } from '@testing-library/react';
import { App } from '../App';

test('renders Interval Quiz', () => {
  render(<App />);
  const linkElement = screen.getByText(/Interval Quiz/i);
  expect(linkElement).toBeInTheDocument();
});
