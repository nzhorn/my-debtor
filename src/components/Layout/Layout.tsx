import React from 'react';
import Header from '../Header';
import './Layout.styles.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
