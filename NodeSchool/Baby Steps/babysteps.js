//console.log(process.argv.length);
var suma = 0;
for(i = 2; i < process.argv.length; i++){
	
	suma +=  Number(process.argv[i]);
}

console.log(suma);
