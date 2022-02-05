import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import axios from '../../axios';

import ModalBS from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import Card from 'react-bootstrap/Card';

import UploadImage from '../UploadImage/UploadImage';

export default function ModalAd ({ show, onHide, closeModal }) {
  const [imagesState, setImagesState] = React.useState([]);

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

    const [adFormatList, setAdFormatList] = useState([]);

  const getDataFormat = async () => {
  const {data} = await axios.get('ad-formats');
    setAdFormatList(data);
  };

  useEffect(() => {
    getDataFormat();
  }, adFormatList);

  const [description, setDescription] = useState();

  console.log("FORMATS");
  console.log(adFormatList);
  
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
        <h4 style={{ marginBottom: "1.5rem"}}>Configurar Anúncio</h4>
        <Container style={{ maxWidth: "100%" }}>
        <Row>
          <Col>
            
            {
              adSelected != undefined ?
              <>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="primary" onClick={ () => setAdSelected(null) }>Retornar a Configuração de um Novo Anúncio</Button>
                </div><br/>
                <div style={{ display: "flex", justifyContent: "space-around", alignContent: "center", alignItems: "center", marginBottom: "15px" }}>
                
                <Form style={{ marginBottom: "1.5rem"}}>
                      <Form.Label>Formato desse Anúncio</Form.Label><br/>
                      <div style={{ marginBottom: "1.5rem", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                      {
                        adFormatList.map(af =>
                          <Form.Check
                            inline
                            type='radio'
                            label={ af.name }
                            id={ af._id + "a" }
                            name="adFormat"
                            style={{ textDecoration: "none", marginRight: "35px" }}
                          />
                        )
                      }
                      </div>
                      <Form.Label>Imagens Contidas nesse Anúncio</Form.Label><br/>
                      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center", margin: "1.5rem" }}>
                      { adSelected.urls[0] == undefined || adSelected.urls[0] == null
                        ? null
                        :
                        <Card border="dark" style={{ width: '12.5rem', marginBottom: '10px' }}>
                          <Card.Body>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "-1rem" }}>
                              <Image style={{ width: "150px", margin: "0px" }}
                                    class='unique'
                                    src={ adSelected.urls[0] ?? '' }
                                    alt={ adSelected.description ?? '' }
                                    title={ adSelected.description ?? '' }
                              ></Image>
                            </div>
                            <br/>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "-1rem" }}>
                              <Button variant="danger">Remover</Button>
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
                              <Button variant="danger">Remover</Button>
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
                              <Button variant="danger">Remover</Button>
                            </div>
                          </Card.Body>
                        </Card>
                        }
                      </div>
                      {/* <div style={{ display: "flex", flexDirection: "column",  width: "30%", alignItems: "center" }}>
                      <Image style={{ width: "70%", margin: "0px" }}
                            class='unique'
                            src={ adSelected.urls[0] ?? '' }
                            alt={ adSelected.description ?? '' }
                            title={ adSelected.description ?? '' }
                      ></Image>
                      <Button>Remover</Button>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column",  width: "30%", alignItems: "center" }}>
                      <Image style={{ width: "70%", margin: "0px" }}
                            class='unique'
                            src={ adSelected.urls[1] ?? '' }
                            alt={ adSelected.description ?? '' }
                            title={ adSelected.description ?? '' }
                      ></Image>
                      <Button>Remover</Button>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column",  width: "30%", alignItems: "center" }}>
                      <Image style={{ width: "70%", margin: "0px" }}
                            class='unique'
                            src={ adSelected.urls[2] ?? '' }
                            alt={ adSelected.description ?? '' }
                            title={ adSelected.description ?? '' }
                      ></Image>
                      <Button>Remover</Button>
                      </div> */}
                      <Form.Label>Adicionar Imagens ao Anúncio</Form.Label><br/>
                      <UploadImage onChange={ respond => setImagesState(respond)} />
                      <Form.Label>Descrição</Form.Label><br/>
                      <InputGroup className="mb-3" style={{ textDecoration: 'none', boxSizing: "border-box !important" }}>
                        <InputGroup.Checkbox style={{ textDecoration: 'none', padding: "0px" }} />
                        <FormControl style={{ textDecoration: 'none', boxSizing: "border-box !important" }}
                        value={ adSelected.description ?? '' } defeultValue={ adSelected.description ?? '' } />
                      </InputGroup>
                      
                      {/* <Form.Group className="mb-3" controlId="">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control value={ adSelected.description ?? '' } placeholder="Descrição" onChange={ event => setDescription(event.target.value) } />
                      </Form.Group> */}
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button variant="success" style={{ textDecoration: "none", height: "auto" }} onClick={ 
                          _ => {}
                        }>Confirmar Alterações nesse Anúncio</Button>
                      </div>
                    </Form>
                {/* {
                  adFormatList.map(af => 
                  <div class="containerOuter">
                    <div class="container1">
                      <form /* onSubmit={this.formSubmit} *>
          
                        <input type="radio" class="hidden" id={ af._id + "a" } value={ af.amountCents/100 } name="inputs" 
                          /* checked={this.state.selectedOption === af.amountCents/100 }
                          onChange={this.onValueChange} * />
                        <label class="entry" for={ af._id + "a" }>
                          <div class="circle"></div>
                          <div class="entry-label">{ af.name }</div>
                        </label>
                        <div class="highlight"></div>
                        <div class="overlay"></div>
                      </form>
                      <div>
                        Selected option is : {/* {this.state.selectedOption} *}
                      </div>
                      <button className="btn btn-default" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                  )
                }

                <div style={{ display: "flex", flexDirection: "column",  width: "30%", alignItems: "center" }}>
                <Image style={{ width: "70%", margin: "0px" }}
                      class='unique'
                      src={ adSelected.urls[0] ?? '' }
                      alt={ adSelected.description ?? '' }
                      title={ adSelected.description ?? '' }
                ></Image>
                <Button>Remover</Button>
                </div>
                <div style={{ display: "flex", flexDirection: "column",  width: "30%", alignItems: "center" }}>
                <Image style={{ width: "70%", margin: "0px" }}
                      class='unique'
                      src={ adSelected.urls[1] ?? '' }
                      alt={ adSelected.description ?? '' }
                      title={ adSelected.description ?? '' }
                ></Image>
                <Button>Remover</Button>
                </div>
                <div style={{ display: "flex", flexDirection: "column",  width: "30%", alignItems: "center" }}>
                <Image style={{ width: "70%", margin: "0px" }}
                      class='unique'
                      src={ adSelected.urls[2] ?? '' }
                      alt={ adSelected.description ?? '' }
                      title={ adSelected.description ?? '' }
                ></Image>
                <Button>Remover</Button>
                </div>
                <UploadImage onChange={ respond => setImagesState(respond)} />
                </div>
                <InputGroup className="mb-3" style={{ textDecoration: 'none', boxSizing: "border-box !important" }}>
                  <InputGroup.Checkbox style={{ textDecoration: 'none', padding: "0px" }} />
                  <FormControl style={{ textDecoration: 'none', boxSizing: "border-box !important" }} value={ adSelected.description ?? '' } defeultValue={ adSelected.description ?? '' } />
                </InputGroup>
                <Button>Confirmar Alteração no Anúncio</Button> */}
                </div>
              </>
              :
              <>
                {/* <div class="containerOuter">
                  <div class="container1">
                    <form /* onSubmit={this.formSubmit} *>
                      {
                        adFormatList.map(af => 
                          <>
                              <input type="radio" class="hidden" id={ af._id + "a" } value={ af.amountCents/100 } name="inputs" 
                                /* checked={this.state.selectedOption === af.amountCents/100 }
                                onChange={this.onValueChange} * />
                              <label class="entry" for={ af._id + "a" }>
                                <div class="circle"></div>
                                <div class="entry-label">{ af.name }</div>
                              </label>
                              
                          </>
                        )
                      }
                      <div class="highlight"></div>
                      <div class="overlay"></div>
                    </form>
                    <div>
                      Selected option is : {/* {this.state.selectedOption} *}
                    </div>
                    <button className="btn btn-default" type="submit">
                      Submit
                    </button>
                  </div>
                </div> */}
                <Form style={{ marginBottom: "1.5rem"}}>
                  <Form.Label>Formato desse Anúncio</Form.Label><br/>
                  <div style={{ marginBottom: "1.5rem", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                  {
                    adFormatList.map(af =>
                      <Form.Check
                        inline
                        type='radio'
                        label={ af.name }
                        id={ af._id + "a" }
                        name="adFormat"
                        style={{ textDecoration: "none", marginRight: "35px" }}
                      />
                    )
                  }
                  </div>
                  <Form.Label>Adicionar Imagens ao Anúncio</Form.Label><br/>
                  <UploadImage onChange={ respond => setImagesState(respond)} />
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control value={description} placeholder="Descrição" onChange={ event => setDescription(event.target.value) } />
                  </Form.Group>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="success" style={{ textDecoration: "none", height: "auto" }} onClick={ 
                      _ => {}
                    }>Confirmar Novo Anúncio</Button>
                  </div>
                </Form>
              </>
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
        <Button onClick={ onHide } style={{ width: "auto" }}>Fechar</Button> {/* onClick={() => closeModal(false)} */}
      </div>
    </ModalBS>
  )
}

ModalAd.propTypes = {};

ModalAd.defaultProps = {};

//export default ModalAd;
