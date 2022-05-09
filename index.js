const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;
const programmingLanguagesRouter = require("./src/routes/programmingLanguages.route");

const { handleError } = require("./src/middlewares");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// const db = require("./src/models/index");

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/programming-languages", programmingLanguagesRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
