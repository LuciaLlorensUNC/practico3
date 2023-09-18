import "../App.css";
import Papel from '../img/Papel.jpg';
import Piedra from '../img/Piedra.jpg';
import Tijera1 from '../img/Tijera1.jpg';

function Jugadas({jugadaUsuario, setJugadaUsuario, setJugadaComputadora, mensajeOpcionError}) {
  const ObtenerJugadaComputadora = (e) => {
    const lista = ["piedra", "papel", "tijera"];
    const numero = Math.floor(Math.random()*3);
    setJugadaComputadora(lista[numero]);
  };

  const CambioPiedra = (e) => { 
    setJugadaUsuario("piedra");
    console.log("piedra");
    ObtenerJugadaComputadora();
    };

    const CambioPapel = (e) => {
      setJugadaUsuario("papel");
      console.log("papel");
      ObtenerJugadaComputadora();
    };

    const CambioTijera = (e) => {
      setJugadaUsuario("tijera");
      console.log("tumama");
      ObtenerJugadaComputadora();
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
              <p id="mensajeSinSeleccion"> {mensajeOpcionError && ("¿Piedra, papel o tijera?")} </p>
            </div>
    );
}

export default Jugadas;