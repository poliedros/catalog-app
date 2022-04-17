import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ModalBS from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';

import axios from '../../axios';

export default function ModalAdFormat ({ show, onHide, closeModal }) {

  const [id, setId] = useState();

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const [adFormatList, setAdFormatList] = useState([]);

  const getDataFormat = async () => {
  const {data} = await axios.get('ad-formats');
    setAdFormatList(data);
  };

  useEffect(() => {
    getDataFormat();
  }, adFormatList);

  const [adFormatSelected, setAdFormatSelected] = useState();

  const getSelected = async () => {
    setAdFormatSelected(adFormatSelected);
  };

  /* const getWidth = async () => {
    setWidth(adFormatSelected ? adFormatSelected.width ?? -1 : '');
  }; */

  useEffect(() => {
    getSelected();
    /* getWidth(); */
  }, adFormatSelected);

  let res = JSON.parse(localStorage.getItem('res'))
  let res2 = localStorage.getItem('res') !== null ? res : null
  
  async function postAdFormat() {
    const request = {
      name: name,
      description: description,
      amountCents: price,
      width: width,
      height: height
    }
    const token = res2.data.token

    console.log(request)
    console.log(token)
    const headers =  {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    await axios.post("/ad-formats", request, { headers: headers })
    alert("enviou")
  }

  async function putAdFormat() {
    const request = {
      name: name,
      description: description,
      amountCents: parseInt(price),
      width: parseInt(width),
      height: parseInt(height)
    }
    const token = res2.data.token

    console.log(request)
    console.log(token)
    const headers =  {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    await axios.put(`/ad-formats/${id}`, request, { headers: headers })
    alert("enviou")
  }

  async function deleteAdFormat(id) {
    const token = res2.data.token

    console.log(token)
    const headers =  {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    await axios.delete(`/ad-formats/${id}`, { headers: headers })
    alert("enviou")
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      postAdFormat();
      getDataFormat();
    }
    
    setValidated(true);
  };

  return (
    <ModalBS
        show={ show }
        onHide={ () => closeModal(false) }
        dialogClassName="modal-90w"
        //size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
      <div style={{ textAlign: "right"}}>
        <CloseButton onClick={ () => closeModal(false) } style={{ marginRight: "16px", zIndex: "1" }}/>
      </div>
      <ModalBS.Body style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Container style={{ maxWidth: "100%" }}>
        <h4 style={{ marginBottom: "1.5rem"}}>Configurar Formato de Anúncio</h4>
        <Row>
          <Col>
            {
              adFormatSelected != undefined
              ? <>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="primary" style={{ textDecoration: "none", height: "auto" }} onClick={ 
                    _ => setAdFormatSelected(null)
                  }>
                    Retornar a Configuração de um Novo Formato de Anúncio
                  </Button>
                </div><br/>
                <Form style={{ marginBottom: "1.5rem"}}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Formato de Anúncio</Form.Label>
                    <Form.Control value={ name ?? '' } placeholder="Nome" onChange={ event => setName(event.target.value) } />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control value={ description ?? '' } placeholder="Descrição" onChange={ event => setDescription(event.target.value) } />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control style={{ boxSizing: "border-box !important" }} value={ price ?? '' } type="number" placeholder="Preço" onChange={ event => setPrice(event.target.value) } />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Escalas</Form.Label>
                    <Row>
                      <Col>
                        <Form.Control value={ width ?? '' } type="number" placeholder="Largura" onChange={ event => setWidth(event.target.value) } />
                      </Col>
                      <Col>
                        <Form.Control value={ height ?? '' } type="number" placeholder="Altura" onChange={ event => setHeight(event.target.value) } />
                      </Col>
                    </Row>
                  </Form.Group>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="success" style={{ textDecoration: "none", height: "auto" }} onClick={ 
                      _ => putAdFormat()
                    }>
                      Confirmar Alterações nesse Formato de Anúncio
                    </Button>
                  </div>
                </Form>
              </>
              : <>
                <Form style={{ marginBottom: "1.5rem"}} noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Formato de Anúncio</Form.Label>
                    <Form.Control value={ name } placeholder="Nome" onChange={ event => setName(event.target.value) } required/>
                    <Form.Control.Feedback type="invalid">
                      Por favor insira um nome para o formato de anúncio.
                    </Form.Control.Feedback>
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control value={description} placeholder="Descrição" onChange={ event => setDescription(event.target.value) } />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Preço</Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>R$</InputGroup.Text>
                      <Form.Control style={{ boxSizing: "border-box !important" }} value={price} type="number" placeholder="Reais" onChange={ event => setPrice(event.target.value) } />
                      {/* <Form.Control style={{ boxSizing: "border-box !important" }} value={price} type="number" placeholder="Centavos de Reais" onChange={ event => setPrice(price + event.target.value) } /> */}
                    </InputGroup>
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Escalas</Form.Label>
                    <Row>
                      <Col>
                        <Form.Control value={width} type="number" placeholder="Largura" onChange={ event => setWidth(event.target.value) } />
                      </Col>
                      <Col>
                        <Form.Control value={height} type="number" placeholder="Altura" onChange={ event => setHeight(event.target.value) } />
                      </Col>
                    </Row>
                  </Form.Group>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="success" type="submit" style={{ textDecoration: "none", height: "auto" }} /* onClick={ 
                      _ => postAdFormat()
                    } */>
                      Confirmar Novo Formato de Anúncio
                    </Button>
                  </div>
                </Form>
              </>
            }
          </Col>
          <Col>
            <h5>Formatos de Anúncios já existentes:</h5>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center", margin: "1.5rem", maxHeight: "70vh", overflowY: "scroll" }}>
              {
                adFormatList.map(af => 
                  <Card border="dark" style={{ width: '10rem', marginBottom: '10px' }} onClick={ () => { setAdFormatSelected(af); setId(af._id); setName(af ? af.name ?? '' : ''); setDescription(af ? af.description ?? '' : ''); setPrice(af ? af.amountCents ?? -1 : ''); setWidth(af ? af.width ?? -1 : ''); setHeight(af ? af.height ?? -1 : ''); } }>
                    <Card.Body>
                      <Card.Title>{ af.name }</Card.Title>
                      <Card.Subtitle>{ af.description }</Card.Subtitle>
                      <Card.Text>
                        R$ { Math.trunc(af.amountCents/100) },{ ("0" + Math.round((af.amountCents/100 - Math.trunc(af.amountCents/100)) * 100)).slice(-2) }<br />
                        Escalas: { af.width ?? '' } x { af.height ?? '' }<br />
                        <br />
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "-1rem" }}>
                          <Button onClick={ 
                            _ => deleteAdFormat(af._id)
                          } variant="danger">Remover</Button>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )
              }
            </div>

            {/* {
              adFormatList.map(af => 
              <div class="containerOuter">
                <div class="container1">
                  <form /* onSubmit={this.formSubmit} />
      
                    <input type="radio" class="hidden" id={ af._id + "b" } value={ af.amountCents/100 } name="inputs" 
                      /* checked={this.state.selectedOption === af.amountCents/100 }
                      onChange={this.onValueChange} / />
                    <label class="entry" for={ af._id + "b" }>
                      <div class="circle"></div>
                      <div class="entry-label">{ af.name }</div>
                    </label>
                    <div class="highlight"></div>
                    <div class="overlay"></div>
                  </form>
                  <div>
                    Selected option is : {/* {this.state.selectedOption} /}
                  </div>
                  <button className="btn btn-default" type="submit">
                    Submit
                  </button>
                </div>
              </div>
              )
            } */}
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

ModalAdFormat.propTypes = {};

ModalAdFormat.defaultProps = {};

//export default ModalAdFormat;
