const route = require("express").Router();

// route.get("/", (req, res) => {
//   res.json({
//     message: "Home Page",
//   });
// });

const paymentRoutes = require("./payment");

route.use("/payments", paymentRoutes);

module.exports = route;
