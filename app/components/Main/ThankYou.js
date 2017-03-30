// Import Packages
var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');
var Button = require('react-bootstrap/lib/Button');
var hashHistory = require('react-router/lib/hashHistory');

var ThankYou = React.createClass({
	propTypes: {

	},

	getDefaultProps() {
		return {

		};
	},

	getInitialState: function () {
		return {

		};
	},

	handleFormSubmit: function () {
		hashHistory.push('/');
	},

	render: function () {
		return (
			<div>
				<Grid>
					<Row>
						<Col sm={12}>
							<h2 className="text-center">Thank You For Your Submission!</h2>
							<br /><br />
							<div className="text-center">
								<Button onClick={this.handleFormSubmit} bsStyle="primary" bsSize="lg"> Try Another Question </Button>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
});

module.exports = ThankYou;
