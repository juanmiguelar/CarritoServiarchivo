import React from "react";

// Entender el porque react divide la INTERFAZ en componentes
class Producto extends React.Component {
  mostrarAccionesProducto() {
    // Si esta en el mostrador
    // Mostrar el boton de comprar
    if (this.props.modo === "mostrador") {
      return (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() =>
            this.props.agregarProductoAlCarrito(this.props.producto)
          }
        >
          Comprar
        </button>
      );
    }

    // Si el componente esta en modo carrito mostrar que
    // se puede eliminar
    if (this.props.modo === "carrito") {
      return (
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => {
            this.props.eliminarProductoDelCarrito(this.props.producto);
          }}
        >
          Eliminar
        </button>
      );
    }
  }

  render() {
    const accionesProducto = this.mostrarAccionesProducto();
    return (
      /* PRIMERA PARTE Y PROBAR */
      <div className="card w-25 m-2">
        <div className="card-body">
          <h5 className="card-title">{this.props.producto.nombre}</h5>
          <p className="card-text">${this.props.producto.precio}</p>
          {/* Mostrar como se puede mostrar una u otra cosa segun el modo del componente */}
          {accionesProducto}
        </div>
      </div>
    );
  }
}

export default Producto;
