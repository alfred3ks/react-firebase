import React, { useState, useEffect } from 'react';
import styles from '../css/ContadorFuncional.module.css'
import { Boton } from '../elements/Boton';

export const ContadorFuncional = ({ cantidadMas, cantidadMenos }) => {

  // Hook useState
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

// Aqui tenemos otra opcion de como hacer el contador COUNTER:
export let Counter = ({ cantidadMas, cantidadMenos }) => {

  const [valorInicial, ejecutarCambio] = useState(0);

  // Hook useEfect:
  // componentDidMount y componentDidUpdate
  // Este hook se ejecuta en cada ciclo de renderizado
  useEffect(() => {
    // console.log("El componente se renderizo...");
  });

  // Este hooks s eejecuta solo la primera vez que renderiza: arrays de dependencias:
  // Conexion a BD solo una vez, no como el hook anterior.
  useEffect(() => {
    // console.log("El componente se renderizo por primera vez..");
    // ....Conexion a una API, solo se hace una vez
  }, []);

  // Se ejecutara solo cuando cambien el contador:
  // OJO al arrays de depenedecias.
  // Se ejecuta cuando esa varaible cambia.
  // Al ser un arrays le podemos pasar todas las dependecias que sean necesarias.
  useEffect(() => {
    // console.log("Counter ha cambiado...");
    // ....Conexion a una API, solo se hace una vez
  }, [valorInicial]);

  // Para cuando se desmonta el componente, osea se quita del DOM:
  useEffect(() => {

    // Codigo del efect.
    return (() => {
      console.log("Counter se ha desmontado del DOM...");
      // ....Desconexion a una API, solo se hace una vez
    });
  }, []);


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
      {/*      <button className={styles.boton} onClick={() => { ejecutarCambio(incrementar(cantidadMas)) }}>Incrementar + {cantidadMas}</button> */}
      {/*      <button className={styles.boton} onClick={() => { ejecutarCambio(disminuir(cantidadMenos)) }}>Disminuir - {cantidadMenos}</button> */}
      <Boton negro onClick={() => { ejecutarCambio(incrementar(cantidadMas)) }}>Incrementar + {cantidadMas}</Boton>
      <Boton negro onClick={() => { ejecutarCambio(disminuir(cantidadMenos)) }}>Disminuir - {cantidadMenos}</Boton>
    </div>);
}


