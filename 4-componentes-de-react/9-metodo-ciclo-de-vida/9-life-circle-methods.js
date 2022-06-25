/*

Vamos a ver los metodos de ciclo de vida.

Esto era bastante importante sobre todo en los componentes basados en clase.

Para los componentes funcionales se trabaja igual pero de manera diferente. Los trabajamos con hooks.Ya lo veremos mas adelante.

Ahora vamos a regresar a nuestro contadorClass.jsx

En nuestros contadores cada vez que le damos click al boton cambiamos su estado.

Cada ves que se cambia el estado el componente se vuelve a renderizar, este comportamiento es interesante y con los metodos de ciclo de vida podemos ejecutar codigo en diferentes partes de la aplicacion.

Dos operaciones que debemos conocer cuando hacemos un cambio de estado, por ejemplo cuando damos al boton de cerrar sesion estamos quitando nuestro componente del dom, este proceso se llama:

Desmontar el componente,

Tambien cuando iniciamos sesion y vuelve aparecer el componente l estamos renderizando, esto de llama:

Montar el componente.

Si quisieramos cuando se desmonte el componente ejecutar una funcion lo podemos hacer. O viceversa.

En los procesos de desmontaje, montaje y darle click todos esos son cambio de estado, pues en todos esos cambios yo puedo ejecutar codigo.

componentDidMount()
componentDidUpdate()
componentWillUnmount()

Hasta aqui los componentes con clases.

Seguimos...

*/