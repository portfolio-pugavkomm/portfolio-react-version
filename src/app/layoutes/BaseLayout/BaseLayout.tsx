import { Outlet } from 'react-router';

import { Header } from '@/widgets/Header';

import styles from './BaseLayout.module.css';

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
};
