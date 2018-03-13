var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request({
    url: 'https://api.foursquare.com/v2/venues/trending',
    method: 'GET',
    qs: {
      client_id: 'G0ZVBQ54WV3H0M2M03TISVCME1QQU1QRVG53OQCASRCLGT2Q',
      client_secret: 'TJVYRJNJGVIGZA4YPSXWUKI5EDIZQRBJJ15TMQJIIEORBX32',
      ll: '40.7243,-74.0018',
      v: '20181303',
      limit: 10
    }
  }, function(err, res, body) {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.parse(body).response.venues[0].name);
    }
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
