import React, { useState, Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './AccountPage.css';
import UploadImage from '../UploadImage/UploadImage';
import Logout from '../Logout/Logout';

import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { useHistory } from 'react-router';

import Accordion from 'react-bootstrap/Accordion';

//import BarChart from 'chart-race-react';

//import ZoomSlider from 'react-instagram-zoom-slider';

//import ReactImageAppear from 'react-image-appear';

let price;
/*const IMG_URLS = [
  'https://source.unsplash.com/mMa_cpvxeBU/1600x1600',
  'https://source.unsplash.com/ulJYHTb86Bo/1600x1600',
  'https://source.unsplash.com/GCm0tha8IGY/1600x1600',
  'https://source.unsplash.com/T0nxUz68lG0/1600x1600',
  'https://source.unsplash.com/2d4lAQAlbDA/1600x1600',
  'https://source.unsplash.com/qQQdRI_Y7iw/1600x1600',
]
const slides = IMG_URLS.map(src => <img src={src} alt="Pascale Dress - Floral" draggable="false" />)*/

class Demo1 extends Component {
  
  render() {
    {/*<div className="example">
      <h1>Simple example</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet dolorem, iure dolor
        velit sequi ad laborum facilis assumenda maxime obcaecati aspernatur eaque nulla, culpa,
        aliquam porro officia ut veritatis!
      </p>
      <ZoomSlider slides={slides} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet dolorem, iure dolor
        velit sequi ad laborum facilis assumenda maxime obcaecati aspernatur eaque nulla, culpa,
        aliquam porro officia ut veritatis!
      </p>
      <h1>Example with overlay</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet dolorem, iure dolor
        velit sequi ad laborum facilis assumenda maxime obcaecati aspernatur eaque nulla, culpa,
        aliquam porro officia ut veritatis!
      </p>
      <ZoomSlider
        slides={slides}
        slideOverlay={
          <button
            type="button"
            onClick={() => alert('Added to favourites!')}
            style={{
              position: 'absolute',
              width: 40,
              top: 10,
              left: 10,
              padding: 0,
              appearance: 'none',
              border: 'none',
              background: 'none',
            }}
          >
            <img
              alt="Heart icon"
              src="data:image/svg+xml;base64,PHN2ZwpmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuOCkiCnhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKdmlld0JveD0iMCAwIDUwIDUwIgo+CjxwYXRoIGQ9Ik0gMjUgNDQuMjk2ODc1IEwgMjQuMzYzMjgxIDQzLjc2OTUzMSBDIDIzLjM2MzI4MSA0Mi45NDE0MDYgMjIuMDE5NTMxIDQyLjAyNzM0NCAyMC40Njg3NSA0MC45Njg3NSBDIDE0LjMwODU5NCAzNi43NjU2MjUgNSAzMC40MTQwNjMgNSAyMC4yODUxNTYgQyA1IDE0LjA2MjUgMTAuMDk3NjU2IDkgMTYuMzYzMjgxIDkgQyAxOS43MTQ4NDQgOSAyMi44NTE1NjMgMTAuNDU3MDMxIDI1IDEyLjk1NzAzMSBDIDI3LjE0ODQzOCAxMC40NTcwMzEgMzAuMjg5MDYzIDkgMzMuNjM2NzE5IDkgQyAzOS45MDIzNDQgOSA0NSAxNC4wNjI1IDQ1IDIwLjI4NTE1NiBDIDQ1IDMwLjQxNDA2MyAzNS42OTE0MDYgMzYuNzY1NjI1IDI5LjUzMTI1IDQwLjk2ODc1IEMgMjcuOTc2NTYzIDQyLjAyNzM0NCAyNi42MzY3MTkgNDIuOTQxNDA2IDI1LjYzNjcxOSA0My43Njk1MzEgWiIgLz4KPC9zdmc+Cg=="
            />
          </button>
        }
        slideIndicatorTimeout={null}
        activeDotColor="#ff9800"
        dotColor="#4b4b4b"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At eveniet dolorem, iure dolor
        velit sequi ad laborum facilis assumenda maxime obcaecati aspernatur eaque nulla, culpa,
        aliquam porro officia ut veritatis!
      </p>
    </div>*/}
    
    return (
      <>
          <p>Anderson</p>
          {/**/}
          {(fname) => {
            return <h1>My Name is {fname}</h1>;
          }}
        
      </>
      /*<div id="side-container">
        <input id="price" type="text" placeholder={price} onChange={this.onValueChange} disabled />
        <input id="date" type="text" placeholder="DATA: Hoje" disabled />
        <input id="account" type="text" placeholder="CONTA: 810202930912" disabled />
        <input id="password" type="text" placeholder="TRANFERÊNCIA" disabled />
      </div>*/
    );
  }
}

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
    console.log("price");
    price = this.state.selectedOption;
    console.log(price);
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log("AQUI");
    console.log(this.state.selectedOption)
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
      /*<form onSubmit={this.formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              checked={this.state.selectedOption === "Male"}
              onChange={this.onValueChange}
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              checked={this.state.selectedOption === "Female"}
              onChange={this.onValueChange}
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              checked={this.state.selectedOption === "Other"}
              onChange={this.onValueChange}
            />
            Other
          </label>
        </div>
        <div>
          Selected option is : {this.state.selectedOption}
        </div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>*/
    );
  }
}

export default function AccountPage () {
  let history = useHistory();
  let res = JSON.parse(localStorage.getItem('res'))
  let res2 = localStorage.getItem('res') !== null ? res : null
  if (res2 == null){
      console.log("ei");
      history.push("/signuplogin");
      return;
  }
  
  console.log("res2");
  console.log();
  console.log(res);

 /*  useEffect(()=>{
      console.log("oi");
      if(res2 == null){
        history.push("/");
      }
  }) */
  return (
  /*<section>
      <Logout fixed="top"/>
  <div class="container">
    <div class="accordion">
      <div class="accordion-item" id="personalData">
        <a class="accordion-link" href="#personalData">
          <div class="flex">
            <h5>Seus Dados de Conta</h5>
            {/*<ul>
              <li>#Figma</li>
              <li>#Sketch</li>
              <li>#Adobe</li>
              <li>#Invision</li>
              <li>#Protopie</li>
            </ul> /}
          </div>
          <img class="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/user_circle_icon_172814.svg"} width="32px" />
          <img class="icon ion-md-arrow-down" src={process.env.PUBLIC_URL + "/arrow_circle_down_icon_173432.svg"} width="32px" />
          {/*<i class="icon ion-md-arrow-forward"></i>
          <i class="icon ion-md-arrow-down"></i>/}
        </a>
        <div class="answer">
          {/*<p>Nome, email, senha, contato, </p>/}
          <div id="side-container">
            <input id="name" type="text" placeholder="JOAQUIM JOSE DA SILVA XAVIER" disabled />
            <input id="email" type="text" placeholder={res2.data.user.email??""} disabled />
            <input id="password" type="text" placeholder={JSON.parse(res2.config.data??"").password} disabled />
          </div>
        </div>
        <hr />
    </div>
    <div class="accordion-item" id="question13">
        <a class="accordion-link" href="#question13">
          <div class="flex">
            <h5>Configurar Tipo</h5>
          </div>
          <img class="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/currency_circle_dollar_icon_173214.svg"} width="32px" />
          <img class="icon ion-md-arrow-down" src={process.env.PUBLIC_URL + "/arrow_circle_down_icon_173432.svg"} width="32px" />
        </a>
        <div class="answer">
          <Demo1 />
        </div>
        <hr />
    </div>
      <div class="accordion-item" id="adSetting">
        <a class="accordion-link" href="#adSetting">
          <div class="flex">
            <h5>Configurar Anúncio</h5>
            {/* <ul>
              <li>#Figma</li>
              <li>#Sketch</li>
              <li>#Adobe</li>
              <li>#Invision</li>
              <li>#Protopie</li>
            </ul> /}
          </div>
          <img class="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/gear_six_icon_173122.svg"} width="32px" />
          <img class="icon ion-md-arrow-down" src={process.env.PUBLIC_URL + "/arrow_circle_down_icon_173432.svg"} width="32px" />
          {/*<i class="icon ion-md-arrow-forward"></i>
          <i class="icon ion-md-arrow-down"></i>/}
        </a>
        <div class="answer" style={{ display: "flex" }}>
          {/*<label>
            Escolher tamanho
          </label>/}
          {/*<div class="containerOuter">
            <div class="container1">
              <input type="radio" class="hidden" id="input1" value="4" name="inputs"
                /*checked={this.state.selectedOption === "Male"}
                onChange={this.onValueChange}/
              />
              <label class="entry" for="input1"><div class="circle"></div><div class="entry-label">texto</div></label>
              <input type="radio" class="hidden" id="input2" value="40" name="inputs" />
              <label class="entry" for="input2"><div class="circle"></div><div class="entry-label">pequena</div></label>
              <input type="radio" class="hidden" id="input3" value="50" name="inputs" />
              <label class="entry" for="input3"><div class="circle"></div><div class="entry-label">larga</div></label>
              <input type="radio" class="hidden" id="input4" value="75" name="inputs" />
              <label class="entry" for="input4"><div class="circle"></div><div class="entry-label">meia-página</div></label>
              <input type="radio" class="hidden" id="input5" value="95" name="inputs" />
              <label class="entry" for="input5"><div class="circle"></div><div class="entry-label">página inteira</div></label>
              <div class="highlight"></div>
              <div class="overlay"></div>
            </div>
          </div>/}
          <Demo2 />
          {/*<svg width="0" height="0" viewBox="0 0 40 240">
            <defs>
              <mask id="holes">
                <rect x="0" y="0" width="100" height="240" fill="white" />
                <circle r="12" cx="20" cy="20" fill="black"/>
                <circle r="12" cx="20" cy="70" fill="black"/>
                <circle r="12" cx="20" cy="120" fill="black"/>
                <circle r="12" cx="20" cy="170" fill="black"/>
                <circle r="12" cx="20" cy="220" fill="black"/>
              </mask>
            </defs>
          </svg>
          <label>
            Selecionar imagem
          </label>/}
          {/*<div id="side-container">
            <input id="password" placeholder="IMAGEM"></input>
            <input id="submit" type="submit" value="SELECIONAR IMAGEM"></input>
          </div>/}
          <UploadImage />
        </div>
        <hr />
    </div>
    <div class="accordion-item" id="question23">
        <a class="accordion-link" href="#question23">
          <div class="flex">
            <h5>Galeria de Anúncios</h5>
          </div>
          <img class="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/currency_circle_dollar_icon_173214.svg"} width="32px" />
          <img class="icon ion-md-arrow-down" src={process.env.PUBLIC_URL + "/arrow_circle_down_icon_173432.svg"} width="32px" />
        </a>
        <div class="answer">
          <Demo1 />
        </div>
        <hr />
    </div>
      <div class="accordion-item" id="question3">
        <a class="accordion-link" href="#question3">
          <div class="flex">
            <h5>Pagamento</h5>
            {/* <ul>
              <li>#Figma</li>
              <li>#Sketch</li>
              <li>#Adobe</li>
              <li>#Invision</li>
              <li>#Protopie</li>
            </ul> /}
          </div>
          <img class="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/currency_circle_dollar_icon_173214.svg"} width="32px" />
          <img class="icon ion-md-arrow-down" src={process.env.PUBLIC_URL + "/arrow_circle_down_icon_173432.svg"} width="32px" />
          {/*<i class="icon ion-md-arrow-forward"></i>
          <i class="icon ion-md-arrow-down"></i>/}
        </a>
        <div class="answer">
          {/*<p>Descrição de pagamento</p>/}
          {/*<div id="side-container">
            <input id="price" type="text" placeholder={priceValue()} disabled />
            <input id="date" type="text" placeholder="DATA: Hoje" disabled />
            <input id="account" type="text" placeholder="CONTA: 810202930912" disabled />
            <input id="password" type="text" placeholder="TRANFERÊNCIA" disabled />
          </div>/}
          <Demo1 />
          <Demo1 />
        </div>
        <hr />
    </div>
      <div class="accordion-item" id="question4">
        <a class="accordion-link" href="#question4">
          <div>
            <h5>Ajuda</h5>
            {/*<ul>
              <li>#Figma</li>
              <li>#Sketch</li>
              <li>#Adobe</li>
              <li>#Invision</li>
              <li>#Protopie</li>
            </ul>" /}
          </div>
          <img class="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/question_icon_172934.svg"} width="32px" />
          <img class="icon ion-md-arrow-down" src={process.env.PUBLIC_URL + "/arrow_circle_down_icon_173432.svg"} width="32px" />
          {/*<i class="icon ion-md-arrow-forward"></i>
          <i class="icon ion-md-arrow-down"></i>/}
        </a>
        <div class="answer">
          <p>Contatos</p>
          {/*<div style={{width: "500px"}}>
              <BarChart />
          </div>/}
          <div id="Demo12"></div>
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
        </div>
        {/*<hr />/}
    </div>
   </div>
  </div>
</section>*/

    <section>
      <Accordion flush> {/* defaultActiveKey="0" */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Dados de Conta</Accordion.Header>
          <Accordion.Body>
            <input id="name" type="text" placeholder="JOAQUIM JOSE DA SILVA XAVIER" disabled />
            <input id="email" type="text" placeholder={res2.data.user.email} disabled />
            <input id="password" type="text" placeholder={JSON.parse(res2.config.data).password} disabled />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Configurar Formato de Anúncio</Accordion.Header>
          <Accordion.Body>
            <Demo1 />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Criar Anúncio</Accordion.Header>
          <Accordion.Body>
            <Demo2 />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Criar Anúncio</Accordion.Header>
          <Accordion.Body>
            <Demo2 />
            <UploadImage />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Galeria de Anúncios</Accordion.Header>
          <Accordion.Body>
            <Demo1 />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Pagamento</Accordion.Header>
          <Accordion.Body>
            <Demo1 />
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
    </section>
  )
}

AccountPage.propTypes = {};

AccountPage.defaultProps = { key: "1" };

//ReactDOM.render(<Demo1 />, document.getElementById('Demo12'));
//export default AccountPage;
