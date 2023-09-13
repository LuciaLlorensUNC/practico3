import { useState } from 'react';
import '../App.css';

function ObtencionNombre(props) {
    const [nombre, setNombreJugador] = useState("");

    const CambiarNombre = (e) => {
        setNombreJugador(e.target.value);
    };

    return (
        <div className="bloque" id="nombreJugador">
            <label htmlFor="jugador">Jugador:</label>
            <br />
            <div className="inputNombre">
                <input
                    id="jugador"
                    type="text"
                    placeholder="Ingresa un nombre!"
                    value={nombre}
                    onChange={CambiarNombre}
                    required=""
                />
            </div>
            <p>Hola, {nombre}!</p> {/*Este mensaje también tendría que estar oculto o podría poner un botón que confirme el nombre*/}
            {/*Mensaje oculto; visible en el caso de que no se ingrese un nombre*/}
            <p id="mensajeCampoVacíoNombre">Ingresa un nombre para jugar!</p>
        </div>  
    );
}

export default ObtencionNombre;