import React from 'react';
import './Layout.styles.scss';
import Header from '../Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <Header/>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
