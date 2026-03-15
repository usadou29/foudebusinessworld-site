import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false }) => {
    return (
        <div className={`
      bg-brand-surface border border-white/5 rounded-lg overflow-hidden
      ${hoverEffect ? 'hover:border-brand-gold/30 transition-colors duration-300' : ''}
      ${className}
    `}>
            {children}
        </div>
    );
};

export default Card;
