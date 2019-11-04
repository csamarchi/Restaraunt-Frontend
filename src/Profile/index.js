import React, {Component} from 'react';
import { Link }from 'react-router-dom';
import ProfileListContainer from '../ProfileListContainer';
import { Header } from 'semantic-ui-react'


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
      credentials: 'include',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const restaurantsParsedJSON = await restaurants.json();
    console.log(restaurantsParsedJSON, "chrisine");
    if (restaurantsParsedJSON.data !== 'unsuccessful') {
      return restaurantsParsedJSON;
    } else {
      this.props.history.push('/welcome');
    }
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

//Delete Function
  deleteRestaurant = async (id) => {
      console.log(id, ' this is id');
      const deleteRestaurantResponse = await fetch('http://localhost:9000/api/v1/restaraunt/' + id, {
          method: 'DELETE'
        });
      const deleteRestaurantParsed = await deleteRestaurantResponse.text();
      console.log(deleteRestaurantParsed, 'mirza')
      this.setState({
        restaurants: this.state.restaurants.filter((oneRestaurant) => oneRestaurant._id !== id )
      })
    }

  render() {
    console.log(this.props.history);
    let backgroundHeight = window.innerHeight;

    const welcomeStyle = {
      color: 'black',
      fontSize: '2em',
      fontFamily: 'Montserrat'
    }
    return (
      <div className="profileDiv" style={{ height: backgroundHeight }}>
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
