import React, { Component } from 'react';

// Creamos una clase: Este es el componente.
export class ContadorClass extends Component {

  constructor(props) {
    super(props);

    // Asi trabajamos con el estado:
    this.state = { contador: 0 }
  }

  // Ciclo de vida: Cuando se inicia sesion: cuando de monta el componente
  componentDidMount() {
    console.log("El componente se monto en el DOM");
    //... Llamamos a la API.
  }

  // Comprobar cuando se renderiza de nuevo el componente, su estado cambio.
  componentDidUpdate(props, state) {
    // Con este metodo podemos saber su estado anterior y sus propiedades
    console.log("El componentes de actualizo, se vuelve a montar.");
    console.log("Propiedades anterior:", props);
    console.log("Estado anterior:", state);
  }

  // Este codigo se ejecutara antes de desmontar el componente del DOM
  componentWillUnmount() {
    console.log('Good bye component.');
    // ... Cerramos la conexion con la API. etc.

  }



  // Tenemos que crear metodos:
  incrementar(cantidad) {
    console.log("Incrementar");
    this.setState((estadoAnterior) => {
      // Devolvemos un objeto
      return {
        contador: estadoAnterior.contador + cantidad
      }
    })
  }

  disminuir(cantidad) {
    console.log("Disminuir");
    this.setState((estadoAnterior) => {
      return {
        contador: estadoAnterior.contador - cantidad
      }
    })
  }

  // metodo render: Lo que queramos mostrar en pantalla aqui dentro:
  render() {
    return (
      <div>
        <h1>ContadorClass: {this.state.contador}</h1>
        <button onClick={() => { this.incrementar(this.props.cantidadIncrementar) }}>Incrementar +</button>
        <button onClick={() => { this.disminuir(this.props.cantidadDisminuir) }}>Disminuir -</button>
      </div>
    );
  }
}