import Proteinas from '@/components/Proteinas';
import '@/styles/globals.css'
import { useState, useEffect } from 'react'


export default function App({ Component, pageProps }) {
const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []
 
const [carrito, setCarrito] = useState(carritoLS)

const [paginaLista, setPaginaLista] = useState(false)

useEffect(() => {
  setPaginaLista(true)
},[])

  useEffect(() => {
localStorage.setItem('carrito', JSON.stringify(carrito))
  },[carrito]
  
  )

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
    setCarrito(carritoActualizado)
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


  return paginaLista ? <Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    eliminarProducto={eliminarProducto}
    actualizarCantidad={actualizarCantidad}
  /> : null
}

