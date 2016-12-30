/**
 * New node file
 */
var movies = require('./movies');
//console.log("Bucky's favorite Movie is: " + movies.favMovie);
var buckyMovies = movies();
console.log("Bucky's favorite Movie is: " + buckyMovies.favMovie);