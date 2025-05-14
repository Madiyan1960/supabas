import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const SUPABASE_URL = 'https://kpefeonxvgnfpgevkcwy.supabase.co' // замените на ваш
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwZWZlb254dmduZnBnZXZrY3d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMzY4MDgsImV4cCI6MjA2MjgxMjgwOH0.aZJhwODNOS3FhyT8k-qAAfvo0NaYbv4QSm6SwuNaeys' // замените на ваш

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

