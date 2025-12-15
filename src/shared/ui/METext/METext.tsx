import clsx from 'clsx';
import { type FC, type HTMLAttributes } from 'react';

import styles from './METext.module.css';

export type TextWeight =
  | 'thin'
  | 'extra-light'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold'
  | 'black';

export type TextSize = 's' | 'm' | 'xl' | 'xxl';

export interface METextProps extends HTMLAttributes<HTMLParagraphElement> {
  textWeight?: TextWeight;
  textSize?: TextSize;
}

export const METext: FC<METextProps> = ({
  textWeight = 'regular',
  textSize = 'xxl',
  children,
  ...props
}) => {
  const textCl = clsx(styles[textWeight], styles[textSize]);
  return (
    <p className={textCl} {...props}>
      {children}
    </p>
  );
};
