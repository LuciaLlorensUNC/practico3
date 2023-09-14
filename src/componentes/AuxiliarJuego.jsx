import "../App.css";

function AuxiliarJuego({jugadaUsuario, jugadaComputadora}) {
    const ResultadoJuego = () => {
        switch (jugadaUsuario) {
            case "piedra":
                switch (jugadaComputadora) {
                    case "piedra":
                        return "Empate";
                    case "papel":
                        return "Gana la computadora";
                    case "tijera":
                        return "Gana el usuario";
                    default:
                        return "";
                }
            case "papel":
                switch (jugadaComputadora) {
                    case "piedra":
                        return "Gana el usuario";
                    case "papel":
                        return "Empate";
                    case "tijera":
                        return "Gana la computadora";
                    default:
                        return "";
                }
            case "tijera":
                switch (jugadaComputadora) {
                    case "piedra":
                         return "Gana la computadora";
                    case "papel":
                        return "Gana el usuario";
                    case "tijera":
                        return "Empate"; 
                    default:
                        return "";
                }
                default:
                    return "";
        };
    };

    const resultado = ResultadoJuego();

    return (
        <div>
           <p id="resultadoRonda">{resultado}</p>
        </div>
    );
}

export default AuxiliarJuego;