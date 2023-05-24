import { useState } from "react";
import React from 'react';

import { FiSearch } from 'react-icons/fi';
import './styles.css';



function App() {

  const [input, setInput] = useState('')


  function handleSearch(){
    alert('Cliquei')
  }



  return (
    <div className="container">

      <h1 className="title">Buscador CEP</h1>



      <div className="containerInput">

        <input
          type="text"
          placeholder="Digite o CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)} />
        <button className="buttonSearch"
          onclick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>

      </div>

      <main className="main">
        <h2>CEP: 35701168</h2>
        <span>Rua Santa Rita do Sapucai</span>
        <span>Complemento: Apartamento C701</span>
        <span>Bairro: Valle das Palmeiras</span>
        <span>Cidade: Sete Lagoas - MG</span>

      </main>
    </div>
  );
}

export default App;
