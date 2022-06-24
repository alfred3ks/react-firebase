/*

Gracias a JSX podemos usar condicionales.

Vamos a simular un sistema de inicio de sesion, muy sencillo.

Tenemos una variable que si es verdadera mostraremos un constenido.

Tenemos el operador ternario para hacer condicionales mucho mas facil recuerda que dentro de jsx podemos usar {}, dentro podemos pasar funciones, objetos, variables, y por supuesto el operador ternario.

{sesion === true ? <p>Has iniciado sesion: </p> : <p>No has iniciado sesion.</p>}

si sesion es true  ? -> entonces muestra primer parrafo :sino segundo parrafo. Bastante sencillo.
Recuerda que podemos quitar el true.

Ademas podemos mostrar contenido de manera consicional si la variable existe o no, lo vemos con la variable pais:

{pais && <p>Te estas conectando desde: {pais}</p>}



*/