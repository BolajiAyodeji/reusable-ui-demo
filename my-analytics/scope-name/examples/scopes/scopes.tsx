import React from 'react';
import classNames from 'classnames';
import { Metric } from '@teambit/analytics.metric-card';
import { scopesValue } from './scopes.mock';
import styles from './scopes.module.scss';

export type ScopesProps = React.HTMLAttributes<HTMLDivElement>;

export function Scopes({ className, ...rest }: ScopesProps) {
  return (
    <div className={classNames(styles.scopes, className)} {...rest}>
      <Metric
        className={styles.metric}
        chart
        title="Scopes"
        value={scopesValue}
      />
    </div>
  );
}
