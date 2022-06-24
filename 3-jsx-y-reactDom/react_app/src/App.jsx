import React from 'react';
import './css/style.css'

export function App() {

  const nombre = "Alfred";
  const color = 'blue';

  return (

    <>
      <h1 className={'titulo'}>Hello {nombre} !!!</h1>
      <p style={{ color: 'blueviolet' }}>Que tengas un buen dia.</p>
      <p style={{ color }}>Que tengas un buen dia.</p>
    </>

  )
}


