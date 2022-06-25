import React, { useState } from 'react';

export const FormularioInicioSesion = ({ cambiarEstadoSesion }) => {

  const [usuario, cambiarUsuario] = useState('');
  const [password, cambiarPassword] = useState('');

  // const onChangeUsuario = (e) => {
  //   console.log(e.target.value);
  //   cambiarUsuario(e.target.value)
  // }

  // const onChangePass = (e) => {
  //   console.log(e.target.value);
  //   cambiarPassword(e.target.value)
  // }

  // Con una solo funcion ejecutamos las dos de arriba. Capturamos los datos:
  const onChange = (e) => {
    if (e.target.name === 'usuario') {
      cambiarUsuario(e.target.value)
    } else if (e.target.name === 'password') {
      cambiarPassword(e.target.value)

    }
  }

  // Para la validacion:
  const onSubmit = (e) => {
    // recuerda con esto prevenimos que se refesque la pagina.
    e.preventDefault();
    console.log('Los datos se enviaron.');

    if (usuario === 'alfredo' && password === '123') {
      console.log('Datos correctos');
      // Funcion que viene por props.
      cambiarEstadoSesion(true);

    } else {
      alert('Datos incorrectos');
      // limpiamos el formulario
      cambiarUsuario('');
      cambiarPassword('');
    }
  }

  /*

  Agregamos estos dos atributos, usuario = lo que nos da useState que es '',y con la funcion lo estamos cambiando a e.target.value

  */

  return (
    <form action="" onSubmit={onSubmit}>
      {/*<p>Usuario: {usuario} </p> */}
      {/* <p>Contraseña: {password}</p> */}

      <div>
        <label htmlFor="usuario">Usuario</label>
        <input
          type="text"
          name="usuario"
          id="usuario"

          value={usuario}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="pass">Contraseña</label>
        <input
          type="password"
          name="password"
          id="pass"

          value={password}
          onChange={onChange}
        />
      </div>
      <button
        type='submit'>Iniciar Sesion</button>
    </form>
  );
}

