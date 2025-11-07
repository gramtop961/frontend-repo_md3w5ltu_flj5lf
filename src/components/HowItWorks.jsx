import { Play, CalendarDays, ShieldCheck, MessageSquare } from 'lucide-react'

const steps = [
  {
    icon: CalendarDays,
    title: 'Выберите услугу',
    desc: 'Просматривайте категории и находите мастеров рядом с вами',
  },
  {
    icon: MessageSquare,
    title: 'Свяжитесь с мастером',
    desc: 'Уточните детали, стоимость и время выполнения',
  },
  {
    icon: ShieldCheck,
    title: 'Забронируйте',
    desc: 'Подтвердите запись и оплачивайте безопасно',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Как это работает</h2>
          <button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-gray-300">
            <Play size={16} /> Смотреть демо
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="h-10 w-10 rounded-xl bg-gray-900 text-white grid place-items-center">
                <Icon size={18} />
              </div>
              <div className="mt-3 font-semibold text-gray-900">{title}</div>
              <div className="text-gray-600 text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
