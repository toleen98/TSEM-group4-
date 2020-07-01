const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
// Connect to MongoDB
mongoose
  .connect(
    "mongodb://localhost/users",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Create Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
var User = mongoose.model("User", UserSchema);

var checkToAdd = function(req,res) {
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
}

module.exports.User =  User;
module.exports.checkToAdd = checkToAdd;