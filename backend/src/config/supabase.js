import { createClient } from "@supabase/supabase-js";
import env from "./env.js";

const supabaseUrl = env.SUPABASE_URL;
const supabaseKey = env.SUPABASE_ANON_KEY || env.SUPABASE_SERVICE_ROLE_KEY;

export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : null;

export default supabase;
