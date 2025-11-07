import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, SlidersHorizontal, Star } from 'lucide-react'
import { Button, palette } from './ui/Button'
import { Input } from './ui/Input'
import CardMaster from './ui/CardMaster'

const mockMasters = [
  { id: 'm1', name: 'Анна', role: 'Бровист', rating: 4.9, tags: ['Lamination', 'Correction'], avatar: 'https://i.pravatar.cc/100?img=5' },
  { id: 'm2', name: 'Марина', role: 'Мастер маникюра', rating: 4.8, tags: ['Gel', 'Design'], avatar: 'https://i.pravatar.cc/100?img=15' },
  { id: 'm3', name: 'Екатерина', role: 'Визажист', rating: 4.7, tags: ['Bridal', 'Evening'], avatar: 'https://i.pravatar.cc/100?img=25' },
  { id: 'm4', name: 'Ольга', role: 'Стилист', rating: 4.9, tags: ['Color', 'Care'], avatar: 'https://i.pravatar.cc/100?img=35' }
]

export default function Home() {
  const [query, setQuery] = useState('')
  const [minRating, setMinRating] = useState(0)

  const filtered = mockMasters.filter(m =>
    m.name.toLowerCase().includes(query.toLowerCase()) && m.rating >= minRating
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-col gap-3 rounded-2xl border p-4 md:flex-row md:items-center md:justify-between" style={{ borderColor: palette.primary, backgroundColor: '#FFFFFF' }}>
        <div className="flex flex-1 items-end gap-3">
          <div className="w-full md:w-1/2">
            <Input label="Поиск мастеров" value={query} onChange={e => setQuery(e.target.value)} leftIcon={<Search size={16} />} placeholder="Имя, услуга, локация" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" leftIcon={<SlidersHorizontal size={16} />}>Фильтры</Button>
            <Link to="/search"><Button>Расширенный поиск</Button></Link>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-flex items-center gap-1 rounded-full px-3 py-2" style={{ backgroundColor: '#FFF9FB', color: palette.text, border: `1px solid ${palette.primary}` }}>
            <Star size={14} className="text-yellow-500" />
            Мин. рейтинг:
          </span>
          <div className="flex gap-1">
            {[0,4,4.5,4.8].map(r => (
              <button key={r} onClick={() => setMinRating(r)} className={`rounded-full px-3 py-2 text-sm ${minRating===r ? 'text-white' : ''}`} style={{ backgroundColor: minRating===r ? palette.accent : '#EFE7FF', color: minRating===r ? 'white' : palette.text }}>
                {r === 0 ? 'Все' : r}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(m => (
          <Link key={m.id} to={`/master/${m.id}`} className="block">
            <CardMaster name={m.name} role={m.role} rating={m.rating} tags={m.tags} avatar={m.avatar} />
          </Link>
        ))}
      </div>
    </div>
  )
}
