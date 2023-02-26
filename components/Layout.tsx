import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import styles from './layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const homePage = router.pathname === '/';
  const aboutPage = router.pathname === '/about';
  const layoutClasses = `${styles.layout} ${homePage ? 'background background__home' : ''} ${aboutPage ? 'background background__about' : ''}`;

  return (
    <div className={layoutClasses}>
      {children}
    </div>
  );
};

export default Layout;