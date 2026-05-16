import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({
  label,
  className = '',
  ...props
}: InputProps): JSX.Element {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm text-gray-300">{label}</label>
      )}
      <input
        className={`px-3 py-2 rounded-lg bg-navy-800 border border-navy-700 text-white placeholder:text-gray-500 focus:outline-none focus:border-electric ${className}`}
        {...props}
      />
    </div>
  );
}