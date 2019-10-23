# The MovieDB 2.0.0

## The complete movie database - all CRUD operations

Now let us finalize our movie database.

### Task 1 - Update and delete

We want to add the following functions:

- updateMovie(id, titleNew)
  => this function should fetch the movie with the given id from our array. It updates it with the new title. Use the find array method for fetching the movie => google how to use it
- deleteMovie(id)
  => this function fetches movie by its ID from the array. And deletes it from it. Google the "findIndex" method for fetching and element index from an array. Afterwards you can feed this index into to splice method for deleting an element from an array

After both operations:
Call the functions saveMovieDB() to save the changes to the movie DB file

Test your methods in index.js:

- Update a given movie by ID and a new title
- Delete a given movie by ID
- Show Movies at the end

Works? Add, commit, push :)

### Adding multiple movies at once

Adapt your method addMovie first:
The function should return the added movie at the end

Add another function addMovies(moviesNew):

- it receives an array of new movies that should be added to our DB - e.g.:
  => [{title: "Movie X}, {title: "Movie Y"}, {title: "Movie Z}]
- for each movie in the array: the function calls the addMovie function and hands over the title
  => therfore you must make the addMovie function callable - move the addMovie function up to the top and export it later
- the function should return the array of created movies at the end

Testing:

In your index.js file - Make the following chain of calls:

- addMovies([arr with three new movies])
- save the addedMovies in a variable moviesAdded
- from this array of movies:
  - Grab the second added movie
  - Call the update method and update the title of this movie
- Show all movies
- Delete the first movie:
  - Grab the first movie from the moviesAdded array
  - Call the delete method and feed in the id of this movie
- Add another movie with title „Good Will Hunting“
- Show all movies:
  => Watch out for the ID of the last item

### Create truly unique IDs

We now adapt our generation of IDs in the addMovie function to create truly unique IDs

- Install the uuid package from the terminal: `npm install uuid`
- Require it like so in your movie-db.js: `const uuid = require('uuid/v1')`
  - How it works: We can create a unique ID like so: let idNew = uuid()
- Change the line where you generate a new ID for a movie by a call to uuid()
- Now lets replace the old numeric IDs by uuids 
  - Write a function "updateIDs" which updates all Ids to UUIDs
    - this function loops through our array of movies
    - it checks if the ID is a number (google how to check for a number)
    - if it is a number: replace the id with a uuid

### Filter movies by a title part

Add a new function filterMovies(titlePart)
This function loops through all the movies and checks if the given "titlePart" is part of the title (case insensitive!).
Use the array filter method for that.

## Rules

- Deadline: until the end of time and space (or for real: 1.5 hours)
