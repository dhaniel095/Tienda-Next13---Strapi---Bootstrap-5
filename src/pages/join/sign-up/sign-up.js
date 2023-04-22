import { JoinLayout } from "@/layouts";
import Link from "next/link";
import { RegisterForm } from "@/components/Auth"

export default function SignUpPage() {
    return (
        <>
            <JoinLayout>

                <div className="position-absolute top-50 start-50 translate-middle">Crear Cuenta

                    <RegisterForm />




                    <Link href="/join/sign-in">Tienes Una cuenta Accede...</Link>
                </div>

            </JoinLayout>
        </>
    )
}
