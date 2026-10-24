import React from 'react'
import { ChevronRight } from 'lucide-react'

export default function Ribbon() {
  return (
    <div className="bg-[#111113] border-b border-white/[0.08] text-center py-2.5 px-4 text-xs text-[#86868b]">
      <span>Arsip Resmi Kelompok Limkop 2026. Lahir dari meja Warkop Lima Kopi.</span>
      <a href="#filosofi" className="inline-flex items-center gap-1 text-[#2997ff] ml-2 hover:underline">
        <span>Baca Kisah Kami</span>
        <ChevronRight className="w-3 h-3" />
      </a>
    </div>
  )
}
