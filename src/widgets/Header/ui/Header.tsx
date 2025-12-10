// import style from './Header.module.css';

import { MENavItem } from '@shared/ui/MENavItem';
import clsx from 'clsx';

import { navigationItems } from '../model/navigation-items.ts';
import styles from './Header.module.css';

export const Header = () => {
  const headerCl = clsx(styles.header);
  return (
    <nav className={headerCl}>
      {navigationItems.map((item) => (
        <MENavItem key={item.path} to={item.path}>
          {item.label}
        </MENavItem>
      ))}
    </nav>
  );
};
