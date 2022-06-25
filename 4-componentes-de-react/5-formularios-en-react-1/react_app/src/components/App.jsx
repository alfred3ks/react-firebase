import React, { useState } from 'react';
import { FormularioInicioSesion } from './FormularioInicioSesion';
import { Usuario } from './Usuario';


export function App() {

  // Hooks useState: Vamos a utilizar estados.
  const [sesion, cambiarEstadoSesion] = useState(false);

  return (
    <>
      {
        sesion ?
          <div>
            <Usuario />
            <button onClick={() => { cambiarEstadoSesion(false) }}>Cerrar sesión</button>
          </div>
          :
          <div>
            <p>No has iniciado sesion:</p>
            <FormularioInicioSesion />
            {/*<button onClick={() => { cambiarEstadoSesion(true) }}>Iniciar sesión</button> */}

          </div>
      }
    </>
  )
}
