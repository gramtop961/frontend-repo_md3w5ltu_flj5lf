import React, { useMemo } from 'react'
import { Calendar, MapPin, DollarSign, Star } from 'lucide-react'
import { Input } from './ui/Input'
import { palette } from './ui/Button'

export default function SearchFilters({ city, setCity, minRating, setMinRating, price, setPrice, date, setDate }) {
  const priceLabel = useMemo(() => {
    if (!price) return 'Любая'
    if (price < 1500) return 'До 1500₽'
    if (price < 3000) return 'До 3000₽'
    return '3k+ ₽'
  }, [price])

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Input label="Город" value={city} onChange={e=>setCity(e.target.value)} leftIcon={<MapPin size={16} />} />
      <label className="block text-left">
        <span className="mb-1 block text-sm" style={{ color: palette.text }}>Рейтинг, не ниже</span>
        <div className="flex items-center rounded-xl border bg-white px-3 py-2.5" style={{ borderColor: palette.primary }}>
          <Star size={16} className="text-amber-500 mr-2" />
          <input type="range" min="0" max="5" step="0.5" value={minRating} onChange={e=>setMinRating(parseFloat(e.target.value))} className="w-full" />
          <span className="ml-2 text-sm" style={{ color: palette.text }}>{minRating.toFixed(1)}</span>
        </div>
      </label>
      <label className="block text-left">
        <span className="mb-1 block text-sm" style={{ color: palette.text }}>Цена</span>
        <div className="flex items-center rounded-xl border bg-white px-3 py-2.5" style={{ borderColor: palette.primary }}>
          <DollarSign size={16} className="text-emerald-500 mr-2" />
          <input type="range" min="0" max="4000" step="100" value={price} onChange={e=>setPrice(parseInt(e.target.value))} className="w-full" />
          <span className="ml-2 text-sm" style={{ color: palette.text }}>{priceLabel}</span>
        </div>
      </label>
      <label className="block text-left">
        <span className="mb-1 block text-sm" style={{ color: palette.text }}>Доступная дата</span>
        <div className="flex items-center rounded-xl border bg-white px-3 py-2.5" style={{ borderColor: palette.primary }}>
          <Calendar size={16} className="text-purple-500 mr-2" />
          <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="w-full outline-none" />
        </div>
      </label>
    </div>
  )
}
