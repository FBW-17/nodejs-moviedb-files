const fs = require('fs')

// our initial set of movies 
// (used as default if there is no movies-db.file present)
let movies = [
  { id: 1, title: "One flew over the cuckoo's nest"},
  { id: 2, title: "The shawshank redemption"},
  { id: 3, title: "Vertigo"},
  { id: 4, title: "Alice in wonderland"},
];
let movieDbFilename = 'movies-db.json'

// this save our movie collection to a file
// we need to convert the array to a string first
// and this string we can then easily write to the file 
const saveMovieDb = () => {
  // convert the movies array into a string and write it into the file
  fs.writeFileSync(movieDbFilename, JSON.stringify(movies, null, 2))
}

// this reads the movies from the file as a string
// it converts the read string into a JavaScript object
// and this object we then assign to our movies array
const readMovieDb = () => {
  let moviesInFile = fs.readFileSync(movieDbFilename, 'utf8');
  moviesInFile = JSON.parse(moviesInFile)
  movies = moviesInFile;
}

// this adds a new movie to our array
// and updates the movies database file
const addMovie = (title) => {
  let objMovieNew = {
    id: movies.length + 1,
    title: title
  }
  movies.push(objMovieNew);
  saveMovieDb()
}

// this just prints out our list of movies to the user
const showMovies = () => {
  console.log("Current movie list:")
  console.log(movies);
  console.log()
}

// this checks if the movies file already exists,
// if not it will be created initially
if (!fs.existsSync(movieDbFilename)) {
  saveMovieDb()
}
// if the file DOES exist: we load its contents into 
// our movie array
else {
  readMovieDb()
}

module.exports = { addMovie, showMovies }