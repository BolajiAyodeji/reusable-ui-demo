import { ReactAppOptions } from '@teambit/react';

export const AnalyticsApp: ReactAppOptions = {
  name: 'analytics',
  entry: [require.resolve('./metrics-summary.app-root')],
};

export default AnalyticsApp;
