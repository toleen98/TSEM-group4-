const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/user')
// const validateInput = require("../../validation/register")

router.post('/signup', (req,res) => {  
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      
      // // Hash password before saving in database
      // bcrypt.genSalt(10, (err, salt) => {
      //   bcrypt.hash(req.body.email, salt, (err, hash) => {
      //     if (err) throw err;

          
      //   });
      // });

      //add new user to the db
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
  });     
});

//login route
router.post("/login",function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email, password }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    console.log(user)
   
    
      console.log(user);
      return res.json({exist : true})
  
    
  });
});


module.exports = router;