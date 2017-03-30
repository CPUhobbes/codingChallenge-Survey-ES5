var express = require('express');
var Router = express.Router();
var Controllers = require('../controllers');
/*
 * --- HTML Routes ---
 */
Router.get('/', Controllers.index.loadIndex);

/*
 * --- API Routes ---
 */

Router.get('/api/questions', Controllers.questions.list);
Router.get('/api/avaliableQuestions', Controllers.questions.getAvaliableQuestions);

Router.post('/api/questions', Controllers.questions.create);
Router.post('/api/questions/ipAddress/', Controllers.ipAddress.create);
// Router.post('/api/questions/:questionId/answer', Controllers.answers.create);

Router.put('/api/questions/updateAnswer', Controllers.answers.updateCount);

Router.delete('/api/questions/', Controllers.questions.deleteQuestion);

module.exports = Router;
