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
const saveMovieDb = () => {
  // convert the movies array into a string and write it into the file
  fs.writeFileSync(movieDbFilename, JSON.stringify(movies, null, 2))
}

const readMovieDb = () => {
  // read the JSON file directly
  // require will parse it under the hood and convert it to
  // a javascript array 
  movies = require("./" + movieDbFilename)
}

const addMovie = (title) => {
  let objMovieNew = {
    id: movies.length + 1,
    title: title
  }
  movies.push(objMovieNew);  
  saveMovieDb()
}

const showMovies = () => {
  console.log("Current movie list:")
  console.log(movies);
  console.log()
}

const backupDatabase = () => {
  if(!fs.existsSync("backup")) {
    fs.mkdirSync("backup")
  }
  let date = new Date()
  let backupFileName = `./backup/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}-db-backup.json`
  fs.copyFileSync(movieDbFilename, backupFileName)
}

// this checks if the movies file already exists,
// if not it will be created initially
if (!fs.existsSync(movieDbFilename)) {
  saveMovieDb()
}
else {
  readMovieDb()
}

module.exports = { addMovie, showMovies, backupDatabase }