import clsx from 'clsx';
import { type FC, type HTMLAttributes } from 'react';

import styles from './MEFlexContainer.module.css';

export type MEFlexContainerDirection = 'col' | 'col-r' | 'row' | 'row-r';

export type ContainerGap = 's' | 'm' | 'x' | 'xl' | '2xl' | '3xl' | '4xl';

export interface MEFlexContainerProps extends HTMLAttributes<HTMLDivElement> {
  direction?: MEFlexContainerDirection;
  gap?: ContainerGap;
  flexWrap?: boolean;
}

export const MEFlexContainer: FC<MEFlexContainerProps> = ({
  direction = 'col',
  gap = 's',
  children,
  ...props
}) => {
  const containerCl = clsx(styles.flexContainer, styles[direction], styles[`gap-${gap}`]);
  return (
    <div className={containerCl} {...props}>
      {children}
    </div>
  );
};
