import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/TFj9UrcfsrK8cUTJ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />
        <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Найди своего бьюти-мастера рядом
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 max-w-2xl text-base sm:text-lg text-gray-600"
          >
            BeautyConnect — маркетплейс, где клиенты встречают визажистов, парикмахеров, бровистов и других специалистов. Быстро, красиво, удобно.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3"
          >
            <div className="flex rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
              <input
                placeholder="Поиск услуг или мастеров"
                className="w-full rounded-xl px-3 py-2 text-gray-800 outline-none"
              />
              <button className="ml-2 rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-black">Найти</button>
            </div>
            <button className="rounded-2xl border border-gray-200 bg-white px-4 py-2 text-gray-700 hover:border-gray-300">Я мастер</button>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>Категории: Парикмахер, Маникюр, Брови, Визаж, Массаж и др.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
