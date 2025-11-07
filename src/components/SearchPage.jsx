import React, { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from './ui/Input'
import { Button, palette } from './ui/Button'
import CardMaster from './ui/CardMaster'
import ServiceHierarchy from './ServiceHierarchy'
import SearchFilters from './SearchFilters'

const MASTERS = [
  { id: 'm1', name: 'Анна', role: 'Бровист', rating: 4.9, city: 'Москва', price: 2000, nextDate: '2025-11-12', services: ['Ламинирование', 'Коррекция бровей'], avatar: 'https://i.pravatar.cc/100?img=5' },
  { id: 'm2', name: 'Марина', role: 'Мастер маникюра', rating: 4.8, city: 'Санкт-Петербург', price: 1400, nextDate: '2025-11-15', services: ['Маникюр', 'Маникюр: гель-лак'], avatar: 'https://i.pravatar.cc/100?img=15' },
  { id: 'm3', name: 'Екатерина', role: 'Стилист', rating: 4.6, city: 'Москва', price: 3200, nextDate: '2025-11-20', services: ['Окрашивание', 'Укладки', 'Стрижки женские/мужские'], avatar: 'https://i.pravatar.cc/100?img=25' },
  { id: 'm4', name: 'Ольга', role: 'Ногтевой мастер', rating: 4.7, city: 'Казань', price: 1800, nextDate: '2025-11-10', services: ['Педикюр', 'Наращивание ногтей'], avatar: 'https://i.pravatar.cc/100?img=35' },
  { id: 'm5', name: 'София', role: 'Косметолог', rating: 4.5, city: 'Москва', price: 2800, nextDate: '2025-11-09', services: ['Чистка лица', 'Уходовые процедуры'], avatar: 'https://i.pravatar.cc/100?img=45' },
]

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [city, setCity] = useState('Москва')
  const [selected, setSelected] = useState([])
  const [minRating, setMinRating] = useState(0)
  const [price, setPrice] = useState(0)
  const [date, setDate] = useState('')

  const onToggleService = (name) =>
    setSelected((prev) => (prev.includes(name) ? prev.filter((x) => x !== name) : [...prev, name]))

  const results = useMemo(() => {
    return MASTERS.filter((m) => {
      const matchesQuery = [m.name, m.role, ...(m.services || [])]
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase())

      const matchesCity = city ? m.city.toLowerCase().includes(city.toLowerCase()) : true
      const matchesRating = m.rating >= minRating
      const matchesPrice = price ? m.price <= price : true
      const matchesDate = date ? m.nextDate >= date : true
      const matchesServices = selected.length
        ? selected.some((s) => (m.services || []).some((ms) => ms.toLowerCase().includes(s.toLowerCase())))
        : true

      return matchesQuery && matchesCity && matchesRating && matchesPrice && matchesDate && matchesServices
    })
  }, [query, city, minRating, price, date, selected])

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="rounded-2xl border p-6" style={{ borderColor: palette.primary, background: '#FFFFFF' }}>
        <div className="grid gap-4 md:grid-cols-3">
          <Input label="Что ищем?" value={query} onChange={(e) => setQuery(e.target.value)} leftIcon={<Search size={16} />} placeholder="Услуга, мастер" />
          <div className="md:col-span-2"><SearchFilters city={city} setCity={setCity} minRating={minRating} setMinRating={setMinRating} price={price} setPrice={setPrice} date={date} setDate={setDate} /></div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-[320px_1fr]">
          <ServiceHierarchy selected={selected} onToggle={onToggleService} />
          <div>
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm" style={{ color: palette.text }}>
                Найдено: <span className="font-semibold">{results.length}</span>
                {selected.length > 0 && (
                  <span className="ml-2 text-gray-500">по: {selected.join(', ')}</span>
                )}
              </div>
              <Button variant="secondary">Сбросить фильтры</Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {results.map((m) => (
                <CardMaster key={m.id} name={m.name} role={`${m.role} • ${m.city}`} rating={m.rating} tags={m.services?.slice(0,3)} avatar={m.avatar} />
              ))}
              {results.length === 0 && (
                <div className="rounded-xl border p-6 text-sm text-gray-600" style={{ borderColor: palette.primary }}>
                  Ничего не найдено. Измените параметры фильтров.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
