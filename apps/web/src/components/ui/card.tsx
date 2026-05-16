import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps): JSX.Element {
  return (
    <div
      className={`bg-navy-800 border border-navy-700 rounded-xl p-5 ${className}`}
    >
      {children}
    </div>
  );
}