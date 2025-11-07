import React from 'react'
import { Star } from 'lucide-react'

export default function StarRating({ value = 0, size = 16, className = '' }) {
  const fullStars = Math.floor(value)
  const hasHalf = value - fullStars >= 0.5
  const total = 5

  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`Рейтинг ${value} из 5`}>
      {Array.from({ length: total }).map((_, i) => {
        const filled = i < fullStars
        const half = !filled && i === fullStars && hasHalf
        const fillColor = filled ? '#f59e0b' : half ? 'url(#half)' : 'none'
        const strokeColor = filled || half ? '#f59e0b' : '#d1d5db'
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.87 1.401-8.168L.132 9.211l8.2-1.193L12 .587z" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
          </svg>
        )
      })}
      <span className="ml-1 text-xs text-gray-700">{value.toFixed(1)}</span>
    </div>
  )
}
