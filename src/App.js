import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './App.css';
import SarahConnor from './img/SarahConnor.png';
import Terminator1 from './img/Terminator1.png';
// importo los componentes hijos
import ObtencionNombre from './componentes/ObtencionNombre.jsx';
import Jugadas from './componentes/Jugadas.jsx';
import Juego from './componentes/Juego.jsx';
import {Marcador} from './componentes/Marcador.jsx';
import Resultado from './componentes/Resultado.jsx';
import Reinicio from './componentes/Reinicio';


function App() {
  // defino las variables locales que voy a necesitar usar entre los hijos con sus estados iniciales.
  const [jugadaUsuario, setJugadaUsuario] = useState(null);
  const [jugadaComputadora, setJugadaComputadora] = useState(null);
  const [mostrarInterfaz, setMostrarInterfaz] = useState(false);
  const [nombre, setNombreJugador] = useState(null);
  const [saludo, setSaludar] = useState(false);
  const [mensajeNombreError, setMensajeNombreError] = useState(false);
  const [ganadorRonda, setGanadorRonda] = useState(null);
  const [puntajeUsuario, setPuntajeUsuario] = useState(0);
  const [puntajeComputadora, setPuntajeComputadora] = useState(0);
  const [empates, setEmpates] = useState(0);
  const [numeroDeRonda, setNumeroDeRonda] = useState(0);
  const [mensajeOpcionError, setMensajeOpcionError] = useState(false);
  const [botonJugar, setBotonJugar] = useState(true);
  const inputRef = useRef(null);

  // actualizo el nombre del jugador con lo ingresado en el input y saludo
  const CambiarNombre = (e) => {
    setNombreJugador(e.target.value);
    if (nombre === null) {
      setSaludar(false);
    } else if (nombre !== null) {
        setSaludar(true);
    }
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
            
            {/*Espacio para ingresar el nombre del usuario, saludar y obtener el mensaje de error*/}
            <div>
              <ObtencionNombre nombre={nombre} saludo={saludo} mensajeNombreError={mensajeNombreError} onChange={CambiarNombre}  
                inputRef={inputRef}
              />
            </div>

            {/*Espacio para los botones de opciones piedra, papel o tijera*/}
            <div>
              <Jugadas setJugadaUsuario={setJugadaUsuario} setJugadaComputadora={setJugadaComputadora} mensajeOpcionError={mensajeOpcionError} setBotonJugar={setBotonJugar}
                jugadaComputadora={jugadaComputadora}
              />
            </div>

            <div>
              {/*Botón que al ser presionado ejecuta la función handleJugarClick en el componente Juego y muestra el cuadro con la información de rondas*/}
              {botonJugar && (
                <Juego nombre={nombre} setMostrarInterfaz={setMostrarInterfaz} botonJugar={botonJugar}
                setMensajeNombreError={setMensajeNombreError} setMensajeOpcionError={setMensajeOpcionError} 
                setNumeroDeRonda={setNumeroDeRonda} ganadorRonda={ganadorRonda} setGanadorRonda={setGanadorRonda}
                jugadaUsuario={jugadaUsuario} puntajeUsuario={puntajeUsuario} setPuntajeUsuario={setPuntajeUsuario}
                setJugadaComputadora={setJugadaComputadora}
                jugadaComputadora={jugadaComputadora} puntajeComputadora={puntajeComputadora} setPuntajeComputadora={setPuntajeComputadora}
                empates={empates} setEmpates={setEmpates} setBotonJugar={setBotonJugar}
                mensajeNombreError={mensajeNombreError} mensajeOpcionError={mensajeOpcionError}
              />
              )}
            </div>

            <div>
              {/*Botón que al ser presionado ejecuta la función Reinicio*/}
              <Reinicio setJugadaUsuario={setJugadaUsuario} setJugadaComputadora={setJugadaComputadora} 
                setMostrarInterfaz={setMostrarInterfaz} setNombreJugador={setNombreJugador} setSaludar={setSaludar}
                setMensajeNombreError={setMensajeNombreError} setGanadorRonda={setGanadorRonda} 
                setPuntajeUsuario={setPuntajeUsuario} setPuntajeComputadora={setPuntajeComputadora}
                setEmpates={setEmpates} setNumeroDeRonda={setNumeroDeRonda}
                setMensajeOpcionError={setMensajeOpcionError} setBotonJugar={setBotonJugar}
                inputRef={inputRef}
              />
            </div>
          </div>

          {/*Espacio para los resultados de cada ronda, aparece con el cuadro de rondas tras clickear el botón Jugar*/}
          {mostrarInterfaz && (
            <div className="empezamosElJuego" id="empezamosElJuego">
              <div className="rondas">
                <p id="numeroDeRonda"> Ronda N° {numeroDeRonda}</p>
                <p>{nombre} eligió {jugadaUsuario}</p>
                <p>La computadora eligió {jugadaComputadora}</p>
                <p id="resultadoRonda"> {ganadorRonda} </p>
              </div>
              {/*Espacio para el conteo de los puntajes generales*/}
              <Marcador nombre={nombre} puntajeComputadora={puntajeComputadora} puntajeUsuario={puntajeUsuario} empates={empates}/>
              {/*Espacio para presentar el resultado final (mejor de 5 rondas o ganador de 3)*/}
              <Resultado nombre={nombre} puntajeComputadora={puntajeComputadora} 
              puntajeUsuario={puntajeUsuario} numeroDeRonda={numeroDeRonda} 
              setBotonJugar={setBotonJugar} botonJugar={botonJugar}
              />
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