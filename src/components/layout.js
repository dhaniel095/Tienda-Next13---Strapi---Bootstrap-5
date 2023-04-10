import Head from "next/head"
import Header from "./header"
import Footer from "./footer"


export default function Layout({ children, title = '', description = '' }) {

    return (
        <>

            <Head>
                <title>ProteT</title>


                
            </Head>

            <Header />

            {children}
            
            <Footer />
        </>
    )

}
