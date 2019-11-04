import React, {Component} from 'react';
import { Link }from 'react-router-dom';
import { Header } from 'semantic-ui-react';


class Welcome extends Component {

  render() {
    const welcomeStyle = {
      color: 'black',
      fontSize: '4em',
      fontFamily: 'Montserrat'
    }

    const style = {
      color: 'black',
      fontFamily: 'Montserrat'
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
            <br></br>
            <br></br>
          <h1 style={welcomeStyle}> Welcome! </h1>
          <Link style={style} to ="/login" className="link"> Sign in </Link>
          <Link style={style} to ="/register" className="link"> Register </Link>
      </div>
    )
  }
}

export default Welcome;
