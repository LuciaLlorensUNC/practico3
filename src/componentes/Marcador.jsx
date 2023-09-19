import "../App.css";

// Tuve que exportar de esta forma y no por defecto debido a que sino me salía
// un error que no estaba pudiendo solucionar:
// ("A module cannot have multiple default exports.ts(2528)").
// A pesar de que había revisado este y otros componentes sin encontrar otra exportación
// por defecto de "Marcador"
export function Marcador({nombre, puntajeComputadora, puntajeUsuario, empates}) {
    return (
        <div className="puntajes">
              <div className="punteroUsuario">
                <p id="nombreJugador_"> {nombre}</p>
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