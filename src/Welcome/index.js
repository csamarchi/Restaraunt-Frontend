import React, {Component} from 'react';
import { Link }from 'react-router-dom';
import { Header } from 'semantic-ui-react'
import canvas from './canvas.png'

class Welcome extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='welcome'>
        <Header className='nav'>
          <Link to ="/" className="link"> Home </Link>
          <Link to ="" className="link"> Register </Link>
          <Link to ="" className="link"> Login </Link>
          <Link to ="" className="link"> Logout </Link>
          <Link to ="/profile" className="link"> Profile </Link>
        </Header>
        <h1> Welcome! </h1> 
    </div>
    )
  }
}

export default Welcome;
