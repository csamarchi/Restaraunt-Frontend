import React, {Component} from 'react';

const ListContainer = (props) => {
  const restaraunts = props.restaurants.map((restaurant, i) => {
    return (
      <li key={restaurants._id}>
        <h5>{restaurants.name}</h5>

      </li>
    )
  })
  return(
    <ul>
    {restaurants}
    </ul>
  )
}



export default ListContainer;
