import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps): JSX.Element {
  const baseStyles =
    'px-4 py-2 rounded-lg font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-electric/50';

  const variantStyles = {
    primary: 'bg-electric text-navy-900 hover:bg-electric-dark',
    secondary: 'bg-navy-700 text-white hover:bg-navy-800',
    ghost: 'bg-transparent text-white hover:bg-navy-800',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}