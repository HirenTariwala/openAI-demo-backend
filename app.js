const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const imageRoutes = require("./routes/image");
const textRoutes = require("./routes/text");
const questionsRoute = require("./routes/questions");
const techAndFrameworkListRoute = require('./routes/techandframework');
const app = express();
app.use(express.json());

const PORT = 4000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });
app.use("/", imageRoutes);
app.use('/', textRoutes);
app.use("/", techAndFrameworkListRoute);
app.use("/", questionsRoute);

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})