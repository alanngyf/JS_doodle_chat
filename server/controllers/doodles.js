// add models into controller, need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Doodle = mongoose.model('Doodle');

var doodlesController = {};

doodlesController.show_all = function(req, res) {
	Doodle.find({}, function(err, results) {
		if(err)
		{
			console.log(err);
		}
		else
		{
			res.json(results);
		}
	})
}


module.exports = doodlesController;