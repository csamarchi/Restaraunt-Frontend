import React, {Component} from 'react';
import { Link }from 'react-router-dom';
import { Header } from 'semantic-ui-react';


class Welcome extends Component {
  constructor() {
    super();
  }



  render() {
    const welcomeStyle = {
      color: 'black',
      'font-size': '4em',
      'font-family': 'Montserrat'
    }
    return (
      <div className='welcome'>
        <Header className='nav'>
          <Link to ="/" className="link"> Home </Link>
          <Link to ="/register" className="link"> Register </Link>
          <Link to ="/login" className="link"> Login </Link>
          <Link to ="logout" className="link"> Logout </Link>
          <Link to ="/profile" className="link"> Profile </Link>
        </Header>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 style={welcomeStyle}> Welcome! </h1>
    </div>
    )
  }
}

export default Welcome;
