import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

it('renders without crashing', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});
