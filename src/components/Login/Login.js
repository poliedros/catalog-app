import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../axios';
import './Login.css';

export default function Login() {
  const updateLocalStorage = (res) => {
    localStorage.setItem('res', JSON.stringify(res))
  }

  const history = useHistory();

  const url = "auth";
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  async function submit(e) {
    e.preventDefault();
    const res = await axios.post(url, {
      email: data.email,
      password: data.password
    });
    console.log(res)
    updateLocalStorage(res)
    history.push("/accountPage")
  }

  function handle(e) {
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  return  (
    <form id="form" class="topBefore" onSubmit={async (e) => await submit(e)}>
      <input id="email" type="email" placeholder="E-MAIL" onChange={(e) => handle(e)} id="email" value={data.email} />
      <input id="password" type="password" placeholder="SENHA" onChange={(e) => handle(e)} id="password" value={data.password} autoComplete="on" />
      {/*<textarea id="message" type="text" placeholder="MESSAGE"></textarea>*/}
      <input id="submit" type="submit" value="INICIAR SESSÃO"></input>
      <a href="/signuplogin#signup">Não sou cadastrado</a>
    </form>
  )
  
  {/*<form className="log-form" onSubmit={async (e) => await submit(e)}>
            {/*<h3>
              <name>
                Iniciar Sessão
              </name>
            </h3>
            <hr className="hr-log" size="2" width="15%" color="greenyellow" />/}

            {/*<label>
              E-mail
            </label>/}
            <input className="email app-form-control" placeholder="E-mail" onChange={(e) => handle(e)} id="email" value={data.email} type="email" name="email"></input>
            {/*<label>
              Senha
            </label>/}
            <input className="password app-form-control" placeholder="Senha" onChange={(e) => handle(e)} id="password" value={data.password} type="password" name="password" autoComplete="on"></input>
            <button>Iniciar Sessão</button>
            <a href="/signuplogin#signup">Não sou cadastrado</a>
            </form>*/}
}