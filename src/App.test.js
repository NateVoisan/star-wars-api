import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders star wars characters link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/star wars characters/i);
  expect(linkElement).toBeInTheDocument();
});
