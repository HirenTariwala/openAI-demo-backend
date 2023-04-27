const {openai} = require('../../config/OpenAI')

const imageGenerator = async (req,res,next) => {
    const { prompt, no_of_images, size } = req.body
    const response = await openai.createImage({
        prompt,
        n: no_of_images || 1,
        size: size || "1024x1024",
      });
      res.json({ imgUrl: response.data  }) ;
}
module.exports = imageGenerator;