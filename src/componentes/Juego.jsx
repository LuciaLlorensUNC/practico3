import "../App.css";
import { useState, useEffect } from "react";

function Juego({nombre, setMensajeNombreError, setMensajeOpcionError, setMostrarInterfaz, 
    jugadaUsuario,  setJugadaComputadora,
    setNumeroDeRonda,setGanadorRonda,
    setPuntajeComputadora, setPuntajeUsuario, setEmpates}) {

    // Guardo la info en simultáneo en variables locales para evitar problemas de actualización
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
      
    // Me permite ver los cambios en "nombre" y actualizar "nombreLocal"
    useEffect(() => {
        setNombreLocal(nombre);
    }, [nombre]);
      
    // Me permite ver los cambios en "jugadaUsuario" y actualizar "jugadaUsuarioLocal"
    useEffect(() => {
        setJugadaUsuarioLocal(jugadaUsuario);
    }, [jugadaUsuario]);

    // Tuve muchísimos problemas que tienen que ver con las actualizaciones usando
    // "set..." por lo que tuve que guardar esa info en simultaneo en variables
    // para poder usarlas acá sin problemas de actualizaciones de la página.
    let auxiliarNombreError = false;
    let auxiliarOpcionError = false;
    
    // Función que hacen que se muestre el mensaje de error en el caso de que no se ingrese un nombre
    const MostrarMensajeNombreError = () => {
        if (nombreLocal === null) {
            setMensajeNombreError(true);
            auxiliarNombreError = true;
        } else {
            setMensajeNombreError(false);
            auxiliarNombreError = false;
        }
    };

    // Función que hacen que se muestre el mensaje de error en el caso de que no seleccione una jugada
    const MostrarMensajeOpcionError = () => {
        if (jugadaUsuarioLocal === null) {
            setMensajeOpcionError(true);
            auxiliarOpcionError = true;
        } else {
            setMensajeOpcionError(false);
            auxiliarOpcionError = false;
        }
    };

    // En el caso de que se muestren los mensajes de error, no se muestra el cuadro en el que se muestra la
    // información de la ronda
    const OcultarInterfaz = () => {
        if (auxiliarNombreError || auxiliarOpcionError) {
            setMostrarInterfaz(false);
            console.log("La interfaz está en false");
        } else {
            setMostrarInterfaz(true);
            console.log("La interfaz está en true");
        }
    }
    
    // Función que obtiene una jugada aleatoria de la computadora y actualiza el estado de la misma.
    const ObtenerJugadaComputadora = () => {
        const lista = ["piedra", "papel", "tijera"];
        const numero = Math.floor(Math.random()*3);
        setJugadaComputadora(lista[numero]);
        return (lista[numero]);
    };

    // Función que contiene la lógica del juego, compara las jugadas de la computadora y del usuario y un ganador de la ronda
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
    
    // Función que suma los puntajes de los jugadores, actualizando los estados de los mismos
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

    // función que aumenta el número de ronda
    const aumentoNumeroRondas = () => {
        setNumeroDeRonda(prevNumeroRonda => prevNumeroRonda += 1 );
      };

    // función que se ejecuta al clickear el botón Jugar!, llama a todas las demás funciones en orden
    // primero los mensajes de error y el cuadro de las rondas
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
            {/*Botón que al ser presionado ejecuta la función handleJugarClick*/}
                <button 
                    type="button" 
                    id="botónJugar" 
                    onClick={handleJugarClick}> Jugar! 
                </button>
        </div>
    );
}

export default Juego;