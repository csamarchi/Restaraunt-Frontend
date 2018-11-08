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
const loginResponse = await fetch('http://localhost:9000/auth/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
        }
    });

    const parsedResponse = await loginResponse.json();
    console.log(parsedResponse, 'this is our parsed data at login');
    if(parsedResponse.data === 'login successful'){
      // this.props.history.push('/profile');
      //Directs to spotify login ,then directs to profile page
      window.location.assign('http://localhost:9000/spotify/login')


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
    console.log('this is props for Login', this.props)

    const style={
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      marginBottom: '50px',
    }

    return(

      <div className="loginRegister">
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


{/* <div className="loginRegisterImage">
          <img style={style} src="https://images.unsplash.com/photo-1483821838526-8d9756a6e1ed?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2ee5af66743fa8159bcce66cdc57428&auto=format&fit=crop&w=2768&q=80" />
</div> */}

<h3>Welcome back!</h3>
<br></br>
<br></br>
<br></br>

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
