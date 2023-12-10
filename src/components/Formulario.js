import React, { useState } from "react";
import datos from "./datos.json";
import '../index.css'

const Formulario = () => {
  const [tipoPropiedad, setTipoPropiedad] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [metrosCuadrados, setMetrosCuadrados] = useState("");
  const [cotizacion, setCotizacion] = useState(null);

  /* Guardar los datos */
  
  /* Envio de formulario */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !tipoPropiedad ||
      !ubicacion ||
      !metrosCuadrados ||
      isNaN(metrosCuadrados)
    ) {
      alert("Por favor, complete todos los campos correctamente.");
      return;
    }

    const nuevaCotizacion = calcularCotizacion();
    setCotizacion(nuevaCotizacion);

  };

  
  /* Calculo de cotización */
  const calcularCotizacion = () => {
    if (
      !datos ||
      !datos.length ||
      !tipoPropiedad ||
      !ubicacion ||
      !metrosCuadrados
    ) {
      return 0; 
    }

    // Encuentra el factor para el tipo de propiedad seleccionado
    const factorPropiedad =
      datos.find(
        (factor) =>
          factor.categoria === "propiedad" && factor.tipo === tipoPropiedad
      )?.factor || 1;

    // Encuentra el factor para la ubicación seleccionada
    const factorUbicacion =
      datos.find(
        (factor) =>
          factor.categoria === "ubicacion" && factor.tipo === ubicacion
      )?.factor || 1;

    // Realiza el cálculo de la cotización
    const cotizacionCalculada =
      metrosCuadrados * factorPropiedad * factorUbicacion;

    return cotizacionCalculada.toFixed(2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tipo de Propiedad:
        <select
          value={tipoPropiedad}
          onChange={(e) => setTipoPropiedad(e.target.value)}
          required
        >
          <option value="" disabled>
            Seleccione...
          </option>
          {datos
            .filter((data) => data.categoria === "propiedad")
            .map((data) => (
              <option key={data.tipo} value={data.tipo}>
                {data.tipo}
              </option>
            ))}
        </select>
      </label>

      <label>
        Ubicación:
        <select
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
          required
        >
          <option value="" disabled>
            Seleccione...
          </option>
          {datos
            .filter((data) => data.categoria === "ubicacion")
            .map((data) => (
              <option key={data.tipo} value={data.tipo}>
                {data.tipo}
              </option>
            ))}
        </select>
      </label>

      <label>
        Metros Cuadrados:
        <input
          type="number"
          value={metrosCuadrados}
          onChange={(e) => setMetrosCuadrados(e.target.value)}
          required
        />
      </label>

      {cotizacion && <p>Cotización: ${cotizacion}</p>}

      <button type="submit">Obtener Cotización</button>
    </form>
  );
};

export default Formulario;
