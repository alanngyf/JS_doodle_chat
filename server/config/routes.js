
var doodlesController = require('./../controllers/doodles.js');

module.exports = function(app) {
	app.get('/doodles', function(req, res){
		// doodlesController.show_all(req, res);
		res.redirect('/partials');
	})
	app.get('/show_msg', function(req, res){
		// doodlesController.show_all(req, res);
		doodlesController.show_msg(req, res);
	})
}