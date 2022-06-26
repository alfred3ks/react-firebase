import { useState, useEffect } from 'react';

// Asi creamos un hook: Una funcion pero no retorn jsx sino un []
export const useObtArticulos = () => {

  // Simulamos que llamamos a una base de datos:
  const [articulos, establerArticulos] = useState([]);
  const [cargando, establerCargando] = useState(true);

  // Se ejecuta una ves al cargar el componente la primera vez:
  // Simulamos llamado a API...
  useEffect(() => {
    setTimeout(() => {
      establerArticulos([
        {
          id: 1,
          titulo: 'Titulo del primer articulo'

        },
        {
          id: 2,
          titulo: 'Titulo del segundo articulo'
        },
        {
          id: 3,
          titulo: 'Titulo del tercer articulo'
        }]);

      establerCargando(false);
    }, 3000)

  }, []);

  console.log(articulos);

  // Aqui devolvemos los valores. No retornamos JSX
  return [articulos, cargando];
}

