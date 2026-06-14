import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://rdywjzexlzegzssfrrrv.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkeXdqemV4bHplZ3pzc2ZycnJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MzUwMzgsImV4cCI6MjA5NzAxMTAzOH0.1mS5nhTYbNLoSlman_oQ9u4RuAUGDlBkqNHo-zQKXJs'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
  }
})
