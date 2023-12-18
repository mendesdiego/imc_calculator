import React, { useState, useEffect } from 'react';

export function MeterCalculator() {
  const [peso, setPeso] = useState<string | ''>('');
  const [altura, setAltura] = useState<string | ''>('');
  const [imc, setIMC] = useState<number | null>(null);

  useEffect(() => {
    const pesoNumber = parseFloat(String(peso));
    const alturaNumber = parseFloat(String(altura));

    if (!isNaN(pesoNumber) && !isNaN(alturaNumber) && alturaNumber !== 0) {
      const calculoIMC = pesoNumber / (alturaNumber * alturaNumber);
      setIMC(calculoIMC);
    } else {
      setIMC(null);
    }
  }, [peso, altura]);

  const handlePesoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeso(event.target.value);
  };

  const handleAlturaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAltura(event.target.value);  
  };
  
  function calcularFaixaPeso(imc: number, altura: number): { pesoMinimo: number; pesoMaximo: number } {
    let pesoMinimo = 0;
    let pesoMaximo = 0;

    if (imc != null) {
      if (imc < 18.5) {
        //Abaixo do peso
        pesoMinimo = 18.5 * (altura * altura);
        pesoMaximo = imc * (altura * altura);
      } else if (imc >= 18.5 && imc <= 24.9) {
        // Peso Normal
        pesoMinimo = imc * (altura * altura);
        pesoMaximo = 24.9 * (altura * altura);
      } else if (imc >= 24.9 && imc < 29.9) {
        // Sobrepeso
        pesoMinimo = imc * (altura * altura);
        pesoMaximo = 29.9 * (altura * altura);
      } else {
        // Obesidade
        pesoMinimo = 29.9 * (altura * altura);
        pesoMaximo = 40 * (altura * altura);
      }
    }

    return {pesoMinimo, pesoMaximo}
  }

  const faixaPeso = calcularFaixaPeso(imc ?? 0, parseFloat(altura));

  return (
    <div className='relative w-full mt-6'>
      <div className="container__fields flex items-center justify-between flex-col md:flex-row">
        <div className="box-field__altura relative flex w-full justify-center flex-col pt-6 pb-4 before:content-['cm'] before:absolute before:top-1/2 before:right-6 before:text-blue before:text-2xl before:font-semibold md:w-box-45">
          <label htmlFor="altura" className="text-darkElectricBlue text-base font-normal mb-2">Height</label>
          <input
            type="number"
            id="altura"
            value={altura}
            onChange={handleAlturaChange}
            className="border border-solid border-borders rounded-xl p-5 px-6 text-gunMetal text-2xl leading-normal font-semibold focus:border-blueBorder focus-visible:border-blueBorder"
          />
        </div>

        <div className="box-field__altura relative flex w-full justify-center flex-col pt-6 pb-4 before:content-['kg'] before:absolute before:top-1/2 before:right-6 before:text-blue before:text-2xl before:font-semibold md:w-box-45">
          <label htmlFor="peso" className="text-darkElectricBlue text-base font-normal mb-2">Weight</label>
          <input
            type="number"
            id="peso"
            value={peso}
            onChange={handlePesoChange}
            className="border border-solid border-borders rounded-xl p-5 px-6 text-gunMetal text-2xl leading-normal font-semibold focus:border-blueBorder focus-visible:border-blueBorder"
          />
        </div>
      </div>

      <div className="mt-6">
          <div className="container__result">
            {imc !== null && (
              <div className="box__result bg-blue text-white p-8 rounded-2xl md:rounded-bigSizes md:flex md:items-center md:justify-center">
                <div className="titleResult md:w-1/2">
                  <h3 className="text-base font-semibold">Your BMI is...</h3>
                    <p className="text-5xl font-semibold leading-title mt-2 mb-6">{(imc).toFixed(2)}</p>
                </div>

                <div className="content__suggest md:w-1/2">
                  <p className="text-base">
                    Your BMI suggests you're a healthy weight. Your ideal weight is between 
                    <span className="font-bold"> {faixaPeso.pesoMinimo.toFixed(1)} kgs - {faixaPeso.pesoMaximo.toFixed(1)} kgs</span>.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  );
}
