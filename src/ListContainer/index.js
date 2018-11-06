import React, {Component} from 'react';



  const ListContainer = (props) => {
    const restarauntList = props.restaurants.map((restaurant, i) => {
      console.log(restaurant.restaurant.name);

      return (
        <div key={restaurant._id}>
          <h5>{restaurant.restaurant.name}</h5>
          <h5>{restaurant.restaurant.featured_image}</h5>
        </div>
      )
    })
    return(
      <div>
      <h3>Restaurant List</h3>
      <ul>
      {restarauntList}
      </ul>
      </div>
    )
  }



  export default ListContainer;
