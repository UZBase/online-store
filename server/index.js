// https://www.youtube.com/watch?v=H2GCkRF9eko


require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`work on ${PORT} port`);
});