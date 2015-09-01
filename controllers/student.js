// student controller
var db = require(__dirname + './../lib/mysql');

exports.find = function(req, res, next) {
	db.query("SELECT * FROM student", function(err, rows) {
		if(err) return next(err);
		res.send(rows);
	});
};

exports.findOne = function(req, res, next) {
	db.query("SELECT * FROM student WHERE studentno = '" + [req.params.studentno] + "'", function(err, rows) {
		if(err) return next(err);
		if(rows.length === 0) {
			res.send(404, {message: 'Student not found.'});
		}
		else {
			res.send(rows[0]);
		}
	});
};

exports.insert = function(req, res, next) {
	db.query("INSERT INTO student (studentno, name, birthday) VALUES (?, ?, ?)", [req.body.studentno, req.body.name, req.body.birthday], function(err, rows) {
		if (err) return next(err);
		res.send(rows);
	});
};

exports.remove = function(req, res, next) {
	db.query("DELETE FROM student WHERE studentno = ?", [req.params.studentno], function (err, rows) {
		if(err) return next(err);
		res.send(rows);
	});
};

exports.update = function(req, res, next) {
	db.query("UPDATE student SET name=?, birthday=? WHERE studentno=?", [req.body.name, req.body.birthday, req.body.studentno], function (err, rows) {
		if(err) return next(err);
		res.send(rows);
	});
};
