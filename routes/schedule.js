
/*
 * GET home page.
 */
var data = require('../data_event.json');

exports.view = function(req, res){
	console.log(data);
	if (req.query.name == undefined) {
		  res.render('schedule', data);
	} else {
		var newSchedule = {
			"name": req.query.name,
			"time": req.query.time,
			"location": req.query.location
		};

		data.events.push(newSchedule);
	    res.render('schedule', data);

	}

};
