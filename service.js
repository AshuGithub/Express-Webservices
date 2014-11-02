var express = require('express');

var app = express();
var port = parseInt(process.env.PORT, 10) || 3000;


 
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
	console.log("Got Requestttt"+req.body);
	for(i in req.body){
		console.log(">>"+i);
	}
	res.send(">>>>"+employee);
});

