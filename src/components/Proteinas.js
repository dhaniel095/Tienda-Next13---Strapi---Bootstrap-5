import Image from "next/image"
import Link from "next/link"


const Proteinas = ({ proteina }) => {

  const { titulo, descripcion, precio, imagen, url } = proteina



  return (
    <div className="container">

      <div className="card" >
        <Image src={imagen.data.attributes.url} className="rounded mx-auto d-block img-fluid" height={285} width={200} />
        <div class="card-body bg-light text-dark">
          <h2 className="card-title text-warning fw-bolder">{titulo}</h2>
          <p className="card-text fst-italic">{descripcion}</p>
          <h2 className="card-text text-danger fw-bold">${precio}</h2>
          <div class="d-grid gap-2">
            <Link className="btn btn-danger" type="button" href={`/proteinas/${url}`}>Ver Producto</Link>
          </div>
        </div>
      </div>


    </div>
  )
}


export default Proteinas