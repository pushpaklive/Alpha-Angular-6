const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var User = require('./models/user')

//var router = express.Router();
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://pushpak:pushpak1@ds239071.mlab.com:39071/pushpak-db';
mongoose.connect(mongoDB);

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
    res.send('This is server location');
});

app.get('/users', function(req, res){
   
    //var user = new User(req.body);
    User.find()
    .then(users => {
        let userArr = [];
        console.log("users details that are recieved : "+users);
       

        users.forEach(user => {
            userArr.push(user);
        });
        res.status(200).send(userArr);
    })
    .catch(err => {
    res.status(400).send("unable to save user to the database");
    });
})

app.post('/enroll', function(req, res){
    console.log(req.body);
    var user = new User(req.body);
    user.save()
    .then(user => {
        console.log("user details that are saved : "+user)
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save user to the database");
    });
    /*db.users.save(user, function(err, user){
        if(err){
             res.send(err);
        }
        res.json(user);
        res.status(200).send({        
            message: "Data Recieved"
        })
    })*/
})

app.listen(PORT, function(){
    console.log('Server is running on http://localhost:'+PORT);
});