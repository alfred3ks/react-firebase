/*

Vamos a ver que es JSX: Trabajaremos con el proyecto react_app del apartado anterior.

Es una caracteristica muy interesante con la cual podemos trabajar dentro de react, lo cual nos permite es trabajar con un codigo que parece html pero dentro del codigo javascript.

Pero ese codigo que estamos pasando que parece html no lo es jsx.

Si no importaramos react no podriamos ejecutar el codigo jsx de los componente.

El trabajar con JSX no da muchas ventajas, dentro de este podemos poner expresiones de JS:

export function App() {

const nombre = "Alfred";

return (
    <h1>Hola {nombre} !!!</h1>
)
}

Ahora hay unas reglas que debemos seguir. El return del componente solo devuelve un solo elemento jsx, no dos seguidos o mas. Asi:

export function App() {

  const nombre = "Alfred";

  return (

    <div>
      <h1>Hello {nombre} !!!</h1>
      <p>Que tengas un buen dia.</p>
    </div>

  )
}

Ahora muy bien pero como vemos para agregar mas de un elemento jsx debemos incluir un contenedor, que es este claso es un div, pero suponiendo que no queramos agregar un div y solo sean elementos sobre elemento, podemos usar los fragmentos de react. Esto no ayuda a que el componente devuelva un solo elemento pero no nos agrega ningun elemento innecesario en el codigo final.

export function App() {

  const nombre = "Alfred";

  return (

    <>
      <h1>Hello {nombre} !!!</h1>
      <p>Que tengas un buen dia.</p>
    </>

  )
}

Ahora otras reglas tambien, que pasa si queremos agregar una clase a nuestro h1, no podemos usar las palabra class, porque estamos dentro de js y class es una palabra reservada del lenguaje, debemos usar className.

<h1 className={'titulo'}>Hello {nombre} !!!</h1>

Otra cosa que he comprobado que puedo pasar los datos asi y funciona igual:
className = 'titulo'
className = ¨{'titulo'}

Otra cosa que tambien podriamos hacer para hacer breves pruebas es usar estilos en linea, no es lo mas recomendado: Usamos llaves, y dentro metemos un objeto {}

<p style={{ color: 'blueviolet' }}>Que tengas un buen dia.</p>

Como dentro de las {} podemos pasar variables tambien podemos crear la variable fuera y pasarla:

const color = "blue";
<p style={{ color }}>Que tengas un buen dia.</p>



*/