const DudenSearchApi = require('../src/util/duden.js');

var duden = new DudenSearchApi();

duden.search( "winken" ).then( ( result ) => {
	//console.log(result );
} ).catch( ( error ) => {
	console.log( error );
} );