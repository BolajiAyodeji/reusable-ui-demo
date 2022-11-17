import React from 'react';
import classNames from 'classnames';
import { BarChart, BarChartProps } from '@teambit/analytics.charts.bar-chart';
import { dependentsValue } from './dependents.mock';
import styles from './dependents.module.scss';

export type DependentsProps = React.HTMLAttributes<HTMLDivElement> & BarChartProps;

export function Dependents({ disableCard, className, ...rest }: DependentsProps) {
  return (
    <div className={classNames(styles.dependents, className)} {...rest}>
      <BarChart
        className={styles.bar}
        width={0}
        title="Dependents"
        subtitle="Component dependents"
        colors={['#6633CC', '#DD4477']}
        chartData={dependentsValue}
        disableCard={disableCard}
      />
    </div>
  );
}
