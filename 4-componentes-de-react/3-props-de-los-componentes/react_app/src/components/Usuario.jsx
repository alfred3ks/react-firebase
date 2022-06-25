import React from 'react';
import { Titulo } from './Titulo';

// Componente Usuario:
export let Usuario = () => {

  const colorRed = "crimson";
  const amigos = ["Isidro", "Ythamar", "Christian",];

  return (
    <>
      <p style={{ color: colorRed }}>Has iniciado sesion:</p>

      {/* Aqui enviamos estas props a nuestro componente Titulo */}
      <Titulo usuario={"Luis"} color={"crimson"} />
      <Titulo usuario={"Pepe"} color={"green"} />
      <Titulo />

      <p>Mi lista de amigos es:</p>
      <ul>
        {amigos.map((amigo, index) => {
          return <li key={index}>{amigo}</li>
        })}
      </ul>
    </>
  );
}
