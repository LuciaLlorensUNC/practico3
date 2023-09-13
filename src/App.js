import Papel from './img/Papel.jpg';
import Piedra from './img/Piedra.jpg';
import Tijera1 from './img/Tijera1.jpg';
import SarahConnor from './img/SarahConnor.png';
import Terminator1 from './img/Terminator1.png';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="juego">
          {/* Imagen de la izquierda, aparece con el resultado final */}
          <div className="img" id="img1">
            <img src={SarahConnor} alt="Sarah Connor" />
          </div>

          <div className="panelDeControl" id="panelDeControl">
            <div className="base">
            {/*Título tamaño grande*/}
              <h1 data-testid="tituloJuego">Piedra, Papel o Tijera</h1>
            </div>

            <div className="bloque" id="nombreJugador">
              <label htmlFor="jugador">Jugador:</label>
              <br />
              {/*Campo de texto para el nombre del jugador*/}
              <div className="inputNombre">
                <input
                  type="text"
                  name="jugador"
                  id="jugador"
                  placeholder="Ingresa un nombre!"
                  required=""
                />
              </div>
              {/*Mensaje oculto; visible en el caso de que no se ingrese un nombre*/}
              <p id="mensajeCampoVacíoNombre">Ingresa un nombre para jugar!</p>
            </div>

            <div className="opciones">
              {/*Grupo de opciones para seleccionar*/}
              <div className="botón_imagen">
              {/* Imagen seleccionable de Piedra*/}
                <button
                  type="button"
                  value="piedra"
                  id="piedra"
                  className="botónOpción"
                  style={{ cursor: "pointer" }}
                >
                  <img className="imagen" src={Piedra} alt="piedra" />
                </button>
                {/* Imagen seleccionable de Papel*/}
                <button
                  type="button"
                  value="papel"
                  id="papel"
                  className="botónOpción"
                  style={{ cursor: "pointer" }}
                >
                  <img className="imagen" src={Papel} alt="papel" />
                </button>
                {/* Imagen seleccionable de Tijera*/}
                <button
                  type="button"
                  value="tijera"
                  id="tijera"
                  className="botónOpción"
                  style={{ cursor: "pointer" }}
                >
                  <img className="imagen" src={Tijera1} alt="tijera" />
                </button>
              </div>
              {/*Mensaje oculto; visible en el caso de que no se seleccione una opción*/}
              <p id="mensajeSinSeleccion">¿Piedra, papel o tijera?</p>
            </div>

            <div className="botón">
              {/*Botón que al ser presionado ejecuta la función determinarGanadorRonda(jugadaUsuario)*/}
              <button
                type="button"
                id="botónJugar"
                onClick="determinarGanadorRonda(jugadaUsuario)"
              >
                Jugar!
              </button>
            </div>

            <div className="botón">
              {/*Botón que al ser presionado ejecuta la función borrarCampos()*/}
              <button type="button" id="botónReiniciar" onClick="borrarCampos()">
                Reiniciar
              </button>
            </div>
          </div>

          {/*Espacio para los resultados de cada ronda*/}
          <div className="empezamosElJuego" id="empezamosElJuego">
            <div className="rondas">
              <p id="numeroDeRonda" />
              <p id="eleccionJugador" />
              <p id="eleccionComputadora" />
              <p id="resultadoRonda" />
            </div>
            {/*Espacio para el conteo de los puntajes generales*/}
            <div className="puntajes">
              <div className="punteroUsuario">
                <p id="nombreJugador_" />
                <p id="puntajeUsuario">0</p>
              </div>
              <div className="punteroComputadora">
                <p id="nombreComputadora">Computadora</p>
                <p id="puntajeComputadora">0</p>
              </div>
              <p id="empates">empates</p>
              <p id="cantidadEmpates">0</p>
            </div>
            {/*Espacio para presentar el resultado final (mejor de 3 o 5 rondas)*/}
            <div className="resultadoFinal" id="resultadoFinal_">
              <p id="títuloResultadoFinal">Resultado final:</p>
              <p id="resultadoFinal" />
            </div>
          </div>

          {/* Imagen de la derecha, que aparece con el resultado final */}
          <div className="img" id="img2">
            <img src={Terminator1} alt="Terminator" />
          </div>
        </div>
      </header>
    </>
  );
}

export default App;