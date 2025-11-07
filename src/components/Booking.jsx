import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Calendar, Clock, User, Check } from 'lucide-react'
import { Button, palette } from './ui/Button'
import { Modal } from './ui/Modal'

export default function Booking() {
  const { id } = useParams()
  const [date, setDate] = useState('2025-11-20')
  const [time, setTime] = useState('14:30')
  const [service, setService] = useState('Маникюр, гель-лак')
  const [open, setOpen] = useState(false)

  const confirm = () => setOpen(true)

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="rounded-2xl border p-6" style={{ borderColor: palette.primary, background: '#FFFFFF' }}>
        <h1 className="mb-4 text-2xl font-semibold" style={{ color: palette.text }}>Бронирование</h1>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm opacity-80">Дата</label>
            <div className="flex items-center gap-2 rounded-xl border px-3 py-2" style={{ borderColor: palette.primary }}>
              <Calendar size={16} />
              <input type="date" value={date} onChange={e=>setDate(e.target.value)} className="w-full bg-transparent outline-none" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm opacity-80">Время</label>
            <div className="flex items-center gap-2 rounded-xl border px-3 py-2" style={{ borderColor: palette.primary }}>
              <Clock size={16} />
              <input type="time" value={time} onChange={e=>setTime(e.target.value)} className="w-full bg-transparent outline-none" />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm opacity-80">Услуга</label>
            <select value={service} onChange={e=>setService(e.target.value)} className="w-full rounded-xl border px-3 py-2" style={{ borderColor: palette.primary }}>
              <option>Маникюр, гель-лак</option>
              <option>Сложный дизайн</option>
              <option>Уход для рук</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button onClick={confirm}>Подтвердить</Button>
        </div>
      </div>

      <Modal open={open} onClose={()=>setOpen(false)} title="Запись создана">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full text-white" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
            <Check />
          </div>
          <div>
            <div className="font-medium">Вы записаны{ id ? ` к мастеру ${id}` : '' }.</div>
            <div className="text-sm opacity-80">{date} • {time} • {service}</div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
