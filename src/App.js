import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const oaNovoColaboradorAdcionado = (colaborador) => {
      console.log(colaborador)
      setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => oaNovoColaboradorAdcionado(colaborador)} />
      <Time nome='Programacao'/>
      <Time nome='Front-Ends'/>
      <Time nome='Data Science'/>
    </div>
  );
}


export default App;
