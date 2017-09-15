// Twitter
var Twitter = require('twitter');
// Spotify
var Spotify = require('node-spotify-api');

// Twitter keys
var client = new Twitter({
 consumer_key: 'SClwVN8smXL4kDODVvE9SciWk',
 consumer_secret: 'V5MXVed21XoBFhfH2nOu4CyHdCXXrCnd5wZwQlegZz7CcGV2In',
 access_token_key: '837834974-PObkoiOuoqyubK9n9zhNFFGp4h7D3JgD8rweSusz',
 access_token_secret: 'Fvhn0pLyibAYnoJesrRI11ZuojcB6lOFnq3eRX0rHUnrx'
});
// Export twitter 
module.exports = client;


// Spotify keys
var spotify = new Spotify({
 id: 'a8fed66029f74a4ebbc95ab4571d22d2',
 secret: 'fbde31ecfc054e59bfc4c5efaca8d9cd'
});
// Export spotify
module.exports = spotify;

