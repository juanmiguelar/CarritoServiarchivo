import React, { Fragment } from "react";
import Carrito from "./components/Carrito";
import Producto from "./components/Producto";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // productos disponibles en la tienda
      productos: [
        { id: 1, nombre: "camisa ReactJS", precio: 50 },
        { id: 2, nombre: "camisa JS", precio: 40 },
        { id: 3, nombre: "camisa Native", precio: 60 },
        { id: 4, nombre: "camisa Node", precio: 20 },
        { id: 5, nombre: "camisa C#", precio: 80 },
      ],
      // Productos que el usuario va a comprar
      carrito: [],
    };

    /* CASI AL FINAL, MOSTRAR QUE SI NO SE BINDEA, THIS VA A CORRESPONDER AL CONTEXTO DEL COMPONENTE DONDE SE LLAMA Y NO ESTE */
    /* Recordemos que somos del barrio */
    this.agregarProductoAlCarrito = this.agregarProductoAlCarrito.bind(this);
    this.eliminarProductoDelCarrito = this.eliminarProductoDelCarrito.bind(
      this
    );
  }

  agregarProductoAlCarrito(producto) {
    let productosEnElCarro = this.state.carrito;
    productosEnElCarro.push(producto);
    this.setState({
      carrito: productosEnElCarro,
    });
  }

  eliminarProductoDelCarrito(producto) {
    let productosEnElCarro = this.state.carrito;
    productosEnElCarro = productosEnElCarro.filter((item) => {
      return item.id !== producto.id;
    });
    this.setState({
      carrito: productosEnElCarro,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Tienda Virtual</h1>
            <h2>Lista de productos</h2>
            {this.state.productos.map((producto) => {
              return (
                <Producto
                  producto={producto}
                  modo="mostrador"
                  agregarProductoAlCarrito={this.agregarProductoAlCarrito}
                ></Producto>
              );
            })}
          </div>
          <div className="col">
            <Carrito
              carrito={this.state.carrito}
              eliminarProductoDelCarrito={this.eliminarProductoDelCarrito}
            ></Carrito>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
