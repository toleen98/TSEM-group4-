const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

//url on atlas
var url = "mongodb+srv://Sara-Agha-Alnimer:TMGUY54ZkKH7vne6@moody.96orc.mongodb.net/moody?retryWrites=true&w=majority";

//moods routes to send the songs from db to client
router.get("/sad",function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("moody");
        dbo.collection("sad").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
           res.json(result)
          db.close();
        });
      });
  console.log("hello")
  // res.json("hello")
});

router.get("/Tarab",function(req, res) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("moody");
      dbo.collection("Tarab").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
         res.json(result)
        db.close();
      });
    });
// res.json("hello")
});

router.get("/feeling-calm",function(req, res) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("moody");
      dbo.collection("happy").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
         res.json(result)
        db.close();
      });
    });
// res.json("hello")
});

router.get("/sarcastic",function(req, res) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("moody");
      dbo.collection("sarcastic").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
         res.json(result)
        db.close();
      });
    });
// res.json("hello")
});

router.get("/romantic",function(req, res) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("moody");
      dbo.collection("romantic").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
         res.json(result)
        db.close();
      });
    });
// res.json("hello")
});

router.get("/workout",function(req, res) {
  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("moody");
      dbo.collection("work-out").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
         res.json(result)
        db.close();
      });
    });
// res.json("hello")
});
module.exports = router;