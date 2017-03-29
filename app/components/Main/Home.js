//Import Packages

var React = require('react'),
	Row = require('react-bootstrap/lib/Row'),
	Col = require('react-bootstrap/lib/Col'),
	Grid = require('react-bootstrap/lib/Grid'),
	Form = require('react-bootstrap/lib/Form'),
	Radio = require('react-bootstrap/lib/Radio'),
	Button = require('react-bootstrap/lib/Button'),
	Jumbotron = require('react-bootstrap/lib/Jumbotron'),
	hashHistory = require('react-router/lib/hashHistory'),
	Utils = require('../Utils/utils');

var Home = React.createClass({
	getInitialState: function (){
		return {
			survey:{
				question:'',
				answers:[],
				id:''
			},
			selection:-1,
		}
	},
	
	componentDidMount: function (){
		//this.setState({login:this.props.adminLogIn()});

		Utils.getQuestion().then(function (data){
			let newObj = {
				question:data[0].question,
				answers:data[0].answers,
				id:data[0].id

			}
			this.setState({survey:newObj});
		}.bind(this))
		.catch(function(error){
			let newObj = {
					question:'',
					answers:[],
					id:''

			}
			this.setState({survey:newObj});
		})
		
	},
	
	handleFormSubmit: function (event){
		event.preventDefault();
		
		if(this.state.selection>0){
			Utils.submitAnswer(this.state.selection).then(function (){
				
				Utils.updateIp(this.state.survey.id).then(function(response){
					if(response.status === 201){
						hashHistory.push('/ThankYou');
					}
					else{
						hashHistory.push('/Error');
					}
				})
			})
		}
	},
	
	handleFormChange: function (event){
		// console.log(this.state);
		this.setState({selection: parseInt(event.target.id, 10)});
	},

	render: function (){
		//functions
		var handleFormChange = this.handleFormChange;
		var handleFormSubmit = this.handleFormSubmit;

		//variables
		var question = this.state.survey.question;
		var answers = this.state.survey.answers;
		
		function noQuestions(){
			return (
				<div>
					<Col sm={12}>
						<div className="text-center">
							<h2>Thank you, but all questions have been answered!</h2>
							<h2>Please try again later</h2>
						</div>
					</Col>
				</div>
			);
		}

		function showQuestions(){
			return (
				<div>
					<Col sm={12}>
						<h2 className="text-center">{question}</h2>
					</Col>
					<Col sm={12}>
						<Form onChange={handleFormChange} onSubmit={handleFormSubmit}>
							{answers.map((val, index) => {
								return (
									<h3 key={index}>
										<Radio  id={val.id} name="radioGroup">
											{val.answer}
											{/*<p> {val.answer} --- {val.responses} --- {val.id} </p>*/}
										</Radio>
									</h3> 
								)
							})}
							<div className="text-center">
								<Button type='submit' bsStyle='primary' bsSize="lg"> Submit </Button>
							</div>
						</Form>
					</Col>
				</div>
			);
		}

		//Conditional Rendering if there are questions avaliable
		function displaySurvey(){
			if(question === ''){
				
				return <div>{noQuestions()}</div>
			}
			else{
				return <div>{showQuestions()}</div>
			}
		}
	
		return (
			<div>
				<Grid>
				<Jumbotron>
					<Row>
						<div> {displaySurvey()} </div>
					</Row>
					</Jumbotron>
				</Grid>
      		</div>
		);
	}
});

module.exports = Home;