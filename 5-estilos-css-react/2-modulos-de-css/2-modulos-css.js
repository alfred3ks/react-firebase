/*

Vamos a ver la segunda forma de implementar css en React.

Son los modulos de css, esto ya lo tenemos integrado cuando creamos el proyecto.

No hay que instalar nada nuevo. Con esto solucionaremos el problema que s episen los estilos css, lo comentamos en el ejemplo anterior.

https://create-react-app.dev/docs/adding-a-css-modules-stylesheet

Para que react reconozca los archivos debemos cambiarles el nombre, osea deben llamarse de una forma.

Vamos a ver el archivo del formulario:

FormularioInicioSesion.css

FormularioInicioSesion.module.css

Y asi con el resto de archivos.

Luego en donde se importen los archivos debemos importarlos asi:

import styles from '../css/FormularioInicioSesion.module.css'

Con esto no es suficiente porque vemos que siguen sin funcionar los estilos, debemos ahora donde tengamos las clases implementarlo asi el llamado:

<form action="" onSubmit={onSubmit} className={styles.formulario}>

*/