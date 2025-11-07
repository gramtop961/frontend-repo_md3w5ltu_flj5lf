import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, MapPin, CalendarDays } from 'lucide-react'
import { Button, palette } from './ui/Button'

const masters = {
  m1: { id: 'm1', name: 'Анна', role: 'Бровист', rating: 4.9, location: 'Москва, Центр', bio: 'Специалист по коррекции и ламинированию бровей. 7 лет опыта.' },
  m2: { id: 'm2', name: 'Марина', role: 'Мастер маникюра', rating: 4.8, location: 'СПб, Петроградский', bio: 'Нежные нюдовые и сложные дизайны. Тщательная стерилизация.' },
  m3: { id: 'm3', name: 'Екатерина', role: 'Визажист', rating: 4.7, location: 'Казань', bio: 'Свадебный и вечерний макияж. Работаю с гипоаллергенной косметикой.' },
  m4: { id: 'm4', name: 'Ольга', role: 'Стилист', rating: 4.9, location: 'Екатеринбург', bio: 'Окрашивания, уходы, блонд. Аккуратно и бережно.' }
}

export default function MasterProfile() {
  const { id } = useParams()
  const m = masters[id]

  if (!m) return <div className="mx-auto max-w-4xl p-6">Мастер не найден</div>

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="rounded-2xl border p-6" style={{ borderColor: palette.primary, background: '#FFFFFF' }}>
        <div className="flex flex-col gap-6 md:flex-row">
          <img src={`https://i.pravatar.cc/160?u=${m.id}`} alt={m.name} className="h-40 w-40 rounded-2xl object-cover" />
          <div className="flex-1">
            <h1 className="text-2xl font-semibold" style={{ color: palette.text }}>{m.name}</h1>
            <div className="mt-1 text-sm opacity-80">{m.role}</div>
            <div className="mt-3 flex items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1"><Star size={16} className="text-yellow-500"/> {m.rating}</span>
              <span className="inline-flex items-center gap-1 opacity-80"><MapPin size={16}/> {m.location}</span>
            </div>
            <p className="mt-4 leading-relaxed" style={{ color: palette.text }}>{m.bio}</p>
            <div className="mt-6 flex gap-2">
              <Link to={`/booking/${m.id}`}><Button leftIcon={<CalendarDays size={16} />}>Забронировать</Button></Link>
              <Link to="/search"><Button variant="secondary">Смотреть категории</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
