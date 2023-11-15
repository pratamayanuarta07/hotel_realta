require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const routes = require("./route/index");
app.use(routes);

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
