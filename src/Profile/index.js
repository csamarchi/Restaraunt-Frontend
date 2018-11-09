import React, {Component} from 'react';
import { Link }from 'react-router-dom';
import ProfileListContainer from '../ProfileListContainer';
import { Header, Grid } from 'semantic-ui-react'
import DetailCard from '../DetailCard';


class Profile extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      restaurantModal: {
        name: '',
        featured_image: '',
        currency: '',
        location: ''
      },
        showModal: false
    }
  }

//Fetching Data from POST
  getRestaurants = async () => {
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
    this.getRestaurants().then((restaurants) => {
      this.setState({restaurants: restaurants.data})
    }).catch((err) => {
      console.log(err);
    })
  }

//Handles Modals
  openModal = (restaurantFromTheList) => {
    console.log(restaurantFromTheList, 'this is from the list');
    this.setState({
      showModal: true,
      restaurantModal: {
        ...restaurantFromTheList
      }
    })
  }
  closeModal = (restaurantFromTheList) => {
    console.log(restaurantFromTheList, 'this is from the list');
    this.setState({
      showModal: false,
      restaurantModal: {
        ...restaurantFromTheList
      }
    })
  }

  deleteRestaurant = async (id) => {
      console.log(id, ' this is id');
      const deleteRestaurantResponse = await fetch('http://localhost:9000/api/v1/restaraunt' + id, {
          method: 'DELETE'
        });
      const deleteRestaurantParsed = await deleteRestaurantResponse.text();
      this.setState({
        restaurants: this.state.restaurants.filter((oneRestaurant) => oneRestaurant._id !== id )
      })
    }

  render() {
    const welcomeStyle = {
      color: 'black',
      'font-size': '2em',
      'font-family': 'Montserrat'
    }
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
        <h1 style={welcomeStyle}> Your favorite Restaurants </h1>
      </div>
        <ProfileListContainer restaurants = {this.state.restaurants} addRestaurant={this.addRestaurant} deleteRestaurant={this.deleteRestaurant} openModal={this.openModal} />
      </div>
    )
  }
}

export default Profile;
