import React, { useState } from 'react';
import '../css/ContadorFuncional.css'

export const ContadorFuncional = ({ cantidadMas, cantidadMenos }) => {

  const [valorInicial, ejecutarCambio] = useState(0);

  // Estas son las funciones que incrementan  disminuyen el valor
  const incrementar = (cantidad) => {
    ejecutarCambio(valorInicial + cantidad);

  }
  const disminuir = (cantidad) => {
    ejecutarCambio(valorInicial - cantidad)
  }

  return (
    <div>
      <h1>ContadorFuncional: {valorInicial}</h1>
      <button onClick={() => { incrementar(cantidadMas) }}>Incrementar +</button>
      <button onClick={() => { disminuir(cantidadMenos) }}>Disminuir -</button>
    </div>);
}

// Aqui tenemos otra opcion de como hacer el contador:
export let Counter = ({ cantidadMas, cantidadMenos }) => {

  const [valorInicial, ejecutarCambio] = useState(0);

  // Estas son las funciones que incrementan  disminuyen el valor
  const incrementar = (cantidad) => {
    return valorInicial + cantidad;
  }
  const disminuir = (cantidad) => {
    return valorInicial - cantidad;
  }

  return (
    <div>
      <h1>Counter: {valorInicial}</h1>
      <button className='boton-contador' onClick={() => { ejecutarCambio(incrementar(cantidadMas)) }}>Incrementar + {cantidadMas}</button>
      <button className='boton-contador' onClick={() => { ejecutarCambio(disminuir(cantidadMenos)) }}>Disminuir - {cantidadMenos}</button>
    </div>);
}


