import Layout from '../components/layout'
import Proteinasp from '../components/Proteinas'
import styles from '../styles/grid.module.css'

export default function Tienda({ Proteinas }) {


  return (
    <Layout>
    <div className='container '>
      <div className='card'>


        <main>
          <h1>Tienda</h1>
          <div className={styles.grid}>
            {Proteinas?.map(proteina => (
              <Proteinasp
              key={proteina.id}
             proteina={proteina.attributes}
              />
            ))}
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
