//PACKAGES
// import React from 'react';
// import {render} from 'react-dom';
// import {hashHistory} from 'react-router';
// import Routes from './config/routes';

var React = require('react'),
    ReactDOM = require('react-dom'),
    routes = require('./config/routes');


ReactDOM.render(routes,document.getElementById('root'));
