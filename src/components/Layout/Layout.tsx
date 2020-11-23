import React from 'react';
import './Layout.styles.scss';

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="container">
      <div className="logo">Debtor</div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
