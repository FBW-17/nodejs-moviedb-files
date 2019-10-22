# The MovieDB 1.1.0 - The movie store

Let's store our movies on disk from now on, so we do not lose any of our added movie goldies.

Create a solution branch as usual.

## Task #1 - Write movies to file

We now want to store our movie array in a file "movies-db.json".

In the movie-db.js file:

At the top of the module:

- Import the fs library using require
- Create a constant for the filename of the movie DB (=movies-db.json)
- Create a function saveMovieDb (do export it at the moment)
- This function should write your movies array to the file "movies-db.json"
- Use fs.writeFileSync and JSON.stringify for converting the array into a string

Right below this function:

- Check if a file "movies-db.json" exists in the current directory
- If not: call saveMovieDb()
  => result: when there is no movie file present so far, if will always get created when this module is imported somewhere using require. This will assure we always have an initial file with movies present and can rely on that

Testing: Call index.js
=> watch if the file movies.json is created

Works? => Add, commit and push :)

## Task #2 - Read your movies from the file

Create a new function readMovieDbFromFile()

- Fetch the movies from the movies-db.json file using fs.readFileSync()
- Use JSON.parse() to transform it into a JS array object
- Assign the object to our movies array (overwrite the array)

Adapt your initial check for the file at the top:
If the move DB file DOES exist: Call the readMovieDbFromFile() method

Adapt the JSON file: Add a new movie directly to the end of the array. Save the file.
Hint: Note that the JSON standard is more strict than in JavaScript. All fieldnames must be surrounded by quotes ("")

Now call the index.js file again. Do you see your new movie in the list?
Great.

## Task #3 - Updating the movies file

Adapt function addMovie():
After we added a new movie to the movies array, call the method saveMovieDB()
to update our movie database file too

Adapt your index.js file:

- We now want to get new movies from the command line (by checking process.argv)
  => Slice the parameters off the argv array
- If a parameter was given:
  - Read the parameter into a variable "movieTitle"
  - Add this given movie to our movies DB
  - Show the new list of movies afterwards
- If no parameters were given:
  - just output all movies to the console

### Rules

- Deadline: 1 hour
