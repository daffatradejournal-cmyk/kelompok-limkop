import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, ArrowUpRight } from 'lucide-react'

const members = [
  {
    name: "Muhammad Daffa",
    alias: "Inisiator Gagasan",
    image: "/image/satu.jpg",
    ig: "dffaaaaa6",
    index: "01"
  },
  {
    name: "Hendrawan",
    alias: "Dikenal sebagai Enda",
    image: "/image/dua.jpeg",
    ig: "endoo_____",
    index: "02"
  },
  {
    name: "M Syahrul Kamal",
    alias: "Penyelaras Visi",
    image: "/image/tiga.JPG",
    ig: "ammaaaaal_",
    index: "03"
  }
]

export default function RosterSection() {
  return (
    <section id="anggota" className="max-w-5xl mx-auto px-5 mb-28">
      <div className="mb-12">
        <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wider block mb-2">
          Dewan Rekan
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f7] mb-3">
          Kenali Setiap Karakter.
        </h2>
        <p className="text-base sm:text-lg text-[#86868b] max-w-xl">
          Tiga kepribadian yang berbeda, disatukan oleh komitmen berpikir kritis dan integritas yang sama.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((member, idx) => (
          <motion.article
            key={member.index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#161617] hover:bg-[#1d1d1f] border border-white/[0.08] hover:border-white/[0.16] rounded-[24px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
          >
            <div className="relative w-full h-80 sm:h-96 bg-[#0d0d0e] overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = member.image.replace('/image/', 'image/')
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161617] via-transparent to-transparent opacity-90 group-hover:from-[#1d1d1f] transition-colors" />
              
              <div className="absolute top-4 right-4 text-xs font-mono font-medium text-[#86868b] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/[0.1]">
                {member.index}
              </div>
            </div>

            <div className="p-6 pt-2 flex flex-col gap-4">
              <div>
                <span className="text-[11px] font-semibold text-[#2997ff] uppercase tracking-wider block mb-1">
                  Rekan Limkop
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#f5f5f7]">
                  {member.name}
                </h3>
                <span className="text-xs text-[#86868b]">
                  {member.alias}
                </span>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href={`https://instagram.com/${member.ig}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.14] text-[#f5f5f7] text-xs font-medium px-4 py-2 rounded-full border border-white/[0.08] hover:border-white/[0.2] transition-all"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#ff375f]" />
                  <span>@{member.ig}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#86868b]" />
                </a>

                <span className="text-[11px] text-[#6e6e73]">
                  Aktif
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
