/*

Ahora vamos a comprender como trabajar con formularios dentro de React.

Vamos a crear un nuevo componente para un formulario.

Aqui lo uqe podemos ver con los forulario debemos trabajar estados, para este caso hemos vuelto a instalar useState() para ver el estado de nuestro input. Lo que hemos realizado es agarrar la infrmacion que mete el usuario en una variable y la hemos mostrado en el label, el ejercicio es asi pero esto es importante porque podemos hacer lo que queramos con esa variable, comprobar la BD, etc.

Hemos implementado nuestro useState, el estado inicial:

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

<form action="">
      <p>Los datos capturados del Usuario: {usuario} </p>
      <p>Contraseña que introduce el usuario: {password}</p>
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

Todo esto es muy importante entender porque con eso podemos hacer la validacion de los formulario.

*/