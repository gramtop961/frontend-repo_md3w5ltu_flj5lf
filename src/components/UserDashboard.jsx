import React from 'react'
import { CalendarDays, Heart, Settings, LogOut, User } from 'lucide-react'
import { Button, palette } from './ui/Button'

export default function UserDashboard() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold" style={{ color: palette.text }}>Личный кабинет</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6" style={{ borderColor: palette.primary, background: '#FFFFFF' }}>
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
              <User />
            </div>
            <div>
              <div className="font-medium" style={{ color: palette.text }}>Александра</div>
              <div className="text-sm opacity-70">alexandra@example.com</div>
            </div>
          </div>
          <Button variant="secondary" className="w-full" leftIcon={<Settings size={16} />}>Настройки</Button>
          <button className="mt-3 w-full rounded-xl px-4 py-2 text-sm" style={{ border: `1px solid ${palette.primary}`, color: palette.text }}>Сменить пароль</button>
          <button className="mt-3 w-full rounded-xl px-4 py-2 text-sm text-red-600" style={{ background: '#FFF1F1' }}> <LogOut className="mr-1 inline" size={16}/> Выйти</button>
        </div>

        <div className="rounded-2xl border p-6 md:col-span-2" style={{ borderColor: palette.primary, background: '#FFFFFF' }}>
          <h2 className="mb-4 font-medium" style={{ color: palette.text }}>Ближайшие записи</h2>
          <div className="divide-y">
            {[1,2].map(i => (
              <div key={i} className="flex items-center justify-between py-3">
                <div>
                  <div className="font-medium">15 ноя, 14:30 — Маникюр</div>
                  <div className="text-sm opacity-70">Марина • 1 час • 2 200 ₽</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary">Перенести</Button>
                  <Button>Отменить</Button>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-6 mb-3 font-medium" style={{ color: palette.text }}>Избранные мастера</h2>
          <div className="flex flex-wrap gap-2">
            {["Анна","Марина","Екатерина"].map(n => (
              <span key={n} className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm" style={{ backgroundColor: '#FFF9FB', border: `1px solid ${palette.primary}`, color: palette.text }}>
                <Heart size={14} className="text-pink-500"/> {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
