import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function PhilosophySection() {
  return (
    <section id="filosofi" className="max-w-5xl mx-auto px-5 mb-28">
      <div className="mb-12">
        <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wider block mb-2">
          Asal-Usul &amp; Visi
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f7] mb-3">
          Warkop Lima Kopi.
        </h2>
        <p className="text-base sm:text-lg text-[#86868b] max-w-xl">
          Bagaimana sebuah warkop sederhana menjadi fondasi nama dan semangat tim kami.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#161617] border border-white/[0.08] rounded-[28px] p-8 sm:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <div className="text-2xl sm:text-4xl font-bold tracking-tight text-[#f5f5f7] leading-tight mb-4">
            Bukan sekadar tempat ngopi.<br />
            <span className="text-[#86868b]">Tempat lahirnya kesolidan dan sudut pandang baru.</span>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-[#2997ff]/10 border border-[#2997ff]/20 px-3.5 py-1.5 rounded-full text-xs text-[#2997ff] font-medium mt-2">
            <span>Markas Diskusi &bull; Meja Oposisi</span>
          </div>
        </div>

        <div className="flex flex-col gap-5 text-sm sm:text-base text-[#86868b] leading-relaxed">
          <p>
            Nama <strong className="text-[#f5f5f7]">"Kelompok Limkop"</strong> berasal dari kebiasaan kami bertiga yang sering berkumpul, duduk ngopi bersama, tertawa riang, serta menyelesaikan berbagai tugas bersama di warkop <strong className="text-[#f5f5f7]">Lima Kopi</strong> (disingkat <strong className="text-[#f5f5f7]">Limkop</strong>).
          </p>
          
          <p>
            Di sanalah ide-ide kritis dan semangat kebersamaan kami terbangun, membentuk kami menjadi tim yang solid dengan prinsip dan pandangan yang teguh sebagai kelompok <strong className="text-[#f5f5f7]">Oposisi</strong>.
          </p>

          <div className="bg-white/[0.03] border-l-2 border-[#2997ff] p-4 rounded-r-xl text-xs sm:text-sm text-[#f5f5f7] italic flex items-start gap-3 mt-2">
            <Quote className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" />
            <span>"Menyuarakan apa yang perlu diuji. Mengusulkan apa yang menjadi solusi."</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
