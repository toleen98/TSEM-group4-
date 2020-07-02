const express = require("express");
var cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');

//load user model
const User = require('./models/user')
const validateInput = require("./../validation/register")
const app = express();

app.use(cors());

const users = require("./routes/user");

// middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// signup rout help me to add new user to the DB

app.post('/signup', (req,res) => {
//   const { errors, isValid } = validateInput(req.body);

//  // Check validation
//  if (!isValid) {
//      return res.status(400).json(errors);
//  }
 
 // check if the email exists 
     User.findOne({ email: req.body.email }).then(user => {
       if (user) {
         return res.status(401).json({ email: "Email already exists" });
       } else {
         
         // Hash password before saving in database
         bcrypt.genSalt(10, (err, salt) => {
           bcrypt.hash(req.body.email, salt, (err, hash) => {
             if (err) throw err;
   
             //add new user to the db
             const newUser = new User({
               firstName: req.body.firstName,
               lastName: req.body.lastName,
               email: req.body.email,
               password: hash
             });
             //save the new user
             newUser
               .save()
               .then(user => res.json(user))
               .catch(err => console.log(err));
           });
         });
       }
     }); 
});

//login route
app.post("/login",function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    console.log(user)
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //  matched
        return res.json({exist : true})
      }
      else {
        return res.json("isvalid :false")
      }
    }); 
  });
});
var port = 5000;

app.listen(port, function () {
  console.log(' listening on port ' + port);
});