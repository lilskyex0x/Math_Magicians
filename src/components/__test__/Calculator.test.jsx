/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../Calculator';

test('renders Calculator component with CalcBtns', () => {
  const { container, getByText } = render(<Calculator />);

  // Check if the Calculator component contains the title.
  const titleElement = getByText("Let's Do Some Math!");
  expect(titleElement).toBeInTheDocument();

  // Check if the Calculator component contains the CalcBtns component.
  const calcBtnsElement = container.querySelector('.current__num');
  expect(calcBtnsElement).toBeInTheDocument();
});
