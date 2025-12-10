import clsx from 'clsx';
import * as React from 'react';
import { type LinkProps, NavLink } from 'react-router';

import styles from './MENavItem.module.css';

export type MENavItemProps = LinkProps;

export const MENavItem: React.FC<MENavItemProps> = ({ to, ...props }) => {
  return (
    <NavLink
      className={({ isActive }) => clsx(styles['me-nav-item'], { [styles.active]: isActive })}
      to={to}
      {...props}
    />
  );
};
