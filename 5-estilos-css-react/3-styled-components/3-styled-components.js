/*

Vamos a ver la tercera forma de usar css dentro de react en nuestros componentes.
Para esto vamos a utilizar el proyecto de:

Styled Components.

https://styled-components.com/docs/basics#instalation

Lo tenemos que instalar a nuestro proyecto. Con npm.

npm install --save styled-components

Ahora ya podemos usar styled components en nuestros archivos, empecemos por el de Usuario.jsx

Lo podemos hacer dentro del propio archivo en la parte inferior o en un archivo aparte porque ese codigo lo quiero usar en otra parte de nuestra app.

Asi seria como se haria con styled components:

Creamos nuestro elemento:

const Parrafo = styled.p`
  margin:20px 0;
`;

Y asi lo implementamos:

<Parrafo>Tu lista de amigos son:</Parrafo>

Ahora vamos a ver como separarlo: src/elements

Creamos nuestro componente Boton.jsx

Usamos los estilos del boton de formulario de inicio de sesion. Lo exportamos como cualquier componente.

Y ahora nos vamos al FormularioInicioSesion,App, ContadorFuncional y lo implementamos. Cambiamos todos los botones. Ahora nuestros botones del contador son diferentes, queremos que sean negros.

Ahora si queremos que un elemento sea distinto a ese elemento podemos ponerle propiedades.

Asi le pasamos la propiedad:

<Boton negro onClick={() => { ejecutarCambio(incrementar(cantidadMas)) }}>Incrementar + {cantidadMas}</Boton>

Y asi implementamos en el componente Boton:

import styled, { css } from "styled-components";

export const Boton = styled.button`

  background: #83d394;
  display: inline-block;
  padding: 20px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  cursor: pointer;
  transition: 0.3s ease all;
  margin-top: 10px;
  margin-right: 10px;

  &:hover {
  background: #44a559;
  color: #fff;
}

${props => props.negro && css`
  background: #000;
  color: #fff;
`}
`;

Aqui esa parte de las props lo vemos aqui:

${props => props.negro && css`
  background: #000;
  color: #fff;
`}

Ahora vamos a seguir haciendo cositas al boton del formulario de inicio sesion lo metemos en un div para que no ocupe el 100%.

<div>
  <Boton type='submit'>Iniciar Sesion</Boton>
</div>

Veremos como hacer que ocupe el 100% de largo.

<div>
  <Boton largo type='submit'>Iniciar Sesion</Boton>
</div>

Aqui lo hacemos con un condicional:

export const Boton = styled.button`

  background: #83d394;
  display: inline-block;
  padding: 20px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  cursor: pointer;
  transition: 0.3s ease all;
  margin-top: 10px;
  margin-right: 10px;

  width: ${props => props.largo ? '100%' : 'auto'};

  &:hover {
  background: #44a559;
  color: #fff;
}

${props => props.negro && css`
  background: #000;
  color: #fff;
`}
`;


width: ${props => props.largo ? '100%' : 'auto'};

Muy muy interesante....

*/