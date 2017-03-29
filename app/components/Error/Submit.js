var React = require('react'),
	Link = require('react-router/lib/Link');

var Submit = React.createClass( {
	render: function() {
		return (
			<div>
				<h2>There was a problem submitting your answer</h2>
				<h3><Link to="/">Click here </Link>to return to the main page</h3>
			</div>
		);
	}
});
module.exports = Submit;
