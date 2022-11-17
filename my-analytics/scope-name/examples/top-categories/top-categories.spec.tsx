import React from 'react';
import { render } from '@testing-library/react';
import { BasicTopCategories } from './top-categories.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicTopCategories />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
