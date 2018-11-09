import React, {Component} from 'react';
import SearchBar from '../SearchBar';
import ListContainer from '../ListContainer';
import { Link }from 'react-router-dom';
import { Header } from 'semantic-ui-react'
import DetailCard from '../DetailCard';
import ProfileListContainer from '../ProfileListContainer';
import { Grid } from 'semantic-ui-react';

class RestarauntContainer extends Component {
  constructor() {
    super();

    this.state = {
      restaurants: [],
      restaurantModal: {
        name: '',
        featured_image: '',
        currency: '',
        cuisine: '',
        user_rating: '',
        url: ''
      },
        showModal: false
    }
  }

//Fetching API Data
  getRestaurants = async (searchQuery) => {
    // Where We will make our fetch call to get all the Restaurants
    const restaurants = await fetch('https://developers.zomato.com/api/v2.1/search?entity_id=278&entity_type=city&q=' + searchQuery, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'user-key': "95f432cefc027eaa7c0c7881e0edd2e7"
            }
          });
    const restaurantsParsedJSON = await restaurants.json();
    return restaurantsParsedJSON;
  }

//Search Bar Function
  getRestaurantsWithQuery = (searchQuery) => {
    this.getRestaurants(searchQuery).then((restaurants) => {
      this.setState({restaurants: restaurants.restaurants})
    }).catch((err) => {
      console.log(err);
    })
  }

// getting All the Restaurants, on the intial load of the APP
  componentDidMount(){
  this.getRestaurants().then((restaurants) => {
    this.setState({restaurants: restaurants.restaurants})
  }).catch((err) => {
    console.log(err);
  })
}

//Post to Mongo Database Function
  addRestaurant = async (restaurant, e) => {
    e.preventDefault();
    console.log(restaurant);
    try {
      const addedRestaurant = await fetch('http://localhost:9000/api/v1/restaraunt', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(restaurant),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch(err){
      console.log('error')
      console.log(err)
    }
  }

//Controls Modals
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

  render() {
    console.log(this.state.restaurantModal, 'Mirza')
    const welcomeStyle = {
      color: 'black',
      'font-size': '3em',
      'font-family': 'Montserrat'
    }
    console.log(this.state, ' this is state');
    return(
     <div>
        <div className="homeDiv">
          <Header className='nav'>
            <Link to ="/welcome" className="link"> Home </Link>
            <Link to ="/register" className="link"> Register </Link>
            <Link to ="/login" className="link"> Login </Link>
            <Link to ="/logout" className="link"> Logout </Link>
            <Link to ="/profile" className="link"> Profile </Link>
          </Header>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <h1 style={welcomeStyle}> Find your favorite Restaurant </h1>
            <SearchBar getRestaurantsWithQuery = {this.getRestaurantsWithQuery} />
        </div>
            <div className="homeBottomDiv" />
              <ListContainer restaurants={this.state.restaurants} addRestaurant={this.addRestaurant} openModal={this.openModal}/>
              <DetailCard showModal={this.state.showModal} closeModal={this.closeModal} restaurant={this.state.restaurantModal}/>
            </div>
    )
  }
}

export default RestarauntContainer;
