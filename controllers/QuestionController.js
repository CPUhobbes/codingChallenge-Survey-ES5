var Question = require('../models').Question;
var Answer = require('../models').Answer;
var IpAddress = require('../models').IpAddress;
Question.hasMany(Answer, IpAddress, { onDelete: 'cascade' });
var sequelize = require('sequelize');
//Answer.belongsTo(Question);

module.exports = {
	
	//Create a new question
	create(req, res) {
		//console.log(req.body.answers);
		return Question
			.create({
				question: req.body.question,
				answers: req.body.answers,
				ipAddresses:[{ip:''}]
			},
			{
				include: [{
					model:Answer,
					as:'answers'
				},
				{
					model: IpAddress,
					as: 'ipAddresses',
				}]
			})
			.then(function(question){
				res.status(201).send(question)
			})
			.catch(function(error){
				res.status(400).send(error)
			});
	},

	//Get all Questions
	list(req, res) {
		return Question
			.findAll({
				include:[{
					model: Answer,
					as: 'answers',
				},
				{
					model: IpAddress,
					as: 'ipAddresses',
				}]
				
			})
			.then(function(questions){
				res.status(200).send(questions)
			})
			.catch(function(error){
				res.status(400).send(error)
			});
	},

	//Find one question that does not match current IP Address
	getAvaliableQuestions(req, res){
	
		//Get IP Address of Client
		var ipAddr = req.headers['x-forwarded-for'] || 
			req.connection.remoteAddress || 
			req.socket.remoteAddress ||
			req.connection.socket.remoteAddress;

		//console.log(ipAddr);

		return Question
			.findAll({
				include:[
				{
					model: Answer,
					as: 'answers',
				},
				{
					model: IpAddress,
					as: 'ipAddresses',
					where:{
						ip: {$eq:ipAddr}
					}
							
				}]
			}).then(function(results){
				var list =[-1];
				results.forEach(function(val, index){
					list.push(val.dataValues.id)
				})
				return Question.findAll({
					order: [
  						[sequelize.fn('RAND')]
					],
					limit: 1,
					include:[
					{
						model: Answer,
						as: 'answers',
					}],
					where: {
						id:{
							$notIn: list
						}
					}
				})
			})
			.then(function(questions){
				res.status(201).send(questions)
			})
			.catch(function(error){
				res.status(400).send(error)
			});
	},

	deleteQuestion(req, res){
		//console.log(req.body.questionId);
		return Question
			.find({
				where:{
					id: req.body.questionId
				},
			})
			.then(function(question) {
				if(!question){
					return res.status(404).send({message:"Cannot find Question"});
				}

				return question
					.destroy()
					.then(
						function(){
							res.status(202).send({removed:true})
					})
					.catch(function(error){
						res.status(400).send(error)
					});


			})
			.catch(function(error){
				 res.status(400).send(error)
			});
	}
};