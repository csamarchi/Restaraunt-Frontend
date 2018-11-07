import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const DetailCard = (props) => (
  <Modal open={props.showModal} closeIcon onClick={props.closeModal}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src= ''/>
      <Modal.Description>

      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default DetailCard
