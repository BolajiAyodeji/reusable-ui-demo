import React from 'react';
import { H1 } from '@teambit/design.ui.heading';
import { Metric } from '@teambit/analytics.metric-card';
import { Scopes } from '@org/scope-name.examples.scopes';
import { Dependents } from '@org/scope-name.examples.dependents';
import { Envs } from '@org/scope-name.examples.envs';
import { TopMembers } from '@teambit/analytics.examples.top-members';
import { TopCategories } from '@org/scope-name.examples.top-categories';
import { metric2Value } from './metrics-summary.mock';
import { ThemeSwitcher } from '@teambit/design.themes.theme-toggler';
import styles from './metrics-summary.module.scss';

export type MetricsSummaryProps = React.HTMLAttributes<HTMLDivElement>;

export function MetricsSummary({ className, ...rest }: MetricsSummaryProps) {
  return (
    <ThemeSwitcher>
      <div className={className} {...rest}>
        <H1 size="md" className={styles.h1}>
          Demonstration of our Analytics components with sample data
        </H1>
        <div className={styles.metricsSummary}>
          <Scopes />
          <Metric
            chart
            className={styles.metric2}
            title="Components"
            value={metric2Value}
          />
          <Dependents />
          <Envs />
          <TopMembers />
          <TopCategories />
        </div>
      </div>
    </ThemeSwitcher>
  );
}
