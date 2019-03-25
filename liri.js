require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

/*concert-this
node liri.js concert-this <artist/band name here>
Outputs: 
Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")

spotify-this-song
node liri.js spotify-this-song '<song name here>'
Outputs:
Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
If no song is provided then your program will default to "The Sign" by Ace of Base.
npm init -y
npm i node-spotify-api

movie-this
node liri.js movie-this '<movie name here>'
Outputs: 
  * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
npm init -y
npm i axios

do-what-it-says
npm init -y
npm i npm i file-system
writeFile random.txt 
It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Edit the text in random.txt to test out the feature for movie-this and concert-this.
*/
