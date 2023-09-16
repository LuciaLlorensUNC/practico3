import '../App.css';

function ObtencionNombre({nombre, saludo, onChange, mensajeNombreError}) {
    return (
        <div className="bloque" id="nombreJugador">
            <label htmlFor="jugador">Jugador:</label>
            <br />
            <div className="inputNombre">
                <input
                    id="jugador"
                    type="text"
                    placeholder="Ingresa un nombre!"
                    onChange={onChange}
                    required=""
                />
            </div>

            {(saludo && <p>Hola, {nombre}!</p>) || (mensajeNombreError && <p id="mensajeCampoVacíoNombre">Ingresa un nombre para jugar!</p>)}
        </div>  
    ); 
}

export default ObtencionNombre;