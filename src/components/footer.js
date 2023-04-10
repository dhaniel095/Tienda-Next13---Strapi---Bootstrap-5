import Link from "next/link";

export default function Footer () {
    return (

   <div>
  

  <div class="">
  <footer class="py-3 my-4 text-bg-dark">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><Link href="/" class="nav-link px-2 text-white">Inicio</Link></li>
      <li class="nav-item"><Link href="/tienda" class="nav-link px-2 text-white">Tienda</Link></li>
      <li class="nav-item"><Link href="/blog" class="nav-link px-2 text-white">Blog</Link></li>
    </ul>
    <p class="text-center text-white">© 2022 Company, Inc</p>
  </footer>
</div>



     </div>

   )

}