import { TimeSeries, Vector } from '@teambit/analytics.timeseries';

export const getPast = (past: number) => {
  const date = new Date()
  date.setDate(1)
  date.setMonth(date.getMonth() - past);
  return date;
};

export const metric1Value = Vector.from([
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

export const metric2Value = Vector.from([
  { value: 33232, month: getPast(11).getMonth() + 1, year: getPast(11).getFullYear() },
  { value: 23538, month: getPast(10).getMonth() + 1, year: getPast(10).getFullYear() },
  { value: 63232, month: getPast(9).getMonth() + 1, year: getPast(9).getFullYear() },
  { value: 43232, month: getPast(8).getMonth() + 1, year: getPast(8).getFullYear() },
  { value: 53232, month: getPast(7).getMonth() + 1, year: getPast(7).getFullYear() },
  { value: 83232, month: getPast(6).getMonth() + 1, year: getPast(6).getFullYear() },
  { value: 63232, month: getPast(5).getMonth() + 1, year: getPast(5).getFullYear() },
  { value: 93232, month: getPast(4).getMonth() + 1, year: getPast(4).getFullYear() },
  { value: 23232, month: getPast(3).getMonth() + 1, year: getPast(3).getFullYear() },
  { value: 33345, month: getPast(2).getMonth() + 1, year: getPast(2).getFullYear() },
  { value: 40232, month: getPast(1).getMonth() + 1, year: getPast(1).getFullYear() },
  { value: 60232, month: getPast(0).getMonth() + 1, year: getPast(0).getFullYear() },
]);

export const barChartValue = TimeSeries.from([
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

export const pieChartValue = TimeSeries.from([
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

export const tableValue = [
  ['Name', 'Exports', 'Components'],
  ['Member a', 103, 327],
  ['Member b', 20, 6],
  ['Member c', 39, 15],
  ['Member d', 72, 88],
  ['Member e', 39, 57],
  ['Member f', 19, 10],
];

export const lineChartValue = TimeSeries.from([
  Vector.from({
    dataPoints: [
      { value: 100, month: getPast(11).getMonth() + 1, year: getPast(11).getFullYear() },
      { value: 300, month: getPast(10).getMonth() + 1, year: getPast(10).getFullYear() },
      { value: 250, month: getPast(9).getMonth() + 1, year: getPast(9).getFullYear() },
      { value: 450, month: getPast(8).getMonth() + 1, year: getPast(8).getFullYear() },
      { value: 400, month: getPast(7).getMonth() + 1, year: getPast(7).getFullYear() },
      { value: 600, month: getPast(6).getMonth() + 1, year: getPast(6).getFullYear() },
      { value: 550, month: getPast(5).getMonth() + 1, year: getPast(5).getFullYear() },
      { value: 650, month: getPast(4).getMonth() + 1, year: getPast(4).getFullYear() },
      { value: 700, month: getPast(3).getMonth() + 1, year: getPast(3).getFullYear() },
      { value: 800, month: getPast(2).getMonth() + 1, year: getPast(2).getFullYear() },
      { value: 750, month: getPast(1).getMonth() + 1, year: getPast(1).getFullYear() },
      { value: 900, month: getPast(0).getMonth() + 1, year: getPast(0).getFullYear() },
    ],
    name: 'Category a',
  }),
  Vector.from({
    dataPoints: [
      { value: 200, month: getPast(11).getMonth() + 1, year: getPast(11).getFullYear() },
      { value: 500, month: getPast(10).getMonth() + 1, year: getPast(10).getFullYear() },
      { value: 300, month: getPast(9).getMonth() + 1, year: getPast(9).getFullYear() },
      { value: 600, month: getPast(8).getMonth() + 1, year: getPast(8).getFullYear() },
      { value: 400, month: getPast(7).getMonth() + 1, year: getPast(7).getFullYear() },
      { value: 700, month: getPast(6).getMonth() + 1, year: getPast(6).getFullYear() },
      { value: 500, month: getPast(5).getMonth() + 1, year: getPast(5).getFullYear() },
      { value: 800, month: getPast(4).getMonth() + 1, year: getPast(4).getFullYear() },
      { value: 600, month: getPast(3).getMonth() + 1, year: getPast(3).getFullYear() },
      { value: 900, month: getPast(2).getMonth() + 1, year: getPast(2).getFullYear() },
      { value: 700, month: getPast(1).getMonth() + 1, year: getPast(1).getFullYear() },
      { value: 950, month: getPast(0).getMonth() + 1, year: getPast(0).getFullYear() },
    ],
    name: 'Category b',
  }),
  Vector.from({
    dataPoints: [
      { value: 50, month: getPast(11).getMonth() + 1, year: getPast(11).getFullYear() },
      { value: 200, month: getPast(10).getMonth() + 1, year: getPast(10).getFullYear() },
      { value: 250, month: getPast(9).getMonth() + 1, year: getPast(9).getFullYear() },
      { value: 300, month: getPast(8).getMonth() + 1, year: getPast(8).getFullYear() },
      { value: 250, month: getPast(7).getMonth() + 1, year: getPast(7).getFullYear() },
      { value: 400, month: getPast(6).getMonth() + 1, year: getPast(6).getFullYear() },
      { value: 350, month: getPast(5).getMonth() + 1, year: getPast(5).getFullYear() },
      { value: 500, month: getPast(4).getMonth() + 1, year: getPast(4).getFullYear() },
      { value: 450, month: getPast(3).getMonth() + 1, year: getPast(3).getFullYear() },
      { value: 600, month: getPast(2).getMonth() + 1, year: getPast(2).getFullYear() },
      { value: 550, month: getPast(1).getMonth() + 1, year: getPast(1).getFullYear() },
      { value: 700, month: getPast(0).getMonth() + 1, year: getPast(0).getFullYear() },
    ],
    name: 'Category c',
  }),
]);
