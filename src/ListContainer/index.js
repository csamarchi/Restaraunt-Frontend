import React, {Component} from 'react';
import { Button, Card, Image, Icon, Label } from 'semantic-ui-react';
import DetailCard from '../DetailCard';


  const ListContainer = (props) => {
    const restarauntList = props.restaurants.map((restaurant, i) => {
      console.log(restaurant.restaurant.name);
      console.log(props, restaurant, restaurant.restaurant.id, ' hello');
      return (
          <Card className="cardList" key={restaurant.restaurant.id}>
            <Card.Content>
              <Card.Header onClick={props.openModal.bind(null, restaurant.restaurant)}>{restaurant.restaurant.name}</Card.Header>
              <button className='addButton' onClick={props.addRestaurant.bind(null, restaurant.restaurant)}>Add </button>
              <Image src={restaurant.restaurant.featured_image} width='400px' height='250px' />
              <br/>
            </Card.Content>
          </Card>
      )
  })

    return(
      <div>
        <Card.Group className='homeList'>
        {restarauntList}
        </Card.Group>
      </div>
    )
  }


  export default ListContainer;
