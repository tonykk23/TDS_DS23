const express = require("express");
const routes = require("./routes/index.js");

const app = express();

app.use(express.json());

app.use(routes);

app.listen(8080, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("o tal da zora ta rodando na porta 8080!");
});