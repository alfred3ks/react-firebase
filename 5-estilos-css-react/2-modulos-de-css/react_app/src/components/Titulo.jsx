import React from 'react';

/*

Las props que viene desde Usuario.jsx

<Titulo usuario={"Luis"} color={"crimson"} />

Aqui nuestro componente titulo la puede recibir usando la palabra props, es una palabra que puede ser cualquiera pero por conveniencia se usa props de propiedades.

export const Titulo = (props) => {

Si usamos props cuando usemos las propiedades tendriamos que usar:
props.usuario
props.color

<h1 style={{ props.color }} >Hello {props.usuario} !!!</h1>

Ahora podemos usar desestructuring y poner solo las propiedades del objeto:

export const Titulo = ({ usuario, color }) => {

Y ya lo podriamos usar como lo vemos en el ejemplo:

<h1 style={{ color }} >Hello {usuario} !!!</h1>

Otra cosa que podemos hacer con las props es ponerle valores predeterminados, suponiendo que no nos envian ninguna props este renerizara el valor predeterminado:

export const Titulo = ({ usuario = "Usuario", color = "grey" }) => {

*/

// Ahora el titulo es dinamico:
export const Titulo = ({ usuario = "Usuario", color = "grey" }) => {
  console.log(usuario, color);

  return (
    <h1 style={{ color }} >Hello {usuario} !!!</h1>
  );
}