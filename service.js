var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer');
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
var app = express();
var port = parseInt(process.env.PORT, 10) || 3000;
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//app.use(connect.bodyParser());
app.listen(port);

app.get('/showMsg', function(req, res){
	res.send("This is a message");
});

app.get('/getName/:myname?', function(req, res){
	res.send("Name is :"+req.params.myname);
});

app.post('/data/showdata', function(req, res){
	var employee = req.body;
	console.log("Got Requestttt"+req.body.data);
	for(i in req.body){
		console.log(i+">>");
	}
	res.send(req+"=====");
});
app.post('/data/image', function(req, res){
	var employee = req.body;
	console.log("Got Requestttt"+req.body.data);
	for(i in req.body){
		console.log(i+">>");
	}
	res.send(req+"=====");
});

