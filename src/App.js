import React from 'react';
import Formulario from './components/Formulario';
import Opciones from './components/Opciones'

function App() {
  return (
    <div className="App">
      <h1>Simulador de Cotización</h1>
      <Formulario/>
      <Opciones/>
    </div>
  );
}

export default App;
