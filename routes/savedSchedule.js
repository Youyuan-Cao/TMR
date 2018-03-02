
/*
 * GET home page.
 */

exports.view = function(req, res){

   res.render("savedSchedule", {
   	"schedules": [
   		{
   			"name": "Cogs 120 Lecture",
			"time": "9:30 - 10:50 am",
			"location": "CICC"
   		},
   		{
   			"name": "Cogs 107B Lecture",
			"time": "12:30 am - 1:50 pm",
			"location": "York Hall"
   		}
   	   ]
 
	});
};