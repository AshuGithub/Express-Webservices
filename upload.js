/*Define dependencies.*/

var express=require("express");
var multer  = require('multer');
var app=express();
var done=false;

/*Configure the multer.*/

app.use(multer({ dest: './uploads/'
}));

/*Handling routes.*/


/*Run the server.*/
app.listen(3000,function(){
    console.log("Working on port 3000");
});