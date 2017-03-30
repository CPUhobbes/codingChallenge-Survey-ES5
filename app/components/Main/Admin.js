// Import Packages
var React = require('react');
// var Row = require('react-bootstrap/lib/Row');
// var Col = require('react-bootstrap/lib/Col');
// var Grid = require('react-bootstrap/lib/Grid');
var Nav = require('react-bootstrap/lib/Nav');
var Navbar = require('react-bootstrap/lib/Navbar');
var NavItem = require('react-bootstrap/lib/NavItem');
var Button = require('react-bootstrap/lib/Button');
var IndexLinkContainer = require('react-router-bootstrap/lib/IndexLinkContainer');
var hashHistory = require('react-router/lib/hashHistory');

var Admin = React.createClass({

	propTypes: {
		location: React.PropTypes.object.isRequired,
		children: React.PropTypes.object.isRequired
	},

	getDefaultProps() {
		return {

		};
	},

	getInitialState: function () {
		return {
			login: false
		};
	},

	componentWillMount: function () {
		if (typeof this.props.location.state !== 'undefined') {
			this.setState({login: this.props.location.state});
		} else {
			this.setState({login: false});
		}
	},

	handleFormSubmit: function () {
		hashHistory.push('/');
	},

	render: function () {
		// variables
		var children = this.props.children;
		var login = this.state.login;

		// functions
		var handleSubmit = this.handleFormSubmit;

		function showAdmin() {
			return (
				<div>
					<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							Admin Panel
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<IndexLinkContainer to={'/Admin'} activeHref="active">
								<NavItem eventKey={1} >Results</NavItem>
							</IndexLinkContainer>
							<IndexLinkContainer to={'/Admin/Add'} >
								<NavItem eventKey={2} >Add Question</NavItem>
							</IndexLinkContainer>
							<IndexLinkContainer to={'/Admin/Delete'} >
								<NavItem eventKey={3} >Delete Question</NavItem>
							</IndexLinkContainer>
							<IndexLinkContainer to={'/'} >
								<NavItem eventKey={4} >Back to Survey</NavItem>
							</IndexLinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				{/* Render component children, important!! */}
				{children}
				</div>
			);
		}

		function showError() {
			return (
				<div>
					<h2 className="text-center">You do not have the Credentials</h2>
					<div className="text-center">
						<Button bsStyle="success" bsSize="large" onClick={handleSubmit}>Go To Main Page!</Button>
					</div>
				</div>
			);
		}

		// Login validation
		function checkLogin() {
			if (login) {
				return (<div>{showAdmin()}</div>);
			} else {
				return (<div>{showError()}</div>);
			}
		}

		return (
			<div>
				<div>{checkLogin()}</div>
			</div>
		);
	}
});

module.exports = Admin;
