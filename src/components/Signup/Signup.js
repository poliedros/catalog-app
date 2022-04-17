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
      <input id="submit" type="submit" value="CADASTRAR"/>
    </form>

  )
}
