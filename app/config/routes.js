// PACKAGES
var React = require('react');
var router = require('react-router');
var Route = router.Route;
var	Router = router.Router;
var	hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

// User
var Index = require('../components/index');
var Home = require('../components/Main/Home');
var ThankYou = require('../components/Main/ThankYou');

// Admin
var Admin = require('../components/Main/Admin');
var AdminResults = require('../components/Main/Admin_Child/Results');
var AdminAdd = require('../components/Main/Admin_Child/Add');
var AdminDelete = require('../components/Main/Admin_Child/Delete');
var AdminSuccess = require('../components/Main/Admin_Child/Success');

// Errors
var NotFound = require('../components/Error/NotFound');
var SubmitError = require('../components/Error/Submit');


module.exports = (
	<Router history={hashHistory}>
		<Route path="/" component={Index} >
			<IndexRoute component={Home} />
		</Route>
			<Route path ="/ThankYou" component={ThankYou} />
			<Route path ="/Error" component={SubmitError} />
		<Route path="/Admin" component={Admin} >
			<IndexRoute component={AdminResults} />
			<Route path ="/Admin/Add" component={AdminAdd} />
			<Route path ="/Admin/Delete" component={AdminDelete} />
			<Route path ="/Admin/Success" component={AdminSuccess} />
		</Route>
		<Route path="*" component={NotFound} />
	</Router>
);
