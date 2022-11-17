import React from 'react';
import classNames from 'classnames';
import { LineChart, LineChartProps } from '@teambit/analytics.charts.line-chart';
import { topCategoriesValue } from './top-categories.mock';
import styles from './top-categories.module.scss';

export type TopCategoriesProps = React.HTMLAttributes<HTMLDivElement> & LineChartProps;

export function TopCategories({ disableCard, className, ...rest }: TopCategoriesProps) {
  return (
    <div className={classNames(styles['top-categories'], className)} {...rest}>
      <LineChart
        className={styles.line}
        width={0}
        height={336}
        title="Top 3 Categories"
        subtitle="Popular categories"
        colors={['#B91383', '#37B26C', '#3366CC']}
        chartData={topCategoriesValue}
        disableCard={disableCard}
      />
    </div>
  );
}
