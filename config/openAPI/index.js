const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
module.exports = {openai};