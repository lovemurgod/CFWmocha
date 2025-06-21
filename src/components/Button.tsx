import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles = "inline-block font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-[#F5C243] text-[#1A2A40] hover:bg-[#f7cd63] focus:ring-[#F5C243]",
    secondary: "bg-[#1A2A40] text-white hover:bg-[#263b59] focus:ring-[#1A2A40]",
    outline: "bg-transparent border-2 border-[#F5C243] text-[#F5C243] hover:bg-[#F5C243]/10 focus:ring-[#F5C243]"
  };
  
  const sizeStyles = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4"
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
