var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var config = require('./config');
var uuid = require('uuid');
var Client = require('node-rest-client').Client;

var restClient = new Client();

app.use('/assets',express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', function (req,res,next) {
  console.log('Request Url:'+req.url);
  next();
});

//Initial form page for registration
app.get('/',function(req,res){
  res.render('index');
});

//API wrapper calls the external api for pi registration and returns a page with a link
app.post('/'+config.piRegistrationEndpoint,urlencodedParser,function(req, res){
  //Generates a unique UUID for each message
  var piID = uuid.v1();
  var regUUID = '';
  console.log("Message body:"+req.body.message);
  console.log("PI UUID:"+piID);


  // set content-type header and data as json in args parameter
  var args = {
    data: { message: req.body.message,  uuid: piID},
    headers: { "Content-Type": "application/json" }
  };

  //Calling out to external API for PI registration
  console.log("Posting to this URL :"+config.piRegHost+"/"+config.piRegResource);
  restClient.post(config.piRegHost+"/"+config.piRegResource, args, function (data, response) {
    // raw response
    console.log('Response text :'+data.toString());
    var registration = JSON.parse(data.toString().replace(/'/g, '"'));

    console.log("Response UUID :"+registration.UUID);
    regUUID = registration.UUID;
    res.render('regSuccess',{ message: req.body.message,reguuid: regUUID});
  });

});


app.listen(port);

