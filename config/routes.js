var express = require('express');
var Router = express.Router();
var Questions = require('../controllers/QuestionController');
var Answers = require('../controllers/AnswerController');
var IpAddress = require('../controllers/IpAddressController');
var Index = require('../controllers/IndexController');
/*
 * --- HTML Routes ---
 */
Router.get('/', Index.loadIndex);

/*
 * --- API Routes ---
 */

Router.get('/api/questions', Questions.list);
Router.get('/api/avaliableQuestions', Questions.getAvaliableQuestions);

Router.post('/api/questions', Questions.create);
Router.post('/api/questions/ipAddress/', IpAddress.create);
// Router.post('/api/questions/:questionId/answer', Controllers.answers.create);

Router.put('/api/questions/updateAnswer', Answers.updateCount);

Router.delete('/api/questions/', Questions.deleteQuestion);

module.exports = Router;
