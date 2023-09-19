import React, { useEffect, useState } from 'react';

function Resultado({ nombre, puntajeComputadora, puntajeUsuario, numeroDeRonda, setBotonJugar }) {
  const [ganadorFinal, setGanadorFinal] = useState(null);
  const [CuadroResultadoFinal, setCuadroResultadoFinal] = useState(false);

  useEffect(() => {
    console.log("puntajeComputadora:", puntajeComputadora);
    console.log("puntajeUsuario:", puntajeUsuario);
    console.log("numeroDeRonda:", numeroDeRonda);

    if (puntajeComputadora === 3 || puntajeUsuario === 3 || numeroDeRonda === 5) {
      // Lógica para determinar el ganador final
      if (puntajeComputadora > puntajeUsuario) {
        setGanadorFinal("Gana la computadora");
        setCuadroResultadoFinal(true);
        setBotonJugar(false);
        console.log("gana la compu");
      } else if (puntajeUsuario > puntajeComputadora) {
        setGanadorFinal("Gana " + nombre);
        setCuadroResultadoFinal(true);
        setBotonJugar(false);
        console.log("gana el usuario");
      } else {
        setGanadorFinal("Empate");
        setCuadroResultadoFinal(true);
        setBotonJugar(false);
        console.log("empate");
      }
    }
  }, [nombre, puntajeComputadora, puntajeUsuario, numeroDeRonda, setBotonJugar]);

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