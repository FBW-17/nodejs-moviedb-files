// our initial set of movies 
// (used as default if there is no movies-db.file present)
let movies = [
  { id: 1, title: "One flew over the cuckoo's nest" },
  { id: 2, title: "The shawshank redemption" },
  { id: 3, title: "Vertigo" },
  { id: 4, title: "Alice in wonderland" },
];

const addMovie = (title) => {
  let objMovieNew = {
    id: movies.length + 1,
    title: title
  }
  movies.push(objMovieNew);
}

const showMovies = () => {
  console.log("Current movie list:")
  console.log(movies);
  console.log()
}

module.exports = { addMovie, showMovies }
