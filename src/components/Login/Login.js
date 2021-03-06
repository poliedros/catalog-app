import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from '../../axios';

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

    updateLocalStorage(res)
    history.push("/accountPage")
  }

  function handle(e) {
    const newdata = {...data}

    newdata[e.target.id] = e.target.value
    setData(newdata)
  }

  return  (
    <form id="form" class="topBefore" onSubmit={async (e) => await submit(e)}>
      <input id="email" type="email" placeholder="E-MAIL" onChange={(e) => handle(e)} value={data.email} />
      <input id="password" type="password" placeholder="SENHA" onChange={(e) => handle(e)} value={data.password} autoComplete="on" />
      <input id="submit" type="submit" value="INICIAR SESSÃO"></input>
      <a href="/signuplogin#signup">Não sou cadastrado</a>
    </form>
  )
}