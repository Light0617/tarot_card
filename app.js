var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 2000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname  + '/public'));

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);
htmlController(app);

app.listen(port);
