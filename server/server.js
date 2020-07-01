const express = require("express");
var cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');

const users = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.static( '../client/public'));

// middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


app.use("./routes/user.js",users)


var port = 3000;

app.listen(port, function () {
  console.log(' listening on port ' + port);
});