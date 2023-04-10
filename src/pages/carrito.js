import Layout from "@/components/layout"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Carrito({ carrito, actualizarCantidad }) {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    },
        [carrito]
    )

    return (

        <Layout>

            <main className='contenedor'>
                <h1 className='heading text-center bg-danger text-white'>Carrito</h1>
            </main>

            <div className="container">

                <div className="d-flex">
                    <div className="p-2 flex-grow-1"><h2 className="text-center bg-info text-white">Articulos</h2>

                        {carrito.length === 0 ? 'Carrito Vacio' : (
                            carrito.map(producto => (

                                <div key={producto.id} className="d-flex">
                                    <div className="p-2">
                                        <Image width={150} height={190} src={producto.imagen} alt={producto.nombre} />
                                    </div>
                                    <div className="p-2 flex-grow-1">
                                        <p className="fw-bolder fs-4">{producto.nombre}</p>
                                        <p className="fw-semibold fs-6">

                                            <select className="" onChange={e => actualizarCantidad({
                                                id: producto.id,
                                                cantidad: e.target.value,

                                            })}
                                                value={producto.cantidad}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>

                                        </p>
                                        <p className="fw-bold fs-6 "><span>Precio unitario: ${producto.precio}</span></p>
                                        <p className="fw-bold fs-5 text-danger">Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>
                                        <hr className="bg-dark d-block border-5 border-top border-dark" />
                                    </div>

                                </div>
                            ))

                        )}
                    </div >

                    <div class="p-2   text-white sticky-top"><h3>Resumen del pedido</h3>
                        <p className="bg-light text-dark fw-bold fs-3 text-center">Total a pagar: <br/><br/>   ${total}</p>

                    </div>

                </div>

            </div>


    

        </Layout>


    )
}
