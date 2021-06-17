// @flow 
import * as React from 'react';

export const CalculoImc = () => {
    const [peso, setPeso] = React.useState<number>(0);
    const [altura, setAltura] = React.useState<number>(0);
    const [resultadoImc, setResultadoImc] = React.useState<number>(0);
    const [classificacao, setClassificacao] = React.useState<string>('');


    const calculoImc = (p: number, a: number) => {
        return p / a ** 2;
    }

    const handleCalcularImc = () => {
        setResultadoImc(calculoImc(peso, altura));//Math.pow(altura,2);
        setClassificacao(classificarImc(calculoImc(peso, altura)));
    }

    const classificarImc = (pImc: number) => {
        if (pImc < 18.5) return "Baixo Peso";
        if (pImc >= 18.5 && pImc < 25) return "Peso Normal";
        if (pImc >= 25 && pImc < 30) return "SobrePeso";
        if (pImc >= 30 && pImc < 35) return "Obesidade I";
        if (pImc >= 35 && pImc < 40) return "Obesidade II";

        return "Obesidade III";

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
                <h3>Classificação: {classificacao}</h3>
            </div>
        </div>
    );
};