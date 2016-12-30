/**
 * New node file
 */
var movies = require('./movies');
//movies.favMovie = 'The Notebook';
//console.log("Emily's favorite Movie is: " + movies.favMovie);
var emilysMovies = movies();
emilysMovies.favMovie = "The Notebook";
console.log("Emily's favorite Movie is: " + emilysMovies.favMovie);