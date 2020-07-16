const express = require("express");
const app = express();

app.use(express.json());

const isValidNumber = (value) => typeof value === "number";

app.get("/", (req, res) => {
  res.status(201).json({
    msg: "Rest API Hello!!!",
  });
});

app.post("/sum", function (req, res) {
  const x = req.body.x;
  const y = req.body.y;

  if (!isValidNumber(x) || !isValidNumber(y))
    throw new Error("Not valid params");

  res.status(201).json({
    msg: "OK",
    sum: x + y,
  });
});

const PORT = 8888;
app.listen(PORT, function () {
  console.log(`API is running on http://localhost:${PORT}`);
});

module.exports = app;
