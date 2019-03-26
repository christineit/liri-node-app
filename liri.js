//Node modules needed to run the functions:
require("dotenv").config(); //loads environment variables from .env
var keys = require("./keys.js"); //loads keys to app
var fs = require("fs"); // read and writes files
var axios = require("axios"); //performs API requests to backend
var Spotify = require("node-spotify-api"); // API library for Spotify REST API

var spotify = new Spotify(keys.spotify);

//2nd index position for action command in terminal
//3rd index position is holding the user's input
var action = process.argv[2];
var userChoice = process.argv[3]; //what is this doing?

//Commands for liri app:
function commands(action, userChoice) {
  switch (action) {
    case "concert-this":
      concertThis(userChoice);
      break;

    case "spotify-this-song":
      spotifyThisSong();
      break;

    case "movie-this":
      movieThis(userChoice);
      break;

    case "do-what-it-says":
      doWhatItSays();
      break;

    //If no command entered, this message will appear
    default:
      console.log(
        "liri node app:  Please enter one of the following commands: \n 'concert-this' \n 'spotify-this-song'\n 'movie-this' \n 'do-what-it-says'"
      );
  }
}

//Functions for liri commands:
var artistName = "";
artistName = process.argv;
console.log(artistName);
artistName.shift();
artistName.shift();
artistName.join("");
console.log(artistName);

var queryUrl =
  "https://rest.bandsintown.com/artists/" +
  artistName +
  "/events?app_id=codingbootcamp";

axios.get(queryUrl).then(function(response) {
  console.log(response.venue[1].name);
});

//function concertThis(input) {}

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
*/

/*Takes a movie name with multiple words
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
  function movieThis() {
    var movieName = process.argv[3];
    if (!movie) {
      movie = "mr nobody";
    }
    request(
      "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy", function (response, err)
    );
  }
  /*
do-what-it-says
npm init -y
npm i npm i file-system
writeFile random.txt 
It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Edit the text in random.txt to test out the feature for movie-this and concert-this.

});*/
