import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { setupURLPolyfill } from 'react-native-url-polyfill';

const supabaseUrl = `https://nwrvbsuotzieakkcrpbo.supabase.co`;
const supabaseAnonKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53cnZic3VvdHppZWFra2NycGJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYxNjk4NjAsImV4cCI6MTk4MTc0NTg2MH0.yKV-1OYC7JxFmpcwZRqLCQVN9GGpypJCbGmzrAietTs`;

setupURLPolyfill();

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
