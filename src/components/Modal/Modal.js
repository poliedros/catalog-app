import React from 'react';
import './Modal.css';

export default function Modal({ closeModal, url, description }) {
  return (
    <div className='modal-background'>
      <div className='modal-main'>
        <div className='modal-container'>
          <h1 className='h1-modal'>{description}</h1>
          <img src={url} width="105%"></img>
          <p>Nome completo do estabelicimento {description}</p>
          <p>subtitulo</p>
          <p>tipo</p>
          <p>endereço</p>
          <p>telefone</p>
          <p>redes sociais</p>
          <p>Nome completo do estabelicimento</p>
          <p>subtitulo</p>
          <p>tipo</p>
          <p>endereço</p>
          <p>telefone</p>
          <p>redes sociais</p>
          <button onClick={() => closeModal(false)}>Fechar</button>
          {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,100 100,0 100,100"/>
          </svg>*/}
          <div className='modal-frame'>
          </div>
        </div>
      </div>
    </div>
  )
}