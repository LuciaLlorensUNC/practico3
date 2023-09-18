import React, { useEffect, useState } from 'react';

function Resultado({ nombre, puntajeComputadora, puntajeUsuario, numeroDeRonda }) {
  const [ganadorFinal, setGanadorFinal] = useState(null);
  const [CuadroResultadoFinal, setCuadroResultadoFinal] = useState(false);

  useEffect(() => {
    if (puntajeComputadora === 3 || puntajeUsuario === 3 || numeroDeRonda === 5) {
      // Lógica para determinar el ganador final aquí
      if (puntajeComputadora > puntajeUsuario) {
        setGanadorFinal("Gana la computadora");
        setCuadroResultadoFinal(true);
      } else if (puntajeUsuario > puntajeComputadora) {
        setGanadorFinal("Gana " + nombre);
        setCuadroResultadoFinal(true);
      } else {
        setGanadorFinal("Empate");
        setCuadroResultadoFinal(true);
      }
    }
  }, [nombre, puntajeComputadora, puntajeUsuario, numeroDeRonda]);

  return (
    <>
    {CuadroResultadoFinal && (
        <div className="resultadoFinal" id="resultadoFinal_">
            <p id="títuloResultadoFinal">Resultado final:</p>
            <p id="resultadoFinal">{ganadorFinal}</p>
        </div>
    )};
    </>
  );
}

export default Resultado;