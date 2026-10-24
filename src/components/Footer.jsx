import React from 'react'
import { Coffee, ChevronUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#111113] border-t border-white/[0.08] pt-10 pb-12 px-5 text-xs text-[#86868b] leading-relaxed">
      <div className="max-w-5xl mx-auto">
        <div className="border-b border-white/[0.08] pb-5 mb-6 space-y-2">
          <p>1. Nama "Limkop" adalah akronim autentik dari warkop "Lima Kopi", lokasi berkumpul dan berdiskusi tim.</p>
          <p>2. "Sang Oposisi" dimaknai sebagai komitmen intelektual terhadap kejujuran berpikir, independensi pandangan, dan kritik yang konstruktif.</p>
        </div>

        <div className="flex items-center gap-2 mb-6 text-xs text-[#6e6e73]">
          <a href="#top" className="text-[#f5f5f7] hover:text-[#2997ff] flex items-center gap-1 transition-colors">
            <Coffee className="w-3.5 h-3.5" />
          </a>
          <span>&rsaquo;</span>
          <a href="#top" className="text-[#86868b] hover:text-white transition-colors">Kelompok Limkop</a>
          <span>&rsaquo;</span>
          <a href="#ikhtisar" className="text-[#86868b] hover:text-white transition-colors">Sang Oposisi</a>
          <span>&rsaquo;</span>
          <span className="text-[#f5f5f7]">Buku Tamu</span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <div className="text-[#6e6e73]">
            Hak Cipta &copy; 2026 Kelompok Limkop. Seluruh hak cipta dilindungi undang-undang.
          </div>

          <div className="flex items-center gap-5">
            <a href="#ikhtisar" className="hover:text-white transition-colors">Ikhtisar</a>
            <a href="#anggota" className="hover:text-white transition-colors">Anggota</a>
            <a href="#filosofi" className="hover:text-white transition-colors">Kisah</a>
            <a href="#komentar" className="hover:text-white transition-colors">Buku Tamu</a>
            <a href="#top" className="inline-flex items-center gap-1 text-[#2997ff] hover:underline">
              <span>Ke Atas</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
