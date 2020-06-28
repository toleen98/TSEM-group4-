var mongoose - require(mongoose); //in order to use mongoose
mongoose.connect(mongodb://localhost/moody) 
// connect mongoose to mongo database
var Schema = mongoose.Schema; //variable refere to our schema
var SongsSchema = new Schema({ //songs schema 
    name:String,
    category:String,
    coverLetter:String,
    moodDescription:String,
    singer:String
})

module.export = mongoose.model(song,SongsSchema);show database;//export our songsshema so we can use it in our files 

