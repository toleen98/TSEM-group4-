const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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
  }
});



module.exports =  mongoose.model("User", UserSchema);

