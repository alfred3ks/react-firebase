import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Blog = () => {

  // Simulamos que llamamos a una base de datos:
  const [articulos, establerArticulos] = useState([]);
  const [cargando, establerCargando] = useState(true);

  // Se ejecuta una ves al cargar el componente la primera vez:
  // Simulamos llamado a API...
  useEffect(() => {
    setTimeout(() => {
      establerArticulos([
        {
          id: 1,
          titulo: 'Titulo del primer articulo'

        },
        {
          id: 2,
          titulo: 'Titulo del segundo articulo'
        },
        {
          id: 3,
          titulo: 'Titulo del tercer articulo'
        }]);

      establerCargando(false);
    }, 3000)

  }, []);

  console.log(articulos);

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
