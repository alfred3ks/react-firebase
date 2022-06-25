/*

El estado de un componente:

El estado es muy importante para los componentes y en general para todo react.

El estado nos permite mantener que es lo que queremos mostrar en pantalla, en la interfaz de usuario.

Vamos a ver como cambiar nuestra aplicacion con un boton que cambia de abrir y cerrar la sesion. Asi veremos como implementar los estados de nuestra app.

Trabajeremos sobre el componente App.jsx

Lo que queremos es que cuando pulcemos el boton de cerrar sesion a la variable sesion cambiarle el valor a false.

Tenemos que agregar un evento al boton de cerrar. Como vemos a continuacion:

export function App() {

  let sesion = true;

  // Aqui creamos las funciones:
  const cerrarSesion = () => {
    console.log("Cerramos la sesion.");
    sesion = false;
    console.log(sesion);

  }

  return (
    <>
      {
        sesion ?
          <div>
            <Usuario />
            <button onClick={cerrarSesion}>Cerrar Sesión</button>
          </div>
          :
          <div>
            <p>No has iniciado sesion.</p>
            <button>Iniciar Sesión</button>
          </div>
      }
    </>
  )
}

De esta manera vemos que aunque cambiemos el valor de la varaible a false nuestra app no hace nada, es porque nuestra app la primera vez que renderizo era true, nosotros con el click no la estamos renderizando lo que estamos es cambiando el valor de la variable pero la app no se renderiza. De esta manera o podemos hacerlo debemos para cambiar el estado de la app descargar un hook.

Con los hooks lo que hacemos es darle funcionalidad a nuestro componente.

Este hook es useState().

const [sesion, cambiarEstadoSesion] = useState(false);

Asi declaramos este hook. La primera variable sera el valor que reciba el stado inicial de la aplicacion, es este caso puede ser false o true.

El segundo atributo del arrays es una funcion, nuestra funcion que solo hara es cambiar el estado del componente, todo lo demas lo hace react por detras.

export function App() {

  // Hooks useState: Vamos a utilizar estados.
  const [sesion, cambiarEstadoSesion] = useState(false);

  return (
    <>
      {
        sesion ?
          <div>
            <Usuario />
            <button onClick={() => { cambiarEstadoSesion(false) }}>Cerrar Sesión</button>
          </div>
          :
          <div>
            <p>No has iniciado sesion.</p>
            <button onClick={() => { cambiarEstadoSesion(true) }}>Iniciar Sesión</button>
          </div>
      }
    </>
  )
}

*/