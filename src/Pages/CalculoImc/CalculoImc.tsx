// @flow 
import * as React from 'react';

export const CalculoImc = () => {
    const [peso, setPeso] = React.useState<number>(0);
    const [altura, setAltura] = React.useState<number>(0);
    const [resultadoImc, setResultadoImc] = React.useState<number>(0);
    const [classificacao, setClassificacao] = React.useState<string>('');

    const handleCalcularImc = () => {
        setResultadoImc(peso / altura ** 2);//Math.pow(altura,2);

    }

    return (
        <div>
            <h1>exercicio imc</h1>
            <div>
                <input type="number"
                    placeholder="Digite um peso"
                    onChange={e => setPeso(Number(e.target.value))}
                />

                <input type="number"
                    placeholder="Digite uma altura"
                    onChange={e => setAltura(Number(e.target.value))}
                />
                <button onClick={handleCalcularImc}>Calcular IMC</button>
            </div>
            <div>
                <h3>Resultado</h3>
                <h3>Imc: {resultadoImc.toFixed(2)}</h3>
                <h3>Classificação: yyyy</h3>
            </div>
        </div>
    );
};