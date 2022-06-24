import React from 'react';

export const Titulo = () => {
  const nombre = "Leonel";
  const color = "crimson";

  return (
    <h1 className={'titulo'} style={{ color }}>Hello {nombre} !!!</h1>
  );
}