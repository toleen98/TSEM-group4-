const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const validateInput = require("../../validation/register")
const User = require('../models/user')

router.post('/signup', (req,res) => {
     const { errors, isValid } = validateInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    User.checkToAdd(req,res);
});




module.exports = router;