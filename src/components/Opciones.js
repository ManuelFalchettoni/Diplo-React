import React, { useState } from 'react';
import '../index.css'

const Opciones = () => {
  // Definir opciones de cobertura y costos asociados
  const opcionesCobertura = [
    { tipo: 'Básica', costo: 50 },
    { tipo: 'Estándar', costo: 75 },
    { tipo: 'Premium', costo: 100 },
  ];

  // Estado para almacenar la opción seleccionada
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(opcionesCobertura[0]);

  // Función para manejar el cambio de opción
  const handleSeleccion = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (
    <div>
      <h3>Selecciona la cobertura que deseas:</h3>
      <p>Ten en cuenta que se debe sumar a la cotización anterior</p>

      {/* Lista de opciones de cobertura */}
      <ul>
        {opcionesCobertura.map((opcion, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={opcion.tipo}
                checked={opcion === opcionSeleccionada}
                onChange={() => handleSeleccion(opcion)}
              />
              {opcion.tipo} - ${opcion.costo}
            </label>
          </li>
        ))}
      </ul>

            {/* Opciones */}
      <div>
        <h3>Detalle de Cobertura</h3>
        <p>Tipo: {opcionSeleccionada.tipo}</p>
        <p>Costo: ${opcionSeleccionada.costo}</p>
      </div>
    </div>
  );
};

export default Opciones;