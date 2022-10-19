import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { setupURLPolyfill } from 'react-native-url-polyfill';

const supabaseUrl = `https://zysihrzqoujdjmtvvqec.supabase.co`;
const supabaseAnonKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5c2locnpxb3VqZGptdHZ2cWVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQzNzk2NTksImV4cCI6MTk3OTk1NTY1OX0.xnrvi502Zo6JcfACNVV5J00Bv3vGe7r1T_BewxzrH_E`;

setupURLPolyfill();

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
