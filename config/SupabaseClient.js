const createClient  = require('@supabase/supabase-js').createClient;

const supabaseUrl = process.env.SUPABASE_CLIENT_URL
const supabaseKey = process.env.SUPABASE_CLIENT_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
module.exports = {supabase};
