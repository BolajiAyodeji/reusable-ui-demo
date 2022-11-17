import React from 'react';
import { Dependents } from './dependents';

export const DisableCard = () => {
  return <Dependents disableCard={true} />;
};

export const BasicDependents = () => {
  return <Dependents />;
};
