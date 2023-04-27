const { openai } = require("../../config/OpenAI");

const textGenerator = async (req, res, next) => {
  const { prompt } = req.body;
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-0301",
    messages: [{ role: "user", content: prompt }],
  });
  res.json({ data: completion?.data?.choices[0] });
};

module.exports = textGenerator;
