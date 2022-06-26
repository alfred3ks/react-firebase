import React, { useReducer } from 'react';
import { Boton } from '../elements/Boton';

export const ContadorUseReducer = ({ cantidadMas, cantidadMenos }) => {

  /*

  Implementamos useReducer:
  Este hook recibe dos parametros:
  Un reducer y un estado inicial.
  Del lado del [] un estado y una funcion dispatch.
  Nosotros le daremos un reducer y un estado contadorInicial y el nos devolvera un estado y una funcion dispatch

  En nuestro boton ahora podemos llamar el metodo onClick.
  dispatch -> ejecutar, despachar.
  la funcion dispatch() recibe una accion y una accion es un objeto:
  {tipo: 'INCREMENTAR'}

  */

  // Estado inicial del reducer. es un objeto de que nos da el estado inicial
  const contadorInicial = { contador: 0 };

  /*

  Reducer: Es una funcion que va a escuchar que tipo de accion le estamos ejecutando con el dispatch.

  Esta funcion recibe dos argumentos, el estado y la accion. Recuerda la accion es el objeto que le pasamos a dispatch()

  El reducer se suele usar cuando manejamos muchas acciones en nuestro componente.
  Por ejemplo ves lo facil que es poner un boton de reiniciar el contador.

  */

  // Funcion reducer: MUY INTERESAANTE!!!!
  const reducer = (estado, accion) => {
    console.log(estado, accion);
    switch (accion.tipo) {
      case 'INCREMENTAR':
        return { contador: estado.contador + cantidadMas }
      case 'DISMINUIR':
        return { contador: estado.contador - cantidadMenos }
      case 'REINICIAR':
        return { contador: estado.contador = 0 }
      default:
        return estado;
    }
  }

  // Declaramos useReducer:
  const [estado, dispatch] = useReducer(reducer, contadorInicial);

  return (
    <div>
      <h1>CounterReducer: {estado.contador}</h1>
      <Boton
        negro
        onClick={() => {
          dispatch({ tipo: 'INCREMENTAR' })
        }}
      >
        Incrementar {cantidadMas}
      </Boton>
      <Boton
        negro
        onClick={() => {
          dispatch({ tipo: 'DISMINUIR' })
        }}
      >
        Disminuir {cantidadMenos}
      </Boton>
      <Boton
        negro
        onClick={() => {
          dispatch({ tipo: 'REINICIAR' })
        }}
      >
        Reiniciar
      </Boton>
    </div>);
}
