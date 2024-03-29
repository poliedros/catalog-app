import React, { useState, Component, useEffect } from 'react';

import './AccountPage.css';

import axios from '../../axios';

import Modal from '../ModalAdStatus/ModalAdStatus';
import ModalAdFormat from '../ModalAdFormat/ModalAdFormat';
import ModalAd from '../ModalAd/ModalAd';
import ModalAdOrder from '../ModalAdOrder/ModalAdOrder';

import Logout from '../Logout/Logout';

import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { useHistory } from 'react-router';

import Accordion from 'react-bootstrap/Accordion';

let price;

class Demo2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    price = this.state.selectedOption;
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div class="containerOuter">
        <div class="container1">
          <form onSubmit={this.formSubmit}>
            <input type="radio" class="hidden" id="input1" value="4" name="inputs" 
              checked={this.state.selectedOption === "4"}
              onChange={this.onValueChange} />
            <label class="entry" for="input1">
              <div class="circle"></div>
              <div class="entry-label">texto</div>
            </label>
            <input type="radio" class="hidden" id="input2" value="40" name="inputs" 
              checked={this.state.selectedOption === "40"}
              onChange={this.onValueChange} />
            <label class="entry" for="input2">
              <div class="circle"></div>
              <div class="entry-label">pequena</div>
            </label>
            <input type="radio" class="hidden" id="input3" value="50" name="inputs" 
              checked={this.state.selectedOption === "50"}
              onChange={this.onValueChange} />
            <label class="entry" for="input3">
              <div class="circle"></div>
              <div class="entry-label">larga</div>
            </label>
            <input type="radio" class="hidden" id="input4" value="75" name="inputs" 
              checked={this.state.selectedOption === "75"}
              onChange={this.onValueChange} />
            <label class="entry" for="input4">
              <div class="circle"></div>
              <div class="entry-label">meia-página</div>
            </label>
            <input type="radio" class="hidden" id="input5" value="95" name="inputs"
              checked={this.state.selectedOption === "95"}
              onChange={this.onValueChange} />
            <label class="entry" for="input5">
              <div class="circle"></div>
              <div class="entry-label">página inteira</div>
            </label>
            <div class="highlight"></div>
            <div class="overlay"></div>
          </form>
          <div>
            Selected option is : {this.state.selectedOption}
          </div>
          <button className="btn btn-default" type="submit">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default function AccountPage () {

  const [openModalAd, setOpenModalAd] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalAdOrder, setOpenModalAdOrder] = useState(false);
  const [openModalAdFormat, setOpenModalAdFormat] = useState(false);

  const [adFormatList, setAdFormatList] = useState([]);

  const getDataFormat = async () => {
    const {data} = await axios.get('ad-formats');
    setAdFormatList(data);
  };

  useEffect(() => {
    getDataFormat();
  }, adFormatList);

  const [imagesState, setImagesState] = React.useState([]);

  const [adList, setAdList] = useState([]);

  const getData = async () => {
    const {data} = await axios.get('ads');
    setAdList(data);
  };

  useEffect(() => {
    getData();
  }, adList);

  let history = useHistory();
  let res = JSON.parse(localStorage.getItem('res'))
  let res2 = localStorage.getItem('res') !== null ? res : null
  if (res2 == null){
      history.push("/signuplogin");
      return ;
  }

  async function postAd(request, token) {
    const headers =  {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    await axios.post("/ads", request, { headers: headers })
    alert("enviou");
  }

  return (

    <section>
      <Logout/>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Dados de Conta</Accordion.Header>
          <Accordion.Body style={{ display: "grid" }}>
            <input id="name" type="text" placeholder="JOAQUIM JOSE DA SILVA XAVIER" disabled />
            <input id="email" type="text" placeholder={res2.data.user.email} disabled />
            <input id="password" type="text" placeholder={JSON.parse(res2.config.data).password} disabled />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Configurar Formato de Anúncio</Accordion.Header>
          <Accordion.Body style={{ display: "flex", flexDirection: "column" }}>
            <a style={{ textDecoration: 'none' }} onClick={
                    () => setOpenModalAdFormat(true)
                }>
              <img class="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/user_circle_icon_172814.svg"} width="32px" />
              Configurar Formato de Anúncio
            </a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Configurar Anúncio</Accordion.Header>
          <Accordion.Body style={{ display: "flex", flexDirection: "column" }}>
            <a style={{ textDecoration: 'none' }} onClick={
                    () => setOpenModalAd(true)
                }>
              <img class="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/user_circle_icon_172814.svg"} width="32px" />
              Configurar Anúncio
            </a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Galeria de Anúncios</Accordion.Header>
          <Accordion.Body style={{ display: "flex", flexDirection: "column" }}>
            <a style={{ textDecoration: 'none' }} onClick={
                    () => setOpenModal(true)
                }>
              <img class="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/user_circle_icon_172814.svg"} width="32px" />
              Alterar Estados dos Anúncios
            </a>
            <a style={{ textDecoration: 'none' }} onClick={
                    () => setOpenModalAdOrder(true)
                }>
              <img class="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/user_circle_icon_172814.svg"} width="32px" />
              Ordenar Anúncios
            </a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Ajuda</Accordion.Header>
          <Accordion.Body>
          <Gallery>
                <Item
                  original="https://placekitten.com/1024/768?image=1"
                  thumbnail="https://placekitten.com/80/60?image=1"
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" />
                  )}
                </Item>
                <Item
                  original="https://placekitten.com/1024/768?image=2"
                  thumbnail="https://placekitten.com/80/60?image=2"
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=2" />
                  )}
                </Item>
              </Gallery>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {
          openModal &&
          <>
            <Modal
                show={ openModal }
                onHide={ () => setOpenModal(false) }
                closeModal={ () => setOpenModal(false) }
            />
          </>
      }
      {
          openModalAd &&
          <>
            <ModalAd
                show={ openModalAd }
                onHide={ () => setOpenModalAd(false) }
                closeModal={ () => setOpenModalAd(false) }
            />
          </>
      }
      {
          openModalAdOrder &&
          <>
            <ModalAdOrder
                show={ openModalAdOrder }
                onHide={ () => setOpenModalAdOrder(false) }
                closeModal={ () => setOpenModalAdOrder(false) }
            />
          </>
      }
      {
          openModalAdFormat &&
          <>
            <ModalAdFormat
                show={ openModalAdFormat }
                onHide={ () => setOpenModalAdFormat(false) }
                closeModal={ () => setOpenModalAdFormat(false) }
            />
          </>
      }
    </section>
  )
}

AccountPage.propTypes = {};

AccountPage.defaultProps = { key: "1" };