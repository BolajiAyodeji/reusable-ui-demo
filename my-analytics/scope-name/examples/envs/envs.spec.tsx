import React from 'react';
import { render } from '@testing-library/react';
import { BasicEnvs } from './envs.composition';

it.skip('should render with the correct text', () => {
  const { getByText } = render(<BasicEnvs />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
