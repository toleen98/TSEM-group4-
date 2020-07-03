const express = require("express");
var cors = require('cors')
const bodyParser = require("body-parser");

const app = express();



//make connection between server side and client side
app.use(cors());

const users = require("./routes/user");

// middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//routs for the site
app.use("",users)


var port = 5000;

app.listen(port, function () {
  console.log(' listening on port ' + port);
});