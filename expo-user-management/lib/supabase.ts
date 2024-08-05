import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lgzzzzcweuiqalwkgrvq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxnenp6emN3ZXVpcWFsd2tncnZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3MDEyNTQsImV4cCI6MjAzODI3NzI1NH0.tHoNEwdiqx-PM8eRaLcytQEu0fgzYqfQwFmJlFH9_PY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})