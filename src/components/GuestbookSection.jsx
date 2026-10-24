import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Send, Heart, CheckCircle2, Sparkles, AlertCircle, Loader2 } from 'lucide-react'
import { supabase } from '../lib/supabase'

const avatarPalettes = [
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-purple-500 to-indigo-600",
  "from-rose-500 to-pink-600",
  "from-violet-500 to-purple-600"
]

export default function GuestbookSection() {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successNotice, setSuccessNotice] = useState(false)
  const [errorNotice, setErrorNotice] = useState(null)

  // Fetch comments from Supabase on mount & setup Realtime subscription
  useEffect(() => {
    let isMounted = true

    const loadComments = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('comments')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) {
          console.error('Error fetching comments from Supabase:', error)
        } else if (isMounted && data) {
          setComments(data)
        }
      } catch (err) {
        console.error('Failed to load comments:', err)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadComments()

    // Realtime listener for new comments or likes
    const channel = supabase
      .channel('public:comments')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'comments' }, (payload) => {
        setComments((prev) => [payload.new, ...prev.filter(c => c.id !== payload.new.id)])
      })
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'comments' }, (payload) => {
        setComments((prev) => prev.map(c => c.id === payload.new.id ? payload.new : c))
      })
      .subscribe()

    return () => {
      isMounted = false
      supabase.removeChannel(channel)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return

    setIsSubmitting(true)
    setErrorNotice(null)

    try {
      const { data, error } = await supabase
        .from('comments')
        .insert([{
          name: name.trim(),
          message: message.trim(),
          likes: 1
        }])
        .select()

      if (error) {
        console.error('Supabase insert error:', error)
        setErrorNotice(error.message || 'Gagal mengirim komentar. Periksa koneksi Anda.')
      } else {
        setName('')
        setMessage('')
        setSuccessNotice(true)
        if (data && data.length > 0) {
          setComments((prev) => [data[0], ...prev.filter(c => c.id !== data[0].id)])
        }
        setTimeout(() => setSuccessNotice(false), 4500)
      }
    } catch (err) {
      console.error('Submit error:', err)
      setErrorNotice('Terjadi kesalahan saat menghubungkan ke database.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLike = async (id, currentLikes = 1) => {
    const updatedLikes = (currentLikes || 1) + 1
    // Optimistic UI update
    setComments(prev => prev.map(c => c.id === id ? { ...c, likes: updatedLikes } : c))

    try {
      const { error } = await supabase
        .from('comments')
        .update({ likes: updatedLikes })
        .eq('id', id)

      if (error) {
        console.error('Failed to update likes:', error)
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Format relative timestamp
  const formatTime = (timestamp) => {
    if (!timestamp) return 'Baru saja'
    const date = new Date(timestamp)
    const now = new Date()
    const diffInSeconds = Math.floor((now - date) / 1000)

    if (diffInSeconds < 60) return 'Baru saja'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} menit lalu`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} jam lalu`
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} hari lalu`

    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
  }

  // Consistent color palette for each user
  const getAvatarPalette = (identifier) => {
    const str = String(identifier || 'guest')
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    const index = Math.abs(hash) % avatarPalettes.length
    return avatarPalettes[index]
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
          Buku Tamu &amp; Aspirasi Publik
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f7] mb-3">
          Tinggalkan Jejak &amp; Pendapat.
        </h2>
        <p className="text-base sm:text-lg text-[#86868b] max-w-xl">
          Tulis pesan, kritik membangun, atau sekadar salam untuk rekan tim Kelompok Limkop. Tersimpan permanen di cloud database.
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
              <p className="text-xs text-[#86868b]">Komentar tersimpan langsung ke Supabase</p>
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
                maxLength={60}
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
                maxLength={500}
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
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Menyimpan ke Cloud...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Komentar</span>
                </>
              )}
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
                  <span>Komentar berhasil dipublikasikan dan tersimpan di database!</span>
                </motion.div>
              )}

              {errorNotice && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs mt-2"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorNotice}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-[11px] text-[#6e6e73] text-center pt-1">
              🟢 Terhubung langsung ke Supabase Realtime Database.
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
              <span>Live Realtime Sync</span>
            </div>
          </div>

          {loading ? (
            <div className="p-12 text-center text-[#86868b] flex flex-col items-center justify-center gap-3">
              <Loader2 className="w-6 h-6 animate-spin text-[#2997ff]" />
              <span className="text-xs">Memuat komentar dari Supabase...</span>
            </div>
          ) : comments.length === 0 ? (
            <div className="bg-[#161617] border border-white/[0.08] rounded-2xl p-8 text-center text-[#86868b]">
              <MessageSquare className="w-8 h-8 mx-auto mb-2 text-[#6e6e73]" />
              <p className="text-sm font-medium text-[#f5f5f7]">Belum ada komentar.</p>
              <p className="text-xs mt-1">Jadilah orang pertama yang meninggalkan pesan untuk Kelompok Limkop!</p>
            </div>
          ) : (
            <div className="space-y-3.5">
              <AnimatePresence initial={false}>
                {comments.map((item) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="bg-[#161617] hover:bg-[#1a1a1c] border border-white/[0.08] hover:border-white/[0.14] rounded-2xl p-5 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${getAvatarPalette(item.name || item.id)} flex items-center justify-center text-white text-xs font-bold tracking-tight shadow-md shrink-0`}>
                          {getInitials(item.name)}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#f5f5f7] leading-snug">
                            {item.name}
                          </h4>
                          <span className="text-[11px] text-[#86868b]">
                            {formatTime(item.created_at)}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleLike(item.id, item.likes)}
                        className="group flex items-center gap-1.5 bg-white/[0.05] hover:bg-white/[0.1] text-[#86868b] hover:text-[#ff375f] px-2.5 py-1 rounded-full text-xs transition-colors"
                        title="Sukai komentar ini"
                      >
                        <Heart className="w-3 h-3 text-[#ff375f] group-hover:scale-110 transition-transform" />
                        <span>{item.likes || 1}</span>
                      </button>
                    </div>

                    <p className="text-sm text-[#d1d1d6] leading-relaxed pl-12 pr-2">
                      {item.message}
                    </p>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
