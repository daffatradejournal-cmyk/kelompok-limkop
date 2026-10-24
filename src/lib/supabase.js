import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qxuehcnngytfvpinqlqi.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_ksO637V1b-FX8LrZYXB-WA_s8ZgRqMa'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
