//Import Packages
var React = require('react'),
	Row = require('react-bootstrap/lib/Row'),
	Col = require('react-bootstrap/lib/Col'),
	Grid = require('react-bootstrap/lib/Grid'),
	Form = require('react-bootstrap/lib/Form'),
	Radio = require('react-bootstrap/lib/Radio'),
	Button = require('react-bootstrap/lib/Button');

var Success = React.createClass({

	propTypes:{
		
	},
	getDefaultProps(){
		return{
			
		};
	},

	render: function(){
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