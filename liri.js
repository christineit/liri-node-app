//Node modules needed to run the functions:
require("dotenv").config(); //loads environment variables from .env
var keys = require("./keys.js"); //loads keys to app
var fs = require("fs"); // read and writes files
var axios = require("axios"); //performs API requests to backend
var Spotify = require("node-spotify-api"); // API library for Spotify REST API

var spotify = new Spotify(keys.spotify);

//2nd index position for action command in terminal
var action = process.argv[2];
//Commands for liri app:
switch (action) {
  case "concert-this":
    concertThis();
    break;
  case "spotify-this-song":
    spotifyThisSong();
    break;
  case "movie-this":
    movieThis();
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
  default:
    console.log("liri node app");
}

/*concert-this
node liri.js concert-this <artist/band name here>
Outputs: 
Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")
*/

/*
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
*/

/*
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
*/

//Takes a movie name with multiple words
var movieName = "";
movieName = process.argv;
console.log(movieName);
movieName.shift();
movieName.shift();
movieName.join("");
console.log(movieName);

var queryUrl =
  "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// var response = response.data;
axios.get(queryUrl).then(function(response) {
  console.log(
    "Movie Title: " +
      response.data.Title +
      " " +
      "\r\n" +
      "Release Year: " +
      response.data.Year +
      " " +
      "\r\n" +
      "IMDB Rating: " +
      response.data.imdbRating +
      +" " +
      "\r\n" +
      "Country Produced: " +
      response.data.Country +
      " " +
      "\r\n" +
      "Language: " +
      response.data.Language +
      " " +
      "\r\n" +
      "Plot: " +
      response.data.Plot +
      " " +
      "\r\n" +
      "Actors: " +
      response.data.Actors
  );

  /*
do-what-it-says
npm init -y
npm i npm i file-system
writeFile random.txt 
It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Edit the text in random.txt to test out the feature for movie-this and concert-this.
*/
});
