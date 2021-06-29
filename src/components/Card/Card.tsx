import React from 'react';
import './Card.styles.scss';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <>
      <div className="card">
        <div className="card__content">{children}</div>
      </div>
    </>
  );
};

export default Card;
