const DudenSearchApi = require('../src/duden.js');

var duden = new DudenSearchApi();

duden.search( "winken" ).then( ( result ) => {
	//console.log(result );
} ).catch( ( error ) => {
	console.log( error );
} );