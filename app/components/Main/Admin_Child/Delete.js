// Import Packages
var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var Form = require('react-bootstrap/lib/Form');
var Checkbox = require('react-bootstrap/lib/Checkbox');
var Button = require('react-bootstrap/lib/Button');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var Utils = require('../../Utils/utils');
var hashHistory = require('react-router/lib/hashHistory');


var Delete = React.createClass({

	getInitialState: function () {
		return {
			results: {},
			status: []
		};
	},

	componentDidMount: function () {
		Utils.getResults().then(function (results) {
			if (results.status === 200) {
				this.setState({results: results.data});
				var tempArr = new Array(results.data.length);
				tempArr.fill(false);
				this.setState({status: tempArr});
			}
		}.bind(this))
		.catch(function () {
			// console.log(error);
		});
	},

	handleFormSubmit: function (event) {
		event.preventDefault();
		var deleteState = this.state;
		this.state.status.forEach(function (val, index) {
			if (val) {
				Utils.deleteQuestion(deleteState.results[index].id).then(function (response) {
					if (response.status === 202) {
						hashHistory.push('/Admin/Success');
					} else {
						hashHistory.push('/Error');
					}
				});
			}
		});
	},

	handleFormChange: function (event) {
		var tempArr = this.state.status;
		tempArr[parseInt(event.target.id, 10)] = !tempArr[parseInt(event.target.id, 10)];
		this.setState({status: tempArr});
	},

	render: function () {
		// variables
		var results = this.state.results;

		function showQuestions() {
			return (
				<div>
					<FormGroup>
					{results.map(function (questions, indexQuest) {
						return (
							<h3 key={indexQuest}>
								<Checkbox id={indexQuest.toString()} >
									{questions.question}
								</Checkbox>
							</h3>
						);
					})}
					</FormGroup>
				</div>
			);
		}

		function errorResults() {
			return (
				<div>
					<h1 className="text-center">There Are No Questions </h1>
					<h1 className="text-center"> Please Try Again Later!</h1>
				</div>
			);
		}

		// Conditional Rendering if there are questions avaliable
		function getQuestions() {
			if (results.length > 0) {
				return (<div>{showQuestions()} </div>);
			}
			return (<div>{errorResults()} </div>);
		}
		return (
			<div>
				<Grid>
					<Row>
						<Col sm={12}>
							<div>
								<h1 className="text-center">Delete Questions</h1>
								<Form onChange={this.handleFormChange} onSubmit={this.handleFormSubmit}>
									<Jumbotron>
										<div>{getQuestions()} </div>
										<div className="text-center buttonMargin">
											<Button type="submit" bsStyle="primary" bsSize="lg"> Submit </Button>
										</div>
									</Jumbotron>
								</Form>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
});

module.exports = Delete;
