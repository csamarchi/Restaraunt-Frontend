import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { Link }from 'react-router-dom';
import { Header } from 'semantic-ui-react'

class Login extends Component{
  constructor(){
    super();
    this.state = {
      username:'',
      password:''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const loginResponse = await fetch('http://localhost:9000/auth', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
        }
    });

    const parsedResponse = await loginResponse.json();
    console.log(parsedResponse, 'this is our parsed data at login');

      if(parsedResponse.data === 'login successful') {
        this.props.history.push('/');

      } else if(parsedResponse.data === 'Password incorrect'){
        alert('Password Incorrect')
      } else if(parsedResponse.data === 'Username incorrect'){
        alert('Username Not Found. Please Register')
      }
    }

    handleChange = (e) => {
      this.setState({[e.target.name]:e.target.value});
    }

  render() {
    const welcomeStyle = {
      color: 'black',
      'font-size': '3em',
      'font-family': 'Montserrat'
    }
    return(
      <div className="welcomeBack">
        <Header className='nav'>
          <Link to ="/" className="link"> Home </Link>
          <Link to ="/register" className="link"> Register </Link>
          <Link to ="/login" className="link"> Login </Link>
          <Link to ="/logout" className="link"> Logout </Link>
          <Link to ="/profile" className="link"> Profile </Link>
        </Header>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <h3 style={welcomeStyle}>Welcome back!</h3>
      <form onSubmit={this.handleSubmit}>
        <label className="username">
          Username:
          <input type='text' name='username' placeholder='username' onChange={this.handleChange}/>
        </label>
        <label className="password">
          Password:
          <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
        </label>
          <input className="registerButton" type='Submit' value='Login'/>
      </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
    </div>
    )
  };
}

export default Login;
