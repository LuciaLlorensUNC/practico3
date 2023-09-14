import { useState } from 'react';
import '../App.css';

function ObtencionNombre() {
    const [nombre, setNombreJugador] = useState("");
    const [Saludo, setSaludar] = useState(false);

    const CambiarNombre = (e) => {
        setNombreJugador(e.target.value);
        if (e.target.value !== '') {
            setSaludar(true);
        } else {
            setSaludar(false);
        }
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

            {Saludo && <p>Hola, {nombre || "humano"}!</p>} {/*Revisar si prefiero que el mensaje esté oculto hasta que empiece a escribir o si prefiero que aparezca como humano hasta que ingrese su nombre */}
            {/*Mensaje oculto; visible en el caso de que no se ingrese un nombre*/}
            <p id="mensajeCampoVacíoNombre">Ingresa un nombre para jugar!</p>
        </div>  
    ); 
}

export default ObtencionNombre;