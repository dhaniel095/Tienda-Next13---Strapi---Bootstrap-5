import Image from "next/image"
import Link from "next/link"
import carrito from 'public/carrito.png'
import Logopage from 'public/tienda.ico'

export function JoinLayout(props) {
  const { children } = props
  return (
    <div>

<div>


<nav className="p-3 text-bg-dark sticky-top">
  <div className="row">
  <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    <Link href="/"><Image src={Logopage} width={50} height={45} alt="Logo" /></Link>
    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      <li><Link href="/" class="nav-link px-2 text-white">Inicio</Link></li>
      <li><Link href="/tienda" class="nav-link px-2 text-white">Tienda</Link></li>
      <li><Link href="/blog" class="nav-link px-2 text-white">Blog</Link></li>
    </ul>
    </div>
  </div>
</nav>



</div>

      <div>{children}</div>
    </div>
  )
}
