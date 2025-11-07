import React from 'react'
import { Star, MapPin } from 'lucide-react'
import { Button, palette } from './Button'

export function CardMaster({
  name,
  role,
  rating = 4.9,
  reviews = 120,
  distance = '1.2 км',
  avatar,
  tags = [],
  onBook,
}) {
  return (
    <div className="group rounded-2xl border bg-white p-4 transition-shadow hover:shadow-md" style={{ borderColor: palette.primary }}>
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-tr from-pink-200 to-purple-200">
          {avatar ? (
            <img src={avatar} alt={name} className="h-full w-full object-cover" />
          ) : null}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="truncate text-base font-semibold" style={{ color: palette.text }}>{name}</div>
              <div className="truncate text-sm text-gray-500">{role}</div>
            </div>
            <div className="ml-3 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs text-amber-700">
              <Star size={14} className="text-amber-500" fill="#f59e0b" />
              <span>{rating}</span>
              <span className="text-gray-400">({reviews})</span>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1 text-gray-500"><MapPin size={14} />{distance}</span>
            {tags.slice(0,3).map((t) => (
              <span key={t} className="rounded-full bg-pink-50 px-2 py-1 text-pink-700">{t}</span>
            ))}
          </div>
          <div className="mt-3">
            <Button variant="secondary" onClick={onBook}>Забронировать</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardMaster
