import React from 'react';
import { Titulo } from './Titulo';
import styled from 'styled-components';


// Componente Usuario:
export let Usuario = () => {


  const colorRed = "crimson";
  const amigos = ["Isidro", "Ythamar", "Christian",];

  return (
    <>
      <Parrafo style={{ color: colorRed }}>Tu sesion:</Parrafo>

      {/* Aqui enviamos estas props a nuestro componente Titulo */}
      <Titulo usuario={"Luis"} color={"crimson"} />
      <Parrafo>Tu lista de amigos son:</Parrafo>
      <ul>
        {amigos.map((amigo, index) => {
          return <li key={index}>{amigo}</li>
        })}
      </ul>
    </>
  );
}

/* Aqui creamos nuestros styled components:*/

const Parrafo = styled.p`
  margin:20px 0;
`;