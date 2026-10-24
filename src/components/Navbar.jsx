import React from 'react'
import { Coffee } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-11 bg-black/80 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="max-w-5xl mx-auto h-full px-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white text-xs font-semibold tracking-tight hover:opacity-80 transition-opacity">
          <Coffee className="w-4 h-4 text-[#2997ff]" />
          <span>Limkop</span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          <a href="#ikhtisar" className="text-xs text-[#86868b] hover:text-[#f5f5f7] transition-colors">Ikhtisar</a>
          <a href="#anggota" className="text-xs text-[#86868b] hover:text-[#f5f5f7] transition-colors">Anggota</a>
          <a href="#filosofi" className="text-xs text-[#86868b] hover:text-[#f5f5f7] transition-colors">Filosofi</a>
          <a href="#semboyan" className="text-xs text-[#86868b] hover:text-[#f5f5f7] transition-colors">Semboyan</a>
          <a href="#komentar" className="text-xs text-[#86868b] hover:text-[#f5f5f7] transition-colors">Buku Tamu</a>
        </nav>

        <div className="flex items-center gap-2 text-[11px] font-medium text-[#86868b] border border-white/[0.1] px-2.5 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff] animate-pulse"></span>
          <span>Sang Oposisi</span>
        </div>
      </div>
    </header>
  )
}
