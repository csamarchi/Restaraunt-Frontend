import React, {Component} from 'react';
import { Card, Image, Button, Icon, Label, Grid } from 'semantic-ui-react'



  const ProfileListContainer = (props) => {
    const profileList = props.restaurants.map((restaurant, i) => {
      console.log(restaurant.name);

      return (
            <Card key={restaurant._id}>
              <Card.Content>
              <Card.Header>{restaurant.name}</Card.Header>
                <Image src={restaurant.featured_image} width='250px' height='150px'/>
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
