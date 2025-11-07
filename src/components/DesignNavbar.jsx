import React from 'react'
import { Sparkles, Menu, Search, User } from 'lucide-react'
import { palette } from './ui/Button'
import { Button } from './ui/Button'

export default function DesignNavbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
              <Sparkles size={18} className="text-white" />
            </div>
            <span className="font-semibold" style={{ color: palette.text }}>BeautyConnect</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="transition" style={{ color: palette.text }}>Услуги</a>
            <a href="#masters" className="transition" style={{ color: palette.text }}>Мастера</a>
            <a href="#pricing" className="transition" style={{ color: palette.text }}>Цены</a>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="secondary" leftIcon={<Search size={16} />}>Поиск</Button>
            <Button leftIcon={<User size={16} />}>Войти</Button>
          </div>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border" style={{ borderColor: palette.primary }}>
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
