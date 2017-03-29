var index = require('./IndexController');
var questions = require('./QuestionController');
var answers = require('./AnswerController');
var ipAddress = require('./IpAddressController');

module.exports = {
  index,
  questions,
  answers,
  ipAddress
};