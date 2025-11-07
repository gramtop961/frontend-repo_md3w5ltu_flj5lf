import React, { useState } from 'react'
import { Search, Tag, MapPin, X } from 'lucide-react'
import { Input } from './ui/Input'
import { Button, palette } from './ui/Button'

const categories = ['Маникюр', 'Педикюр', 'Брови', 'Ресницы', 'Макияж', 'Стрижка', 'Окрашивание']

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [city, setCity] = useState('Москва')
  const [selected, setSelected] = useState([])

  const toggle = (c) => setSelected(prev => prev.includes(c) ? prev.filter(x => x!==c) : [...prev, c])

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="rounded-2xl border p-6" style={{ borderColor: palette.primary, background: '#FFFFFF' }}>
        <div className="grid gap-4 md:grid-cols-3">
          <Input label="Что ищем?" value={query} onChange={e=>setQuery(e.target.value)} leftIcon={<Search size={16} />} placeholder="Услуга или мастер" />
          <Input label="Город" value={city} onChange={e=>setCity(e.target.value)} leftIcon={<MapPin size={16} />} />
          <div className="flex items-end">
            <Button className="w-full">Найти</Button>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="mb-3 font-medium" style={{ color: palette.text }}>Категории</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c} onClick={()=>toggle(c)} className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-sm ${selected.includes(c) ? 'text-white' : ''}`} style={{ borderColor: palette.primary, backgroundColor: selected.includes(c) ? palette.accent : '#FFF9FB', color: selected.includes(c) ? 'white' : palette.text }}>
                <Tag size={14} /> {c}
                {selected.includes(c) && <X size={14} className="ml-1 opacity-80" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm opacity-80">
        Выбрано: {selected.length ? selected.join(', ') : 'ничего'}
      </div>
    </div>
  )
}
