import React from 'react';
import { render } from '@testing-library/react';
import { BasicScopes } from './scopes.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicScopes />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
