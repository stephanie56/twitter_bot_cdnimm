var twit = require('twit');
var config = require('./config.js');
// pass config to twit
var T = new twit(config);


// retweet bot ===============

// find latest tweets according to the query 'q' in params
var retweet = function() {
  var params = {
    q: '#cdnimm',
    result_type: 'recent',
    lang: 'en'
  }

  T.get('search/tweets', params, function(err, data, response){
    if (err) {
      console.log('Something went wrong with researching');
    }
    else {
      var retweetId = data.statuses[0].id_str;
      T.post('statuses/retweet/:id', {id: retweetId}, function(err, response){
        if(err){
          console.log('something went wrong with retweeting');
        }
        else {
          console.log('Retweeted!');
        }
      });
    }
  });

}

retweet();
