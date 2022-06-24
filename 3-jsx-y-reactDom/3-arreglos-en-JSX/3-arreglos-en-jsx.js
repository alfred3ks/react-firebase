/*

Otra caraceristica de JSX es que podemos trabajar con arreglos.

En React cuando recorremos listas o arreglos lo podemos hacer usando el metodo .map(), este metodo es de JS. Pero en React lo hace de una manera particular:

Tenemos nuestra array:

const amigos = ["Marife", "Ythamar", "Christian",];

<ul>
  {amigos.map((amigo, index) => {
    return <li key={index}>{amigo}</li>
  })}
</ul>

Para recorrerlo vemos dos cosas interesantes:
- {} metemos nuestra funcion dentro de las llaves,
- El metodo map() recibe dos parametros en este caso el elementos del array y su indice, este es necesario pasarlo como key al elemento li. Si no lo usamos vemos que la consola nos lanza el siguiente warning: Each child in a list should have a unique "key" prop. Osea nuestro elemento debe tener un parametro unico.
- Usamos un metodo map() porque este nos retorna los elementos del arrays cosa que con un forEach() no se podria.

- Para este caso esta bien usar el index, pero en el caso de tener un objeto de arrays podemos usar el id si lo tiene veamos un ejemplo:

const users = [
    {
      id: 1,
      nombre: "Pedro",
      apellido: "Lorenzo"
    },
    {
      id: 2,
      nombre: "Angelo",
      apellido: "Lorenzo"
    },
    {
      id: 3,
      nombre: "Manuel",
      apellido: "Lorenzo"
    },
  ]


<ul>
  {users.map(({ id, nombre }) => {
    return <li key={id}>{nombre}</li>
  })}
</ul>

*/