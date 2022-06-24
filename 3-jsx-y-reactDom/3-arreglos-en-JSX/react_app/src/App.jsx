import React from 'react';
import './css/style.css'

export function App() {

  const nombre = "Alfred";
  const color = "orange";
  const pais = null
  const sesion = true;

  // Aqui tenemos nuestro areglo:
  const amigos = ["Isidro", "Ythamar", "Christian",];
  const users = [
    {
      id: 1,
      nombre: "Pedro",
      apellido: "Lorenzo"
    },
    {
      id: 2,
      nombre: "Angelo",
      apellido: "Lorenzo"
    },
    {
      id: 3,
      nombre: "Manuel",
      apellido: "Lorenzo"
    },
  ]

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
          <p>Lista de users:</p>
          <ul>
            {users.map(({ id, nombre }) => {
              return <li key={id}>{nombre}</li>
            })}
          </ul>
        </>
        :
        <p style={{ color }}>No has iniciado sesion.</p>
      }
    </>
  )
}

