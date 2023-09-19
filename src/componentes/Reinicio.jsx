import "../App.css";

function Reinicio({setJugadaUsuario, setJugadaComputadora, setMostrarInterfaz,
    setBotonJugar, setEmpates, setGanadorRonda, setMensajeNombreError, setNombreJugador,
    setNumeroDeRonda, setPuntajeUsuario, setPuntajeComputadora, setSaludar,
    setMensajeOpcionError, inputRef}) {
    
    // función que se ejecuta al apretar el botón Reiniciar
    const handleReinicioClick = () => {
        // Vuelvo los estados de jugadaUsuario y jugadaComputadora
        setJugadaUsuario(null);
        setJugadaComputadora(null);
        // Oculto el cuadro con la información de las rondas
        setMostrarInterfaz(false);
        // Vuelvo al estado anterior de nombre y elimino el contenido del input.
        setNombreJugador(null);
        inputRef.current.focus();
        inputRef.current.value = "";
        setSaludar(false);
        // saco los mensajes de error si los hubiera
        setMensajeNombreError(false);
        setMensajeOpcionError(false);
        // reinicio los puntajes y el ganador
        setGanadorRonda(null);
        setPuntajeUsuario(0);
        setPuntajeComputadora(0);
        setEmpates(0);
        setNumeroDeRonda(0);
        // regreso el botón Jugar
        setBotonJugar(true);
    }
    
    return (
        <div className="botón">
            {/*Botón que al ser presionado ejecuta la función handleReinicioClick*/}
            <button type="button" id="botónReiniciar" onClick={handleReinicioClick}> Reiniciar </button>
        </div>
    );
}

export default Reinicio;