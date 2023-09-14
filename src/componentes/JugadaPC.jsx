import "../App.css";

function JugadaPC({setJugadaComputadora}) {
    const obtenerJugadaComputadora = () => {
        const lista = ["piedra", "papel", "tijera"];
        const numero = Math.floor(Math.random()*3);
        return lista[numero];
    };

    const jugadaComputadora= obtenerJugadaComputadora();
    setJugadaComputadora(jugadaComputadora);

    return (
        <div>
          <p id="eleccionComputadora">La computadora eligió {jugadaComputadora}</p>
          {/* No sé si quiero que esto se vea. Tal vez hacer aparecer solo al final*/}
        </div>
    );
}

export default JugadaPC;