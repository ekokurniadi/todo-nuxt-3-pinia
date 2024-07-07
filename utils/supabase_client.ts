import { createClient } from '@supabase/supabase-js'
import type { Database } from '~/types/database.types'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient<Database>(supabaseUrl!, supabaseKey!)

export default supabase
