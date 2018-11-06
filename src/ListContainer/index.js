import React, {Component} from 'react';



  const ListContainer = (props) => {
    const restarauntList = props.restaurants.map((restaurant, i) => {
      return (
        <li key={restaurant._id}>
          <h5>{restaurant.name}</h5>

        </li>
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
