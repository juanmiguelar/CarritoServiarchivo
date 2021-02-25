import React, { Fragment } from "react";
import Producto from './Producto'

class Carrito extends React.Component {

  mostrarListaCarrito() {
    if (this.props.carrito.length === 0) {
      return <p>No hay elementos</p>;
    } else {
      return this.props.carrito.map((producto) => {
        return <Producto producto={producto} modo="carrito" eliminarProductoDelCarrito={this.props.eliminarProductoDelCarrito}></Producto>;
      });
    }
  }

  render() {
    const listaCarrito = this.mostrarListaCarrito();
    return (
      <Fragment>
        <h2>Tu carrito</h2>
        {listaCarrito}
      </Fragment>
    );
  }
}

export default Carrito;
