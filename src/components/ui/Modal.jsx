import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import { Button, palette } from './Button'
import { cn } from './utils'

export function Modal({ open, onClose, title, children, footer, size = 'md' }) {
  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose?.()
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [onClose])

  if (!open) return null

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className={cn('relative w-full rounded-2xl bg-white shadow-lg', sizes[size])} style={{ border: `1px solid ${palette.primary}` }}>
        <div className="flex items-center justify-between border-b px-4 py-3" style={{ borderColor: palette.primary }}>
          <h3 className="text-base font-semibold" style={{ color: palette.text }}>{title}</h3>
          <button onClick={onClose} className="rounded-lg p-1 hover:bg-gray-100">
            <X size={18} />
          </button>
        </div>
        <div className="px-4 py-3">{children}</div>
        {footer !== undefined ? (
          <div className="flex items-center justify-end gap-2 border-t px-4 py-3" style={{ borderColor: palette.primary }}>
            {footer}
          </div>
        ) : (
          <div className="flex items-center justify-end gap-2 border-t px-4 py-3" style={{ borderColor: palette.primary }}>
            <Button variant="secondary" onClick={onClose}>Закрыть</Button>
            <Button>Сохранить</Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
