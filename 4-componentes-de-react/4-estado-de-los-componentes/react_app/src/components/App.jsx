import React, { useState } from 'react';
import { Usuario } from './Usuario';

export function App() {

  // Hooks useState: Vamos a utilizar estados.
  const [componente, cambiarEstadoComponente] = useState(false);

  return (
    <>
      {
        componente ?
          <div>
            <Usuario />
            <button onClick={() => { cambiarEstadoComponente(false) }}>Quitar componente</button>
          </div>
          :
          <div>
            <p>No hay componente.</p>
            <button onClick={() => { cambiarEstadoComponente(true) }}>Mostrar componente</button>
          </div>
      }
    </>
  )
}

