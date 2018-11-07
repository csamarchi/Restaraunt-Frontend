import React, {Component} from 'react';
import { Link }from 'react-router-dom';
import { Header } from 'semantic-ui-react'

class Welcome extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <Header className='nav'>
        <Link to ="" className="link"> Home </Link>
        <Link to ="" className="link"> Register </Link>
        <Link to ="" className="link"> Login </Link>
        <Link to ="" className="link"> Logout </Link>
        <Link to ="/profile" className="link"> Profile </Link>
      </Header>
      <h1> Welcome! </h1>
      <img src="canvas.png"/>
      </div>
    )
  }
}

export default Welcome;
