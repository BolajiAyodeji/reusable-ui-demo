import React from 'react';
import { Envs } from './envs';

export const DisableCard = () => {
  return <Envs disableCard={true}/>;
};

export const BasicEnvs = () => {
  return <Envs />;
};
