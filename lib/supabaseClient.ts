import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dihxruochfwayuwqhkiw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpaHhydW9jaGZ3YXl1d3Foa2l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4NTM0ODcsImV4cCI6MjA3ODQyOTQ4N30.nB5v1pqAsp9RvWjc21G20wbZGU1oST1EGo3m1RMvt-A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
