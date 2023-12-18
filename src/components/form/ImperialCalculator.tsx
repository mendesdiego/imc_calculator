import { useEffect, useState } from 'react';

export function ImperialCalculator() {
  const [pesoLb, setPesoLb] = useState<string | ''>('');
  const [pesoSt, setPesoSt] = useState<string | ''>('');
  const [alturaFt, setAlturaFt] = useState<string | ''>('');
  const [alturaIn, setAlturaIn] = useState<string | ''>('');
  const [imcImperial, setIMCImperial] = useState<number | null>(null);

  useEffect(() => {
    const pesoKg = (parseFloat(pesoLb) + parseFloat(pesoSt) * 14) * 0.453592; // Converte para KG
    const alturaM = (parseFloat(alturaFt) * 0.3048) + (parseFloat(alturaIn) * 0.0254); // Converte para metros

    if (!isNaN(pesoKg) && !isNaN(alturaM) && alturaM !== 0) {
      const calculoIMC = pesoKg / (alturaM * alturaM);
      setIMCImperial(calculoIMC as number | null);
    } else {
      setIMCImperial(null);
    }
  }, [pesoLb, pesoSt, alturaFt, alturaIn, imcImperial]);  

  const handlePesoLbChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPesoLb(event.target.value);
  };

  const handlePesoStChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPesoSt(event.target.value);
  };

  const handleAlturaFtChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlturaFt(event.target.value);
  };

  const handleAlturaInChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlturaIn(event.target.value);
  };  

  return (
    <div className='mt-6'>
      <p className="text-darkElectricBlue text-base font-normal mb-0">Height</p>
      <div className='relative flex items-center gap-4'>
        <div className="box-field__altura relative w-box-45 flex justify-center flex-col pt-6 pb-4 before:content-['ft'] before:absolute before:top-1/2 before:right-6 before:text-blue before:text-2xl before:font-semibold">
          <input 
            type="number" 
            id="alturaFt" 
            value={alturaFt} 
            onChange={handleAlturaFtChange} 
            className="border border-solid border-borders rounded-xl p-5 px-6 text-gunMetal text-2xl leading-normal font-semibold focus:border-blueBorder focus-visible:border-blueBorder"/>
        </div>

        <div className="box-field__altura relative w-box-45 flex justify-center flex-col pt-6 pb-4 before:content-['in'] before:absolute before:top-1/2 before:right-6 before:text-blue before:text-2xl before:font-semibold">
          <input 
            type="number" 
            id="alturaIn" 
            value={alturaIn} 
            onChange={handleAlturaInChange} 
            className="border border-solid border-borders rounded-xl p-5 px-6 text-gunMetal text-2xl leading-normal font-semibold focus:border-blueBorder focus-visible:border-blueBorder"/>
        </div>
      </div>

      <p className="text-darkElectricBlue text-base font-normal mb-0">Weight</p>
      <div className='relative flex items-center gap-4'>
        <div className="box-field__altura relative w-box-45 flex justify-center flex-col pt-5 pb-4 before:content-['st'] before:absolute before:top-1/2 before:right-6 before:text-blue before:text-2xl before:font-semibold">
          <input 
            type="number" 
            id="pesoSt" 
            value={pesoSt} 
            onChange={handlePesoStChange} 
            className="border border-solid border-borders rounded-xl p-5 px-6 text-gunMetal text-2xl leading-normal font-semibold focus:border-blueBorder focus-visible:border-blueBorder"/>
        </div>

        <div className="box-field__altura relative w-box-45 flex justify-center flex-col pt-5 pb-4 before:content-['lbs'] before:absolute before:top-1/2 before:right-6 before:text-blue before:text-2xl before:font-semibold">
          <input 
            type="number" 
            id="pesoLb" 
            value={pesoLb} 
            onChange={handlePesoLbChange} 
            className="border border-solid border-borders rounded-xl p-5 px-6 text-gunMetal text-2xl leading-normal font-semibold focus:border-blueBorder focus-visible:border-blueBorder"/>
        </div>
      </div>

      {imcImperial !== null && (
        <div className="mt-6">
          <div className="container__result">
            <div className="box__result bg-blue text-white p-8 rounded-2xl md:rounded-bigSizes md:flex md:items-center md:justify-center">
              <div className="titleResult md:w-1/2">
                <h3 className="text-base font-semibold">Your BMI is...</h3>              
                <p className="text-5xl font-semibold leading-title mt-2 mb-6">{imcImperial.toFixed(1)}</p>
              </div>

              <div className="content__suggest md:w-1/2">
                <p className="text-base">
                  Your BMI suggests you're a healthy weight. Your ideal weight is between 
                  <span className="font-bold"> 9st 6lbs - 12st 10lbs</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
