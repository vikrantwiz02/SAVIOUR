// badge.tsx

import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'error';
  className?: string;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant = 'default', className, children }) => {
  const variantClasses = {
    default: 'bg-gray-200 text-gray-800',
    secondary: 'bg-indigo-100 text-indigo-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;