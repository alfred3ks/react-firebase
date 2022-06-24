import React from 'react';
import './css/style.css'

export function App() {

  const nombre = "Alfred";
  const color = "orange";
  const pais = null
  const sesion = true;

  return (
    <>
      { /* Aqui ponemos nuestro condicional con el operador ternario */}
      {sesion
        ?
        <>
          <p style={{ color }}>Has iniciado sesion:</p>
          <h1 className={'titulo'}>Hello {nombre} !!!</h1>
          <p style={{ color: 'blueviolet' }}>Que tengas un buen dia.</p>
          {/* Aqui vemos otro condicional que muestra o no el contenido si la variable existe. */}
          {pais && <p>Te estas conectando desde: {pais}</p>}
        </>
        :
        <p style={{ color }}>No has iniciado sesion.</p>
      }
    </>
  )
}

