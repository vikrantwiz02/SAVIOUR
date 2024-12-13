// components/ui/label.tsx

import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, ...props }) => {
  return (
    <label htmlFor={htmlFor} {...props} className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  );
};

export default Label;