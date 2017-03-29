//Import Packages
import React, { Component } from 'react';
import { Row, Col, Grid, Button} from 'react-bootstrap';
import {hashHistory} from 'react-router';

class ThankYou extends Component{
	constructor(props) {
		super(props);

		this.state = {

		};

		//Bind functions here
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
  	}
	
	handleFormSubmit(event){
		hashHistory.push('/');
	}

	render(){
		
		return (
			<div>
				<Grid>
					<Row>
						<Col sm={12}>
							<h2 className="text-center">Thank You For Your Submission!</h2>
							<br /><br />
							<div className="text-center">
								<Button onClick={this.handleFormSubmit} bsStyle='primary' bsSize="lg"> Try Another Question </Button>
							</div>
						</Col>
					</Row>
				</Grid>
      		</div>
		);
	}
}

export default ThankYou;