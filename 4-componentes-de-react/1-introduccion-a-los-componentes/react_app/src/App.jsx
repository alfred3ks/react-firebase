import React from 'react';
import './css/style.css'

export function App() {
  return (
    <>
      <Usuario />
      <Usuario />
    </>
  )
}

/*
La idea es extraer en componentes el usuario y asi cuando lo tengamos que replicar solo replicamos el componente:
*/

// Creamos el componentes Usuario: Asi lo encapsulamos
let Usuario = () => {

  const nombre = "Alfred";
  const color = "orange";
  const pais = null
  const sesion = true;

  // Aqui tenemos nuestro areglo:
  const amigos = ["Isidro", "Ythamar", "Christian",];

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
          <p>Mi lista de amigos es:</p>
          <ul>
            {amigos.map((amigo, index) => {
              return <li key={index}>{amigo}</li>
            })}
          </ul>
        </>
        :
        <p style={{ color }}>No has iniciado sesion.</p>
      }
    </>
  );
}

