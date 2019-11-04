import React from 'react';
import './style.css';

  const ListContainer = (props) => {
    const restarauntList = props.restaurants.map((restaurant, i) => {
      //console.log('found Restaurants', restaurant.restaurant.name);
      // console.log(props, restaurant, restaurant.restaurant.id, ' hello');
      return (
          <div>
            <div className='cardList' key={restaurant.restaurant.id} onClick={props.openModal.bind(null, restaurant.restaurant)}>
              <h3>{restaurant.restaurant.name}</h3>
              <img className='searchImage' src={restaurant.restaurant.featured_image} alt='' width='300px' height='250px' />
            </div>
            <button className='addButton' onClick={props.addRestaurant.bind(null, restaurant.restaurant)}>Add </button>
          </div>
      )
  })

    return(
      <div>
        <div className='homeList'>
        {restarauntList}
        </div>
      </div>
    )
  }


  export default ListContainer;


  // <Card className="cardList" key={restaurant.restaurant.id}>
  //   <Card.Content>
  //   <div className="card">
  //     <Card.Header onClick={props.openModal.bind(null, restaurant.restaurant)}>{restaurant.restaurant.name}</Card.Header>
  //     <button className='addButton' onClick={props.addRestaurant.bind(null, restaurant.restaurant)}>Add </button>
  //     <Image src={restaurant.restaurant.featured_image} width='400px' height='250px' />
  //     <br/>
  //     </div>
  //   </Card.Content>
  // </Card>
