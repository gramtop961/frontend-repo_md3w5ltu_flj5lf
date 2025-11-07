import React, { useState } from 'react'
import { palette } from './ui/Button'
import { Button } from './ui/Button'
import Input from './ui/Input'
import CardMaster from './ui/CardMaster'
import Modal from './ui/Modal'

export default function PalettePreview() {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-12" style={{ backgroundColor: palette.bg }}>
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-bold" style={{ color: palette.text }}>Design System — Beauty Palette</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { name: 'Primary', color: palette.primary },
            { name: 'Accent', color: palette.accent },
            { name: 'Text', color: palette.text },
            { name: 'Background', color: palette.bg },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl border p-4" style={{ borderColor: palette.primary }}>
              <div className="h-16 w-full rounded-xl" style={{ backgroundColor: t.color }} />
              <div className="mt-2 text-sm" style={{ color: palette.text }}>{t.name}</div>
              <div className="text-xs text-gray-500">{t.color}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="space-y-3">
            <div className="text-sm font-medium" style={{ color: palette.text }}>Buttons</div>
            <div className="flex flex-wrap items-center gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
            <div className="text-sm font-medium" style={{ color: palette.text }}>Inputs</div>
            <div className="grid gap-2">
              <Input label="Имя" placeholder="Ваше имя" />
              <Input label="Электронная почта" placeholder="you@example.com" helper="Мы не передаем данные третьим лицам" />
              <Input label="Телефон" placeholder="+7 (___) ___-__-__" error="Укажите корректный номер" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-sm font-medium" style={{ color: palette.text }}>Master Card</div>
            <CardMaster name="Анна" role="Визажист" tags={["свадебный макияж","локоны","укладка"]} onBook={() => setOpen(true)} />
            <div className="text-sm font-medium" style={{ color: palette.text }}>Modal</div>
            <Button onClick={() => setOpen(true)}>Открыть модалку</Button>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Бронирование">
        <div className="grid gap-3">
          <Input label="Дата" placeholder="ДД.ММ.ГГГГ" />
          <Input label="Время" placeholder="--:--" />
        </div>
      </Modal>
    </section>
  )
}
