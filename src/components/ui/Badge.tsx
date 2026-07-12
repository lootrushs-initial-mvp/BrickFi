import React from 'react';

type BadgeProps = {
  children: React.ReactNode;
  color?: 'green' | 'red' | 'blue' | 'yellow' | 'orange' | 'purple' | 'accent';
  variant?: 'solid' | 'subtle';
};

const colorStyles = {
  solid: {
    green: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    red: 'bg-red-500/20 text-red-300 border-red-500/30',
    blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    yellow: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    orange: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    purple: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    accent: 'bg-accent-muted text-accent border-accent/30',
  },
  subtle: {
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    yellow: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    purple: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    accent: 'bg-accent/10 text-accent border-accent/20',
  },
};

export function Badge({
  children,
  color = 'accent',
  variant = 'solid',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border
        ${colorStyles[variant][color]}
      `}
    >
      {children}
    </span>
  );
}
