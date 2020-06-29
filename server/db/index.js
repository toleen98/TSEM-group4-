var mongoose - require(mongoose); //in order to use mongoose
mongoose.connect("mongodb://localhost/moody")
// connect mongoose to mongo database
var Schema = mongoose.Schema; //variable refere to our schema
import axios from "axios";




var SongsSchema = new Schema({ //songs schema 
    id:Schema.ObjectId
    name:String,
    category:String,
    coverPhoto:String,
    moodDescription:String,
    singer:String
})


module.export = mongoose.model(song,SongsSchema);//export our songsshema so we can use it in our files 





let save = (songs) => {
  //save the songs to the database

    var name = songs[i].name;
    var category = songs[i].category;
    var coverPhoto = songs[i].coverPhoto;
    var moodDescription = songs[i].moodDescription;
    var singer = songs[i].singer;

    var songss = new song({
      name :  name,
      category : category,
      coverPhoto : coverPhoto,
      moodDescription : moodDescription,
      singer : singer

    });
  
    songss.save();


   ///check the erorrs when retrieve the data
    axios.get('api')
    .then((response) => {
      const data = response.data;
      this.setState({posts: data})
      //console.log("data has been received")
  })
    .catch ( () => {
    alert("error retrieved data")
    })
    };

module.exports.save = save;
module.exports.song =song;
 
 //find many or all the items that has a specific property in database
 //
Mongoose.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { category: /^S/ };

  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});


