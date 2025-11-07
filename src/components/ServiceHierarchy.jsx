import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Layers } from 'lucide-react'
import { palette } from './ui/Button'

const DATA = [
  {
    name: 'Ногтевой сервис',
    children: [
      { name: 'Маникюр', tags: ['гель-лак', 'классический'] },
      { name: 'Педикюр' },
      { name: 'Наращивание ногтей' },
    ],
  },
  {
    name: 'Парикмахерские услуги',
    children: [
      { name: 'Стрижки женские/мужские' },
      { name: 'Окрашивание' },
      { name: 'Укладки' },
    ],
  },
  {
    name: 'Ресницы и брови',
    children: [
      { name: 'Наращивание ресниц' },
      { name: 'Ламинирование' },
      { name: 'Коррекция бровей' },
    ],
  },
  {
    name: 'Косметология',
    children: [
      { name: 'Чистка лица' },
      { name: 'Уходовые процедуры' },
      { name: 'Аппаратная косметология' },
    ],
  },
]

export default function ServiceHierarchy({ selected, onToggle }) {
  const [open, setOpen] = useState(() => new Set(DATA.map(c => c.name)))

  const toggleOpen = (name) => {
    const next = new Set(open)
    if (next.has(name)) next.delete(name)
    else next.add(name)
    setOpen(next)
  }

  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: palette.primary, background: '#FFFFFF' }}>
      <div className="mb-3 flex items-center gap-2">
        <Layers size={16} className="text-purple-500" />
        <h3 className="font-semibold" style={{ color: palette.text }}>Категории услуг</h3>
      </div>
      <ul className="space-y-2">
        {DATA.map((cat) => (
          <li key={cat.name}>
            <button
              className="flex w-full items-center justify-between rounded-xl px-3 py-2 hover:bg-pink-50"
              onClick={() => toggleOpen(cat.name)}
            >
              <span className="font-medium" style={{ color: palette.text }}>{cat.name}</span>
              {open.has(cat.name) ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </button>
            {open.has(cat.name) && (
              <div className="mt-1 space-y-1 pl-3">
                {cat.children.map((sub) => (
                  <div key={sub.name}>
                    <label className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-1.5 hover:bg-pink-50">
                      <span className="text-sm" style={{ color: palette.text }}>{sub.name}
                        {sub.tags && (
                          <span className="ml-2 text-xs text-gray-500">({sub.tags.join(', ')})</span>
                        )}
                      </span>
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-purple-500 focus:ring-purple-300"
                        checked={selected.includes(sub.name)}
                        onChange={() => onToggle(sub.name)}
                      />
                    </label>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
