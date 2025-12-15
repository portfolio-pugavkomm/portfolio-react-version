import clsx from 'clsx';
import type { FC } from 'react';
import { type LinkProps, NavLink } from 'react-router';

import styles from './MENavItem.module.css';

export type MENavItemProps = LinkProps;

export const MENavItem: FC<MENavItemProps> = ({ to, ...props }) => {
  return (
    <NavLink
      className={({ isActive }) => clsx(styles['me-nav-item'], { [styles.active]: isActive })}
      to={to}
      {...props}
    />
  );
};
