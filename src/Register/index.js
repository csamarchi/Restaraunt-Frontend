import React, {Component} from 'react';
import { Link }from 'react-router-dom';
import { Header } from 'semantic-ui-react'

class Register extends Component{
  constructor(){
    super();
    this.state = {
      username:'',
      password:''
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault();
const registerResponse = await fetch('http://localhost:9000/auth/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
        }
    });

    const parsedResponse = await registerResponse.json();

    if(parsedResponse.data = 'register successful'){
      // this.props.history.push('/profile');
      window.location.assign('http://localhost:3000')

    }
}


  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }
  render() {
    console.log('this is the props for register',this.props);

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
        <h3>Discover hundreds of restaurants in Austin, TX!</h3>
      <form onSubmit={this.handleSubmit}>
        <label className="username">
          Username:
          <input type='text' name='username' placeholder='username' onChange={this.handleChange}/>
        </label>
        <label className="password">
          Password:
          <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
        </label>
        <input className="registerButton" type='Submit' value='Register'/>
      </form>
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

export default Register;