import React from 'react';
import './Card.styles.scss';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card = ({ children, title }: CardProps) => {
  return (
    <>
      <div className="card">
        <div className="card__title">{title}</div>
        <div className="card__content">{children}</div>
      </div>
    </>
  );
};

export default Card;
