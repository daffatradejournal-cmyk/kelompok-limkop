import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  {
    number: "3",
    title: "Rekan Pemikir",
    sub: "Satu tujuan kolektif"
  },
  {
    number: "100%",
    title: "Independensi Berpikir",
    sub: "Bebas dari kompromi semu"
  },
  {
    number: "∞",
    title: "Warkop Lima Kopi",
    sub: "Pusat lahirnya gagasan"
  }
]

export default function StatsGrid() {
  return (
    <section className="max-w-5xl mx-auto px-5 mb-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#161617] hover:bg-[#1d1d1f] border border-white/[0.08] hover:border-white/[0.16] rounded-2xl p-8 text-center transition-all duration-300 group"
          >
            <div className="text-5xl sm:text-6xl font-bold tracking-[-0.035em] apple-gradient-text mb-2 transition-transform duration-300 group-hover:scale-105">
              {stat.number}
            </div>
            <div className="text-sm font-semibold text-[#f5f5f7] mb-1">
              {stat.title}
            </div>
            <div className="text-xs text-[#86868b]">
              {stat.sub}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
