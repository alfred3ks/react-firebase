import React from 'react';
import { Titulo } from './Titulo';

let Usuario = () => {
    const nombre = "Leonel";
    const color = "orange";
    const pais = null
    const sesion = true;

    // Aqui tenemos nuestro areglo:
    const amigos = ["Isidro", "Ythamar", "Christian",];

    return (
        <>
            { /* Aqui ponemos nuestro condicional con el operador ternario */}
            {sesion
                ?
                <>
                    <p style={{ color }}>Has iniciado sesion:</p>
                    <Titulo />
                    <p>Mi lista de amigos es:</p>
                    <ul>
                        {amigos.map((amigo, index) => {
                            return <li key={index}>{amigo}</li>
                        })}
                    </ul>
                </>
                :
                <p style={{ color }}>No has iniciado sesion.</p>
            }
        </>
    );
}

export { Usuario };