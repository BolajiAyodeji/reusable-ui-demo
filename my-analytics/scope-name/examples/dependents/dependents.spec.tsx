import React from 'react';
import { render } from '@testing-library/react';
import { BasicDependents } from './dependents.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicDependents />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
