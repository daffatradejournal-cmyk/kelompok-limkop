import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="ikhtisar" className="pt-20 pb-16 px-5 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-[15px] font-semibold text-[#2997ff] tracking-tight mb-3 inline-block">
          Profil Resmi Tim
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.035em] leading-[1.05] text-[#f5f5f7] mb-5"
      >
        <span className="apple-gradient-text">Kelompok Limkop.</span><br />
        Sang Oposisi.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-lg sm:text-2xl text-[#86868b] font-normal leading-relaxed max-w-2xl mx-auto mb-9 tracking-tight"
      >
        Independen. Kritis. Tetap Teguh Berdiri.<br className="hidden sm:inline" />
        Ide-ide besar yang berakar dari kebersamaan tiga pemikir di meja kopi.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-center gap-5"
      >
        <a
          href="#anggota"
          className="inline-flex items-center justify-center bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-transform active:scale-95 duration-200"
        >
          Kenali Rekan Tim
        </a>

        <a
          href="#filosofi"
          className="group inline-flex items-center gap-1.5 text-[#2997ff] hover:underline text-base font-normal tracking-tight"
        >
          <span>Pelajari Filosofi Kami</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </motion.div>
    </section>
  )
}
