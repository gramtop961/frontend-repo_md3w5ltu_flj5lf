import { useState } from 'react'
import { Menu, X, Sparkles, Search, User } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-blue-500 grid place-items-center text-white shadow-md">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold text-gray-900 text-lg">BeautyConnect</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition">Услуги</a>
            <a href="#pros" className="text-gray-600 hover:text-gray-900 transition">Мастера</a>
            <a href="#how" className="text-gray-600 hover:text-gray-900 transition">Как это работает</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-sm text-gray-700 hover:border-gray-300">
              <Search size={16} />
              <span>Найти мастера</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm hover:bg-black">
              <User size={16} />
              Войти
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-200">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 grid gap-2">
            <a href="#services" className="rounded-lg px-3 py-2 bg-white/80 border border-gray-100">Услуги</a>
            <a href="#pros" className="rounded-lg px-3 py-2 bg-white/80 border border-gray-100">Мастера</a>
            <a href="#how" className="rounded-lg px-3 py-2 bg-white/80 border border-gray-100">Как это работает</a>
            <button className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white px-4 py-2">
              <User size={16} /> Войти
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
