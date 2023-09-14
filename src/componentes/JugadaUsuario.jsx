import { useState } from "react";
import "../App.css";
import Papel from '../img/Papel.jpg';
import Piedra from '../img/Piedra.jpg';
import Tijera1 from '../img/Tijera1.jpg';

function JugadaUsuario() {
    const [jugadaUsuario, setJugadaUsuario] = useState("ninguna");

    const CambioPiedra = (e) => {
        setJugadaUsuario("piedra");
    };

    const CambioPapel = (e) => {
        setJugadaUsuario("papel");
    };

    const CambioTijera = (e) => {
        setJugadaUsuario("tijera");
    };

    return (
        <div className="opciones">
              {/*Grupo de opciones para seleccionar*/}
              <div className="botón_imagen">
              {/* Imagen seleccionable de Piedra*/}
                <button
                  type="button"
                  value={jugadaUsuario}
                  id="piedra"
                  className="botónOpción"
                  style={{ cursor: "pointer" }}
                  onClick={CambioPiedra}
                >
                  <img className="imagen" src={Piedra} alt="piedra" />
                </button>
                {/* Imagen seleccionable de Papel*/}
                <button
                  type="button"
                  value={jugadaUsuario}
                  id="papel"
                  className="botónOpción"
                  style={{ cursor: "pointer" }}
                  onClick={CambioPapel}
                >
                  <img className="imagen" src={Papel} alt="papel" />
                </button>
                {/* Imagen seleccionable de Tijera*/}
                <button
                  type="button"
                  value={jugadaUsuario}
                  id="tijera"
                  className="botónOpción"
                  style={{ cursor: "pointer" }}
                  onClick={CambioTijera}
                >
                  <img className="imagen" src={Tijera1} alt="tijera" />
                </button>
              </div>
              {/*Mensaje oculto; visible en el caso de que no se seleccione una opción*/}
              <p id="mensajeSinSeleccion">¿Piedra, papel o tijera?</p>
            </div>
    );
}

export default JugadaUsuario;