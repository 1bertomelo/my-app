import React, { useState } from 'react';
import './App.css';
import { H1Label } from './Components/H1Label/H1Label';
import H1Button from './Components/H1Button/H1Button';


function App() {
  //estado
  //estao array [ variavel , funcao que muda valor do estado] = useState<tipo>(valor)
  const [txtIdadeAnos, setTxtIdadeAnos] = useState<number>(0);
  const [diasVividos, setDiasVividos] = useState<number>(0);

  function calcularDiasVividos() {
    //alert(`${txtIdadeAnos * 365} dias vividos!`);
    setDiasVividos(txtIdadeAnos * 365);
  }

  return (
    <div>
      <H1Label />
      <input type='number'
        placeholder='Digite idade'
        onChange={(e) => setTxtIdadeAnos(Number(e.target.value))}
      />

      <h3>Idade : {txtIdadeAnos}</h3>
      <h3>Dias vividos: {diasVividos} </h3>
      <H1Button text='Calcula Dias Vividos' onClick={calcularDiasVividos} />

    </div>


  );
}

export default App;