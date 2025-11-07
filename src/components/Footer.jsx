import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div>
            <div className="text-xl font-semibold text-gray-900">BeautyConnect</div>
            <p className="mt-1 text-gray-500 text-sm">Платформа для встречи мастеров и клиентов. Найдите, свяжитесь и бронируйте в пару кликов.</p>
          </div>
          <div className="flex sm:justify-end gap-3">
            <a href="#" className="h-10 w-10 rounded-full grid place-items-center border border-gray-200 text-gray-600 hover:text-gray-900"> <Instagram size={18} /> </a>
            <a href="#" className="h-10 w-10 rounded-full grid place-items-center border border-gray-200 text-gray-600 hover:text-gray-900"> <Facebook size={18} /> </a>
            <a href="#" className="h-10 w-10 rounded-full grid place-items-center border border-gray-200 text-gray-600 hover:text-gray-900"> <Linkedin size={18} /> </a>
            <a href="#" className="h-10 w-10 rounded-full grid place-items-center border border-gray-200 text-gray-600 hover:text-gray-900"> <Mail size={18} /> </a>
          </div>
        </div>
        <div className="mt-6 text-xs text-gray-400">© {new Date().getFullYear()} BeautyConnect. Все права защищены.</div>
      </div>
    </footer>
  )
}
