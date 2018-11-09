import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { Link }from 'react-router-dom';


const DetailCard = (props) => (
  <Modal open={props.showModal} closeIcon onClick={props.closeModal}>
    <Modal.Header>{props.restaurant.name}</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src= {props.restaurant.featured_image}/>
        <Modal.Description>
          Cuisine: {props.restaurant.cuisines}<br/>
          Pricerange: {props.restaurant.currency}<br/>
          Website:  {props.restaurant.url}<br/>
          Average Cost for two: ${props.restaurant.average_cost_for_two}
        </Modal.Description>
      </Modal.Content>
  </Modal>
)

export default DetailCard
