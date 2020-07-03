const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create Schema
const sadSongSchema = new Schema({
  song:String,
  singer:String,
  url:String
});

const Sad = mongoose.model("Sad", sadSongSchema);

module.exports =  Sad;
// module.exports.happy =  mongoose.model("happy", songsSchema);
// module.exports.romantic =  mongoose.model("romantic", songsSchema);
// module.exports.sarcastic =  mongoose.model("sarcastic", songsSchema);
// module.exports.tarab =  mongoose.model("tarab", songsSchema);
// module.exports.workout =  mongoose.model("workout", songsSchema);




