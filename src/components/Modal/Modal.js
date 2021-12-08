import React from 'react';
import './Modal.css';

//import {MagnifierContainer, MagnifierPreview, MagnifierZoom, GlassMagnifier} from 'react-image-magnifiers';

import ModalBS from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

export default function Modal({ show, onHide, closeModal, url, description }) { //props, 
  return (
    <ModalBS
        show={ show }
        onHide={ () => closeModal(false) }
        dialogClassName="modal-90w"
        //size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
      {/*
        <ModalBS.Header closeButton>
          <ModalBS.Title id="contained-modal-title-vcenter">
            Modal heading
          </ModalBS.Title>
        </ModalBS.Header>
      */}
      <div style={{ textAlign: "right"}}>
        <CloseButton onClick={ () => closeModal(false) } style={{ marginRight: "16px" }}/>
      </div>
      <ModalBS.Body style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Figure>
          <Figure.Image
            width="auto"
            height="auto"
            alt="171x180"
            src={ url }
          />
          <Figure.Caption>
            { description }
          </Figure.Caption>
        </Figure>

        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </ModalBS.Body>
      {/* <ModalBS.Footer> */}
      <div style={{ textAlign: "center" }}>
        <Button onClick={ onHide } style={{ width: "auto" }}>Fechar</Button> {/* onClick={() => closeModal(false)} */}
      </div>
      {/* </ModalBS.Footer> */}
    </ModalBS>
  )
}

  {/*

  <ModalBS
  show={ show }

  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
  >
  { console.log(props) }
  <ModalBS.Header closeButton>
  <ModalBS.Title id="contained-modal-title-vcenter">
  Modal heading
  </ModalBS.Title>
  </ModalBS.Header>
  <ModalBS.Body>

  <Figure>
  <Figure.Image
  width={171}
  height={180}
  alt="171x180"
  src={ url }
  />
  <Figure.Caption>
  { description }
  </Figure.Caption>
  </Figure>

  <h4>Centered Modal</h4>
  <p>
  Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
  dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
  consectetur ac, vestibulum at eros.
  </p>
  </ModalBS.Body>
  <ModalBS.Footer>
  <Button onClick={() => closeModal(false)}>Close</Button> {/* onClick={() => closeModal(false)} *}
  </ModalBS.Footer>
  </ModalBS>

  */}