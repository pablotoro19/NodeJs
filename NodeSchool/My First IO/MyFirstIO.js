var fs = require('fs');
var ruta = process.argv[2];
//var path = 'file://C:\Users\Administrador\AppData\Roaming\npm\node_modules\learnyounode\node_apidoc\fs.html';
var buf = fs.readFileSync(ruta);
var result = buf.toString().split('\n').length - 1;
console.log(result);



