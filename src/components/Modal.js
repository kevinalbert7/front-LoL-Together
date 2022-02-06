import React from 'react'
import Modal from 'react-bootstrap/Modal'

import styled from 'styled-components'

import EditInfos from './EditUserInfos'

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
      <ModalStyle>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modifier vos informations
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalparam === "editprofile" && <EditInfos onHide={onHide} />}
        </Modal.Body>

      </ModalStyle>
    </Modal>
  );
}

export default MyVerticallyCenteredModal