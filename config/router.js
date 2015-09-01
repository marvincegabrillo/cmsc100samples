var student = require('./../controllers/student');
var degree = require('./../controllers/degree');

module.exports = function(router) {
	/* routes for students */
	router.route('/students')
		.get(student.find)
		.post(student.insert)
		.put(student.update);
	router.route('/students/:studentno')
		.get(student.findOne)
		.delete(student.remove);
	router.route('/degrees')
		.get(degree.find)
		.post(degree.insert)
		.put(degree.update);
	router.route('/degrees/:degree_id')
		.get(degree.findOne)
		.delete(degree.remove);
		
		return router;
};
