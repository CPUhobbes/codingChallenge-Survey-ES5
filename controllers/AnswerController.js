var Answer = require('../models').Answer;

module.exports = {
	create(req, res) {
		return Answer
			.create({
				answer: req.body.answer,
				questionId: req.params.questionId
			})
			.then(function (answer) {
				res.status(201).send(answer);
			})
			.catch(function (error) {
				res.status(400).send(error);
			});
	},
	updateCount(req, res) {
		return Answer
			.findById(req.body.answerId)
			.then(function (answer) {
				var newCount = answer.dataValues.responses + 1;
				answer.update({responses: newCount})
				.then(function () {
					res.status(201).send(answer);
				})
				.catch(function (error) {
					res.status(400).send(error);
				});
			})
			.catch(function (error) {
				res.status(400).send(error);
			});
	}
};
