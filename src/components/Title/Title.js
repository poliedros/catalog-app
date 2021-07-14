import React from 'react';
import './Title.css';

const Title = () => (
  <div>
    <div id="main">
      <h3>
        O seu guia de compras
      </h3>
      <h1>
        OPÇÃO
      </h1>
      <h5>
        2ª Edição <b>· Julho</b> de 2021 <virtual>versão virtual</virtual>  <br/>
      </h5>
      <h5>
        <name>
          Rosa Maria ·
        </name>
        <email> informativoopcao@gmail.com</email> <b>· 98898-6305</b> <virtual>oi</virtual> <b>· 99920-3720</b> <virtual>vivo</virtual>
      </h5>
    </div>
    <div class="sub">
      <h5>
        <sub>
          <b>Opção</b>
        </sub>
      </h5>
      <h3>Julho de 20<b>21</b></h3>
      <hr size="2" width="5%" color="greenyellow" />
      <h6>
        Informativo - Ano XIX - <b>Julho</b> de 2021 - NºCCXXVIII <br/>
        São João Nepomuceno e Região - Minas Gerais <br/>
      </h6>
      <button>todos</button>
    </div>
  </div>
);

Title.propTypes = {};

Title.defaultProps = {};

export default Title;
