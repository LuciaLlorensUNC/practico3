import "../App.css";

function Juego({nombre, setMensajeNombreError, setMensajeOpcionError,
    setMostrarInterfaz, setNumeroDeRonda,
    jugadaUsuario, jugadaComputadora, 
    setGanadorRonda,
    setPuntajeComputadora, setPuntajeUsuario, setEmpates}) {
        //tengo que ver cómo hago porque se muestra la elección del usuario y 
        //la computadora antes de apretar el botón jugar, por lo que puede 
        //hacer que se permita que cambie la elección el usuario al 
        // ver que no va ganar.
    
    //Tengo que ver cómo hago para que no sea tan horrible este mensaje :v
    const MostrarMensajeNombreError = () => {
        if (nombre === "") {
        setMensajeNombreError(true);
        setMostrarInterfaz(false);
        console.log("no hay nombre");
    } else {
        setMensajeNombreError(false);
        mostrarEmpezarJuego();
    }
    };

    const MostrarMensajeOpcionError = () => {
        if (jugadaUsuario === null) {
            setMensajeOpcionError(true);
            setMostrarInterfaz(false);
            console.log("no hay jugada");
        } else {
            setMensajeNombreError(false);
            mostrarEmpezarJuego();
        }
    };

    const ResultadoJuego = () => {
        switch (jugadaUsuario) {
            case "piedra":
                switch (jugadaComputadora) {
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
                switch (jugadaComputadora) {
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
                switch (jugadaComputadora) {
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
                    return "hola";
        };
    };

    const handleJugarClick = () => {
        MostrarMensajeNombreError();
        MostrarMensajeOpcionError();
        const resultadoRonda = ResultadoJuego();
        setGanadorRonda(resultadoRonda);
        SumaPuntajes(resultadoRonda);
        aumentoNumeroRondas();
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

    // Cambia el estado para mostrar el cuadro de resultados. 
    const mostrarEmpezarJuego = () => {
        setMostrarInterfaz(true);
      };

    const aumentoNumeroRondas = () => {
        setNumeroDeRonda(prevNumeroRonda => prevNumeroRonda += 1 );
      };

    return (
        <div className="botón">
            {/*Botón que al ser presionado ejecuta la función determinarGanadorRonda(jugadaUsuario)*/}
            <button type="button" id="botónJugar" onClick={handleJugarClick}> Jugar! </button> 
        </div>
    );
}

export default Juego;