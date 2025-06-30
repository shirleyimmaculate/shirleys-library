import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kkisuqburdnmapbrgyfp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtraXN1cWJ1cmRubWFwYnJneWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4OTczOTQsImV4cCI6MjA2NjQ3MzM5NH0.K2tx4vf9mT2SFZd6VbLPwVPw0zw6q3sCqnBePkKyuuI'

export const supabase = createClient(supabaseUrl, supabaseKey)
