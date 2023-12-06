require("dotenv").config();
const resto_route = require("./route/Resto/index");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(resto_route);
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
