//let movieDb = require('./movie-db');
const { addMovie, showMovies } = require('./movie-lib')

let args = process.argv.slice(2)

// a movie title was provided as parameter? => add it to our database
if(args.length > 0) {
  addMovie(args[0])
}

showMovies() // show all movies in our DB
