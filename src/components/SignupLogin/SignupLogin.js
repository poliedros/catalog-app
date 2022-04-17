import React, { useState, useEffect, useParams, useLocation } from 'react';
import './SignupLogin.css';

import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Accordion from 'react-bootstrap/Accordion';

export default function SignupLogin(props) {
  console.log(props)
  return <section>
    <Accordion activeKey={props.key} flush>
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