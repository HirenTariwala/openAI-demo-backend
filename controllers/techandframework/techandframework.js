const { supabase } = require("../../config/SupabaseClient");

const techAndFrameworkList = async (req, res, next) => {
  const { data, error } = await supabase
    .from("tech-and-framework")
    .select();
  res.json({ techAndFrameworkList: data });
};
module.exports = techAndFrameworkList;
