import "../App.css";
import { useState, useEffect } from "react";

function Juego({nombre, mensajeNombreError, mensajeOpcionError,
    setMensajeNombreError, setMensajeOpcionError,
    setMostrarInterfaz, setNumeroDeRonda,
    jugadaUsuario, jugadaComputadora,  setJugadaComputadora,
    setGanadorRonda,
    setPuntajeComputadora, setPuntajeUsuario, setEmpates}) {
    
    const [nombreLocal, setNombreLocal] = useState(nombre);
    const [jugadaUsuarioLocal, setJugadaUsuarioLocal] = useState(null);
      
    // Observar cambios en 'nombre' y actualizar 'nombreLocal'
    useEffect(() => {
        setNombreLocal(nombre);
    }, [nombre]);
      
    // Observar cambios en 'jugadaUsuario' y actualizar 'jugadaUsuarioLocal'
    useEffect(() => {
        setJugadaUsuarioLocal(jugadaUsuario);
    }, [jugadaUsuario]);

    
    //Tengo que ver cómo hago para que no sea tan horrible este mensaje :v
    
    let auxiliarNombreError = false;
    let auxiliarOpcionError = false;
    // Tuve muchísimos problemas que tienen que ver con las actualizaciones usando
    // "set..." por lo que tuve que guardar esa info en simultaneo en variables
    // para poder usarlas acá sin problemas de actualizaciones de la página.

    const MostrarMensajeNombreError = () => {
        if (nombreLocal === null) {
            setMensajeNombreError(true);
            auxiliarNombreError = true;
        } else {
            setMensajeNombreError(false);
            auxiliarNombreError = false;
        }
    };

    const MostrarMensajeOpcionError = () => {
        if (jugadaUsuarioLocal === null) {
            setMensajeOpcionError(true);
            auxiliarOpcionError = true;
        } else {
            setMensajeOpcionError(false);
            auxiliarOpcionError = false;
        }
    };

    const OcultarInterfaz = () => {
        if (auxiliarNombreError || auxiliarOpcionError) {
            setMostrarInterfaz(false);
            console.log("La interfaz está en false");
        } else {
            setMostrarInterfaz(true);
            console.log("La interfaz está en true");
        }
    }

    const ObtenerJugadaComputadora = () => {
        const lista = ["piedra", "papel", "tijera"];
        const numero = Math.floor(Math.random()*3);
        setJugadaComputadora(lista[numero]);
        return (lista[numero]);
    };

    const ResultadoJuego = (obtuveJugadaComputadora) => {
        switch (jugadaUsuario) {
            case "piedra":
                switch (obtuveJugadaComputadora) {
                    case "piedra":
                        return "Empate";
                    case "papel":
                        return "Gana la computadora";
                    case "tijera":
                        return "Gana " + nombre;
                    default:
                        return "chau";
                }
            case "papel":
                switch (obtuveJugadaComputadora) {
                    case "piedra":
                        return "Gana " + nombre;
                    case "papel":
                        return "Empate";
                    case "tijera":
                        return "Gana la computadora";
                    default:
                        return "hasta luego";
                }
            case "tijera":
                switch (obtuveJugadaComputadora) {
                    case "piedra":
                         return "Gana la computadora";
                    case "papel":
                        return "Gana " + nombre;
                    case "tijera":
                        return "Empate"; 
                    default:
                        return "adiós";
                }
                default:
                    return "default ResultadoJuego total";
        };
    };

    const SumaPuntajes = (resultado) => {
        switch (resultado) {
            case "Gana la computadora":
                setPuntajeComputadora(prevPuntajeComputadora => prevPuntajeComputadora += 1);
                break;
            case "Gana " + nombre:
                setPuntajeUsuario(prevPuntajeUsuario => prevPuntajeUsuario + 1);
                break;
            case "Empate":
                setEmpates(prevEmpates => prevEmpates += 1);
                break;
            default:
                console.log("default");
                break;
        };
    };

    const aumentoNumeroRondas = () => {
        setNumeroDeRonda(prevNumeroRonda => prevNumeroRonda += 1 );
      };

      //algo sigue estando mal, tras mostrar los mensajes de error, la página se actualiza de forma
      // incorrecta y me sale el caso default
    const handleJugarClick = () => {
        MostrarMensajeNombreError();
        MostrarMensajeOpcionError();
        OcultarInterfaz();

        if (!auxiliarNombreError && !auxiliarOpcionError) {
            const obtuveJugadaComputadora = ObtenerJugadaComputadora()
            const resultadoRonda = ResultadoJuego(obtuveJugadaComputadora, jugadaUsuarioLocal, nombreLocal);
            setGanadorRonda(resultadoRonda);
            SumaPuntajes(resultadoRonda);
            aumentoNumeroRondas();
        }
      };

    return (
        <div className="botón">
            {/*Botón que al ser presionado ejecuta la función determinarGanadorRonda(jugadaUsuario)*/}
                <button 
                    type="button" 
                    id="botónJugar" 
                    onClick={handleJugarClick}> Jugar! 
                </button>
        </div>
    );
}

export default Juego;