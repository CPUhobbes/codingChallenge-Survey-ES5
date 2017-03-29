//PACKAGES
var React = require('react');

var router = require('react-router');

var Route = router.Route;
var	Router = router.Router;
var	hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

// import React from 'react';
// import {Router, Route, IndexRoute} from 'react-router';

//COMPONENTS

//User

var Index = require('../components/index'),
	Home = require('../components/Main/Home'),
	ThankYou = require('../components/Main/ThankYou');
// import Index from '../components/index';
// import Home from '../components/Main/Home';
// import ThankYou from '../components/Main/ThankYou'

//Admin

var Admin = require('../components/Main/Admin'),
	AdminResults = require('../components/Main/Admin_Child/Results'),
	AdminAdd = require('../components/Main/Admin_Child/Add'),
	AdminDelete = require('../components/Main/Admin_Child/Delete'),
	AdminSuccess = require('../components/Main/Admin_Child/Success');
// import Admin from '../components/Main/Admin';
// import AdminResults from '../components/Main/Admin_Child/Results';
// import AdminAdd from '../components/Main/Admin_Child/Add';
// import AdminDelete from '../components/Main/Admin_Child/Delete';
// import AdminSuccess from '../components/Main/Admin_Child/Success';

//Errors
var NotFound = require('../components/Error/NotFound'),
	SubmitError = require('../components/Error/Submit');

// import NotFound from '../components/Error/NotFound';
// import SubmitError from '../components/Error/Submit';


module.exports = ( 
	<Router history={hashHistory}>
		<Route path="/" component={Index} >
			<IndexRoute component={Home} />
		</Route>
			{/*<Route path ="/ThankYou" component={ThankYou} />
			<Route path ="/Error" component={SubmitError} />
		<Route path="/Admin" component={Admin} >
			<IndexRoute component={AdminResults} />
			<Route path ="/Admin/Add" component={AdminAdd} />
			<Route path ="/Admin/Delete" component={AdminDelete} />
			<Route path ="/Admin/Success" component={AdminSuccess} />
		</Route>
		<Route path="*" component={NotFound} />*/}
	</Router>
);

