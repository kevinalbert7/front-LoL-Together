import React from 'react'
import Modal from 'react-bootstrap/Modal'

import styled from 'styled-components'

import EditUserInfos from './EditUserInfos'
import EditDescription from './EditDescription'
import CreateAnnouncement from './CreateAnnouncement'

const ModalStyle = styled.div`
  color: black;
`

const MyVerticallyCenteredModal = (props) => {
  const { modalparam, onHide } = props

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalStyle >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modalparam === "editProfile" &&  "Modifier vos informations" }
            {modalparam === "editDescription" && "Modifier votre description" }
            {modalparam === "createAnnoucement" && "Poster une annonce" }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalparam === "editProfile" && <EditUserInfos onHide={onHide} />}
          {modalparam === "editDescription" && <EditDescription onHide={onHide} />}
          {modalparam === "createAnnoucement" && <CreateAnnouncement onHide={onHide} />}
        </Modal.Body>

      </ModalStyle>
    </Modal>
  );
}

export default MyVerticallyCenteredModal