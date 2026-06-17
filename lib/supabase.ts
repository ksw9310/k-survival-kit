import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Story {
  id: string;
  name: string;
  country: string;
  country_emoji: string;
  content: string;
  lang: string;
  created_at: string;
  approved: boolean;
}
