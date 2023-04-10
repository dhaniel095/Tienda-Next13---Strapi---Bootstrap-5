import Layout from '../components/layout'
import Proteinasp from '../components/Proteinas'
import styles from '../styles/grid.module.css'

export default function Tienda({ Proteinas }) {


  return (
    <Layout>

    <div className='container '>
      <div className='row'>


        <main>
          <h1 className='text-center fw-bolder fs-1'>Tienda</h1>
          <div>
          <div className={styles.grid}>
            {Proteinas?.map(proteina => (
              <Proteinasp
              key={proteina.id}
             proteina={proteina.attributes}
              />
            ))}
          </div>
          </div>

        </main>
        </div>

     
    </div>
    </Layout>
  )

}


export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/api/articulos?populate=imagen`)
  const { data: Proteinas } = await respuesta.json()
  return {
    props: {
      Proteinas
    }
  }
}
