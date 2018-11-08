import React, {Component} from 'react';
import Login from '../Login';
import { Link }from 'react-router-dom';
import { Header } from 'semantic-ui-react'

class Logout extends Component{
  constructor(){
    super();
    this.state = {
      username:'',
      password:''
    }
  }
  handleClick = async (e) => {
    e.preventDefault();
const logoutResponse = await fetch('http://localhost:9000/auth/logout');

    const parsedResponse = await logoutResponse.json();

    console.log(parsedResponse);
    console.log(this.props,'this is props on handleClick');
    if(parsedResponse.data === 'Logout successful'){
      this.props.history.push('/Welcome');
      console.log('this is something');
     }
    }
  render() {
    const welcomeStyle = {
      color: 'black',
      'font-size': '2em',
      'font-family': 'Montserrat'
    }
    console.log(this.props, 'Logout Props?????')
    return(
      <div className="logout">
      <Header className='nav'>
        <Link to ="/" className="link"> Home </Link>
        <Link to ="" className="link"> Register </Link>
        <Link to ="/login" className="link"> Login </Link>
        <Link to ="" className="link"> Logout </Link>
        <Link to ="/profile" className="link"> Profile </Link>
      </Header>
        <br></br>
        <h2 style={welcomeStyle}>See you soon!</h2>
          <input className="logoutButton" type='Submit' value='Logout' onClick={this.handleClick} />
     </div>
    )
  };
}

export default Logout;
