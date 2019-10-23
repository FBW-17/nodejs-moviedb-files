# The MovieDB 1.2.0

## Task 1 - Fetch movies file with require() instead of fs.readFileSync

Adapt your method readMovieDbFromFile

- Comment out the code thats reads and parse the json file
- Fetch the json file with require instead of readFileSync + parse()

## Task 2 - Backups for our movieDB

Now let's create backups of our MovieDB at any time:

In movie-lib.js:

- Create a function backupDatabase()
- The function should copy your current database file to a subdirectory "backup"
- The name of the file copy should have the given format: \<year-month-day\>-db-backup.json
  - Check in your function if the folder "backup" exists
  - If folder does not exist => create it
  - Copy the file: check the methods on fs or google a method to copy a file to another destination using the fs library
- Export the backup function

In index.js:

- Import the backup function
- Call it
- Check if the backup folder with the backup file was generated
- That's it!

## Rules

- Deadline: 40 minutes
