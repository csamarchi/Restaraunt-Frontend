import React from 'react';
import { Card, Image } from 'semantic-ui-react'

  const ProfileListContainer = (props) => {
    const profileList = props.restaurants.map((restaurant, i) => {
      return (
        <Card key={restaurant._id}>
          <Card.Content>
          <Card.Header>{restaurant.name}</Card.Header>
            <Image src={restaurant.featured_image} width='250px' height='150px'/>
          </Card.Content>
            <Card.Content extra>
              <button className="deleteButton" onClick={props.deleteRestaurant.bind(null, restaurant._id)}>Delete</button>
            </Card.Content>
        </Card>
      )
  })

    return(
      <div>
        <Card.Group className='profileList'>
        {profileList}
        </Card.Group>
      </div>
    )
  }


  export default ProfileListContainer;
