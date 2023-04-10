import Image from "next/image"
import Layout from "@/components/layout"
import { useState } from "react"


export default function producto({ Proteinas, agregarCarrito }) {

  const [cantidad, setCantidad] = useState(0)
  const { titulo, descripcion, precio, imagen, } = Proteinas[0].attributes

  const handleSubmit = e => {
    e.preventDefault()

    if (cantidad < 1) {
      alert('Cantidad no valida')
      return
    } else {

      alert('Agregado')

    }



    const proteinaSeleccionada = {
      id: Proteinas[0].id,
      imagen: imagen.data.attributes.url,
      nombre: titulo,
      precio: precio,
      cantidad: cantidad,
    }
    agregarCarrito(proteinaSeleccionada)
  }



  return (
    <Layout

      title={`Artuculo ${titulo}`}>

      <div className="container">
        <div className="row">




          <div class="d-flex ">
            <div class="p-2 "><h2 className="text-center bg-primary text-white">Articulo</h2>

              <Image src={imagen.data.attributes.url} className="rounded img-fluid" height={315} width={230} />

            </div>

            <div class="p-2 flex-grow-1 bg-light text-dark">
              <h1 className="card-title text-primary fs-1 fw-bold">{titulo}</h1>
              <p className="card-text h4 fst-italic">{descripcion}</p>
              <h2 className="card-text text-danger fs-2 fw-bolder">${precio}</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="cantidad" >Cantidad</label>
                <select onChange={e => setCantidad(+e.target.value)}>
                  <option value="0">--SELECCIONE--</option>
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

                <input type="submit" value="Agregar al carrito" className="m-3 d-block btn btn-warning btn-sm " />






              </form>

            </div>
          </div>
        </div>


      </div>



    </Layout>
  )
}

export async function getServerSideProps({ query: { url } }) {

  const respuesta = await fetch(`${process.env.API_URL}/api/articulos?filters[url]=${url}&populate=imagen`)
  const { data: Proteinas } = await respuesta.json()
  return {
    props: {
      Proteinas
    }
  }
}

