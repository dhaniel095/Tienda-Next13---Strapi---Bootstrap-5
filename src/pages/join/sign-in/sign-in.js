import { JoinLayout } from "@/layouts";
import Link from "next/link";



export default function SignInPage() {
  return (
    <>
    <JoinLayout>

        <div className="position-absolute top-50 start-50 translate-middle">Iniciar Sesion

           <Link href="/join/sign-up">
          Si no tienes una cuenta, crea una...
           </Link>





           
        </div>

    </JoinLayout>
</>
  )
}
