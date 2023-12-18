import { useState } from "react";
import { ImperialCalculator } from "./ImperialCalculator";
import { MeterCalculator } from "./MeterCalculator";

export function FormComponent() {
  const [selectedOption, setSelectedOption] = useState<'metric' | 'imperial'>('metric');
  const handleRadioButtonChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value as 'metric' | 'imperial');
  }

  return (
    <div className="form__calculator relative w-full block p-6 bg-white rounded-2xl shadow-customShadow mb-17 xl:w-box-45">
      <div className="form__calculator__title mb-6">
        <h2 className="text-2xl text-gunMetal font-semibold text-center">Enter your details below</h2>
      </div>
      <div className="radios relative flex items-center justify-between">
        <div className="radios__metric w-box-45 flex items-center">
          <input 
            type="radio"
            value="metric"
            checked={selectedOption === 'metric'}
            onChange={handleRadioButtonChange}
            name="unit"
            className="border border-solid border-borders"
          />
          <label htmlFor="name" className="text-gunMetal text-base font-semibold ml-5">Metric</label>
        </div>

        <div className="radios__imperial w-box-45 flex items-center">
          <input 
            type="radio"
            value="imperial"
            checked={selectedOption === 'imperial'}
            onChange={handleRadioButtonChange}
            name="unit"
            className="border border-solid border-borders"/>
          <label htmlFor="name" className="text-gunMetal text-base font-semibold ml-5">Imperial</label>
        </div>
      </div>

      <div>
        {selectedOption === 'metric' ? (
          <div>
            <MeterCalculator />
          </div>
        ) : (
          <div>
            <ImperialCalculator />
          </div>
        )}
      </div>
    </div>
    
  )
}