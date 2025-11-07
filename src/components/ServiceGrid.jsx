import { Scissors, Palette, Brush, Sparkles, Camera, Star } from 'lucide-react'

const services = [
  { icon: Scissors, title: 'Парикмахер', desc: 'Стрижки, окрашивания, укладки' },
  { icon: Brush, title: 'Маникюр', desc: 'Маникюр, педикюр, дизайн' },
  { icon: Palette, title: 'Макияж', desc: 'Дневной, вечерний, свадебный' },
  { icon: Sparkles, title: 'Брови и ресницы', desc: 'Ламинирование, окрашивание' },
  { icon: Camera, title: 'Фотосессия', desc: 'Образы для съемок' },
]

export default function ServiceGrid() {
  return (
    <section id="services" className="py-14 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Популярные услуги</h2>
            <p className="mt-1 text-gray-600">Выберите категорию и найдите мастера рядом с вами</p>
          </div>
          <button className="hidden sm:inline-flex rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-gray-300">Смотреть все</button>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-4 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gray-900 text-white grid place-items-center">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{title}</div>
                  <div className="text-xs text-gray-500">{desc}</div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 text-amber-500 text-xs">
                <Star size={14} fill="#f59e0b" stroke="#f59e0b" />
                <span className="text-gray-700">4.9</span>
                <span className="text-gray-400">(2k+)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
