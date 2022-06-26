import React, { useState } from 'react';
import { FormularioInicioSesion } from './FormularioInicioSesion';
import { Usuario } from './Usuario';
import { ContadorClass } from './ContadorClass';
import { Counter } from './ContadorFuncional';
import { ContadorFuncional } from './ContadorFuncional';
import '../css/App.css';
import { Boton } from '../elements/Boton';


export function App() {

  // Hooks useState: Vamos a utilizar estados.
  const [sesion, cambiarEstadoSesion] = useState(false);

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
            {/*<button onClick={() => { cambiarEstadoSesion(false) }}>Cerrar sesión</button> */}
            <Boton largo onClick={() => { cambiarEstadoSesion(false) }}>Cerrar sesión</Boton>
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
