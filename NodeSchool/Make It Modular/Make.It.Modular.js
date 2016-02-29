var mymodule = require('./FilteredLs');
module.exports = function (args){}


function bar (callback){
	
	foo (function(err, data){
		
		if(err) return callback(err) //devolver el error
		//... no hay error, continuar con los calculos
		//si todo termina bien, llamar el callback con 'null' como parametro
		callback(null, data);
	})
}
