import { ComponentType } from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export interface BentoCardProps {
  title: string;
  subtitle?: string;
  icon?: ComponentType<{ className?: string }>;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export interface StatProps {
  value: string | number;
  label: string;
}

