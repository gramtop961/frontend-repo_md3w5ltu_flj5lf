import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CalendarDays, GraduationCap, Images, List, Sparkles, Star } from 'lucide-react'
import { Button, palette } from './ui/Button'

const MOCK = {
  m1: {
    id: 'm1',
    name: 'Анна Романова',
    role: 'Бровист / Визажист',
    rating: 4.9,
    reviews: 128,
    city: 'Москва',
    experience: '7 лет опыта в сфере бровей и макияжа. Работаю с 2017 года.',
    education: 'Школа Brow&Beauty, курс «Архитектура бровей»; Академия макияжа, 2019',
    about: 'Специализируюсь на естественных формах и мягких оттенках. Аккуратность и стерильность — мой приоритет.',
    avatar: 'https://i.pravatar.cc/200?u=m1',
    portfolio: {
      natural: [
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=800&auto=format&fit=crop'
      ],
      wedding: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519741498480-2f6f8f8aa4c5?q=80&w=800&auto=format&fit=crop'
      ],
    },
    services: [
      { name: 'Коррекция бровей', price: 1200, duration: 30 },
      { name: 'Окрашивание бровей', price: 1500, duration: 40 },
      { name: 'Ламинирование бровей', price: 2500, duration: 60 },
      { name: 'Вечерний макияж', price: 3500, duration: 70 },
    ],
    schedule: {
      available: [
        '2025-11-08', '2025-11-09', '2025-11-11', '2025-11-14'
      ],
      times: ['10:00', '12:00', '15:00', '18:00']
    },
  },
}

function Tabs({ value, onChange, items }) {
  return (
    <div>
      <div className="flex flex-wrap gap-2 rounded-xl bg-pink-50 p-1">
        {items.map((it) => (
          <button
            key={it.value}
            onClick={() => onChange(it.value)}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
              value === it.value ? 'bg-white text-pink-700 shadow' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {it.icon}
            {it.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function MasterProfile() {
  const { id } = useParams()
  const master = useMemo(() => MOCK[id] || MOCK.m1, [id])
  const [tab, setTab] = useState('about')

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="rounded-2xl border bg-white p-6" style={{ borderColor: palette.primary }}>
        <div className="flex flex-col gap-6 md:flex-row">
          <img src={master.avatar} alt={master.name} className="h-36 w-36 rounded-2xl object-cover" />
          <div className="flex-1">
            <h1 className="text-2xl font-semibold" style={{ color: palette.text }}>{master.name}</h1>
            <div className="mt-1 text-sm text-gray-600">{master.role}</div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-50 px-2 py-1 text-sm text-amber-700">
              <Star size={16} className="text-amber-500" fill="#f59e0b" />
              <span>{master.rating}</span>
              <span className="text-gray-400">({master.reviews})</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Tabs
            value={tab}
            onChange={setTab}
            items={[
              { value: 'about', label: 'О мастере', icon: <Sparkles size={16} /> },
              { value: 'portfolio', label: 'Портфолио', icon: <Images size={16} /> },
              { value: 'services', label: 'Услуги и цены', icon: <List size={16} /> },
              { value: 'schedule', label: 'Расписание', icon: <CalendarDays size={16} /> },
              { value: 'reviews', label: 'Отзывы', icon: <Star size={16} /> },
            ]}
          />
        </div>

        {tab === 'about' && (
          <section className="mt-6 space-y-4">
            <p className="leading-relaxed" style={{ color: palette.text }}>{master.about}</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-pink-50 p-4">
                <div className="mb-1 text-sm font-medium text-pink-800">Опыт</div>
                <div className="text-sm text-pink-900/80">{master.experience}</div>
              </div>
              <div className="rounded-xl bg-purple-50 p-4">
                <div className="mb-1 flex items-center gap-2 text-sm font-medium text-purple-800"><GraduationCap size={16}/> Образование</div>
                <div className="text-sm text-purple-900/80">{master.education}</div>
              </div>
            </div>
          </section>
        )}

        {tab === 'portfolio' && (
          <section className="mt-6 space-y-6">
            {Object.entries(master.portfolio).map(([cat, items]) => (
              <div key={cat}>
                <h3 className="mb-3 text-sm font-semibold capitalize text-gray-700">{cat}</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                  {items.map((src, idx) => (
                    <img key={src + idx} src={src} alt={`${cat}-${idx}`} className="h-28 w-full rounded-xl object-cover" />
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        {tab === 'services' && (
          <section className="mt-6">
            <div className="overflow-hidden rounded-xl border">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Услуга</th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Длительность</th>
                    <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">Цена</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {master.services.map((s) => (
                    <tr key={s.name}>
                      <td className="px-4 py-3 text-sm text-gray-800">{s.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{s.duration} мин</td>
                      <td className="px-4 py-3 text-right text-sm font-semibold text-gray-900">{s.price.toLocaleString('ru-RU')} ₽</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-right">
              <Button>Записаться</Button>
            </div>
          </section>
        )}

        {tab === 'schedule' && (
          <section className="mt-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border p-3">
                <div className="mb-2 text-sm font-medium text-gray-700">Ближайшие даты</div>
                <div className="flex flex-wrap gap-2">
                  {master.schedule.available.map((d) => (
                    <span key={d} className="rounded-lg bg-pink-50 px-2 py-1 text-sm text-pink-700">{new Date(d).toLocaleDateString('ru-RU')}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border p-3 md:col-span-2">
                <div className="mb-2 text-sm font-medium text-gray-700">Доступное время</div>
                <div className="flex flex-wrap gap-2">
                  {master.schedule.times.map((t) => (
                    <button key={t} className="rounded-lg border px-3 py-1 text-sm hover:bg-gray-50">{t}</button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === 'reviews' && (
          <section className="mt-6 space-y-4">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-xl border p-4">
                <div className="mb-1 flex items-center justify-between">
                  <div className="font-medium">Клиент {i}</div>
                  <div className="inline-flex items-center gap-1 text-amber-600"><Star size={16} fill="#f59e0b" className="text-amber-500"/> 5.0</div>
                </div>
                <p className="text-sm text-gray-700">Все прошло отлично! Очень аккуратно и красиво. Рекомендую.</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  )
}
