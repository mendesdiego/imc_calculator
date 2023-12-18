import './App.css';
import { Header } from '../src/components/header/Header';
import { ContextCalculator } from './components/contexto/ContextCalculator';
import { ImcMeans } from './components/explanation/ResultMeans';
import { HealthTips } from './components/tips/beHealth';
import { Limitations } from './components/limitations/limitationsBmi';
import { FormComponent } from './components/form/FormComponent';

function App() {
  return (
    <>
      <Header />
      <div className="content__calculator relative w-full flex items-center justify-between flex-col xl:flex-row">
        <ContextCalculator />
        <FormComponent />
      </div>
      <ImcMeans />
      <HealthTips />
      <Limitations />
    </>
  )
}

export default App
