const { supabase } = require("../../config/SupabaseClient");

const javascriptQuestions = async (req, res, next) => {
  const {params} = req;
  const { data, error } = await supabase
    .from("questions-table")
    .select("*, fll_id!inner(*)")
    .eq("fll_id.id", params?.id);
  res.json({ questionsData: data });
};
module.exports = javascriptQuestions;

