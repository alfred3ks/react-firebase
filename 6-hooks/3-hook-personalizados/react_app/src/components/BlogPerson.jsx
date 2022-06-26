import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useObtArticulos } from '../hooks/useObtArticulos';

export const BlogPerson = () => {

  // ahora ponemos nuesto hook:
  const [articulos, cargando] = useObtArticulos();


  return (
    <ContendedorBlog>
      <Titulo>Blog</Titulo>
      {
        cargando
          ?
          <p>Cargando articulos....</p>
          :
          <div>
            {articulos.map((articulo) => {
              return <Articulo key={articulo.id}>{articulo.titulo}</Articulo>
            })}
          </div>
      }

    </ContendedorBlog>
  );
}

// Creamos los estilos:
let ContendedorBlog = styled.div`
  margin:40px 0 20px 0;
`;
let Titulo = styled.h2`
  margin-bottom:10px;
`;
let Articulo = styled.p`
  padding:10px 0;
  margin-bottom:10px;
  border-bottom: 1px solid #ccc;
`;
