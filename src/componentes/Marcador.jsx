import { useState } from "react";
import "../App.css";

function Marcador({resultadoJuego}) {
    const [puntajeUsuario, setPuntajeUsuario] = useState(0);
    const [puntajeComputadora, setPuntajeComputadora] = useState(0);
    const [empates, setEmpates] = useState(0);

    const SumaPuntajes = (resultado) => {
        switch (resultado) {
            case "Gana la computadora":
                setPuntajeComputadora(puntajeComputadora + 1);

                break;
            case "Gana el usuario":
                setPuntajeUsuario(puntajeUsuario + 1);
                break;
            case "Empate":
                setEmpates(empates + 1);
                break;
            default:
                break;
        };
    };

    if (resultadoJuego) {
        SumaPuntajes(resultadoJuego);
      }

    return (
        <div className="puntajes">
              <div className="punteroUsuario">
                <p id="nombreJugador_" /> 
                <p id="puntajeUsuario">{puntajeUsuario} </p>
              </div>
              <div className="punteroComputadora">
                <p id="nombreComputadora">Computadora</p>
                <p id="puntajeComputadora">{puntajeComputadora}</p>
              </div>
              <p id="empates">empates</p>
              <p id="cantidadEmpates">{empates}</p>
            </div>
    );
}

export default Marcador;