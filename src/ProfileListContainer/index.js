import React, {Component} from 'react';
import { Button, Icon, Label } from 'semantic-ui-react'



  const ProfileListContainer = (props) => {
    const profileList = props.restaurants.map((restaurant, i) => {
      console.log(restaurant.name);

      return (
        <div key={restaurant._id}>
          <h5>{restaurant.name}</h5>
            <img src={restaurant.featured_image} width='400px' height='250px'/>
            <br/>
        </div>
      )
  })

    return(
      <div>
      <ul className='profileList'>
      {profileList}
      </ul>
      </div>
    )
  }



  export default ProfileListContainer;
