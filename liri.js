var client = require('./keys.js');
var request = require('request');
var omdbapi = require('omdb');

// User input variables
var listen = process.argv[2];
var movieName = process.argv[3];

// movie-this function
function movieThis () {
    // Query url for get request
    var queryURL = 'http://www.omdbapi.com/?t=' + movieName + '&apikey=40e9cece';
    // Request
    request(queryURL,
    // Get and print movie data
    function movieData(err, response, body){
        // If no error and get request successful...
        if (!err && response.statusCode === 200) {
            // Console log the information and make it look pretty
            console.log('\n=================== ' + 'About ' + movieName + ' ===================')
            console.log('\nTitle: ' + movieName + '\n\nRelease Year: ' + JSON.parse(body).Year);
            console.log('\nIMDB Rating: ' + JSON.parse(body).Ratings[0].Value);
            console.log('\nRotten Tomatoes Rating: ' + JSON.parse(body).Ratings[1].Value);
            console.log('\nCountry of Production: ' + JSON.parse(body).Country);
            console.log('\nLanguage of Movie: ' + JSON.parse(body).Language);
            console.log('\nPlot: ' + JSON.parse(body).Plot);
            console.log('\nActors Featured: ' + JSON.parse(body).Actors + '\n');
            console.log('\n==================================================')
        }
        
    });
};


// Twitter feed. Use 'my-tweets' in the console to display last 20 tweets from username
function myTweets() {
    var params = {screen_name: 'NSapProductions'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
      }
    });
};

// If user input is my-tweets...
if (listen === 'my-tweets') {
    // run myTweets()
    myTweets();
// if user input is movie-this... 
} else if (listen === 'movie-this') {
    // run movieThis()
    movieThis();   
};  








