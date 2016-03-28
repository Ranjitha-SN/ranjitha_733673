var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
var MY_PORT = 8082; 
app
	.get('/getfile',function(req, res) {
	var obj;
	fs.readFile('sub.json', 'utf8', function (err, data) {
	  if (err) throw err;
	  obj = JSON.parse(data);
	  console.log(obj);
	  res.send(obj);
	});
});


app.listen(process.env.PORT || MY_PORT);
console.log("Server is running");