var mongoose - require(mongoose); //in order to use mongoose
mongoose.connect("mongodb://localhost/users")
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', ()=>{console.log('We are connected')});
//connect mongoose to mongo database
var Schema = mongoose.Schema; //variable refere to our schema
//import axios from "axios";



var UserSchema = new Schema ({//user Schema
 id:mongoose.Schema.types.ObjectId,
 userName:{type:String, required:true},
 email:{type:String, required:true ,unique:true},
 password:{type:String, required:true},
 firstName:{type:String, required:true},
 lastName:{type:String, required:true},
 
 
})

let saveUserSchema = (users) => {
    //save the  to the information come from the user  when sign in or upload 
    //var id = users.id;
    var userName = users.userName;
    var email = users.email;
    var password = users.password;
    var firstName = users.firstName;
    var lastName = users.lastName;
    
    var userss = new user({
      id:id,
      userName:userName,
      email:email,
      password:password,
      firstName:firstName,
      lastName:lastName
      

    });
  
    userss.save();
}


///check the erorrs when retrieve the data
  //   axios.get('/signup')
  //   .then((response) => {
  //     const data = response.data;
  //     this.setState({posts: data})
  //     //console.log("data has been received")
  // })
  //   .catch ( () => {
  //   alert("error retrieved data")
  //   })
  //   };

module.exports.save = save;
module.exports.User =User;
 




If_exists(req,res,callback) {
    var mongoose = require('mongoose');
    var user = mongoose.model('User');
    Auth.findOne({email:req.body.email}, function (err1, user1) {
      if (user1) {
        
        callback(error,message);
        return;
      }
      else {
        var error = "";
        var message = "";
        callback(error,message);
        return;
      }
    });
  }


 module.export.User = User;

 var query  = User.where({email:req.body.email});
 query.findOne(function (err, user) {
  if (err) return handleError(err);
  if (user) {
    // doc may be null if no document matched
    var error = "email";
    var message = "Email already exists";

  }
});