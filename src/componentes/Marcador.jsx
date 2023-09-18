import "../App.css";

function Marcador({nombre, puntajeComputadora, puntajeUsuario, empates}) {
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
//después podría ver si puedo hacerlo con {setPuntajeUsuario(prevPuntajeUsuario => prevPuntajeUsuario += 1)}

export default Marcador;