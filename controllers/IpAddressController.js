var IpAddress = require('../models').IpAddress;
var Question = require('../models').Question;
var Answer = require('../models').Answer;
Question.hasMany(Answer, IpAddress, { onDelete: 'cascade' });

module.exports = {
	create(req, res) {
		// Get IP Address of Client
		var ipAddr = req.headers['x-forwarded-for'] ||
			req.connection.remoteAddress ||
			req.socket.remoteAddress ||
			req.connection.socket.remoteAddress;
		return IpAddress
			.create({
				ip: ipAddr,
				questionId: req.body.data.questionId
			})
			.then(function (ip) {
				res.status(201).send(ip);
			})
			.catch(function (error) {
				res.status(400).send(error);
			});
	}
};
