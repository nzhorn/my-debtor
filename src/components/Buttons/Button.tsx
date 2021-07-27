import React from 'react';
import './Button.styles.scss';

type Theme = 'primary' | 'accent' | 'outline-primary' | 'outline-accent' | 'link';

type ButtonProps = {
  theme: Theme;
  type: 'button' | 'submit';
  disabled: boolean;
  action: () => {};
  children?: React.ReactNode;
};

const Button = ({ type = 'submit', action, theme = 'primary', disabled = false, children }: Partial<ButtonProps>) => {
  return (
    <button type={type} disabled={disabled} className={theme} onClick={action}>
      {children}
    </button>
  );
};

export default Button;
