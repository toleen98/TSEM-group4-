// var express = require ('express');
// var router = express.Router();
// var  mongo = require('mongodb');
// var MongoClient = require('mongodb').MongoClient
// var mongoose = require('mongoose')


// var url = 'mongodb://localhost:27017/moody' //connection url to locally runing db

// router.get('/sad', function (req, res){ //retrive data from sad  colllection from database

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err
//    db.collection('sad').find().toArray(function (err, result) { //extract collection data as an array
//       if (err) throw err
//        console.log(result) // send data from call back parameter result as response
//        res.status(201).json(result); 
//     })
//   })
// });

// router.get('/happy', function (req, res){

//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err
//        db.collection('happy').find().toArray(function (err, result) {
//           if (err) throw err
//            console.log(result)
//           res.status(201).json(result);
//         })
//       })
//     });
    
//     router.get('/work', function (req, res){

//         MongoClient.connect(url, function (err, db) {
//             if (err) throw err
//            db.collection('work').find().toArray(function (err, result) {
//               if (err) throw err
//                console.log(result)
//               res.status(201).json(result);
//             })
//           })
//         });
     
//         router.get('/study', function (req, res){

//             MongoClient.connect(url, function (err, db) {
//                 if (err) throw err
//                db.collection('study').find().toArray(function (err, result) {
//                   if (err) throw err
//                    console.log(result)
//                   res.status(201).json(result);
//                 })
//               })
//             });
            
//             router.get('/mad', function (req, res){

//                 MongoClient.connect(url, function (err, db) {
//                     if (err) throw err
//                    db.collection('mad').find().toArray(function (err, result) {
//                       if (err) throw err
//                        console.log(result)
//                      res.status(201).json(result);
//                     })
//                   })
//                 });
                
                    
//                 router.get('/sleep', function (req, res){

//                     MongoClient.connect(url, function (err, db) {
//                         if (err) throw err
//                        db.collection('sleep').find().toArray(function (err, result) {
//                           if (err) throw err
//                            console.log(result)
//                        res.status(201).json(result);
//                         })
//                       })
//                     });
                    
                    
//     module.exports = router;

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//require songs model 
const Song = require('../models/songs');

router.get("/sad",function(req, res) {
  Song.sad.find({}).then(songs => { 
    if (songs) {
      return res.json(songs)
    }

  })

})