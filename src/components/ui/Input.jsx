import React from 'react'
import { palette } from './Button'
import { cn } from './utils'

export function Input({
  label,
  helper,
  error,
  className,
  leftIcon,
  rightIcon,
  ...props
}) {
  const baseBorder = error ? `1px solid #ef4444` : `1px solid ${palette.primary}`
  const focusRing = error ? 'rgba(239,68,68,0.35)' : 'rgba(255,182,193,0.45)'

  return (
    <label className={cn('block text-left', className)}>
      {label && (
        <span className="mb-1 block text-sm" style={{ color: palette.text }}>
          {label}
        </span>
      )}
      <div
        className={cn(
          'flex items-center rounded-xl bg-white transition-shadow',
        )}
        style={{ border: baseBorder }}
      >
        {leftIcon && (
          <span className="pl-3 text-gray-500 inline-flex">{leftIcon}</span>
        )}
        <input
          className={cn(
            'w-full rounded-xl bg-transparent px-3 py-2.5 outline-none placeholder:text-gray-400',
            leftIcon ? 'pl-2' : 'pl-3',
            rightIcon ? 'pr-2' : 'pr-3',
          )}
          style={{ color: palette.text }}
          onFocus={(e) => {
            e.currentTarget.parentElement.style.boxShadow = `0 0 0 4px ${focusRing}`
          }}
          onBlur={(e) => {
            e.currentTarget.parentElement.style.boxShadow = 'none'
          }}
          {...props}
        />
        {rightIcon && (
          <span className="pr-3 text-gray-500 inline-flex">{rightIcon}</span>
        )}
      </div>
      {helper && !error && (
        <span className="mt-1 block text-xs text-gray-500">{helper}</span>
      )}
      {error && (
        <span className="mt-1 block text-xs text-red-600">{error}</span>
      )}
    </label>
  )
}

export default Input
