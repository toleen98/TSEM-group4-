var mongoose - require(mongoose); //in order to use mongoose
mongoose.connect("mongodb://localhost/user")
// var db = mongoose.connection;
// db.on('error', console.error.bind(console,'connection error'));
// db.once('open', ()=>{console.log('We are connected')});
// connect mongoose to mongo database
var Schema = mongoose.Schema; //variable refere to our schema
import axios from "axios";



var UserSchema = new Schema ({//user Schema
 id:mongoose.Schema.types.ObjectId,
 userName:{type:String, required:true},
 email:{type:String, required:true},
 password:{type:String, required:true},
 firstName:{type:String, required:true},
 lastName:{type:String, required:true},
 uploads:Array
 
})

let saveUserSchema = (users) => {
    //save the  to the information come from the user  when sign in or upload 

    var userName = users[i].userName;
    var email = users[i].email;
    var password = users[i].password;
    var firstName = users[i].firstName;
    var lastName = users[i].lastName;
    var uploads = users[i].uploads;

    var userss = new user({
      userName :  userName,
      email : email,
      password : password,
      firstName : firstName,
      lastName:lastName,
      uploads : uploads

    });
  
    userss.save();


// module.export = mongoose.model(user,UserSchema); //export our UserShema so we can use it in our files