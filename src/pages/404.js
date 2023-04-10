import Link from "next/link"
import Layout from "@/components/layout"

export default function Pagina404() {
    return (


        <Layout title="Error">
<div></div>
            <div>
                
                <h1 className="text-center">Error - Pagina404</h1>
                <div className="text-center">
                    <a className="btn btn-primary mx-auto " type="button" href={`/`}>Ir a Inicio</a>
                </div>
                
            </div>


        </Layout>
    )
}
