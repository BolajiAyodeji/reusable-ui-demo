import React from 'react';
import classNames from 'classnames';
import { PieChart, PieChartProps } from '@teambit/analytics.charts.pie-chart';
import { envsValue } from './envs.mock';
import styles from './envs.module.scss';

export type EnvsProps = React.HTMLAttributes<HTMLDivElement> & PieChartProps;

export function Envs({ disableCard, className, ...rest }: EnvsProps) {
  return (
    <div className={classNames(styles.envs, className)} {...rest}>
      <PieChart
        className={styles.pie}
        width={0}
        height={320}
        title="Envs"
        subtitle="Most used environments"
        colors={['#0099C6', '#DC3912', '#66AA00']}
        chartData={envsValue}
        disableCard={disableCard}
      />
    </div>
  );
}
