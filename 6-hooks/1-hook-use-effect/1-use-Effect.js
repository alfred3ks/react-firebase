/*

Ahora veremos el tema de los hooks.

Durante lo que hemos visto hasta ahora ya hemos usado el de useState.

Con los hooks lo que hacemos es dar mas funcionalidad a nuestros componentes.

Vamos a ver los mas esenciales para comenzar.

useEfect().

Este hooks es el de ciclo de vida de nuestro componente, tal como lo vimos en los componentes de clases. el life circle methods.

Vamos a verlo en el archivo ContadorFuncional.jsx
el contador Counter:

Ahora vamos a ver unas reglas de los hooks:

- Deben usarse dentro del propio componentes, no fuera.
- Y siempre en la cabecera del componente, osea arriba.
- Los hooks no se pueden usar dentro de ciclos o condicionales.

Ahora como implementamos useEfect(): Es una funcion que recibe por paramtro otra funcion y como segundo parametro un array de dependencias.

// Hook useEfect:
// componentDidMount y componentDidUpdate
// Este hook se ejecuta en cada ciclo de renderizado
useEffect(() => {
  console.log("El componente se renderizo");
});

Ahora vemos lo del arreglo de dependencias:

// Este hooks s eejecuta solo la primera vez que renderiza: arrays de dependencias:
// Conexion a BD solo una vez, no como el hook superior.
// componentDidMount
useEffect(() => {
  console.log("El componente se renderizo por primera vez..");
  // ....Conexion a una API, solo se hace una vez
}, []);

// Se ejecutara solo cuando cambien el contador:
// OJO al arrays de depenedecias.
// Se ejecuta cuando esa varaible cambia.
// Al ser un arrays le podemos pasar todas las dependecias que sean necesarias.
useEffect(() => {
  console.log("Counter ha cambiado...");
  // ....Conexion a una API, solo se hace una vez
}, [valorInicial]);

// Para cuando se desmonta el componente, osea se quita del DOM:
useEffect(() => {
  // Codigo del efect.
  return (() => {
    console.log("Counter se ha desmontado del DOM...");
    // ....Desconexion a una API, solo se hace una vez
  });
}, []);

*/