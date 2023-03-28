import React from 'react';
import { GoogleAnalytics } from "nextjs-google-analytics";
import '../styles/style.scss';

interface WeekendLabsProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

const WeekendLabs: React.FC<WeekendLabsProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
};

export default WeekendLabs;