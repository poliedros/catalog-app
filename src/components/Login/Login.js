import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import './Login.css';

export default function Login() {

  const url = "auth";
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  async function submit(e) {
    e.preventDefault();
    const res = await axios.get(url, {
      email: data.email,
      password: data.password
    });
    console.log(res)
  }

  function handle(e) {
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  return  <form className="log-form" onSubmit={async (e) => await submit(e)}>
            <h3>
              <name>
                Iniciar Sessão
              </name>
            </h3>
            <hr className="hr-log" size="2" width="15%" color="greenyellow" />

            <label>
              E-mail
            </label>
            <input className="email" onChange={(e) => handle(e)} id="email" value={data.email} type="email" name="email"></input>
            <label>
              Senha
            </label>
            <input className="password" onChange={(e) => handle(e)} id="password" value={data.password} type="password" name="password" autoComplete="on"></input>
            <button>Iniciar Sessão</button>
            <Link to="/signup">Não sou cadastrado</Link>
          </form>
}