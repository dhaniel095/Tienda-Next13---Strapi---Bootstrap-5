import Proteinas from '@/components/Proteinas';
import '@/styles/globals.css'
import { useState } from 'react'


export default function App({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([])


  const agregarCarrito = Proteinas => {
    // Comprobar si la guitarra ya esta en el carrito...
    if (carrito.some(ProteinasState => ProteinasState.id === Proteinas.id)) {
      // Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map(ProteinasState => {
        if (ProteinasState.id === Proteinas.id) {
          ProteinasState.cantidad = Proteinas.cantidad;
        }
        return ProteinasState;
      });
      // Se asigna al array
      setCarrito([...carritoActualizado]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCarrito([...carrito, Proteinas]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter(producto => producto.id != id)
    setCarrito(ProteinasActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  const actualizarCantidad = Proteinas => {
    const carritoActualizado = carrito.map(ProteinasState => {
      if (ProteinasState.id === Proteinas.id) {
        ProteinasState.cantidad = parseInt(Proteinas.cantidad)
      }
      return ProteinasState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }


  return <Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    eliminarProducto={eliminarProducto}
    actualizarCantidad={actualizarCantidad}
  />
}

