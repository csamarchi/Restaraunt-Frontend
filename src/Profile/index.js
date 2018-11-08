import React, {Component} from 'react';
import { Link }from 'react-router-dom';
import ProfileListContainer from '../ProfileListContainer';
import { Header, Grid } from 'semantic-ui-react'


class Profile extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: []
    }
  }

  getRestaurants = async () => {
    // Where We will make our fetch call to get all the Restaurants
    const restaurants = await fetch('http://localhost:9000/api/v1/restaraunt', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          });
    const restaurantsParsedJSON = await restaurants.json();
    return restaurantsParsedJSON;
  }

  componentDidMount(){
  // get ALl the Restaurants, on the intial load of the APP
  this.getRestaurants().then((restaurants) => {
    this.setState({restaurants: restaurants.data})
  }).catch((err) => {
    console.log(err);
  })
  /// Where you call this.getRestaurants
}

  render() {
    return (
      <div className="profileDiv">
      <Header className='nav'>
        <Link to ="/" className="link"> Home </Link>
        <Link to ="/register" className="link"> Register </Link>
        <Link to ="/login" className="link"> Login </Link>
        <Link to ="/logout" className="link"> Logout </Link>
        <Link to ="/profile" className="link"> Profile </Link>
      </Header>
      <div className='h1'>
        <h1> Your favorite Restaurants </h1>
      </div>
          <ProfileListContainer restaurants = {this.state.restaurants} addRestaurant={this.addRestaurant} />
      </div>
    )
  }
}

export default Profile;
