import React, { useState } from 'react';
import axios from '../../axios';
import './Signup.css';

export default function Signup() {

  const url = "user";
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  async function submit(e) {
    e.preventDefault();
    const res = await axios.post(url, {
      name: data.name,
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

  return (

    <form id="form" className="topBefore" onSubmit={async (e) => await submit(e)}>	
      <input id="name" type="text" placeholder="NOME" onChange={(e) => handle(e)} value={data.name} />
      <input id="email" type="text" placeholder="E-MAIL" onChange={(e) => handle(e)} value={data.email}  />
      <input id="password" type="password" placeholder="SENHA" onChange={(e) => handle(e)} value={data.password} autoComplete="on" />
      {/*<textarea id="message" type="text" placeholder="MESSAGE"></textarea>*/}
      <input id="submit" type="submit" value="CADASTRAR"/>
    </form>

  )
  
  {/*<form className="log-form" onSubmit={async (e) => await submit(e)}>
            {/*<h3>
              <name>
                Cadastrar
              </name>
            </h3>
            <hr className="hr-log" size="2" width="15%" color="greenyellow" />/}

            {/*<label>
              Nome
            </label>/}
            <input className="name app-form-control" placeholder="Name" onChange={(e) => handle(e)} id="name" value={data.name} type="text" name="name"></input>
            {/*<label>
              E-mail
            </label>/}
            <input className="email app-form-control" placeholder="E-mail" onChange={(e) => handle(e)} id="email" value={data.email} type="email" name="email"></input>
            {/*<label>
              Senha
            </label>/}
            <input className="password app-form-control" placeholder="Senha" onChange={(e) => handle(e)} id="password" value={data.password} type="password" name="password" autoComplete="on"></input>
            <button>Iniciar Sessão</button>
          </form>*/}

}
