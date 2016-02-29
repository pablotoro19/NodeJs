var fs = require('fs');
var ruta = process.argv[2];
fs.readFile(ruta, function (err,data)
{
	if(err){throw err}
	
    var result = data.toString().split('\n').length - 1;
	console.log(result);
});

console.log("hola");