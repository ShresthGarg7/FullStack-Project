const express = require("express");
var cors = require("cors");
const auth = require("./routes/auth");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(auth);

var port = process.env.PORT || 5000;
var host = process.env.HOST;

app.listen(port, host, () => {
  console.log(`Example app listening on server ${host} port ${port}`);
});
