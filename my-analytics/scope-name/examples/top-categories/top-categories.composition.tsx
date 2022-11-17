import React from 'react';
import { TopCategories } from './top-categories';

export const DisableCard = () => {
  return <TopCategories disableCard={true} />;
};

export const BasicTopCategories = () => {
  return <TopCategories />;
};
