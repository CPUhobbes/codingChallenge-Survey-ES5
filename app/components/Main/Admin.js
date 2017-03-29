//Import Packages
import React, { Component } from 'react';
import { Row, Col, Grid, Nav, Navbar, NavItem, Button} from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';
import {hashHistory} from 'react-router';

class Admin extends Component{
	constructor(props) {
		super(props);

		this.state = {
			login:false
		};

		//Bind functions here

  	}
	componentWillMount(){
		if(typeof this.props.location.state!== 'undefined'){
			this.setState({login:this.props.location.state})
		}
		else{
			this.setState({login:false});
		}
	}

	handleFormSubmit(event){
		hashHistory.push('/');
	}

	render(){
		//variables
		const children = this.props.children;
		const login = this.state.login;

		//functions
		const handleSubmit =this.handleFormSubmit

		function showAdmin(){
			return (
				<div>
					<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							Admin Panel
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					
					<Navbar.Collapse>
						<Nav>
							<IndexLinkContainer to={"/Admin"} activeHref="active">
								<NavItem eventKey={1} >Results</NavItem>
							</IndexLinkContainer>
							<IndexLinkContainer to={"/Admin/Add"} >
								<NavItem eventKey={2} >Add Question</NavItem>
							</IndexLinkContainer>
							<IndexLinkContainer to={"/Admin/Delete"} >
								<NavItem eventKey={3} >Delete Question</NavItem>
							</IndexLinkContainer>
							<IndexLinkContainer to={"/"} >
								<NavItem eventKey={4} >Back to Survey</NavItem>
							</IndexLinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				{/*Render component children, important!!*/}
				{children}
				</div>

			);

		}

		function showError(){
			return (
				<div>
					<h2 className="text-center">You do not have the Credentials</h2>
					<div className="text-center">
						<Button bsStyle="success" bsSize="large" onClick={handleSubmit}>Go To Main Page!</Button>
					</div>
				</div>
			)
		}

		//Login validation
		function checkLogin(){
			if(login){
				return <div>{showAdmin()}</div>
			}
			else{
				return <div>{showError()}</div>
			}

		}

		return (
			
			<div>
				    
			<div>{checkLogin()}</div>
		  	

		  	</div> 
		);
	}
}

export default Admin;