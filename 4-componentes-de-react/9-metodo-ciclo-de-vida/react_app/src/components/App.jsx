import React, { useState } from 'react';
import { FormularioInicioSesion } from './FormularioInicioSesion';
import { Usuario } from './Usuario';
import { ContadorClass } from './ContadorClass';
import { Counter } from './ContadorFuncional';
import { ContadorFuncional } from './ContadorFuncional';


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
            <ContadorClass cantidadIncrementar={10} cantidadDisminuir={7} />
            {/*<ContadorFuncional cantidadMas={1} cantidadMenos={1} /> */}
            {/* <Counter cantidadMas={1} cantidadMenos={1} /> */}
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
