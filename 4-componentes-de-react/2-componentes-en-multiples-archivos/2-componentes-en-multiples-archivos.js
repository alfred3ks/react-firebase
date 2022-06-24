/*

Ya hemos visto como crear componentes, ahora vamos a ver una parte esencial que es separar cada componentes en un archivo separado para mantener una mejor estructura y organizaion de la aplicacion.

Esto lo debemos hacer asi porque a medida que se haga grande la aplicacion tendremos muchos componentes.

Vamos a crear una carpeta dentro de src llamada componentes o components

src/components

Dentro vamos a crear un archivo por cada componente.

Creamos nuestro componente de usuario:
En la cabecera importamos React: Existe un short code con vscode:

irm

import React from 'react';

Ademas debemos exportar el componente usando la palabra reserva export:

export let Usuario = () => {

Y en nuestra componente App.jsx debemos importarlo:

import {Usuario} from './Usuario';

A ver esto existe varias formas de export:
1- Exportamos la funcion:
export let Usuario = () => {

2. Al final del componentes exportamos:
export { Usuario };

3. Exportamos por defaul:
export default Usuario;
Para esta opcion cuando importemos debemos quitar las {}
import Usuario from './Usuario';

Otra cosa que estamos viendo es que podemos tener componentes dentro de componentes vemos el componente App que dentro de este hace el llamado al componente Usuario.

Vamos a crear un componente llamado titulo.jsx

Us shortcode para crear un componente tenemos uno:

sfc

const  = () => {
    return (  );
}

export default ;

Seguimos...

*/