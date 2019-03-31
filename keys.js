var figlet = require("figlet");

console.log(
  figlet.textSync("LIRI APP", {
    font: "Bloody",
    horizontalLayout: "default",
    verticalLayout: "default"
  })
);

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
