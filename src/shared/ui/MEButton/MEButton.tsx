import clsx from 'clsx';
import * as React from 'react';
import { type ButtonHTMLAttributes } from 'react';

import LoadingIcon from '@/assets/icons/loadingicn.svg?react';

import styles from './MEButton.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'linked' | 'canceled';
export type ButtonSize = 'huge' | 'medium' | 'small';

export interface MEButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export const MEButton: React.FC<MEButtonProps> = ({
  variant,
  size = 'medium',
  children,
  loading,
  disabled,
  ...props
}) => {
  const btnCl = clsx(styles.btn, styles[`btn--${variant}`], styles[`btn--${size}`]);
  return (
    <button className={btnCl} disabled={loading ?? disabled} {...props}>
      {children}
      {loading ?? <LoadingIcon className={styles.btnLoadingIndicator} />}
    </button>
  );
};
