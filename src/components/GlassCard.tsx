import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  title?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", onClick, title }) => {
  return (
    <div 
      onClick={onClick}
      className={`glass-panel rounded-2xl p-6 transition-colors duration-200 ${onClick ? 'cursor-pointer hover:bg-white/80 hover:border-white' : ''} ${className}`}
    >
      {title && (
        <h3 className="text-lg font-bold text-gray-900 mb-5 tracking-tight border-b border-gray-200/50 pb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-gray-800 rounded-full"></span>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};