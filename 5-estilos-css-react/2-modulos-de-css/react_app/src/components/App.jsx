import React, { useState } from 'react';
import { FormularioInicioSesion } from './FormularioInicioSesion';
import { Usuario } from './Usuario';
import { ContadorClass } from './ContadorClass';
import { Counter } from './ContadorFuncional';
import { ContadorFuncional } from './ContadorFuncional';
import '../css/App.css';


export function App() {

  // Hooks useState: Vamos a utilizar estados.
  const [sesion, cambiarEstadoSesion] = useState(true);

  return (
    <div className='contenedor'>
      {
        sesion ?
          <div>
            <Usuario />
            {/* Aqui tenemos nuestro contador de clases */}
            {/* <ContadorClass cantidadIncrementar={10} cantidadDisminuir={7}/>*/}
            {/*<ContadorFuncional cantidadMas={1} cantidadMenos={1} /> */}
            <Counter cantidadMas={1} cantidadMenos={1} />
            <button className='boton' onClick={() => { cambiarEstadoSesion(false) }}>Cerrar sesión</button>
          </div>
          :
          <div>

            <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
            {/*<button onClick={() => { cambiarEstadoSesion(true) }}>Iniciar sesión</button> */}

          </div>
      }
    </div>
  )
}
