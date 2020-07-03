const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Connect to MongoDB
mongoose
  .connect(
    "mongodb://localhost/moody",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected with songs"))
  .catch(err => console.log(err));

// Create Schema
const songsSchema = new Schema({
  song :[{
      title:String,
      artist:String,
      link:String
  }]
});



module.exports.sad =  mongoose.model("Song", songsSchema);





