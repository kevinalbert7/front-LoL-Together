import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/esm/Button"

import styled from 'styled-components'

const ModalStyle = styled.div`
  color: black;
`

const MyVerticallyCenteredModal = (props) => {
  const { modalparam } = props

  console.log(modalparam)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalStyle>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </ModalStyle>
    </Modal>
  );
}

export default MyVerticallyCenteredModal