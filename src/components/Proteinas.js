import Image from "next/image"
import Link from "next/link"


const Proteinas = ({ proteina }) => {

  const { titulo, descripcion, precio, imagen, url } = proteina



  return (
    
     

        <div className="text-center" >
          <Image src={imagen.data.attributes.url} className="" height={285} width={220} />
          <div class=" ">
            <h2 className=" text-warning fw-bolder">{titulo}</h2>
            <p className=" fst-italic">{descripcion}</p>
            <h2 className=" text-danger fw-bold">${precio}</h2>
            <div class="d-grid gap-2">
              <Link className="btn btn-danger" type="button" href={`/proteinas/${url}`}>Ver Producto</Link>
            </div>
          </div>
        </div>

     
   
  )
}


export default Proteinas