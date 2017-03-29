//Import Packages
import React, { Component } from 'react';
import { Row, Col, Grid, Form, Button, FormControl, FormGroup, ControlLabel, Jumbotron} from 'react-bootstrap';
import Utils from '../../Utils/utils';
import {hashHistory} from 'react-router';

class Add extends Component{
	constructor(props) {
		super(props);

		this.state = {
			question:"",
			answers: [
				{
					answer:"",
					responses:0

				},
				{
					answer:"",
					responses:0
				}
			]
		};

		//Bind functions here
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
  	}

	handleFormSubmit(event){
		event.preventDefault();
		Utils.submitQuestion(this.state).then((response)=>{
			if(response.status === 201){
				hashHistory.push('/Admin/Success');
			}
			else{
				hashHistory.push('/Error');
			}

		});
		//console.log(this.state);
	}
	
	handleFormChange(event){
		if(event.target.id ==='question'){
			this.setState({question:event.target.value});
		}
		else{
			let newArr = this.state.answers;
			newArr[parseInt(event.target.id)].answer = event.target.value;
			this.setState({answers:newArr});
		}
		//console.log(event.target.value, event.target.id);
	}

	addAnswer(){
        let newInput = {
			answer:"",
			responses:0
		};
        this.setState({ answers: this.state.answers.concat([newInput]) });
    }
	
	render(){
		return (
			<div>
				<Grid>
					<Row>
						<Col sm={12}>
							<h1 className="text-center">Add A Question</h1>
							<Form onChange={this.handleFormChange} onSubmit={this.handleFormSubmit}>
								<Jumbotron>
									<FormGroup>
										<ControlLabel>Enter a Question</ControlLabel>
										<FormControl type="text" id="question" />
									</FormGroup>
									<div id="dynamicInput">
										<FormGroup>
											<ControlLabel>Enter Answers</ControlLabel>
											{this.state.answers.map((answer, index) => {
												return(
													<FormControl type="text" key={index} id={index.toString()} />
												)
											})}
										</FormGroup>
									</div>
									<Button bsStyle="primary" onClick={ () => this.addAnswer() }>
										Add Another Answer
									</Button>
									<div className="text-center buttonMargin">
										<Button bsStyle="success" type="submit" bsSize='lg'>Submit Question</Button>
									</div>
								</Jumbotron>
							</Form>
						</Col>
					</Row>
				</Grid>
				
      		</div>
		);
	}
}

export default Add;