// Import Packages
var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');

var Success = React.createClass({

	propTypes: {

	},

	getDefaultProps() {
		return {

		};
	},

	render: function () {
		return (
			<div>
				<Grid>
					<Row>
						<Col sm={12}>
							<h2 className="text-center">Operation was a Success</h2>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
});

module.exports = Success;
