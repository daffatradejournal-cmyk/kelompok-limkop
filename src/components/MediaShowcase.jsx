import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles } from 'lucide-react'

export default function MediaShowcase() {
  return (
    <section id="semboyan" className="max-w-5xl mx-auto px-5 mb-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#161617] rounded-[28px] border border-white/[0.08] overflow-hidden shadow-2xl relative group"
      >
        <div className="relative w-full h-[380px] sm:h-[480px] md:h-[580px] bg-black overflow-hidden">
          <img
            src="/image/empat.jpeg"
            alt="Foto Resmi Rekan Tim Kelompok Limkop"
            className="w-full h-full object-cover object-[center_30%] transition-transform duration-1000 ease-out group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = 'image/empat.jpeg'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10 pointer-events-none" />
          
          <div className="absolute top-5 left-5 bg-black/70 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs text-[#f5f5f7]">
            <Sparkles className="w-3.5 h-3.5 text-[#2997ff]" />
            <span>Foto Kolektif Rekan Tim</span>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-[#161617] border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-[#2997ff] uppercase tracking-wider block mb-1">
              Semboyan Oposisi
            </span>
            <p className="text-sm sm:text-base text-[#f5f5f7] font-medium leading-relaxed">
              "Sebagai Oposisi, kami hadir dengan independensi, kesolidan, dan keberanian untuk menyampaikan sudut pandang kritis serta gagasan yang solutif."
            </p>
          </div>

          <div className="self-start sm:self-center shrink-0 flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] px-4 py-2 rounded-full text-xs font-medium text-[#f5f5f7]">
            <ShieldCheck className="w-4 h-4 text-[#2997ff]" />
            <span>Tim Solid &bull; Tetap Teguh</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
