//Node modules needed to run the functions:
//loads environment variables from .env
require("dotenv").config();

//loads keys to app
var keys = require("./keys.js");

// read and writes files
var fs = require("fs");

//formatting dates
var moment = require("moment");

//performs API requests to backend
var axios = require("axios");

//Spotify API library:
var Spotify = require("node-spotify-api"); // API library for Spotify REST API
var spotify = new Spotify(keys.spotify);

//2nd index position for action command in terminal
//3rd index position is holding the user's input
var action = process.argv[2];
var userQuery = process.argv.slice(3).join(" ");

//Commands for liri app:
function commands(thingToDo, thing) {
  switch (thingToDo) {
    case "concert-this":
      concertThis(thing);
      break;

    case "spotify-this-song":
      spotifyThisSong(thing);
      break;

    case "movie-this":
      movieThis(thing);
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
commands(action, userQuery);

//FUNCTIONS FOR LIRI COMMANDS:

function concertThis(input) {
  var queryUrl =
    "https://rest.bandsintown.com/artists/" +
    input +
    "/events?app_id=codingbootcamp";

  axios.get(queryUrl).then(function(response) {
    for (i = 0; i < 10; i++)
      console.log(
        "Venue: " +
          response.data[i].venue.name +
          "\n Location: " +
          response.data[i].venue.city +
          "\n Date: " +
          moment(response.data[i].datetime).format("MM/DD/YYYY")
      );
  });
}

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

function movieThis(input) {
  var queryUrl =
    "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
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
  });
}

/*
      do-what-it-says
      npm init -y
      npm i npm i file-system
      writeFile random.txt 
      It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
      Edit the text in random.txt to test out the feature for movie-this and concert-this.
  */

//============================================================================================================
/* 

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
movie-this: mr.nobody if else/switch statement work in progress
   if ((input = [""])) {
    var queryUrl =
      "http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy";
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
    });
   
    } else{
      */
