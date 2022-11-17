import { TimeSeries, Vector } from '@teambit/analytics.timeseries';

export const getPast = (past: number) => {
  const date = new Date()
  date.setDate(1)
  date.setMonth(date.getMonth() - past);
  return date;
};

export const envsValue = TimeSeries.from([
  Vector.from({
    dataPoints: [
      { value: 900, month: getPast(11).getMonth() + 1, year: getPast(11).getFullYear() },
      { value: 600, month: getPast(10).getMonth() + 1, year: getPast(10).getFullYear() },
      { value: 600, month: getPast(9).getMonth() + 1, year: getPast(9).getFullYear() },
      { value: 500, month: getPast(8).getMonth() + 1, year: getPast(8).getFullYear() },
      { value: 900, month: getPast(7).getMonth() + 1, year: getPast(7).getFullYear() },
      { value: 600, month: getPast(6).getMonth() + 1, year: getPast(6).getFullYear() },
      { value: 600, month: getPast(5).getMonth() + 1, year: getPast(5).getFullYear() },
      { value: 900, month: getPast(4).getMonth() + 1, year: getPast(4).getFullYear() },
      { value: 800, month: getPast(3).getMonth() + 1, year: getPast(3).getFullYear() },
      { value: 600, month: getPast(2).getMonth() + 1, year: getPast(2).getFullYear() },
      { value: 1100, month: getPast(1).getMonth() + 1, year: getPast(1).getFullYear() },
      { value: 800, month: getPast(0).getMonth() + 1, year: getPast(0).getFullYear() },
    ],
    name: 'React',
  }),
  Vector.from({
    dataPoints: [
      { value: 100, month: getPast(11).getMonth() + 1, year: getPast(11).getFullYear() },
      { value: 300, month: getPast(10).getMonth() + 1, year: getPast(10).getFullYear() },
      { value: 600, month: getPast(9).getMonth() + 1, year: getPast(9).getFullYear() },
      { value: 300, month: getPast(8).getMonth() + 1, year: getPast(8).getFullYear() },
      { value: 100, month: getPast(7).getMonth() + 1, year: getPast(7).getFullYear() },
      { value: 300, month: getPast(6).getMonth() + 1, year: getPast(6).getFullYear() },
      { value: 600, month: getPast(5).getMonth() + 1, year: getPast(5).getFullYear() },
      { value: 300, month: getPast(4).getMonth() + 1, year: getPast(4).getFullYear() },
      { value: 100, month: getPast(3).getMonth() + 1, year: getPast(3).getFullYear() },
      { value: 300, month: getPast(2).getMonth() + 1, year: getPast(2).getFullYear() },
      { value: 600, month: getPast(1).getMonth() + 1, year: getPast(1).getFullYear() },
      { value: 300, month: getPast(0).getMonth() + 1, year: getPast(0).getFullYear() },
    ],
    name: 'Angular',
  }),
  Vector.from({
    dataPoints: [
      { value: 800, month: getPast(11).getMonth() + 1, year: getPast(11).getFullYear() },
      { value: 500, month: getPast(10).getMonth() + 1, year: getPast(10).getFullYear() },
      { value: 800, month: getPast(9).getMonth() + 1, year: getPast(9).getFullYear() },
      { value: 400, month: getPast(8).getMonth() + 1, year: getPast(8).getFullYear() },
      { value: 800, month: getPast(7).getMonth() + 1, year: getPast(7).getFullYear() },
      { value: 500, month: getPast(6).getMonth() + 1, year: getPast(6).getFullYear() },
      { value: 200, month: getPast(5).getMonth() + 1, year: getPast(5).getFullYear() },
      { value: 400, month: getPast(4).getMonth() + 1, year: getPast(4).getFullYear() },
      { value: 600, month: getPast(3).getMonth() + 1, year: getPast(3).getFullYear() },
      { value: 500, month: getPast(2).getMonth() + 1, year: getPast(2).getFullYear() },
      { value: 300, month: getPast(1).getMonth() + 1, year: getPast(1).getFullYear() },
      { value: 700, month: getPast(0).getMonth() + 1, year: getPast(0).getFullYear() },
    ],
    name: 'Node JS',
  }),
]);
