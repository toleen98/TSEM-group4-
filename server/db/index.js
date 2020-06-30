var mongoose - require(mongoose); //in order to use mongoose
mongoose.connect("mongodb://localhost/moody")
// var db = mongoose.connection;
// db.on('error', console.error.bind(console,'connection error'));
// db.once('open', ()=>{console.log('We are connected')});
// connect mongoose to mongo database
var Schema = mongoose.Schema; //variable refere to our schema
import axios from "axios";




var SongsSchema = new Schema({ //songs schema 
    id:Schema.Types.ObjectId,
    name:String,
    category:String,
    coverPhoto:String,                                
    moodDescription:String,
    singer:String
})






 
var Song= mongoose.model("Song",UserSchema); //export our UserShema so we can use it in our files


let saveSongSchema = (songs) => {
  //save the songs that come from the client to the database

    var nameOfSong = songs.nameOfSong;
    var singer = songs.singer;
    var songss = new song({
      name :  name,
      singer : singer

    });
  
    songss.save();
  }
    module.exports.save = save;
    module.exports.Song =Song;




    



   ///check the erorrs when retrieve the data
  //   axios.get('api')
  //   .then((response) => {
  //     const data = response.data;
  //     this.setState({posts: data})
  //     //console.log("data has been received")
  // })
  //   .catch ( () => {
  //   alert("error retrieved data")
  //   })
  //   };


 
 //find many or all the items that has a specific property in database
 //
/*Mongoose.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { category: /^S/ };

  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});*/

