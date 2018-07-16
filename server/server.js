const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var User = require('./models/user');
var Messages = require('./models/message')

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

app.post('/user', function(req, res){
   
    //var user = new User(req.body);
    User.findOne({email: req.body.email})
    .then(user => {
        if(user){
        console.log("single user detail that is recieved : "+user);
        res.status(200).send(user);
        }
        else{
        res.status(400).send("Error in login")
        }
        
    })
    .catch(err => {
    res.status(400).send("unable to save user to the database");
    });
})

app.post('/user/id', function(req, res){
   
    //var user = new User(req.body);
    console.log("req : ",req._id);
    User.findOne({_id: "5b4c93b5f043ae0e68b9cec5"})
    .then(user => {
        if(user){
        console.log("5b4c93b5f043ae0e68b9cec5 user detail that is recieved : "+user);
        res.status(200).send(user);
        }
        else{
        res.status(400).send("5b4c93b5f043ae0e68b9cec5 Error in login")
        }
        
    })
    .catch(err => {
    res.status(400).send("unable to save user to the database");
    });
})

app.get('/messages', function(req, res){
   
    //var user = new User(req.body);
    Messages.find()
    .then(messages => {
        /*let messagesArr = [];
       
       

        messages.forEach(message => {
            messagesArr.push(message);
        });*/
        console.log("messages that are recieved : "+messages);
        res.status(200).send(messages);
    })
    .catch(err => {
    res.status(400).send("unable to fetch messages from the database",err);
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