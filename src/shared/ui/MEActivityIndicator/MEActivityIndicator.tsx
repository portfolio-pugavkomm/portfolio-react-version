import clsx from 'clsx';
import * as React from 'react';

import LoadingIcon from '@/assets/icons/loadingicn.svg?react';

import styles from './MEActivityIndicator.module.css';

export type MEActivityIndicatorSize = 'small' | 'medium' | 'huge' | 'extra';

export interface MEActivityIndicatorProps {
  color?: string;
  size?: MEActivityIndicatorSize;
}

export const MEActivityIndicator: React.FC<MEActivityIndicatorProps> = ({
  color,
  size = 'medium',
}) => (
  <LoadingIcon
    title={'Loading'}
    fill="currentColor"
    className={clsx(styles.activityIndicator, styles[size])}
    role="img"
    style={{ color: color }}
  />
);
