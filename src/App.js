import React from 'react';
import ObtencionNombre from './componentes/ObtencionNombre.jsx';
import SarahConnor from './img/SarahConnor.png';
import Terminator1 from './img/Terminator1.png';
import './App.css';
import Jugadas from './componentes/Jugadas.jsx';
import Juego from './componentes/Juego.jsx';
import { useState } from 'react';
import Marcador from './componentes/Marcador.jsx';

function App() {
  const [jugadaUsuario, setJugadaUsuario] = useState("ninguna");
  const [jugadaComputadora, setJugadaComputadora] = useState('');
  const [mostrarInterfaz, setMostrarInterfaz] = useState(true);
  const [nombre, setNombreJugador] = useState("");
  const [saludo, setSaludar] = useState(false);
  const [mensajeNombreError, setMensajeNombreError] = useState("");
  //const [resultadoJuego, setResultadoJuego] = useState("ninguno");
  const [ganadorRonda, setGanadorRonda] = useState("ninguno");
  const [puntajeUsuario, setPuntajeUsuario] = useState(0);
  const [puntajeComputadora, setPuntajeComputadora] = useState(0);
  const [empates, setEmpates] = useState(0);

  const CambiarNombre = (e) => {
    setNombreJugador(e.target.value);
    if (e.target.value !== '') {
        setSaludar(true);
    } else {
        setSaludar(false);
        setMensajeNombreError("Ingresa un nombre para jugar!");
    }
};

const mostrarEmpezarJuego = () => {
  // Cambia el estado para mostrar la interfaz. 
  setMostrarInterfaz(true);
};
  
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
              <ObtencionNombre nombre={nombre} saludo={saludo} mensajeNombreError={mensajeNombreError} onChange={CambiarNombre}  />
            </div>

            <div>
              <Jugadas setJugadaUsuario={setJugadaUsuario} setJugadaComputadora={setJugadaComputadora} />
            </div>

            <div>
              {/*Botón que al ser presionado ejecuta la función determinarGanadorRonda(jugadaUsuario)*/}
              <Juego nombre={nombre} jugadaUsuario={jugadaUsuario} jugadaComputadora={jugadaComputadora} ganadorRonda={ganadorRonda} setGanadorRonda={setGanadorRonda} 
              puntajeComputadora={puntajeComputadora} puntajeUsuario={puntajeUsuario} empates={empates}
              setPuntajeComputadora={setPuntajeComputadora} setPuntajeUsuario={setPuntajeUsuario} setEmpates={setEmpates}/>
            </div>

            <div className="botón">
              {/*Botón que al ser presionado ejecuta la función borrarCampos()*/}
              <button type="button" id="botónReiniciar"> Reiniciar </button>
            </div>
          </div>

          {/*Espacio para los resultados de cada ronda*/}
          {mostrarInterfaz && (
            <div className="empezamosElJuego" id="empezamosElJuego">
              <div className="rondas">
                <p id="numeroDeRonda" />
                <p>{nombre} eligió {jugadaUsuario}</p>
                <p>La computadora eligió {jugadaComputadora}</p>
                <p id="resultadoRonda"> {ganadorRonda} </p>
              </div>
              {/*Espacio para el conteo de los puntajes generales*/}
              <Marcador nombre={nombre} puntajeComputadora={puntajeComputadora} puntajeUsuario={puntajeUsuario} empates={empates}/>
              {/*Espacio para presentar el resultado final (mejor de 3 o 5 rondas)*/}
              <div className="resultadoFinal" id="resultadoFinal_">
                <p id="títuloResultadoFinal">Resultado final:</p>
                <p id="resultadoFinal" />
              </div>
            </div>
          )}
          
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