import React from 'react';
import ObtencionNombre from './componentes/ObtencionNombre.jsx';
import JugadaPC from './componentes/JugadaPC.jsx';
import SarahConnor from './img/SarahConnor.png';
import Terminator1 from './img/Terminator1.png';
import './App.css';
import JugadaUsuario from './componentes/JugadaUsuario.jsx';
import AuxiliarJuego from './componentes/AuxiliarJuego.jsx';
import { useState } from 'react';
import Marcador from './componentes/marcador.jsx';


function App() {
  const [eleccionJugador, setEleccionJugador] = useState('');
  const [jugadaComputadora, setJugadaComputadora] = useState('');
  
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

            <div>
                <ObtencionNombre />
            </div>

            <div>
              <JugadaUsuario setEleccionJugador={setEleccionJugador} />
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
              {eleccionJugador && (<p>{`El jugador eligió ${eleccionJugador}`}</p>)}
              <JugadaPC setJugadaComputadora={setJugadaComputadora}/> 
              <AuxiliarJuego jugadaUsuario={eleccionJugador} jugadaComputadora={jugadaComputadora}/>
            </div>
            {/*Espacio para el conteo de los puntajes generales*/}
            <Marcador/>
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