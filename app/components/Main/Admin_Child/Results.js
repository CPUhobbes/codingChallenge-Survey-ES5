// Import Packages
var React = require('react');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Grid = require('react-bootstrap/lib/Grid');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var Utils = require('../../Utils/utils');


var Results =  React.createClass({

	getInitialState: function () {
		return {
			results: {}
		};
	},

	componentWillMount: function () {
		Utils.getResults()
			.then( function (results) {
				if (results.status === 200) {
					this.setState({results: results.data});
				}
			}.bind(this))
		.catch(function () {
			// console.log(error);
			this.setState({results: {}});
		});
	},

	render: function () {
		var results = this.state.results;
		function displayResults() {
			return (
				<div className="questionResults">
					{results.map(function (questions, indexQuest) {
						return (
							<div key={indexQuest}>
								<Jumbotron className="questionBox">
								<div className="questionTitle">{questions.question}</div>
								<Row>
									<Col sm={1}> <div className="answerKey">Results</div></Col>
								</Row>
								<div className="answerList">
									{questions.answers.map(function (answers, indexAns) {
										return (
											<div key={indexAns}>
												<Row>
													<Col sm={8}> {answers.answer}</Col>
													<Col sm={2}> {answers.responses}</Col>
												</Row>
											</div>
										);
									})}
								</div>
								</Jumbotron>
							</div>
						);
					})}
				</div>
			);
		}

		function errorResults() {
			return (
				<div>
					<h1 className="text-center">There Are No Questions</h1>
					<h1 className="text-center"> Please Try Again Later!</h1>
				</div>
			);
		}

		// Conditional Rendering if there are questions avaliable
		function getResults() {
			if (results.length > 0) {
				return (<div> {displayResults()} </div>);
			}
			return (<div> {errorResults()} </div>);
		}

		return (
			<div>
				<Grid>
					<Row>
						<Col sm={12}>
							<h1 className="text-center">Survey Results</h1>
							<div> {getResults()} </div>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
});

module.exports = Results;
