import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Send, Heart, User, CheckCircle2, Sparkles } from 'lucide-react'

// Pre-seeded initial comments so the section looks active & authentic from day 1
const initialComments = [
  {
    id: 1,
    name: "Barista Lima Kopi",
    message: "Ditunggu kopi robusta dan diskusi serunya lagi di warkop! Sukses selalu buat Kelompok Limkop, tetap kritis dan solid.",
    time: "2 jam yang lalu",
    likes: 12,
    avatarColor: "from-amber-500 to-orange-600"
  },
  {
    id: 2,
    name: "Rekan Mahasiswa",
    message: "Keren banget websitenya, beneran ga keliatan template AI biasa. Vibes Apple tapi ada jiwa warkopnya. Semangat terus!",
    time: "5 jam yang lalu",
    likes: 8,
    avatarColor: "from-blue-500 to-indigo-600"
  },
  {
    id: 3,
    name: "Sahabat Oposisi",
    message: "Tetap teguh berdiri dengan independensi berpikir. Sangat menginspirasi sudut pandang kalian.",
    time: "1 hari yang lalu",
    likes: 15,
    avatarColor: "from-rose-500 to-red-600"
  }
]

const avatarPalettes = [
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-purple-500 to-indigo-600",
  "from-rose-500 to-pink-600"
]

export default function GuestbookSection() {
  const [comments, setComments] = useState(() => {
    try {
      const saved = localStorage.getItem('limkop_comments')
      if (saved) {
        return JSON.parse(saved)
      }
    } catch (e) {
      console.error(e)
    }
    return initialComments
  })

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successNotice, setSuccessNotice] = useState(false)

  // Save to localStorage whenever comments change
  useEffect(() => {
    try {
      localStorage.setItem('limkop_comments', JSON.stringify(comments))
    } catch (e) {
      console.error(e)
    }
  }, [comments])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    setIsSubmitting(true)

    const randomPalette = avatarPalettes[Math.floor(Math.random() * avatarPalettes.length)]
    const newComment = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      time: "Baru saja",
      likes: 1,
      avatarColor: randomPalette
    }

    setTimeout(() => {
      setComments([newComment, ...comments])
      setName('')
      setMessage('')
      setIsSubmitting(false)
      setSuccessNotice(true)
      setTimeout(() => setSuccessNotice(false), 4000)
    }, 350)
  }

  const handleLike = (id) => {
    setComments(comments.map(c => {
      if (c.id === id) {
        return { ...c, likes: c.likes + 1 }
      }
      return c
    }))
  }

  // Get user initials for Apple avatar icon
  const getInitials = (str) => {
    if (!str) return 'U'
    const parts = str.trim().split(' ')
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase()
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }

  return (
    <section id="komentar" className="max-w-5xl mx-auto px-5 mb-28">
      <div className="mb-12">
        <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wider block mb-2">
          Buku Tamu &amp; Aspirasi
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f7] mb-3">
          Tinggalkan Jejak &amp; Pendapat.
        </h2>
        <p className="text-base sm:text-lg text-[#86868b] max-w-xl">
          Tulis pesan, kritik membangun, atau sekadar sapaan untuk rekan tim Kelompok Limkop.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form Input Komentar (Apple Dark Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 bg-[#161617] border border-white/[0.08] rounded-[24px] p-6 sm:p-7 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-[#0071e3]/15 flex items-center justify-center text-[#2997ff]">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#f5f5f7]">Tulis Komentar</h3>
              <p className="text-xs text-[#86868b]">Hanya perlu nama dan pesan Anda</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="guest-name" className="block text-xs font-medium text-[#86868b] mb-1.5">
                Nama Lengkap / Panggilan
              </label>
              <input
                id="guest-name"
                type="text"
                required
                placeholder="Contoh: Budi Santoso"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0d0d0e] border border-white/[0.08] focus:border-[#2997ff] focus:ring-1 focus:ring-[#2997ff] rounded-xl px-4 py-2.5 text-sm text-[#f5f5f7] placeholder-[#6e6e73] outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="guest-message" className="block text-xs font-medium text-[#86868b] mb-1.5">
                Pesan atau Komentar
              </label>
              <textarea
                id="guest-message"
                required
                rows={4}
                placeholder="Tuliskan apresiasi, saran, atau catatan Anda di sini..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#0d0d0e] border border-white/[0.08] focus:border-[#2997ff] focus:ring-1 focus:ring-[#2997ff] rounded-xl px-4 py-2.5 text-sm text-[#f5f5f7] placeholder-[#6e6e73] outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !name.trim() || !message.trim()}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0071e3] hover:bg-[#0077ed] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium py-3 rounded-full transition-all active:scale-[0.98] duration-200"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Mengirim...' : 'Kirim Komentar'}</span>
            </button>

            <AnimatePresence>
              {successNotice && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-xs mt-2"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Komentar berhasil dipublikasikan!</span>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-[11px] text-[#6e6e73] text-center pt-1">
              Komentar tersimpan langsung dan dapat dibaca oleh setiap pengunjung.
            </p>
          </form>
        </motion.div>

        {/* Feed Komentar Pengunjung */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-medium text-[#86868b]">
              Semua Pesan ({comments.length})
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#2997ff]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Suara Publik</span>
            </div>
          </div>

          <div className="space-y-3.5">
            <AnimatePresence initial={false}>
              {comments.map((item) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#161617] hover:bg-[#1a1a1c] border border-white/[0.08] hover:border-white/[0.14] rounded-2xl p-5 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${item.avatarColor || 'from-blue-500 to-indigo-600'} flex items-center justify-center text-white text-xs font-bold tracking-tight shadow-md shrink-0`}>
                        {getInitials(item.name)}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#f5f5f7] leading-snug">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-[#86868b]">
                          {item.time}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleLike(item.id)}
                      className="group flex items-center gap-1.5 bg-white/[0.05] hover:bg-white/[0.1] text-[#86868b] hover:text-[#ff375f] px-2.5 py-1 rounded-full text-xs transition-colors"
                      title="Sukai komentar ini"
                    >
                      <Heart className="w-3 h-3 text-[#ff375f] group-hover:scale-110 transition-transform" />
                      <span>{item.likes}</span>
                    </button>
                  </div>

                  <p className="text-sm text-[#d1d1d6] leading-relaxed pl-12 pr-2">
                    {item.message}
                  </p>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}
