var setupControllerMajors = require('./setupControllerMajors');
var setupControllerWands = require('./setupControllerWands');
var setupControllerCups = require('./setupControllerCups');
var setupControllerSwords = require('./setupControllerSwords');
var setupControllerPentacless = require('./setupControllerPentacless');

module.exports = function(app){
    app.get('/api/setupTarots', function(req, res){
        setupControllerMajors(app);
        setupControllerWands(app);
        setupControllerCups(app);
        setupControllerSwords(app);
        setupControllerPentacless(app);
        res.send('Success!!');
    });
}
