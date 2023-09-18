import "../App.css";

function Juego({nombre, jugadaUsuario, jugadaComputadora, ganadorRonda, setGanadorRonda, puntajeComputadora, puntajeUsuario, setPuntajeComputadora, setPuntajeUsuario, empates, setEmpates}) {
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
        const resultadoRonda = ResultadoJuego();
        setGanadorRonda(resultadoRonda);
        SumaPuntajes(resultadoRonda);
      };

    const SumaPuntajes = (resultado) => {
        switch (resultado) {
            case "Gana la computadora":
                setPuntajeComputadora(prevPuntajeComputadora => prevPuntajeComputadora += 1);
                break;
            case "Gana el usuario":
                setPuntajeUsuario(prevPuntajeUsuario => prevPuntajeUsuario += 1);
                break;
            case "Empate":
                setEmpates(prevEmpates => prevEmpates += 1);
                break;
            default:
                console.log("default");
                break;
        };
    };

    return (
        <div>
            <div className="botón">
              {/*Botón que al ser presionado ejecuta la función determinarGanadorRonda(jugadaUsuario)*/}
              <button type="button" id="botónJugar" onClick={handleJugarClick}> Jugar! </button>
              <p>{ganadorRonda}</p>
            </div>
           
        </div>
    );
}

export default Juego;