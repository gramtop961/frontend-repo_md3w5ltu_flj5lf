import React from 'react'
import { cn } from './utils'

// Beauty palette tokens
export const palette = {
  primary: '#FFB6C1', // soft pink
  accent: '#9370DB', // lavender
  text: '#2D3748', // dark gray
  bg: '#FFF9FB', // pinkish white
}

const variants = {
  primary: {
    base: {
      backgroundColor: palette.primary,
      color: palette.text,
      border: '1px solid transparent',
    },
    hover: { backgroundColor: '#FFA5B4' },
    focus: { boxShadow: `0 0 0 4px rgba(255, 182, 193, 0.45)` },
  },
  secondary: {
    base: {
      backgroundColor: 'transparent',
      color: palette.accent,
      border: `1px solid ${palette.accent}`,
    },
    hover: { backgroundColor: 'rgba(147,112,219,0.08)', color: palette.text },
    focus: { boxShadow: `0 0 0 4px rgba(147,112,219,0.35)` },
  },
}

const sizes = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-base',
}

export function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  className,
  leftIcon,
  rightIcon,
  children,
  style,
  ...props
}) {
  const v = variants[variant] || variants.primary

  return (
    <Tag
      className={cn(
        'inline-flex items-center justify-center rounded-xl font-medium transition-colors',
        'focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed',
        sizes[size],
        className,
      )}
      style={{ ...v.base, ...style }}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, v.hover)
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, v.base)
      }}
      onFocus={(e) => {
        Object.assign(e.currentTarget.style, v.focus)
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = 'none'
      }}
      {...props}
    >
      {leftIcon && <span className="mr-2 inline-flex">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2 inline-flex">{rightIcon}</span>}
    </Tag>
  )
}

export default Button
