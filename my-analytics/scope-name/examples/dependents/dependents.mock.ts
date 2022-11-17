import { TimeSeries, Vector } from '@teambit/analytics.timeseries';

export const getPast = (past: number) => {
  const date = new Date()
  date.setDate(1)
  date.setMonth(date.getMonth() - past);
  return date;
};

export const dependentsValue = TimeSeries.from([
  Vector.from({
    dataPoints: [
      { value: 100, month: getPast(11).getMonth() + 1, year: getPast(11).getFullYear() },
      { value: 150, month: getPast(10).getMonth() + 1, year: getPast(10).getFullYear() },
      { value: 175, month: getPast(9).getMonth() + 1, year: getPast(9).getFullYear() },
      { value: 200, month: getPast(8).getMonth() + 1, year: getPast(8).getFullYear() },
      { value: 250, month: getPast(7).getMonth() + 1, year: getPast(7).getFullYear() },
      { value: 275, month: getPast(6).getMonth() + 1, year: getPast(6).getFullYear() },
      { value: 300, month: getPast(5).getMonth() + 1, year: getPast(5).getFullYear() },
      { value: 325, month: getPast(4).getMonth() + 1, year: getPast(4).getFullYear() },
      { value: 375, month: getPast(3).getMonth() + 1, year: getPast(3).getFullYear() },
      { value: 425, month: getPast(2).getMonth() + 1, year: getPast(2).getFullYear() },
      { value: 475, month: getPast(1).getMonth() + 1, year: getPast(1).getFullYear() },
      { value: 500, month: getPast(0).getMonth() + 1, year: getPast(0).getFullYear() },
    ],
    name: 'Direct',
  }),
  Vector.from({
    dataPoints: [
      { value: 125, month: getPast(11).getMonth() + 1, year: getPast(11).getFullYear() },
      { value: 160, month: getPast(10).getMonth() + 1, year: getPast(10).getFullYear() },
      { value: 200, month: getPast(9).getMonth() + 1, year: getPast(9).getFullYear() },
      { value: 250, month: getPast(8).getMonth() + 1, year: getPast(8).getFullYear() },
      { value: 300, month: getPast(7).getMonth() + 1, year: getPast(7).getFullYear() },
      { value: 325, month: getPast(6).getMonth() + 1, year: getPast(6).getFullYear() },
      { value: 360, month: getPast(5).getMonth() + 1, year: getPast(5).getFullYear() },
      { value: 370, month: getPast(4).getMonth() + 1, year: getPast(4).getFullYear() },
      { value: 440, month: getPast(3).getMonth() + 1, year: getPast(3).getFullYear() },
      { value: 480, month: getPast(2).getMonth() + 1, year: getPast(2).getFullYear() },
      { value: 530, month: getPast(1).getMonth() + 1, year: getPast(1).getFullYear() },
      { value: 550, month: getPast(0).getMonth() + 1, year: getPast(0).getFullYear() },
    ],
    name: 'Indirect',
  }),
]);