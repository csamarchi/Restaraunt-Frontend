import React, {Component} from 'react';
// import Login from '../Login';
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
    const logoutResponse = await fetch('https://safe-citadel-55503.herokuapp.com/auth/logout');
      const parsedResponse = await logoutResponse.json();

    if(parsedResponse.data === 'Logout successful'){
      this.props.history.push('/Welcome');
      console.log('this is something');
     }
    }

    render() {
      let backgroundHeight = window.innerHeight;

      const welcomeStyle = {
        color: 'black',
        fontSize: '2em',
        fontFamily: 'Montserrat'
      }

    return(
      <div className="logout" style={{ height: backgroundHeight }}>
        <Header className='nav'>
          <Link to ="/" className="link"> Home </Link>
          <Link to ="/register" className="link"> Register </Link>
          <Link to ="/login" className="link"> Login </Link>
          <Link to ="/logout" className="link"> Logout </Link>
          <Link to ="/profile" className="link"> Profile </Link>
        </Header>
          <br></br>
        <h2 style={welcomeStyle}>See you soon!</h2>
          <input className="logoutButton" type='Submit' onClick={this.handleClick} />
      </div>
    )
  };
}

export default Logout;
