const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/user')
const validateInput = require("../../validation/register")

router.post('/signup', (req,res) => {
     const { errors, isValid } = validateInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    
        User.findOne({ email: req.body.email }).then(user => {
          if (user) {
            return res.status(400).json({ email: "Email already exists" });
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
                newUser
                  .save()
                  .then(user => res.json(user))
                  .catch(err => console.log(err));
              });
            });
          }
        });
      
      
});




module.exports = router;