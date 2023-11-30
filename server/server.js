require("dotenv").config();
const routes = require("./route/route.js");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(routes);
app.use(express.static("public"))

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});