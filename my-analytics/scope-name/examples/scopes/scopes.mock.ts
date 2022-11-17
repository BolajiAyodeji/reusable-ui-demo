import { Vector } from '@teambit/analytics.timeseries';

export const getPast = (past: number) => {
  const date = new Date()
  date.setDate(1)
  date.setMonth(date.getMonth() - past);
  return date;
};

export const scopesValue = Vector.from([
  { value: 62323, month: getPast(11).getMonth() + 1, year: getPast(11).getFullYear() },
  { value: 61353, month: getPast(10).getMonth() + 1, year: getPast(10).getFullYear() },
  { value: 65323, month: getPast(9).getMonth() + 1, year: getPast(9).getFullYear() },
  { value: 63323, month: getPast(8).getMonth() + 1, year: getPast(8).getFullYear() },
  { value: 74323, month: getPast(7).getMonth() + 1, year: getPast(7).getFullYear() },
  { value: 77323, month: getPast(6).getMonth() + 1, year: getPast(6).getFullYear() },
  { value: 75323, month: getPast(5).getMonth() + 1, year: getPast(5).getFullYear() },
  { value: 78323, month: getPast(4).getMonth() + 1, year: getPast(4).getFullYear() },
  { value: 81323, month: getPast(3).getMonth() + 1, year: getPast(3).getFullYear() },
  { value: 83023, month: getPast(2).getMonth() + 1, year: getPast(2).getFullYear() },
  { value: 79323, month: getPast(1).getMonth() + 1, year: getPast(1).getFullYear() },
  { value: 95023, month: getPast(0).getMonth() + 1, year: getPast(0).getFullYear() },
]);
