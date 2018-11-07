import React, {Component} from 'react';
import { Button, Icon, Label } from 'semantic-ui-react'



  const ListContainer = (props) => {
    const restarauntList = props.restaurants.map((restaurant, i) => {
      console.log(restaurant.restaurant.name);

      return (
        <div className='restaurantList'>
          <div key={restaurant._id}>
            <h5>{restaurant.restaurant.name}</h5>
              <img src={restaurant.restaurant.featured_image} width='400px' height='250px'/>
              <br/>
              <Button onClick={props.addRestaurant.bind(null, restaurant.restaurant)}>Add </Button>
          </div>
        </div>
      )
  })

    return(
      <div>
      <ul>
      {restarauntList}
      </ul>
      </div>
    )
  }



  export default ListContainer;
