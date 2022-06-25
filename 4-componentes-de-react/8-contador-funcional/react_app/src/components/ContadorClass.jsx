import React, { Component } from 'react';

// Creamos una clase: Este es el componente.
export class ContadorClass extends Component {

  constructor(props) {
    super(props);

    // Asi trabajamos con el estado:
    this.state = { contador: 0 }
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