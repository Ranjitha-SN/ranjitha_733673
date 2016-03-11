var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));
//get request

/*app.get('/users',function(req,res) {
	fs.readFile("UsersList.json",checkNewLine);
	function checkNewLine(err,contents){	
	 res.send(contents.toString()); 
	}
	});*/
/*app.get('/name/:id',function(req,res) {
	console.log(req.params.id);
	res.send();
});*/
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.post('/users',function(req,res) {
 //console.log(req.body);
 fs.writeFile("resp.txt", JSON.stringify(req.body));
 res.send("Completed");
	});
	app.listen(process.env.PORT || 8080);