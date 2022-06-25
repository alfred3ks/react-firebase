import React from 'react';
import { Usuario } from './Usuario';


export function App() {

  const sesion = true;

  return (
    <>
      {sesion ? <Usuario /> : <p>No has iniciado sesion.</p>}
    </>
  )
}

