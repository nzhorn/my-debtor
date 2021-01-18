import React from 'react';
import './Header.styles.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Debtor</div>
      <div className="account-settings">Log out</div>
    </div>
  );
};

export default Header;
