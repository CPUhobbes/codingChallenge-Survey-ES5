//Import Packages
var React = require('react'),
	Link = require('react-router/lib/Link'),
	Row = require('react-bootstrap/lib/Row'),
	Col = require('react-bootstrap/lib/Col'),
	Grid = require('react-bootstrap/lib/Grid'),
	Form = require('react-bootstrap/lib/Form'),
	Radio = require('react-bootstrap/lib/Radio'),
	Button = require('react-bootstrap/lib/Button'),
	Modal = require('react-bootstrap/lib/Modal'),
	HelpBlock = require('react-bootstrap/lib/HelpBlock'),
	FormGroup = require('react-bootstrap/lib/FormGroup'),
	ControlLabel = require('react-bootstrap/lib/ControlLabel'),
	FormControl = require('react-bootstrap/lib/FormControl'),
	hashHistory = require('react-router/lib/hashHistory');

var Index = React.createClass({

	propTypes:{
		
	},
	getDefaultProps(){
		return{

		};
	},

	getInitialState: function (){
		return {
			modal:{
				showModal:false,
				enable:true,
			},
			message:"",
			login: false,
			failedLogin:false,
			user:"",
			pass:"",
			adminCred:{user:"admin", pass:"pass"}
		}
	},

	// constructor(props){
	// 	super(props);

	// 	this.state={
	// 		modal:{
	// 			showModal:false,
	// 			enable:true,
	// 		},
	// 		message:"",
	// 		login: false,
	// 		failedLogin:false,
	// 		user:"",
	// 		pass:"",
	// 		adminCred:{user:"admin", pass:"pass"}
	// 	}
	// 	//Bind functions here
	// 	this.triggerModal = this.triggerModal.bind(this);
	// 	this.loginSubmitHandler = this.loginSubmitHandler.bind(this);
	// 	this.loginFormHandler = this.loginFormHandler.bind(this);
	// 	this.getLogInStatus = this.getLogInStatus.bind(this);
	// }


	componentDidUpdate: function(prevProps, prevState) {

		//Check to see if password message needs updating
		if(prevState.failedLogin !== this.state.failedLogin) {
			if(this.state.failedLogin){
				this.setState({message:"Login Error"});
			}
			else{
				this.setState({message:""});
			}
		}
	},

	getLogInStatus: function(){
  		return this.state.login;
  	},

	loginSubmitHandler: function(event){
		event.preventDefault();
		this.setState({failedLogin:true});

		if(this.state.user===this.state.adminCred.user && this.state.pass === this.state.adminCred.pass){
			hashHistory.push({
				pathname: '/Admin',
				state: {login:this.state.login }
			})
		}
	},

	loginFormHandler: function(event){
		var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
	},

	triggerModal: function(){
  		var modalState = {showModal:!this.state.modal.showModal, enable:true};

  		//Reset modal message states
  		this.setState({message:""});
  		this.setState({failedLogin:false});

  		if(this.state.modal.enable){
  			this.setState({modal: modalState});
  		} 		
  	},

	render: function() {
		return(
		  	<div>
			  	<h5 className="text-right"><a href="#" onClick={this.triggerModal}> Admin Log In </a></h5>
			  	{/*<Link to="/Admin"><h5 className="text-right">Admin Login</h5></Link>*/}
				<h1 className="text-center">Coding-Challenge</h1>
				<h1 className="text-center">Survey</h1>
				
			{/* -- Modal -- */}
			
			    <Modal show={this.state.modal.showModal} onHide={this.triggerModal} >
			      <Modal.Header closeButton>
			        <Modal.Title>Log In to Admin Panel</Modal.Title>
			      </Modal.Header>

			      <Modal.Body>
			        <Form onSubmit={this.loginSubmitHandler} onChange={this.loginFormHandler} >
			        	<FormGroup>
			        		<ControlLabel >Username</ControlLabel>
			        	 	<FormControl type="text" id="user" placeholder="Username" />
			        	</FormGroup>
						<FormGroup>
							<ControlLabel>Password</ControlLabel>
							<FormControl type="password" id="pass" placeholder="Password"/>
						</FormGroup>

						<div className="text-center">
							<FormGroup validationState="error">
								<HelpBlock><h2>{this.state.message}</h2></HelpBlock>
							</FormGroup>
						</div>
						<Row>
							<div className="text-center">
								<Button bsStyle="success" bsSize="large" type="submit">Go!</Button>
							</div>
				    	</Row>
					</Form>
				
			      </Modal.Body>
			    </Modal>

				{/*Render component children, important!!*/}
				{React.cloneElement(this.props.children, {
			    	adminLogIn:this.getLogInStatus
			    })}
	
		  	</div> 
		);
  	}
});


module.exports = Index;