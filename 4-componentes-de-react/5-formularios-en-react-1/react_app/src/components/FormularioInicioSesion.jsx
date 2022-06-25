import React, { useState } from 'react';

export const FormularioInicioSesion = () => {

  const [usuario, cambiarUsuario] = useState('');
  const [password, cambiarPassword] = useState('');

  const onChangeUsuario = (e) => {
    console.log(e.target.value);
    cambiarUsuario(e.target.value)
  }

  const onChangePass = (e) => {
    console.log(e.target.value);
    cambiarPassword(e.target.value)
  }

  /*

  Agregamos estos dos atributos, usuario = lo que nos da useState que es '',y con la funcion lo estamos cambiando a e.target.value

  */

  return (
    <form action="">
      <p>Usuario: {usuario} </p>
      <p>Contraseña: {password}</p>
      <div>
        <label htmlFor="usuario">Usuario</label>
        <input
          type="text"
          name="usuario"
          id="usuario"

          value={usuario}
          onChange={onChangeUsuario}
        />
      </div>

      <div>
        <label htmlFor="pass">Contraseña</label>
        <input
          type="password"
          name="pass"
          id="pass"

          value={password}
          onChange={onChangePass}
        />
      </div>
      <button type='submit'>Iniciar Sesion</button>
    </form>
  );
}

