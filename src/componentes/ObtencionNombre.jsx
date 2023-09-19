import '../App.css';

function ObtencionNombre({nombre, saludo, onChange, mensajeNombreError, inputRef}) {
    return (
        <div className="bloque" id="nombreJugador">
            <label htmlFor="jugador">Jugador:</label>
            <br />
            <div className="inputNombre">
                <input
                    id="jugador"
                    type="text"
                    /* para poder modificar directamente el input cuando es necesario (con botón reiniciar desaparezca lo escrito)*/
                    ref={inputRef}
                    /* si el nombre es null, el valor de nombre es "", si no lo es, es nombre y mostrara el contenido.
                    Esto es para que cuando seleccione el botón reiniciar no suceda que muestre "null" */
                    value={nombre === null ? '' : nombre}
                    placeholder="Ingresa un nombre!"
                    onChange={onChange}
                    required=""
                />
            </div>
            {/* Saludo oculto, visible en el caso de que se ingrese un nombre*/}
            {(saludo && <p>Hola, {nombre}!</p>)} 
            {/*Mensaje oculto; visible en el caso de que no se ingrese un nombre*/}
            {mensajeNombreError && (
                <p id="mensajeCampoVacíoNombre"> Ingresa un nombre para jugar!" </p>
            )}
            
        </div>  
    ); 
}

export default ObtencionNombre;