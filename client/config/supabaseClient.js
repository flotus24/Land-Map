import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://sunjnpenqlhyfgakpuxh.supabase.co"
const supabaseKey = process.env.NEXT_APP_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
