import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import H1Button from './Components/H1Button/H1Button';
import H1List from './Components/H1List/H1List';
function App() {
  const SuperHerois: string[] = ['Batman', 'Homem Aranha', 'Super Homem', 'Homem de Ferro'];
  const Inimigos: string[] = ['Coringa', 'Venon', 'LexLuttor'];

  //primeiro sintaxe: const [variavel, funcao que seta estado]
  //declarando um estado para armazenar o valor do input do nome do heroi
  const [nomeHeroi, setNomeHeroi] = useState<string>('');


  return (
    <div>
      <h1>Olá Mundo</h1>
      <input type="text"
        placeholder="digite nome de um heroi"
        onChange={e => setNomeHeroi(e.target.value)}
      />
      <h3>{nomeHeroi}</h3>
      <h3>{nomeHeroi.length}</h3>
      <h3>{nomeHeroi.length > 3 ? '😎' : ''} </h3>

      <H1Button text="Insira um Super Heroi" />

      <input type="text" placeholder="digite nome de um inimigo" />

      <H1Button text="Insira um Inimigo" />

      <H1List data={SuperHerois} />
      <H1List data={Inimigos} />


    </div>
  );
}

export default App;