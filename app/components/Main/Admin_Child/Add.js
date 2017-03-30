// Import Packages
var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');
var Form = require('react-bootstrap/lib/Form');
var FormControl = require('react-bootstrap/lib/FormControl');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var Button = require('react-bootstrap/lib/Button');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var hashHistory = require('react-router/lib/hashHistory');
var Utils = require('../../Utils/utils');

var Add = React.createClass({

	propTypes: {

	},

	getDefaultProps() {
		return {

		};
	},

	getInitialState: function () {
		return {
			question: '',
			answers: [
				{
					answer: '',
					responses: 0

				},
				{
					answer: '',
					responses: 0
				}
			]
		};
	},

	handleFormSubmit: function (event) {
		event.preventDefault();
		Utils.submitQuestion(this.state).then(function (response) {
			if (response.status === 201) {
				hashHistory.push('/Admin/Success');
			} else {
				hashHistory.push('/Error');
			}
		});
		// console.log(this.state);
	},

	handleFormChange: function (event) {
		if (event.target.id === 'question') {
			this.setState({question: event.target.value});
		} else {
			var newArr = this.state.answers;
			newArr[parseInt(event.target.id, 10)].answer = event.target.value;
			this.setState({answers: newArr});
		}
		// console.log(event.target.value, event.target.id);
	},

	addAnswer: function () {
		var newInput = {
			answer: '',
			responses: 0
		};
		this.setState({ answers: this.state.answers.concat([newInput]) });
	},

	render: function () {
		var addAnAnswer = this.addAnswer;

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
											{this.state.answers.map(function (answer, index) {
												return (
													<FormControl type="text" key={index} id={index.toString()} />
												);
											})}
										</FormGroup>
									</div>
									<Button bsStyle="primary" onClick={function () {addAnAnswer();}}>
										Add Another Answer
									</Button>
									<div className="text-center buttonMargin">
										<Button bsStyle="success" type="submit" bsSize="lg">Submit Question</Button>
									</div>
								</Jumbotron>
							</Form>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
});

module.exports = Add;
