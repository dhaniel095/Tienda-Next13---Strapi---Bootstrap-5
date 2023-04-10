import Image from 'next/image'

import Link from 'next/link'
import carrito from 'public/carrito.png'
import Logopage from 'public/tienda.ico'

export default function Header() {
  return (
    <div>

    






          <nav className="p-3 text-bg-dark sticky-top">
            <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Link href="/"><Image src={Logopage} width={50} height={45} alt="Logo" /></Link>
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link href="/" class="nav-link px-2 text-white">Inicio</Link></li>
                <li><Link href="/tienda" class="nav-link px-2 text-white">Tienda</Link></li>
                <li><Link href="/blog" class="nav-link px-2 text-white">Blog</Link></li>

              </ul>
              <div className="pe-4">
              <Link href="/carrito"><Image width={50} height={45} src={carrito} alt="Imagen  Carrito" /></Link>
              </div>
              <div className="text-end">
                <button type="button" class="btn btn-light me-2">Login</button>
                <button type="button" class="btn btn-warning">Register</button>
              </div>
              

            </div>
          </nav>



        </div>
   

  )

}
