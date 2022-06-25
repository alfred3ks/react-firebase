import React, { useState } from 'react';
import { FormularioInicioSesion } from './FormularioInicioSesion';
import { Usuario } from './Usuario';
import { Contador } from './ContadorClass';


export function App() {

  // Hooks useState: Vamos a utilizar estados.
  const [sesion, cambiarEstadoSesion] = useState(true);

  return (
    <>
      {
        sesion ?
          <div>
            <Usuario />
            {/* Aqui tenemos nuestro contador de clases */}
            <Contador cantidadIncrementar={10} cantidadDisminuir={7} />
            <button onClick={() => { cambiarEstadoSesion(false) }}>Cerrar sesión</button>
          </div>
          :
          <div>
            <p>No has iniciado sesion:</p>
            <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
            {/*<button onClick={() => { cambiarEstadoSesion(true) }}>Iniciar sesión</button> */}

          </div>
      }
    </>
  )
}
