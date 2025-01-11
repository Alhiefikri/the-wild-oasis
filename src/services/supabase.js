import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mnxnmxioozltcxximbew.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ueG5teGlvb3psdGN4eGltYmV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0NzM1MjYsImV4cCI6MjA1MjA0OTUyNn0.Ir8nldRVofJyZRnb8mKKAPJMBXBlPfR0FiJrR9jUVQU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
