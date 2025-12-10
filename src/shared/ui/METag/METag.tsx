import { type HTMLAttributes } from 'react';
import * as React from 'react';

export type TagSize = 'xxl' | 'xl' | 'm' | 's';
export type TagVariant = 'primary' | 'secondary' | 'info' | 'danger';
import clsx from 'clsx';

import styles from './METag.module.css';
export interface METagProps extends HTMLAttributes<HTMLDivElement> {
  size?: TagSize;
  variant?: TagVariant;
}

export const METag: React.FC<METagProps> = ({
  size = 'xxl',
  variant = 'primary',
  children,
  ...props
}) => {
  return (
    <div className={clsx(styles.meTag, styles[variant], styles[size])} {...props}>
      {children}
    </div>
  );
};
