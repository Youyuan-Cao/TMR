
/*
 * GET home page.
 */
var data = require('../data_location.json');

exports.view = function(req, res){
	console.log(data);
    res.render('newLocation', data);
};
