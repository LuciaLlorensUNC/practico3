import "../App.css";

function Reinicio({setJugadaUsuario, setJugadaComputadora, setMostrarInterfaz,
    setBotonJugar, setEmpates, setGanadorRonda, setMensajeNombreError, setNombreJugador,
    setNumeroDeRonda, setPuntajeUsuario, setPuntajeComputadora, setSaludar,
    setMensajeOpcionError, inputRef}) {

    const handleReinicioClick = () => {
        setJugadaUsuario(null);
        setJugadaComputadora(null);
        setMostrarInterfaz(false);
        setNombreJugador(null);
        inputRef.current.focus();
        inputRef.current.value = "";
        setSaludar(false);
        setMensajeNombreError(false);
        setGanadorRonda(null);
        setPuntajeUsuario(0);
        setPuntajeComputadora(0);
        setEmpates(0);
        setNumeroDeRonda(0);
        setMensajeOpcionError(false);
        setBotonJugar(true);
    }
    
    return (
        <div className="botón">
            {/*Botón que al ser presionado ejecuta la función borrarCampos()*/}
            <button type="button" id="botónReiniciar" onClick={handleReinicioClick}> Reiniciar </button>
        </div>
    );
}

export default Reinicio;