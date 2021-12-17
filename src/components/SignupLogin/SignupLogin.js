import React, { useState, useEffect, useParams, useLocation } from 'react';
import './SignupLogin.css';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Accordion from 'react-bootstrap/Accordion';

export default function SignupLogin(props) {
  console.log(props)
  return <section>

  {/*<section>
    
    <div class="container">
      <div class="accordion">

      <div class="accordion-item" id="signup">
          <a class="accordion-link" href="#signup">
            <div class="flex">
              <h5>Cadastrar</h5>
            </div>
            <img class="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/arrow_circle_right_icon_173429.svg"} width="32px" />
            <img class="icon ion-md-arrow-down" src={process.env.PUBLIC_URL + "/arrow_circle_down_icon_173432.svg"} width="32px" />
            {/*<i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>/}
          </a>
          <div class="answer">
            
            <Signup />

          </div>
          <hr />
        </div>
        <div class="accordion-item" id="login">
          <a class="accordion-link" href="#login">
            <div class="flex">
              <h5>Entrar</h5>
            </div>
            <img class="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/arrow_circle_right_icon_173429.svg"} width="32px" />
            <img class="icon ion-md-arrow-down" src={process.env.PUBLIC_URL + "/arrow_circle_down_icon_173432.svg"} width="32px" />
            {/*<i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>/}
          </a>
          <div class="answer">

            <Login />
            
          </div>
          {/*<hr />/}
        </div>
        
      </div>
    </div>
  </section>*/}

    <Accordion activeKey={props.key} flush> {/* defaultActiveKey="0" */}
      {console.log(props.key)}
      <Accordion.Item eventKey="0">
        <Accordion.Header>Cadastrar</Accordion.Header>
        <Accordion.Body>
          <Signup />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Entrar</Accordion.Header>
        <Accordion.Body>
          <Login />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </section>
}

SignupLogin.propTypes = {};

SignupLogin.defaultProps = {};