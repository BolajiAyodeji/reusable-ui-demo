import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MetricsSummary } from './metrics-summary';

ReactDOM.render(
  <BrowserRouter>
    <MetricsSummary />
  </BrowserRouter>,
  document.getElementById('root')
);
