import React, { useState, useEffect } from 'react';

import axios from '../../axios';

import ModalBS from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import Card from 'react-bootstrap/Card';

export default function ModalAdStatus ({ show, onHide, closeModal }) {

  const [adList, setAdList] = useState([]);

  const getData = async () => {
    const {data} = await axios.get('ads');
    setAdList(data);
  };

  useEffect(() => {
    getData();
  }, adList);

  const [adSelected, setAdSelected] = useState();

  const getSelected = async () => {
    setAdSelected(adSelected);
  };

  useEffect(() => {
    getSelected();
  }, adSelected);

  return (
    <ModalBS
        show={ show }
        onHide={ () => closeModal(false) }
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
      <div style={{ textAlign: "right"}}>
        <CloseButton onClick={ () => closeModal(false) } style={{ marginRight: "16px", zIndex: "1" }}/>
      </div>
      <ModalBS.Body style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h4 style={{ marginBottom: "1.5rem"}}>Confirmar Anúncios</h4>
        <Container style={{ maxWidth: "100%" }}>
        <Row>
          <Col>
            
            {
              adSelected != undefined ?
              <>
                <Form style={{ marginBottom: "1.5rem"}}>
                      <Form.Label>Imagens Contidas nesse Anúncio</Form.Label><br/>
                      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center", margin: "1.5rem" }}>
                        { adSelected.urls[0] == undefined || adSelected.urls[0] == null
                        ? null
                        :
                        <Card border="dark" style={{ width: '12.5rem', marginBottom: '10px' }}>
                          <Card.Body>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "-1rem" }}>
                              <Image style={{ width: "100%", margin: "0px" }}
                                    class='unique'
                                    src={ adSelected.urls[0] ?? '' }
                                    alt={ adSelected.description ?? '' }
                                    title={ adSelected.description ?? '' }
                              ></Image>
                            </div>
                            <br/>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "-1rem" }}>
                              <Button variant="success" disabled>Confirmar</Button>
                            </div>
                          </Card.Body>
                        </Card>
                        }
                        { adSelected.urls[1] == undefined || adSelected.urls[1] == null
                        ? null
                        :
                        <Card border="dark" style={{ width: '12.5rem', marginBottom: '10px' }}>
                          <Card.Body>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "-1rem" }}>
                              <Image style={{ width: "150px", margin: "0px" }}
                                    class='unique'
                                    src={ adSelected.urls[1] ?? '' }
                                    alt={ adSelected.description ?? '' }
                                    title={ adSelected.description ?? '' }
                              ></Image>
                            </div>
                            <br/>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "-1rem" }}>
                              <Button variant="success" disabled>Confirmar</Button>
                            </div>
                          </Card.Body>
                        </Card>
                        }
                        { adSelected.urls[2] == undefined || adSelected.urls[2] == null
                        ? null
                        :
                        <Card border="dark" style={{ width: '12.5rem', marginBottom: '10px' }}>
                          <Card.Body>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "-1rem" }}>
                              <Image style={{ width: "150px", margin: "0px" }}
                                    class='unique'
                                    src={ adSelected.urls[2] ?? '' }
                                    alt={ adSelected.description ?? '' }
                                    title={ adSelected.description ?? '' }
                              ></Image>
                            </div>
                            <br/>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "-1rem" }}>
                              <Button variant="success" disabled>Confirmar</Button>
                            </div>
                          </Card.Body>
                        </Card>
                        }
                      </div>
                      
                      <Form.Label>Descrição</Form.Label><br/>
                      <InputGroup className="mb-3" style={{ textDecoration: 'none', boxSizing: "border-box !important" }}>
                        <InputGroup.Checkbox style={{ textDecoration: 'none', padding: "0px" }} />
                        <FormControl style={{ textDecoration: 'none', boxSizing: "border-box !important" }}
                        value={ adSelected.description ?? '' } defeultValue={ adSelected.description ?? '' } />
                      </InputGroup>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button variant="success" style={{ textDecoration: "none", height: "auto" }} onClick={ 
                          _ => {}
                        }>Confirmar Anúncio</Button>{" "}
                        <Button variant="danger" style={{ textDecoration: "none", height: "auto" }} onClick={ 
                          _ => {}
                        }>Rejeitar Anúncio</Button>
                      </div><br/>
                      <InputGroup className="mb-3">
                        <FormControl
                          placeholder="Código / ID / Descrição do Pagamento"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2" style={{ height: "50px" }}>
                          Confirmar Pagamento
                        </Button>
                      </InputGroup><br/>
                      <h6>Estado deste Anúncio: { "Pendente" }</h6>
                    </Form>
              </>
              : <></>
            }
            
          </Col>
          <Col>
            <h5>Anúncios já existentes:</h5>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center", margin: "1.5rem", maxHeight: "70vh", overflowY: "scroll" }}>
            {
              adList.map(ad =>
                <Card border="dark" style={{ width: '12.5rem', marginBottom: '10px' }} onClick={ () => setAdSelected(ad) }>
                  <Card.Body>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "-1rem" }}>
                      <Image style={{ width: "150px", margin: "0px" }}
                            class='unique'
                            src={ ad.urls[0] }
                            alt={ ad.description }
                            title={ ad.description }
                      ></Image>
                    </div><br/>
                    <Card.Title>{ ad.description }</Card.Title>
                    <Card.Subtitle>Estado: { "Pendente" }</Card.Subtitle><br/>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>  
                      <Card.Text>
                        Propaganda do Mês
                      </Card.Text>
                    </div><br/>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "-1rem" }}>
                      <Button variant="danger">Remover</Button>
                    </div>
                  </Card.Body>
                </Card>
              )
            }
            </div>
          </Col>
        </Row>
        </Container>
      </ModalBS.Body>
      <div style={{ textAlign: "center" }}>
        <Button onClick={ onHide } style={{ width: "auto" }}>Fechar</Button>
      </div>
    </ModalBS>
  )
}

ModalAdStatus.propTypes = {};

ModalAdStatus.defaultProps = {};