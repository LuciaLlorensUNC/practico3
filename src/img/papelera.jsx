<div className="opciones">
              {/*Grupo de opciones para seleccionar*/}
              <div className="botón_imagen">
              {/* Imagen seleccionable de Piedra*/}
                <button
                  type="button"
                  value="piedra"
                  id="piedra"
                  className="botónOpción"
                  style={{ cursor: "pointer" }}
                >
                  <img className="imagen" src={Piedra} alt="piedra" />
                </button>
                {/* Imagen seleccionable de Papel*/}
                <button
                  type="button"
                  value="papel"
                  id="papel"
                  className="botónOpción"
                  style={{ cursor: "pointer" }}
                >
                  <img className="imagen" src={Papel} alt="papel" />
                </button>
                {/* Imagen seleccionable de Tijera*/}
                <button
                  type="button"
                  value="tijera"
                  id="tijera"
                  className="botónOpción"
                  style={{ cursor: "pointer" }}
                >
                  <img className="imagen" src={Tijera1} alt="tijera" />
                </button>
              </div>
              {/*Mensaje oculto; visible en el caso de que no se seleccione una opción*/}
              <p id="mensajeSinSeleccion">¿Piedra, papel o tijera?</p>
            </div>
