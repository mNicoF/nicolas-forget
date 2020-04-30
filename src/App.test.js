import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Claire Ledoux 1985/i);
  expect(linkElement).toBeInTheDocument();
});
