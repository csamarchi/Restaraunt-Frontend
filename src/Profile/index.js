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
      <div>
      <Header className='nav'>
        <Link to ="/" className="link"> Home </Link>
        <Link to ="" className="link"> Register </Link>
        <Link to ="" className="link"> Login </Link>
        <Link to ="" className="link"> Logout </Link>
        <Link to ="/profile" className="link"> Profile </Link>
      </Header>
      <div className='h1'>
        <h1> Your favorite Restaurant </h1>
      </div>
        <Grid columns={2} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
          <Grid.Row>
            <Grid.Column>
              <ProfileListContainer restaurants = {this.state.restaurants} addRestaurant={this.addRestaurant} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Profile;
